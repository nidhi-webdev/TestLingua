import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Sentence Completion test...");

  const passage = `
<h2>The History of the Printing Press</h2>

<p>Before the mid-15th century, the reproduction of written works was a laborious and expensive process. Scribes would spend months, sometimes years, hand-copying manuscripts in monasteries and scriptoria. This meant that books were incredibly rare and accessible only to the clergy and the wealthiest members of the nobility. However, the invention of the printing press by Johannes Gutenberg in Mainz, Germany, around 1440, was a turning point in human history.</p>

<p>Gutenberg's genius lay in his development of 'movable type.' Instead of carving an entire page into a single block of wood, he cast individual metal letters that could be rearranged and reused. To achieve this, he used an alloy of lead, tin, and antimony, which melted at a low temperature but was strong enough to withstand the pressure of a press. This innovation allowed for the mass production of books at a fraction of the previous cost and time.</p>

<p>The first major work produced by this new method was the Gutenberg Bible, completed in 1455. Although it was a religious text, the implications of the printing press were far more wide-reaching. By the end of the century, printing presses had spread across Europe, from Venice to London. This led to a dramatic increase in literacy rates and the rapid dissemination of new ideas in science, religion, and philosophy. The Renaissance and the Reformation were both fueled by the accessibility of printed materials.</p>

<p>As the technology evolved, so did its impact on society. The creation of newspapers in the 17th century provided the public with regular access to news and information, fostering a more informed and politically active citizenry. In the 19th century, the steam-powered press further accelerated the speed of printing, leading to the 'penny press' era, where newspapers became affordable for the working class. This democratization of knowledge was essential for the development of modern democracies.</p>

<p>Today, while digital media has transformed how we consume information, the legacy of Gutenberg's invention remains. The printing press was the first step toward the global information age, proving that the power of the written word could be harnessed to shape the world. It broke the monopoly of the elite over knowledge and paved the way for the intellectual and social revolutions that have defined the modern era.</p>
`;

  const questions = [
    {
      id: "sc-q1",
      type: "sentence_completion",
      order: 1,
      text: "Prior to the 15th century, the majority of manuscripts were created by [GAP] in religious institutions.",
      options: [],
      answer: ["scribes"],
    },
    {
      id: "sc-q2",
      type: "sentence_completion",
      order: 2,
      text: "Johannes Gutenberg's most significant contribution was the creation of [GAP], which allowed for reusable letters.",
      options: [],
      answer: ["movable type"],
    },
    {
      id: "sc-q3",
      type: "sentence_completion",
      order: 3,
      text: "The individual letters used in the press were made from a specialized [GAP] that included lead and tin.",
      options: [],
      answer: ["alloy"],
    },
    {
      id: "sc-q4",
      type: "sentence_completion",
      order: 4,
      text: "The [GAP] was the first substantial book ever printed using Gutenberg's new technology.",
      options: [],
      answer: ["Gutenberg Bible"],
    },
    {
      id: "sc-q5",
      type: "sentence_completion",
      order: 5,
      text: "The spread of the printing press played a crucial role in increasing [GAP] among the general population.",
      options: [],
      answer: ["literacy rates"],
    },
    {
      id: "sc-q6",
      type: "sentence_completion",
      order: 6,
      text: "In the 1800s, the introduction of the [GAP] made it possible to produce newspapers even faster.",
      options: [],
      answer: ["steam-powered press"],
    },
    {
      id: "sc-q7",
      type: "sentence_completion",
      order: 7,
      text: "The affordable newspapers of the 19th century were often referred to as the [GAP].",
      options: [],
      answer: ["penny press"],
    },
    {
      id: "sc-q8",
      type: "sentence_completion",
      order: 8,
      text: "The printing press is credited with ending the [GAP] that the elite had over information and knowledge.",
      options: [],
      answer: ["monopoly"],
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "sentence-completion-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "sentence-completion-1",
      title: "Sentence Completion: The History of the Printing Press",
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
