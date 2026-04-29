import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Flow-chart Completion Test...');

  const testId = "flowchart-completion-3";

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
      title: "Flow-chart Completion: The Lifecycle of a Volcano",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Lifecycle of an Inactive Volcano</h2>
        <p>The lifecycle of a volcano is a long and complex geological process that can span millions of years. While most people are familiar with the dramatic eruptions of active volcanoes, the periods of dormancy and eventual extinction are equally important for understanding the Earth's crust. A volcano is generally considered 'active' if it has erupted within the last 10,000 years. Once a volcano ceases to show signs of activity, it enters a state of dormancy, which can last for centuries or even millennia. However, dormancy is not necessarily a permanent state; under certain tectonic conditions, a 'sleeping' volcano can undergo rejuvenation.</p>
        <p>The transition from active to dormant usually occurs when the supply of magma from the mantle is cut off or redirected. This can happen due to the movement of tectonic plates or the exhaustion of a localized magma chamber. As the internal pressure subsides, the volcano begins to cool. Over time, the volcanic cone may become heavily eroded by wind and water, losing its characteristic sharp peak and becoming more rounded. In some cases, the weight of the cooling volcano causes the summit to collapse inward, creating a large, bowl-shaped depression known as a caldera. These calderas often fill with rainwater or snowmelt, forming deep, high-altitude lakes.</p>
        <p>Rejuvenation, while relatively rare, is a significant geological event. It occurs when a new source of magma finds its way into the old volcanic plumbing system. This can be triggered by deep-seated seismic activity or changes in the surrounding crustal stress. The new magma, often more chemically primitive and hotter than the original supply, can cause a rapid increase in internal pressure, leading to 'phreatic eruptions' where groundwater is flashed into steam. These eruptions can clear out old vents and pave the way for a full-scale magmatic eruption, effectively 'restarting' the volcano's lifecycle. This process highlights the dynamic and unpredictable nature of our planet's geothermal systems.</p>
        <p>Ultimately, a volcano becomes extinct when it is moved entirely away from its magma source, such as when an oceanic plate moves over a 'hotspot.' At this stage, the volcano is no longer capable of erupting and will eventually be eroded down to its base. These ancient, worn-down volcanic remains often provide valuable insights into the tectonic history of a region. Understanding these stages is not just an academic exercise; it is vital for disaster preparedness, as many 'extinct' or 'dormant' volcanoes are located near major urban centers, and their potential for rejuvenation must be carefully monitored.</p>
      `,
      questions: {
        create: [
          // Questions 1-7: Flow-chart Completion
          {
            id: "s3-fc-q1",
            type: "flow_chart",
            order: 1,
            text: "Stage 1: Magma supply is [GAP] or moves away due to plate tectonics.",
            options: [],
            answer: ["cut off"]
          },
          {
            id: "s3-fc-q2",
            type: "flow_chart",
            order: 2,
            text: "Stage 2: Internal pressure drops and the volcano enters [GAP].",
            options: [],
            answer: ["dormancy"]
          },
          {
            id: "s3-fc-q3",
            type: "flow_chart",
            order: 3,
            text: "Stage 3: Wind and water cause [GAP] to the volcanic cone.",
            options: [],
            answer: ["erosion"]
          },
          {
            id: "s3-fc-q4",
            type: "flow_chart",
            order: 4,
            text: "Stage 4: Cooling leads to the formation of a [GAP] at the summit.",
            options: [],
            answer: ["caldera"]
          },
          {
            id: "s3-fc-q5",
            type: "flow_chart",
            order: 5,
            text: "Rejuvenation: Triggered by seismic activity or changes in [GAP].",
            options: [],
            answer: ["crustal stress"]
          },
          {
            id: "s3-fc-q6",
            type: "flow_chart",
            order: 6,
            text: "Result: New magma causes [GAP] as groundwater turns to steam.",
            options: [],
            answer: ["phreatic eruptions"]
          },
          {
            id: "s3-fc-q7",
            type: "flow_chart",
            order: 7,
            text: "Finality: Volcano becomes [GAP] when it moves off a hotspot.",
            options: [],
            answer: ["extinct"]
          },
          // Questions 8-14: Multiple Choice (Standard)
          {
            id: "s3-fc-q8",
            type: "multiple_choice",
            order: 8,
            text: "What is the time limit for a volcano to be considered 'active'?",
            options: [
              "A. 1,000 years.",
              "B. 5,000 years.",
              "C. 10,000 years.",
              "D. 100,000 years."
            ],
            answer: ["C"]
          },
          {
            id: "s3-fc-q9",
            type: "multiple_choice",
            order: 9,
            text: "Which process creates high-altitude lakes in volcanoes?",
            options: [
              "A. Magma injection.",
              "B. Caldera collapse.",
              "C. Tectonic shifting.",
              "D. Phreatic steam."
            ],
            answer: ["B"]
          },
          {
            id: "s3-fc-q10",
            type: "multiple_choice",
            order: 10,
            text: "The new magma during rejuvenation is described as being:",
            options: [
              "A. Cooler and more refined.",
              "B. Chemically primitive and hotter.",
              "C. Thick and slow-moving.",
              "D. Mostly composed of solid rock."
            ],
            answer: ["B"]
          },
          {
            id: "s3-fc-q11",
            type: "multiple_choice",
            order: 11,
            text: "What happens during a phreatic eruption?",
            options: [
              "A. Magma flows slowly into the ocean.",
              "B. Groundwater is rapidly converted to steam.",
              "C. Ash covers the entire atmosphere.",
              "D. The volcano's base is completely eroded."
            ],
            answer: ["B"]
          },
          {
            id: "s3-fc-q12",
            type: "multiple_choice",
            order: 12,
            text: "How do volcanoes typically become extinct?",
            options: [
              "A. By erupting too many times.",
              "B. By being moved away from their magma source.",
              "C. By filling up with too much water.",
              "D. By cooling down faster than expected."
            ],
            answer: ["B"]
          },
          {
            id: "s3-fc-q13",
            type: "multiple_choice",
            order: 13,
            text: "Monitoring dormant volcanoes is important because:",
            options: [
              "A. They are the only source of ancient DNA.",
              "B. They provide 100% of the world's energy.",
              "C. Many are located near large cities.",
              "D. They are moving toward the Ganges Valley."
            ],
            answer: ["C"]
          },
          {
            id: "s3-fc-q14",
            type: "multiple_choice",
            order: 14,
            text: "The writer emphasizes that the Earth's geothermal systems are:",
            options: [
              "A. Static and predictable.",
              "B. Dynamic and unpredictable.",
              "C. Mostly localized in Pakistan.",
              "D. No longer active in the modern era."
            ],
            answer: ["B"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Flow-chart seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
