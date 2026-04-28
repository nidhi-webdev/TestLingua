import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Short-Answer Questions test...");

  const passage = `
<h2>The Mystery of the Mary Celeste</h2>

<p>On December 4, 1872, a British brigantine named the Dei Gratia was sailing through the Atlantic Ocean when the crew spotted another ship drifting aimlessly. Upon closer inspection, they realized it was the Mary Celeste, which had left New York City for Genoa, Italy, eight days earlier. When the captain of the Dei Gratia sent a boarding party to investigate, they were met with an eerie scene: the ship was completely deserted.</p>

<p>The Mary Celeste was found in remarkably good condition. The cargo of 1,701 barrels of industrial alcohol was almost entirely intact, and the crew's personal belongings remained in their cabins. There were no signs of a struggle, and the ship's daily log showed no mention of any trouble. However, the ship's only lifeboat was missing, and the last entry in the logbook was dated ten days prior to the discovery.</p>

<p>Numerous theories have been proposed to explain the disappearance of the ten people on board, including Captain Benjamin Briggs, his wife, and their young daughter. Some suggested a pirate attack, but this was dismissed because the valuable cargo and personal items were left untouched. Others hypothesized a mutiny, but Captain Briggs had a reputation as a fair and capable leader. A more scientific theory suggests that some of the alcohol barrels leaked, creating explosive fumes that forced the crew to abandon ship in a panic, fearing an imminent explosion.</p>

<p>Despite over a century of investigation, the fate of the Mary Celeste's crew remains one of the greatest maritime mysteries in history. The ship was eventually sold and sailed for several more years before being deliberately wrecked off the coast of Haiti in 1885. Today, the story of the 'ghost ship' continues to fascinate historians and mystery-seekers alike, serving as a reminder of the unpredictable nature of the high seas.</p>
`;

  const questions = [
    {
      id: "sa-q1",
      type: "short_answer",
      order: 1,
      text: "What was the name of the ship that discovered the Mary Celeste?",
      options: [],
      answer: ["Dei Gratia"],
    },
    {
      id: "sa-q2",
      type: "short_answer",
      order: 2,
      text: "To which Italian city was the Mary Celeste traveling?",
      options: [],
      answer: ["Genoa"],
    },
    {
      id: "sa-q3",
      type: "short_answer",
      order: 3,
      text: "What specific type of cargo was the ship carrying?",
      options: [],
      answer: ["industrial alcohol"],
    },
    {
      id: "sa-q4",
      type: "short_answer",
      order: 4,
      text: "Which crucial piece of safety equipment was found to be missing?",
      options: [],
      answer: ["lifeboat"],
    },
    {
      id: "sa-q5",
      type: "short_answer",
      order: 5,
      text: "Where was the Mary Celeste eventually wrecked in 1885?",
      options: [],
      answer: ["Haiti"],
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "short-answer-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "short-answer-1",
      title: "Short-Answer Questions: The Mary Celeste",
      section: 1,
      difficulty: "Easy",
      passage,
      questions: {
        create: questions,
      },
    },
  });

  console.log(`Successfully seeded: ${test.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
