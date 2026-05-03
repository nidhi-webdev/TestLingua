import { prisma } from "../src/lib/prisma";
import { listeningPracticeSets } from "../src/data/mock-listening-test";

async function clearListeningData() {
  console.log("🧹 Clearing listening data...");

  await prisma.listeningResult.deleteMany({});
  await prisma.listeningQuestion.deleteMany({});
  await prisma.listeningTest.deleteMany({});

  console.log("✅ Listening data cleared successfully");
}

async function main() {
  console.log("\n🚀 Starting listening-only seed...\n");

  try {
    await clearListeningData();

    for (const testData of Object.values(listeningPracticeSets)) {
      const test = await prisma.listeningTest.create({
        data: {
          id: testData.id,
          title: testData.title,
          difficulty: testData.difficulty,
          audioUrl: testData.audioUrl,
          transcript: testData.transcript,
          sections: testData.sections,
          questions: {
            create: testData.questions.map((question) => ({
              id: question.id,
              section: question.section,
              type: question.type,
              text: question.text,
              options: question.options || [],
              answer: question.answer,
              transcript: question.transcript || null,
              order: question.order,
            })),
          },
        },
      });

      console.log(`✅ Successfully seeded listening test: ${test.title}`);
      console.log(`   Total questions: ${testData.questions.length}`);
    }
  } catch (error) {
    console.error("❌ Error seeding listening test:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();