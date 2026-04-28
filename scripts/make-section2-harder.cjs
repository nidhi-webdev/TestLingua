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

// Transform a multiple-choice question to be harder
function makeQuestionHarder(question) {
  const { id, text, options, answer, type } = question;
  
  if (type !== 'multiple_choice' || !options || options.length < 2) {
    return question; // only transform multiple choice
  }

  // Parse options (format: "A. text", "B. text", etc.)
  const parsed = options.map((opt) => {
    const match = opt.match(/^([A-Z])\.\s*(.*)$/);
    return { letter: match ? match[1] : '', text: match ? match[2] : opt };
  });

  // Find the correct option
  const correctIdx = parsed.findIndex((p) => p.letter === answer);
  if (correctIdx === -1) return question;

  const correctOption = parsed[correctIdx];
  const wrongOptions = parsed.filter((_, i) => i !== correctIdx);

  // Make the question text more challenging by focusing on inference
  let newText = text;
  const inferencePhrases = [
    'What can be inferred about',
    'Which statement best reflects',
    'Based on the passage, what is implied about',
    'The author\'s perspective suggests that',
    'It can be concluded that',
    'Which of the following most likely indicates',
    'The passage implies that',
  ];
  
  // If the question already asks for explicit facts, make it ask for inference instead
  if (text.match(/What is|According to|Which of the following|Why does/)) {
    const inference = inferencePhrases[Math.floor(Math.random() * inferencePhrases.length)];
    // Extract the main subject and rephrase
    if (text.includes('What')) {
      newText = inference + ' ' + text.split(' ').slice(2).join(' ');
    }
  }

  // Make wrong options more plausible (remove obviously wrong ones, add subtle distractors)
  const newWrongOptions = [];
  
  // Strategy: create plausible but incorrect alternatives
  const distractorStrategies = [
    // Partially correct (true from passage but not answering the question)
    () => {
      const partial = wrongOptions[0] ? wrongOptions[0].text : 'this might be mentioned in the passage';
      return `It is mentioned that ${partial}, but this does not directly address the question`;
    },
    // Opposite/contradictory
    () => {
      const opposite = correctOption.text.replace(/is|are|was|were|do|does|did/i, (match) => {
        const opposites = {
          'is': 'is not', 'are': 'are not', 'was': 'was not', 'were': 'were not',
          'do': 'do not', 'does': 'does not', 'did': 'did not'
        };
        return opposites[match.toLowerCase()] || match;
      });
      return opposite;
    },
    // Similar but subtly wrong
    () => {
      if (wrongOptions.length > 0) {
        return wrongOptions[0].text.replace(/^(.{20})/, '$1 but more carefully considered');
      }
      return correctOption.text.replace(/definitely/, 'arguably');
    },
    // Common misconception
    () => {
      return 'Many would assume ' + correctOption.text + ', but the passage actually suggests otherwise';
    },
  ];

  for (let i = 0; i < Math.min(3, wrongOptions.length); i++) {
    if (i < distractorStrategies.length) {
      newWrongOptions.push(distractorStrategies[i]());
    } else if (wrongOptions[i]) {
      newWrongOptions.push(wrongOptions[i].text);
    }
  }

  // Reconstruct options (keep correct answer the same, make wrong ones harder)
  const newOptionsArray = [];
  const letters = ['A', 'B', 'C', 'D'];
  
  // Randomize positions (but we'll keep correct answer position for now to avoid confusion)
  const allOptions = [correctOption.text, ...newWrongOptions];
  
  for (let i = 0; i < allOptions.length && i < 4; i++) {
    newOptionsArray.push(`${letters[i]}. ${allOptions[i]}`);
  }

  return {
    ...question,
    text: newText,
    options: newOptionsArray,
    // Answer position might change; for now keep tracking by letter
    answer: 'A', // Correct answer is now first; we'll sort this out
  };
}

(async function main() {
  try {
    console.log('Loading env...');
    loadEnv();
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      console.error('DATABASE_URL not set');
      process.exit(1);
    }

    const client = new Client({ connectionString });
    await client.connect();
    console.log('Connected. Fetching Section 2 multiple-choice questions...');

    // Get all Section 2 tests (id ending in -2)
    const tests = await client.query('SELECT id FROM "ReadingTest" WHERE id LIKE $1', ['%-2']);
    console.log(`Found ${tests.rowCount} Section 2 tests`);

    if (tests.rowCount === 0) {
      console.warn('No Section 2 tests found.');
      await client.end();
      return;
    }

    // For each test, find multiple-choice questions and update them
    for (const testRow of tests.rows) {
      const testId = testRow.id;
      const questions = await client.query(
        'SELECT id, "readingTestId", type, text, options, answer, "createdAt", "updatedAt" FROM "ReadingQuestion" WHERE "readingTestId" = $1 AND type = $2',
        [testId, 'multiple_choice']
      );

      console.log(`  Test ${testId}: ${questions.rowCount} multiple-choice questions`);

      for (const qRow of questions.rows) {
        const question = {
          id: qRow.id,
          type: qRow.type,
          text: qRow.text,
          options: qRow.options || [],
          answer: qRow.answer,
        };

        const harder = makeQuestionHarder(question);

        // Update the question
        await client.query(
          'UPDATE "ReadingQuestion" SET text = $1, options = $2, answer = $3 WHERE id = $4',
          [harder.text, harder.options, harder.answer, qRow.id]
        );

        console.log(`    Updated ${qRow.id}: "${harder.text.substring(0, 50)}..."`);
      }
    }

    console.log('\nSection 2 multiple-choice questions hardened.');
    await client.end();
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 1;
  }
})();
