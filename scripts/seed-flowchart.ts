import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Flow-chart Completion test...");

  const passage = `
<h2>The Sustainable Greenhouse</h2>

<p>Modern greenhouses are designed to maximize plant growth while minimizing energy consumption. One of the most efficient designs is the 'Solar-Capture Greenhouse.' At the very top of the structure, a specialized <strong>glass roof</strong> allows maximum sunlight to enter while reflecting excessive heat away during the summer months.</p>

<p>To regulate the internal climate, the design includes several <strong>ventilation panels</strong>. These panels are typically located on the sides of the structure and open automatically when the internal temperature exceeds a pre-set limit. Below the panels, <strong>planting beds</strong> (1) are arranged in rows, often using hydroponic systems where plants grow in nutrient-rich water rather than soil. Another set of <strong>planting beds</strong> (2) may be placed on elevated platforms to optimize vertical space.</p>

<p>A central <strong>walkway</strong> runs through the middle of the greenhouse, providing access for staff and automated harvesting robots. At the end of the walkway is the main <strong>entrance</strong> system. This entrance is directly connected to a large <strong>water tank</strong> (3), which stores rainwater collected from the roof. This water is filtered and then circulated through the greenhouse to hydrate the plants. By recycling water and using solar-optimized materials, these greenhouses can operate with very little external input.</p>
`;

  const questions = [
    {
      id: "fc-q1",
      type: "flow_chart",
      text: "Step 1",
      options: [],
      answer: "planting beds",
    },
    {
      id: "fc-q2",
      type: "flow_chart",
      text: "Step 2",
      options: [],
      answer: "planting beds",
    },
    {
      id: "fc-q3",
      type: "flow_chart",
      text: "Step 3",
      options: [],
      answer: "water tank",
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "flowchart-completion-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "flowchart-completion-1",
      title: "Flow-chart Completion: Sustainable Greenhouse",
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
