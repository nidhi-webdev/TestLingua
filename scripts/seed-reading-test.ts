import { prisma } from "../src/lib/prisma";
import { mockReadingTest } from "../src/data/mock-reading-test";

async function main() {
  console.log("Seeding reading test...");

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: mockReadingTest.id } });

  // Create the test
  const test = await prisma.readingTest.create({
    data: {
      id: mockReadingTest.id,
      title: mockReadingTest.title,
      passage: mockReadingTest.passage,
      questions: {
        create: mockReadingTest.questions.map((q) => ({
          id: q.id,
          type: q.type,
          text: q.text,
          options: q.options || [],
          answer: q.answer,
        })),
      },
    },
  });

  console.log(`Successfully seeded reading test: ${test.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
