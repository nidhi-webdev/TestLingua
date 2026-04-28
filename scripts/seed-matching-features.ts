import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Matching Features test...");

  const passage = `
<h2>Pioneers of Modern Medicine</h2>

<p>The 19th century was a golden age of medical discovery, led by a small group of scientists whose work fundamentally changed our understanding of disease and hygiene. Before this period, the 'miasma theory' — the belief that diseases were caused by 'bad air' — was widely accepted. However, the rigorous experiments of several key individuals eventually proved the germ theory of disease, saving millions of lives.</p>

<p>Louis Pasteur, a French chemist, is perhaps the most famous figure of this era. His experiments with fermentation showed that microorganisms were responsible for souring beverages and causing disease. Pasteur developed the process of pasteurization and created the first vaccines for rabies and anthrax. He was a tireless advocate for the idea that invisible germs were the true cause of many human ailments, a concept that was initially met with great skepticism by the medical establishment.</p>

<p>While Pasteur was working in France, Robert Koch in Germany was developing the techniques needed to identify specific pathogens. Koch was the first to prove that a specific bacterium was responsible for a specific disease, starting with anthrax and later identifying the bacteria that cause tuberculosis and cholera. He developed a set of criteria, now known as Koch's Postulates, which remain a fundamental tool for microbiologists today. Koch's work provided the definitive proof that germ theory was correct, moving medicine from the realm of observation into a precise science.</p>

<p>In England, Joseph Lister was applying these new theories to surgery. At the time, even successful operations often ended in death due to 'ward fever' or sepsis. Lister, inspired by Pasteur's work, hypothesized that microorganisms were entering surgical wounds from the air and the surgeon's hands. He began using carbolic acid (phenol) to clean instruments and dress wounds, drastically reducing infection rates. Although his methods were initially mocked, his success eventually led to the universal adoption of antiseptic techniques in operating rooms around the world.</p>

<p>Earlier in the century, Edward Jenner had laid the groundwork for immunology. In 1796, Jenner observed that milkmaids who had contracted cowpox seemed immune to smallpox, a much more deadly disease. He famously inoculated a young boy with cowpox matter and later exposed him to smallpox, proving that the boy was protected. While Jenner did not yet understand the role of viruses, his work led to the eventual eradication of smallpox and established the principle of vaccination, which Pasteur would later build upon more scientifically.</p>
`;

  const features = [
    "A. Louis Pasteur",
    "B. Robert Koch",
    "C. Joseph Lister",
    "D. Edward Jenner"
  ];

  const questions = [
    {
      id: "mf-q1",
      type: "matching_features",
      order: 1,
      text: "This individual was the first to establish a set of rules for identifying the cause of a disease.",
      options: features,
      answer: ["B"],
    },
    {
      id: "mf-q2",
      type: "matching_features",
      order: 2,
      text: "This scientist discovered that microorganisms were the cause of liquids turning sour.",
      options: features,
      answer: ["A"],
    },
    {
      id: "mf-q3",
      type: "matching_features",
      order: 3,
      text: "This person introduced the use of chemical substances to prevent infection during operations.",
      options: features,
      answer: ["C"],
    },
    {
      id: "mf-q4",
      type: "matching_features",
      order: 4,
      text: "This individual noticed a connection between a milder animal disease and immunity to a human disease.",
      options: features,
      answer: ["D"],
    },
    {
      id: "mf-q5",
      type: "matching_features",
      order: 5,
      text: "This scientist was responsible for identifying the specific bacteria that cause tuberculosis.",
      options: features,
      answer: ["B"],
    },
    {
      id: "mf-q6",
      type: "matching_features",
      order: 6,
      text: "This individual developed the very first vaccine for rabies.",
      options: features,
      answer: ["A"],
    },
    {
      id: "mf-q7",
      type: "matching_features",
      order: 7,
      text: "This person's work was directly inspired by findings in the field of fermentation.",
      options: features,
      answer: ["C"],
    },
    {
      id: "mf-q8",
      type: "matching_features",
      order: 8,
      text: "This scientist was the first to scientifically prove the link between a specific microbe and anthrax.",
      options: features,
      answer: ["B"],
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "matching-features-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "matching-features-1",
      title: "Matching Features: Pioneers of Modern Medicine",
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
