import { prisma } from "../src/lib/prisma";

function makeHarderPassage(passage: string) {
  // Append an extra paragraph and replace simple words with slightly more formal synonyms
  const extra = `\n<p><strong>Section 2 variant:</strong> This passage has been adapted to mirror Section 2 difficulty —
  passages are slightly longer, use more formal vocabulary, and require greater inference from the reader.</p>\n`;

  const synonyms: Record<string, string> = {
    "people": "individuals",
    "use": "utilize",
    "help": "assist",
    "show": "demonstrate",
    "very": "considerably",
    "old": "ancient",
  };

  let transformed = passage;
  for (const [k, v] of Object.entries(synonyms)) {
    const re = new RegExp(`\\b${k}\\b`, "gi");
    transformed = transformed.replace(re, v);
  }

  return transformed + extra;
}

async function main() {
  console.log("Generating Section 2 tests from existing Section 1 (-1) tests...");

  // Find existing tests that look like Section 1 (ids ending with -1) and the main id '1'
  const tests = await prisma.readingTest.findMany({
    where: {
      OR: [
        { id: { endsWith: "-1" } },
        { id: "1" },
      ],
    },
    include: { questions: true },
  });

  if (tests.length === 0) {
    console.warn("No source tests found. Make sure Section 1 tests are seeded first.");
    return;
  }

  for (const test of tests) {
    let newId = test.id;
    if (test.id === "1") newId = "1-2";
    else if (test.id.endsWith("-1")) newId = test.id.replace(/-1$/, "-2");
    else newId = `${test.id}-2`;

    console.log(`Cloning ${test.id} -> ${newId}`);

    // Remove existing target if exists
    await prisma.readingTest.deleteMany({ where: { id: newId } });

    const newPassage = makeHarderPassage(test.passage);

    const created = await prisma.readingTest.create({
      data: {
        id: newId,
        title: `${test.title} — Section 2 (Harder)`,
        passage: newPassage,
        imageUrl: test.imageUrl || null,
        questions: {
          create: test.questions.map((q) => ({
            id: q.id.endsWith("-1") ? q.id.replace(/-1$/, "-2") : `${q.id}-2`,
            type: q.type,
            text: q.text, // keep question but you can later edit to increase inference
            options: q.options,
            answer: q.answer,
          })),
        },
      },
    });

    console.log(`Created: ${created.id}`);
  }

  console.log("Section 2 generation complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
