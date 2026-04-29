import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Sentence Completion Test...');

  const testId = "sentence-completion-3";

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
      title: "Sentence Completion: The Physics of Superconductivity",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Physics of Superconductivity</h2>
        <p>Superconductivity, the phenomenon where a material conducts electricity with zero resistance, was first discovered by Heike Kamerlingh Onnes in 1911. While experimenting with mercury at extremely low temperatures, Onnes observed that its electrical resistance vanished completely at approximately 4.2 Kelvin. This discovery opened the door to a new era of physics, promising a future where energy could be transported without loss and powerful magnetic fields could be generated with minimal power. However, for decades, superconductivity was limited to materials cooled to near absolute zero using liquid helium—a substance that is both scarce and expensive.</p>
        <p>The theoretical breakthrough came in 1957 with the Bardeen-Cooper-Schrieffer (BCS) theory. This model explained that at very low temperatures, electrons overcome their natural repulsion and form pairs, known as Cooper pairs. These pairs move through the atomic lattice of a material without colliding with atoms, thus eliminating the friction that causes electrical resistance. While the BCS theory successfully described 'conventional' superconductors, it could not explain the behavior of a new class of materials discovered in 1986: high-temperature superconductors (HTS). These ceramic materials, such as Yttrium Barium Copper Oxide (YBCO), can achieve superconductivity at temperatures reachable with liquid nitrogen, which is far more abundant and cost-effective than helium.</p>
        <p>The applications of superconductivity are vast and potentially transformative. In the field of medicine, superconducting magnets are the core component of Magnetic Resonance Imaging (MRI) machines, providing the high-intensity magnetic fields required for non-invasive diagnostic imaging. In the realm of transportation, Maglev (magnetic levitation) trains utilize superconducting magnets to float above the tracks, eliminating friction and allowing for speeds exceeding 600 kilometers per hour. Furthermore, the development of superconducting quantum interference devices (SQUIDs) has allowed scientists to detect incredibly faint magnetic signals, even those produced by the human brain.</p>
        <p>Despite these advancements, the 'holy grail' of the field remains the discovery of a room-temperature superconductor. Current HTS materials still require cooling to roughly 138 Kelvin, which limits their widespread use in power grids and consumer electronics. Furthermore, many of these materials are brittle and difficult to manufacture into long wires. Recent experiments involving pressurized hydrides—compounds of hydrogen—have shown promise, achieving superconductivity at temperatures near 273 Kelvin (zero degrees Celsius) but only under extreme pressures equivalent to those found at the Earth's core. The challenge for future researchers is to find a material that is both superconducting at ambient temperatures and stable at atmospheric pressure.</p>
      `,
      questions: {
        create: [
          // Questions 1-14: Sentence Completion
          {
            id: "s3-sc-q1",
            type: "sentence_completion",
            order: 1,
            text: "Heike Kamerlingh Onnes discovered that mercury's resistance disappeared at [GAP].",
            options: [],
            answer: ["4.2 Kelvin"]
          },
          {
            id: "s3-sc-q2",
            type: "sentence_completion",
            order: 2,
            text: "A major problem with early superconductors was the high cost of using [GAP] as a coolant.",
            options: [],
            answer: ["liquid helium"]
          },
          {
            id: "s3-sc-q3",
            type: "sentence_completion",
            order: 3,
            text: "According to the BCS theory, electrons in superconductors form pairs called [GAP].",
            options: [],
            answer: ["Cooper pairs"]
          },
          {
            id: "s3-sc-q4",
            type: "sentence_completion",
            order: 4,
            text: "In conventional materials, resistance is caused by electrons [GAP] with atoms.",
            options: [],
            answer: ["colliding"]
          },
          {
            id: "s3-sc-q5",
            type: "sentence_completion",
            order: 5,
            text: "High-temperature superconductors discovered in 1986 are primarily made of [GAP].",
            options: [],
            answer: ["ceramic materials"]
          },
          {
            id: "s3-sc-q6",
            type: "sentence_completion",
            order: 6,
            text: "The material known as YBCO can be cooled much more cheaply using [GAP].",
            options: [],
            answer: ["liquid nitrogen"]
          },
          {
            id: "s3-sc-q7",
            type: "sentence_completion",
            order: 7,
            text: "Superconducting magnets are essential for doctors using [GAP] machines for diagnosis.",
            options: [],
            answer: ["MRI"]
          },
          {
            id: "s3-sc-q8",
            type: "sentence_completion",
            order: 8,
            text: "Maglev trains reach high speeds because they are able to [GAP] above their tracks.",
            options: [],
            answer: ["float"]
          },
          {
            id: "s3-sc-q9",
            type: "sentence_completion",
            order: 9,
            text: "Very subtle magnetic signals from the brain can be measured using [GAP].",
            options: [],
            answer: ["SQUIDs"]
          },
          {
            id: "s3-sc-q10",
            type: "sentence_completion",
            order: 10,
            text: "Scientists are still searching for a material that works at [GAP].",
            options: [],
            answer: ["room-temperature"]
          },
          {
            id: "s3-sc-q11",
            type: "sentence_completion",
            order: 11,
            text: "Modern HTS materials are difficult to use in grids because they are [GAP] and hard to shape.",
            options: [],
            answer: ["brittle"]
          },
          {
            id: "s3-sc-q12",
            type: "sentence_completion",
            order: 12,
            text: "Superconductivity has been achieved near 0°C using hydrogen-based [GAP].",
            options: [],
            answer: ["pressurized hydrides"]
          },
          {
            id: "s3-sc-q13",
            type: "sentence_completion",
            order: 13,
            text: "Hydrides only become superconducting when subjected to [GAP] like those inside the Earth.",
            options: [],
            answer: ["extreme pressures"]
          },
          {
            id: "s3-sc-q14",
            type: "sentence_completion",
            order: 14,
            text: "The ideal material for the future must remain superconducting at [GAP].",
            options: [],
            answer: ["atmospheric pressure"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Sentence Completion seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
