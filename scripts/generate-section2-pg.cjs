const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2] || '';
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

function makeHarderPassage(passage) {
  const extra = `\n<p><strong>Section 2 variant:</strong> This passage has been adapted to mirror Section 2 difficulty — passages are slightly longer, use more formal vocabulary, and require greater inference from the reader.</p>\n`;
  const synonyms = { people: 'individuals', use: 'utilize', help: 'assist', show: 'demonstrate', very: 'considerably', old: 'ancient' };
  let transformed = passage || '';
  for (const k of Object.keys(synonyms)) {
    const v = synonyms[k];
    const re = new RegExp(`\\b${k}\\b`, 'gi');
    transformed = transformed.replace(re, v);
  }
  return transformed + extra;
}

(async function main() {
  try {
    console.log('Loading env...');
    loadEnv();
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      console.error('DATABASE_URL not set in environment or .env file.');
      process.exit(1);
    }

    const client = new Client({ connectionString });
    await client.connect();
    console.log('Connected to database. Detecting tables...');

    const readingCandidates = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name ILIKE '%reading%';");
    if (readingCandidates.rowCount === 0) {
      console.error('Could not find any tables with "reading" in the name.');
      process.exit(1);
    }

    // pick the reading table that has a 'passage' column
    let testTable = null;
    for (const r of readingCandidates.rows) {
      const cols = await client.query('SELECT column_name FROM information_schema.columns WHERE table_name = $1', [r.table_name]);
      const colNames = cols.rows.map((x) => x.column_name);
      if (colNames.includes('passage')) {
        testTable = r.table_name;
        break;
      }
    }
    if (!testTable) {
      // fallback to first candidate
      testTable = readingCandidates.rows[0].table_name;
    }

    const questionCandidates = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name ILIKE '%question%';");
    if (questionCandidates.rowCount === 0) {
      console.error('Could not find any tables with "question" in the name.');
      process.exit(1);
    }

    // pick the question table that has a foreign key column referencing tests
    let questionTable = null;
    for (const r of questionCandidates.rows) {
      const cols = await client.query('SELECT column_name FROM information_schema.columns WHERE table_name = $1', [r.table_name]);
      const colNames = cols.rows.map((x) => x.column_name);
      if (colNames.find((c) => /reading.*id/i.test(c) || /test.*id/i.test(c))) {
        questionTable = r.table_name;
        break;
      }
    }
    if (!questionTable) questionTable = questionCandidates.rows[0].table_name;

    console.log(`Using test table: ${testTable}`);
    console.log(`Using question table: ${questionTable}`);

    // discover columns
    const testColsRes = await client.query('SELECT column_name FROM information_schema.columns WHERE table_name = $1', [testTable]);
    const testCols = testColsRes.rows.map((r) => r.column_name);

    const questionColsRes = await client.query('SELECT column_name FROM information_schema.columns WHERE table_name = $1', [questionTable]);
    const questionCols = questionColsRes.rows.map((r) => r.column_name);

    const fkColCandidate = questionCols.find((c) => /reading.*id/i.test(c)) || questionCols.find((c) => /test.*id/i.test(c));
    if (!fkColCandidate) {
      console.error('Could not determine foreign key column in question table. Columns:', questionCols);
      process.exit(1);
    }

    // fetch source tests (id = '1' or id endsWith '-1')
    const sourceTests = await client.query(`SELECT * FROM "${testTable}" WHERE id = $1 OR id LIKE $2`, ['1', '%-1']);
    if (sourceTests.rowCount === 0) {
      console.warn('No source tests found in DB (id = 1 or id like %-1).');
      await client.end();
      return;
    }

    for (const testRow of sourceTests.rows) {
      const srcId = testRow.id;
      let newId = srcId;
      if (srcId === '1') newId = '1-2';
      else if (srcId.endsWith('-1')) newId = srcId.replace(/-1$/, '-2');
      else newId = `${srcId}-2`;

      console.log(`Cloning ${srcId} -> ${newId}`);

      // delete existing target test and its questions
      await client.query(`DELETE FROM "${questionTable}" WHERE "${fkColCandidate}" = $1`, [newId]);
      await client.query(`DELETE FROM "${testTable}" WHERE "id" = $1`, [newId]);

      // create new test
      // determine which columns we can insert into
      const insertTestCols = [];
      const insertTestVals = [];
      const placeholders = [];
      let idx = 1;

      const candidateCols = ['id', 'title', 'passage', 'imageUrl', 'image_url', 'createdAt', 'created_at', 'updatedAt', 'updated_at'];
      for (const c of candidateCols) {
        if (testCols.includes(c)) {
          insertTestCols.push(c);
          if (c === 'id') insertTestVals.push(newId);
          else if (c === 'title') insertTestVals.push(testRow.title || testRow.title);
          else if (c === 'passage') insertTestVals.push(makeHarderPassage(testRow.passage || ''));
          else if (c === 'imageUrl' || c === 'image_url') insertTestVals.push(testRow.imageurl || testRow.imageUrl || null);
          else if (c === 'createdAt' || c === 'created_at') insertTestVals.push(testRow.createdat || testRow.createdAt || new Date());
          else if (c === 'updatedAt' || c === 'updated_at') insertTestVals.push(testRow.updatedat || testRow.updatedAt || new Date());
          placeholders.push(`$${idx++}`);
        }
      }

      const insertTestQuery = `INSERT INTO "${testTable}" (${insertTestCols.map((c) => `"${c}"`).join(',')}) VALUES (${placeholders.join(',')}) RETURNING *`;
      const createdTest = await client.query(insertTestQuery, insertTestVals);
      console.log('Created test:', createdTest.rows[0] && createdTest.rows[0].id);

      // fetch questions for source test
        const srcQuestions = await client.query(`SELECT * FROM "${questionTable}" WHERE "${fkColCandidate}" = $1`, [srcId]);

      for (const qRow of srcQuestions.rows) {
        // determine columns to insert for questions
        const qInsertCols = [];
        const qPlaceholders = [];
        const qValues = [];
        let qIdx = 1;

        const qCandidates = ['id', fkColCandidate, 'type', 'text', 'options', 'answer', 'answer_key', 'createdAt', 'created_at', 'updatedAt', 'updated_at'];
        for (const c of qCandidates) {
          if (questionCols.includes(c)) {
            qInsertCols.push(c);
            if (c === 'id') qValues.push(qRow.id.endsWith('-1') ? qRow.id.replace(/-1$/, '-2') : `${qRow.id}-2`);
            else if (c === fkColCandidate) qValues.push(newId);
            else if (c === 'options') qValues.push(qRow.options || qRow.options);
            else if (c === 'createdAt' || c === 'created_at') qValues.push(qRow.createdat || qRow.createdAt || new Date());
            else if (c === 'updatedAt' || c === 'updated_at') qValues.push(qRow.updatedat || qRow.updatedAt || new Date());
            else qValues.push(qRow[c]);
            qPlaceholders.push(`$${qIdx++}`);
          }
        }

        if (qInsertCols.length === 0) continue;

        const qInsertQuery = `INSERT INTO "${questionTable}" (${qInsertCols.map((c) => `"${c}"`).join(',')}) VALUES (${qPlaceholders.join(',')})`;
        await client.query(qInsertQuery, qValues);
      }

      console.log(`Cloned questions for ${newId}`);
    }

    console.log('Section 2 generation (pg) complete.');
    await client.end();
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 1;
  }
})();
