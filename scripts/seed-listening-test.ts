import { prisma } from "../src/lib/prisma";
import { listeningPracticeSets } from "../src/data/mock-listening-test";

async function main() {
  console.log("Seeding listening test...");

  try {
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
            create: testData.questions.map((q) => ({
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
      console.log(`   Total questions: ${testData.questions.length}`);
      console.log(`   Transcript stored: ${testData.transcript.length} characters`);
    }
  } catch (e) {
    console.error("❌ Error seeding listening test:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
