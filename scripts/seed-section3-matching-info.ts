import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Matching Information Test...');

  const testId = "matching-info-3";

  // Clean up existing
  await prisma.readingQuestion.deleteMany({
    where: { readingTestId: testId }
  });
  await prisma.readingTest.deleteMany({
    where: { id: testId }
  });

  await prisma.readingTest.create({
    data: {
      id: testId,
      title: "Matching Information: The Indus Valley Civilization",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Archaeological Mystery of the Indus Valley Civilization</h2>
        <p><b>A</b>. At its peak around 2500 BCE, the Indus Valley Civilization (IVC), also known as the Harappan Civilization, was the largest and most technologically advanced urban culture of the ancient world. Stretching across what is now Pakistan and northwest India, it covered an area twice the size of ancient Egypt or Mesopotamia. Yet, unlike its contemporaries, the IVC left behind no towering monuments to kings, no grand temples to gods, and, most frustratingly for modern historians, no deciphered written record. What remains is a sprawling network of meticulously planned cities that hint at a society governed by principles of egalitarianism and engineering precision rather than individual ego.</p>
        <p><b>B</b>. The most striking feature of Harappan cities, such as Mohenjo-daro and Harappa, is their sophisticated urban planning. Long before the Romans, the Harappans utilized a grid system for their streets and a complex subterranean drainage system that was unparalleled until the 19th century. Every house, regardless of its size, was connected to a central sewage line, and most featured private bathing areas. This suggests a preoccupation with public hygiene and a level of civic organization that implies a strong, albeit invisible, central authority. The uniform size of bricks used across hundreds of miles further supports the theory of a highly standardized administrative system.</p>
        <p><b>C</b>. Economically, the IVC was a powerhouse of trade and craftsmanship. Harappan seals, made of steatite and featuring intricate carvings of animals and a mysterious script, have been found as far away as Mesopotamia, indicating a robust maritime trade network. They were masters of metallurgy, working with copper, bronze, and gold, and their bead-making industry was the envy of the ancient world. Interestingly, despite their wealth and reach, archaeological excavations have uncovered remarkably few weapons of war. This has led some scholars to speculate that the IVC was a uniquely peaceful society, though others argue that their defenses may have been simply more subtle or that we have yet to find the relevant sites.</p>
        <p><b>D</b>. The IVC script remains the 'holy grail' of archaeology. Consisting of roughly 400 unique signs, it is often found on small seals, pottery shards, and copper tablets. Despite over a hundred attempts at decipherment using sophisticated computer modeling and linguistic analysis, the code remains unbroken. Some researchers believe it is a logo-syllabic language related to the Dravidian family, while others argue it is not a spoken language at all but a system of non-linguistic symbols representing clans or trade guilds. Without a 'Rosetta Stone'—a bilingual text—the voices of the Harappans remain silent, leaving their political and religious beliefs to be inferred from material remains alone.</p>
        <p><b>E</b>. Religion in the Indus Valley is equally enigmatic. In the absence of temples or large-scale statuary, historians have looked to small terracotta figurines and the famous 'Pashupati' seal, which depicts a horned figure surrounded by animals, for clues. Many see this as a precursor to the Hindu god Shiva, suggesting a deep continuity in South Asian spiritual life. Others interpret the prevalent female figurines as evidence of a mother-goddess cult. However, these are interpretations based on later cultural developments, and it is entirely possible that the Harappans practiced a form of decentralized, nature-based worship that required no grand architectural expression.</p>
        <p><b>F</b>. The decline of this great civilization around 1900 BCE was once attributed to a violent invasion by 'Aryan' tribes from the north. This theory, however, has been largely debunked by a lack of skeletal evidence of mass conflict. Instead, modern climate science points toward a more gradual, environmental collapse. Shifts in the monsoon patterns led to the drying up of the Saraswati River, a vital artery of the civilization. Forced to abandon their great cities, the Harappans likely migrated eastward toward the Ganges Valley, where they integrated into smaller, more localized agricultural communities, marking the end of the urban Harappan phase.</p>
        <p><b>G</b>. Today, the legacy of the Indus Valley remains a source of pride and intense study. New technologies, such as satellite imaging and ancient DNA analysis, are slowly peeling back the layers of mystery. We are learning more about their diet, their migration patterns, and their genetic heritage. Yet, the core questions remain: Who ruled them? How did they maintain such a vast and standardized society without the use of force? And what does their script finally say? As long as these questions persist, the Indus Valley will remain one of the most captivating chapters in the story of human civilization.</p>
      `,
      questions: {
        create: [
          {
            id: "s3-mi-q1",
            type: "matching_information",
            order: 1,
            text: "A mention of a specific material used in the creation of Harappan seals.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["C"]
          },
          {
            id: "s3-mi-q2",
            type: "matching_information",
            order: 2,
            text: "A reference to the rejection of a previous theory regarding the civilization's end.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["F"]
          },
          {
            id: "s3-mi-q3",
            type: "matching_information",
            order: 3,
            text: "A description of the layout of Harappan streets and sewers.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["B"]
          },
          {
            id: "s3-mi-q4",
            type: "matching_information",
            order: 4,
            text: "An explanation of why historians find the lack of writing so difficult.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["A"]
          },
          {
            id: "s3-mi-q5",
            type: "matching_information",
            order: 5,
            text: "A comparison between the geographical size of the IVC and other ancient cultures.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["A"]
          },
          {
            id: "s3-mi-q6",
            type: "matching_information",
            order: 6,
            text: "A suggestion that the Harappan society may have been exceptionally non-violent.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["C"]
          },
          {
            id: "s3-mi-q7",
            type: "matching_information",
            order: 7,
            text: "A mention of the approximate number of individual symbols found in the IVC script.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["D"]
          },
          {
            id: "s3-mi-q8",
            type: "matching_information",
            order: 8,
            text: "A discussion on whether the IVC symbols represent a spoken language.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["D"]
          },
          {
            id: "s3-mi-q9",
            type: "matching_information",
            order: 9,
            text: "A reference to a specific spiritual figure that might link the IVC to modern Hinduism.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["E"]
          },
          {
            id: "s3-mi-q10",
            type: "matching_information",
            order: 10,
            text: "The reason why researchers believe there was a standardized administrative system.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["B"]
          },
          {
            id: "s3-mi-q11",
            type: "matching_information",
            order: 11,
            text: "A mention of a specific natural resource that disappeared, affecting the civilization.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["F"]
          },
          {
            id: "s3-mi-q12",
            type: "matching_information",
            order: 12,
            text: "A description of the bead-making industry's status in the ancient world.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["C"]
          },
          {
            id: "s3-mi-q13",
            type: "matching_information",
            order: 13,
            text: "A reference to modern scientific tools used to study the civilization's remains.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["G"]
          },
          {
            id: "s3-mi-q14",
            type: "matching_information",
            order: 14,
            text: "A mention of the geographical direction where the Harappan people moved after abandonment.",
            options: ["A", "B", "C", "D", "E", "F", "G"],
            answer: ["F"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Matching Information seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
