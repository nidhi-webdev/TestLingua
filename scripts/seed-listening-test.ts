import { prisma } from "../src/lib/prisma";
import { mockListeningTest } from "../src/data/mock-listening-test";

async function main() {
  console.log("Seeding listening test...");

  try {
    // Create the test with questions
    const test = await prisma.listeningTest.create({
      data: {
        id: mockListeningTest.id,
        title: mockListeningTest.title,
        difficulty: mockListeningTest.difficulty,
        audioUrl: mockListeningTest.audioUrl,
        transcript: mockListeningTest.transcript,
        sections: mockListeningTest.sections,
        questions: {
          create: mockListeningTest.questions.map((q) => ({
            id: q.id,
            section: q.section,
            type: q.type,
            text: q.text,
            options: q.options || [],
            answer: q.answer,
            transcript: q.transcript || null,
            order: q.order,
          })),
        },
      },
    });

    console.log(`✅ Successfully seeded listening test: ${test.title}`);
    console.log(`   Total questions: ${mockListeningTest.questions.length}`);
    console.log(`   Transcript stored: ${mockListeningTest.transcript.length} characters`);
  } catch (e) {
    console.error("❌ Error seeding listening test:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
