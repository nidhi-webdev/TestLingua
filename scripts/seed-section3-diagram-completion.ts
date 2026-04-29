import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Diagram Label Completion Test...');

  const testId = "diagram-completion-3";

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
      title: "Diagram Label Completion: The Hydrogen Fuel Cell",
      section: 3,
      difficulty: "Hard",
      imageUrl: "/fuel_cell_diagram.png",
      passage: `
        <h2>The Engineering of Hydrogen Fuel Cells</h2>
        <p>As the global push for decarbonization intensifies, the hydrogen fuel cell has emerged as a cornerstone of clean energy technology. Unlike internal combustion engines that rely on the burning of fossil fuels, fuel cells generate electricity through a quiet and efficient electrochemical reaction. The only significant byproducts of this process are heat and pure water vapor, making it an ideal power source for everything from heavy-duty trucks to space exploration modules. To understand the efficiency of this technology, one must look at the sophisticated internal architecture of a Proton Exchange Membrane (PEM) fuel cell.</p>
        <p>A single fuel cell consists of several layers compressed between two robust <b>end plates</b>, which provide structural integrity and facilitate the distribution of gases. The process begins at the <b>anode inlet</b>, where pure hydrogen gas (H₂) is introduced. This gas travels through a precisely machined <b>anode flow plate</b>, often made of conductive graphite, which directs the hydrogen toward the heart of the cell. Before reaching the center, the gas must pass through a porous <b>Gas Diffusion Layer (GDL)</b>, which ensures that the hydrogen molecules are evenly distributed across the surface of the <b>catalyst layer</b>. Here, typically on a platinum-coated surface, the hydrogen molecules are split into protons (H⁺) and electrons (e⁻).</p>
        <p>The defining component of the cell is the <b>Proton Exchange Membrane (PEM)</b>, a specialized electrolyte that allows only the positively charged protons to pass through while blocking the electrons. Forced into an <b>external circuit</b>, the electrons create a flow of electricity that can power a motor or a light bulb. Meanwhile, on the opposite side of the cell, oxygen from the air enters through the <b>cathode inlet</b> and is distributed by the <b>cathode flow plate</b>. Like the anode side, the cathode features its own gas diffusion and catalyst layers. Finally, at the <b>catalyst layer (cathode)</b>, the oxygen reacts with the incoming protons and the returning electrons from the circuit to form water (H₂O), which is then expelled through the <b>cathode outlet</b>.</p>
        <p>To prevent gas leakage and ensure the purity of the reaction, high-performance <b>gaskets</b> are placed between the flow plates and the membrane assembly. While the chemistry of a fuel cell is relatively simple, the engineering challenge lies in maintaining the optimal balance of temperature, humidity, and gas pressure across these thin, delicate layers. Future advancements in material science aim to replace expensive platinum catalysts with more abundant materials, which would drastically lower the cost of production and accelerate the global transition to a hydrogen-based economy.</p>
      `,
      questions: {
        create: [
          // Questions 1-14: Diagram Labeling
          {
            id: "s3-dc-q1",
            type: "diagram_completion",
            order: 1,
            text: "Label 1: Providing structural integrity at the edges.",
            options: [],
            answer: ["End Plate"]
          },
          {
            id: "s3-dc-q2",
            type: "diagram_completion",
            order: 2,
            text: "Label 2: Where water and unused air leave the cell.",
            options: [],
            answer: ["Cathode Outlet"]
          },
          {
            id: "s3-dc-q3",
            type: "diagram_completion",
            order: 3,
            text: "Label 3: Graphite component directing oxygen flow.",
            options: [],
            answer: ["Cathode Flow Plate"]
          },
          {
            id: "s3-dc-q4",
            type: "diagram_completion",
            order: 4,
            text: "Label 4: Sealing component to prevent gas leakage.",
            options: [],
            answer: ["Gasket"]
          },
          {
            id: "s3-dc-q5",
            type: "diagram_completion",
            order: 5,
            text: "Label 5: Porous layer for oxygen distribution.",
            options: [],
            answer: ["Gas Diffusion Layer"]
          },
          {
            id: "s3-dc-q6",
            type: "diagram_completion",
            order: 6,
            text: "Label 6: Platinum layer where water is formed.",
            options: [],
            answer: ["Catalyst Layer"]
          },
          {
            id: "s3-dc-q7",
            type: "diagram_completion",
            order: 7,
            text: "Label 7: The electrolyte that blocks electrons.",
            options: [],
            answer: ["Proton Exchange Membrane"]
          },
          {
            id: "s3-dc-q8",
            type: "diagram_completion",
            order: 8,
            text: "Label 8: Layer where hydrogen molecules are split.",
            options: [],
            answer: ["Catalyst Layer"]
          },
          {
            id: "s3-dc-q9",
            type: "diagram_completion",
            order: 9,
            text: "Label 9: Porous layer for hydrogen distribution.",
            options: [],
            answer: ["Gas Diffusion Layer"]
          },
          {
            id: "s3-dc-q10",
            type: "diagram_completion",
            order: 10,
            text: "Label 10: Sealing component on the anode side.",
            options: [],
            answer: ["Gasket"]
          },
          {
            id: "s3-dc-q11",
            type: "diagram_completion",
            order: 11,
            text: "Label 11: Conductive plate directing hydrogen gas.",
            options: [],
            answer: ["Anode Flow Plate"]
          },
          {
            id: "s3-dc-q12",
            type: "diagram_completion",
            order: 12,
            text: "Label 12: Point where hydrogen gas enters.",
            options: [],
            answer: ["Anode Inlet"]
          },
          {
            id: "s3-dc-q13",
            type: "diagram_completion",
            order: 13,
            text: "Label 13: Structural plate on the hydrogen side.",
            options: [],
            answer: ["End Plate"]
          },
          {
            id: "s3-dc-q14",
            type: "diagram_completion",
            order: 14,
            text: "Label 14: Path for electrons to power a load.",
            options: [],
            answer: ["External Circuit"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Diagram Completion seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
