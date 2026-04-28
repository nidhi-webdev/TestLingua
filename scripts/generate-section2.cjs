const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function makeHarderPassage(passage) {
  const extra = `\n<p><strong>Section 2 variant:</strong> This passage has been adapted to mirror Section 2 difficulty — passages are slightly longer, use more formal vocabulary, and require greater inference from the reader.</p>\n`;

  const synonyms = {
    people: 'individuals',
    use: 'utilize',
    help: 'assist',
    show: 'demonstrate',
    very: 'considerably',
    old: 'ancient',
  };

  let transformed = passage;
  for (const k of Object.keys(synonyms)) {
    const v = synonyms[k];
    const re = new RegExp(`\\b${k}\\b`, 'gi');
    transformed = transformed.replace(re, v);
  }

  return transformed + extra;
}

(async function main() {
  try {
    console.log('Generating Section 2 tests from existing Section 1 (-1) tests...');

    const tests = await prisma.readingTest.findMany({
      where: {
        OR: [
          { id: { endsWith: '-1' } },
          { id: '1' },
        ],
      },
      include: { questions: true },
    });

    if (!tests || tests.length === 0) {
      console.warn('No source tests found. Make sure Section 1 tests are seeded first.');
      return;
    }

    for (const test of tests) {
      let newId = test.id;
      if (test.id === '1') newId = '1-2';
      else if (test.id.endsWith('-1')) newId = test.id.replace(/-1$/, '-2');
      else newId = `${test.id}-2`;

      console.log(`Cloning ${test.id} -> ${newId}`);

      await prisma.readingTest.deleteMany({ where: { id: newId } });

      const newPassage = makeHarderPassage(test.passage || '');

      const created = await prisma.readingTest.create({
        data: {
          id: newId,
          title: `${test.title} — Section 2 (Harder)`,
          passage: newPassage,
          imageUrl: test.imageUrl || null,
          questions: {
            create: test.questions.map((q) => ({
              id: q.id.endsWith('-1') ? q.id.replace(/-1$/, '-2') : `${q.id}-2`,
              type: q.type,
              text: q.text,
              options: q.options || [],
              answer: q.answer,
            })),
          },
        },
      });

      console.log(`Created: ${created.id}`);
    }

    console.log('Section 2 generation complete.');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
