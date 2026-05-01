import { prisma } from "../src/lib/prisma";
import { mockListeningTest } from "../src/data/mock-listening-test";

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

    const test = await prisma.listeningTest.create({
      data: {
        id: mockListeningTest.id,
        title: mockListeningTest.title,
        difficulty: mockListeningTest.difficulty,
        audioUrl: mockListeningTest.audioUrl,
        transcript: mockListeningTest.transcript,
        sections: mockListeningTest.sections,
        questions: {
          create: mockListeningTest.questions.map((question) => ({
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
    console.log(`   Total questions: ${mockListeningTest.questions.length}`);
  } catch (error) {
    console.error("❌ Error seeding listening test:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();