import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Multiple Choice (Choose 2/3) Test...');

  const testId = "mcq-multi-3";

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
      title: "Multiple Choice (Choose 2/3): Bioluminescence",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Mechanics of Bioluminescence in Deep-Sea Cephalopods</h2>
        <p>In the perpetual darkness of the ocean's bathypelagic zone, life has evolved a dazzling array of biological adaptations to cope with the absence of sunlight. Chief among these is bioluminescence—the production and emission of light by a living organism. While found in various marine species, it is within the class Cephalopoda, particularly squids and octopuses, that bioluminescence reaches its peak of complexity and functional diversity. These organisms do not merely glow; they manipulate light with the precision of a stage lighting technician to hunt, communicate, and evade predators.</p>
        <p>The chemical basis of this living light involves a reaction between a light-emitting molecule, luciferin, and an enzyme, luciferase. However, cephalopods have evolved specialized organs called photophores to house these reactions. In some species, such as the Hawaiian bobtail squid (<i>Euprymna scolopes</i>), the light is not produced by the squid itself but by symbiotic colonies of the bacterium <i>Vibrio fischeri</i>. The squid provides these bacteria with a nutrient-rich environment within a specialized light organ, and in return, the bacteria provide the squid with a source of luminescence that it can use for 'counter-illumination.' By matching the intensity of the light coming from above, the squid eliminates its silhouette, making it invisible to predators lurking below.</p>
        <p>Beyond simple camouflage, bioluminescence serves as a vital tool for predatory strategy. The 'fireberry' squid utilizes photophores on the tips of its tentacles to mimic the movement of small plankton, drawing in curious prey before striking with lightning speed. Other species use intense flashes of light to temporarily blind or startle attackers, providing a crucial window for escape. The complexity of these light organs is staggering; some photophores are equipped with lenses, shutters, and color filters, allowing the animal to control the direction, intensity, and even the wavelength of the light it emits. This level of control suggests that bioluminescence is not just a passive trait but a sophisticated form of active signaling.</p>
        <p>Research into the genomic underpinnings of cephalopod bioluminescence has revealed a surprising degree of evolutionary convergence. Scientists have found that the genes responsible for the development of light organs often overlap with those involved in eye development. This 'evolutionary recycling' suggests that the machinery for detecting light and the machinery for producing light share a deep, common ancestry. As marine biologists continue to explore the depths using remotely operated vehicles (ROVs), the list of bioluminescent behaviors continues to grow, revealing a hidden world of light that challenges our understanding of deep-sea ecology.</p>
      `,
      questions: {
        create: [
          {
            id: "s3-mm-q1",
            type: "multiple_choice",
            order: 1,
            text: "The writer mentions 'counter-illumination' as a way for squids to:",
            options: [
              "A. Attract potential mates in the dark.",
              "B. Blind their prey before an attack.",
              "C. Hide their silhouette from predators below.",
              "D. Communicate with other members of their species."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mm-q2",
            type: "multiple_choice",
            order: 2,
            text: "What is the role of Vibrio fischeri in the Hawaiian bobtail squid?",
            options: [
              "A. It acts as a primary food source for the squid.",
              "B. It produces the light within the squid's photophores.",
              "C. It helps the squid digest complex proteins.",
              "D. It regulates the squid's internal temperature."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mm-q3",
            type: "multiple_choice",
            order: 3,
            text: "The 'fireberry' squid's use of light is an example of:",
            options: [
              "A. Defensive startling.",
              "B. Social signaling.",
              "C. Predatory mimicry.",
              "D. Mutualistic symbiosis."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mm-q4",
            type: "multiple_choice",
            order: 4,
            text: "What does the writer suggest about the complexity of photophores?",
            options: [
              "A. They are simpler than human-made lighting systems.",
              "B. They allow for highly controlled active signaling.",
              "C. They are only found in the most ancient cephalopod species.",
              "D. They function automatically without the animal's control."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mm-q5",
            type: "multiple_choice",
            order: 5,
            text: "The link between eye development and light organ genes is an example of:",
            options: [
              "A. Genetic mutation.",
              "B. Evolutionary convergence.",
              "C. Random inheritance.",
              "D. Environmental damage."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mm-q6",
            type: "multiple_choice",
            order: 6,
            text: "Questions 6 and 7: Which TWO of the following are mentioned as components of some photophores?",
            options: [
              "A. Lenses",
              "B. Mirrors",
              "C. Shutters",
              "D. Magnets",
              "E. Sensors"
            ],
            answer: ["A", "C"]
          },
          {
            id: "s3-mm-q7",
            type: "multiple_choice", // We treat 6 & 7 as one question in our system for multi-select
            order: 7,
            text: "Questions 6 and 7: (Select the second correct option from the list above)",
            options: [
              "A. Lenses",
              "B. Mirrors",
              "C. Shutters",
              "D. Magnets",
              "E. Sensors"
            ],
            answer: ["A", "C"]
          },
          {
            id: "s3-mm-q8",
            type: "multiple_choice",
            order: 8,
            text: "Questions 8, 9 and 10: Which THREE functions of bioluminescence are discussed in the text?",
            options: [
              "A. Attracting prey",
              "B. Navigating through caves",
              "C. Avoiding detection",
              "D. Warming the surrounding water",
              "E. Escaping from predators",
              "F. Detecting chemical changes"
            ],
            answer: ["A", "C", "E"]
          },
          {
            id: "s3-mm-q9",
            type: "multiple_choice",
            order: 9,
            text: "Questions 8, 9 and 10: (Select another correct option from the list above)",
            options: [
              "A. Attracting prey",
              "B. Navigating through caves",
              "C. Avoiding detection",
              "D. Warming the surrounding water",
              "E. Escaping from predators",
              "F. Detecting chemical changes"
            ],
            answer: ["A", "C", "E"]
          },
          {
            id: "s3-mm-q10",
            type: "multiple_choice",
            order: 10,
            text: "Questions 8, 9 and 10: (Select the third correct option from the list above)",
            options: [
              "A. Attracting prey",
              "B. Navigating through caves",
              "C. Avoiding detection",
              "D. Warming the surrounding water",
              "E. Escaping from predators",
              "F. Detecting chemical changes"
            ],
            answer: ["A", "C", "E"]
          },
          {
            id: "s3-mm-q11",
            type: "multiple_choice",
            order: 11,
            text: "According to the text, ROVs have helped scientists to:",
            options: [
              "A. Capture live squids for labs.",
              "B. Discover new bioluminescent behaviors.",
              "C. Map the entire bathypelagic zone.",
              "D. Replace the need for genomic research."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mm-q12",
            type: "multiple_choice",
            order: 12,
            text: "The term 'evolutionary recycling' in the text refers to:",
            options: [
              "A. The reuse of genes from extinct species.",
              "B. The process of animals eating their own light organs.",
              "C. Using existing genetic pathways for new purposes.",
              "D. The way nutrients are passed to Vibrio fischeri."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mm-q13",
            type: "multiple_choice",
            order: 13,
            text: "The writer concludes that our understanding of deep-sea ecology is:",
            options: [
              "A. Now complete thanks to ROV technology.",
              "B. Being challenged by new discoveries.",
              "C. Irrelevant compared to genomic research.",
              "D. Based entirely on shallow-water observations."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mm-q14",
            type: "multiple_choice",
            order: 14,
            text: "Which statement best describes the primary thesis of the passage?",
            options: [
              "A. Bioluminescence is a simple chemical fluke in deep-sea life.",
              "B. Squids and octopuses are the only animals that use light.",
              "C. Bioluminescence is a complex, active tool for survival in the deep sea.",
              "D. Genetic research is more important than deep-sea exploration."
            ],
            answer: ["C"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 MCQ Multi-select seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
