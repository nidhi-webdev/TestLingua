import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Diagram Completion test...");

  const passage = `
<h2>How Wind Turbines Generate Electricity</h2>

<p>A wind turbine works on a simple principle: instead of using electricity to make wind — like a fan — wind turbines use wind to make electricity. The wind turns the propeller-like blades of a turbine around a rotor, which spins a generator, which creates electricity.</p>

<p>The main components of a utility-scale wind turbine are the rotor blades, the nacelle, and the tower. The <strong>rotor blades</strong> (1) are the most visible part; they are designed like airplane wings to capture the wind's kinetic energy. These blades are attached to a central <strong>hub</strong> (2), which together form the rotor. As the wind blows, the rotor rotates at a relatively slow speed.</p>

<p>Behind the rotor is the <strong>nacelle</strong>, a large housing that contains the key generating machinery. Inside the nacelle, the slow-spinning <strong>main shaft</strong> (3) is connected to a <strong>gearbox</strong> (4). This gearbox is a critical piece of engineering that increases the rotational speed from about 15-20 rotations per minute (rpm) to over 1,500 rpm, which is the speed required by most generators to produce electricity.</p>

<p>The high-speed shaft from the gearbox then drives the <strong>generator</strong> (5). Using electromagnetic induction, the generator converts the mechanical energy of the spinning shaft into electrical energy. This electricity is then sent down cables inside the <strong>tower</strong> to a transformer, which increases the voltage for transmission across the electrical grid. A complex system of sensors and controllers ensures that the turbine always faces the wind and operates at safe speeds, even during storms.</p>
`;

  const questions = [
    {
      id: "dc-q1",
      type: "diagram_completion",
      order: 1,
      text: "Label #1",
      options: [],
      answer: ["rotor blades"],
    },
    {
      id: "dc-q2",
      type: "diagram_completion",
      order: 2,
      text: "Label #2",
      options: [],
      answer: ["hub"],
    },
    {
      id: "dc-q3",
      type: "diagram_completion",
      order: 3,
      text: "Label #3",
      options: [],
      answer: ["main shaft"],
    },
    {
      id: "dc-q4",
      type: "diagram_completion",
      order: 4,
      text: "Label #4",
      options: [],
      answer: ["gearbox"],
    },
    {
      id: "dc-q5",
      type: "diagram_completion",
      order: 5,
      text: "Label #5",
      options: [],
      answer: ["generator"],
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "diagram-completion-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "diagram-completion-1",
      title: "Diagram Completion: Wind Turbine Design",
      section: 1,
      difficulty: "Easy",
      passage,
      imageUrl: "/diagrams/wind_turbine_diagram.png",
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
