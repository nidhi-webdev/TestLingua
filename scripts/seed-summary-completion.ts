import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Summary Completion test...");

  const passage = `
<h2>The Evolution of Renewable Energy</h2>

<p>For centuries, the global energy landscape was dominated by wood and eventually coal, which powered the Industrial Revolution. However, the 20th century saw a massive shift toward petroleum and natural gas as the primary drivers of economic growth. While these fossil fuels provided unprecedented energy density, their environmental cost became increasingly apparent by the late 1900s. The release of greenhouse gases led to a warming planet, necessitating a transition toward more sustainable power sources.</p>

<p>Solar energy has emerged as a frontrunner in this transition. Photovoltaic (PV) technology, which converts sunlight directly into electricity, has seen its costs plummet by over 80% in the last decade. This is largely due to economies of scale and improvements in silicon wafer manufacturing. In many parts of the world, solar is now the cheapest form of new electricity generation. However, the intermittent nature of sunlight remains a challenge, requiring the development of massive battery storage systems to provide power when the sun is not shining.</p>

<p>Wind power is another critical pillar of the green revolution. Modern wind turbines are massive engineering marvels, some with blades spanning over 100 metres. Offshore wind farms, located in the open ocean where winds are stronger and more consistent, are becoming increasingly common. These projects are technically complex and expensive to build, but they avoid the land-use conflicts often associated with onshore wind farms. Together with solar, wind is rapidly displacing coal-fired power plants across Europe and North America.</p>

<p>Hydroelectric power remains the largest source of renewable energy globally, providing a stable 'baseload' of electricity that can be adjusted to meet demand. While highly efficient, the construction of large dams can have significant ecological impacts, displacing local communities and disrupting river ecosystems. Consequently, many developed nations are focusing on 'small-scale hydro' or upgrading existing facilities rather than building new mega-dams. The future of the grid lies in a diverse mix of these technologies, managed by smart systems that can balance supply and demand in real-time.</p>
`;

  const wordList = [
    "A. Storage",
    "B. Silicon",
    "C. Ecological",
    "D. Intermittent",
    "E. Sustainable",
    "F. Baseload",
    "G. Economical"
  ];

  const summaryText = "The transition to [GAP1] power sources was prompted by the environmental damage caused by fossil fuels. Among the newer technologies, solar energy has become highly [GAP2] because of advancements in [GAP3] production. A major drawback of solar, however, is that it is [GAP4], which means that [GAP5] solutions are needed. Meanwhile, wind energy is growing, particularly in offshore locations. Finally, hydroelectricity is valued for its ability to provide a consistent [GAP6], although large-scale projects can cause [GAP7] problems.";

  const questions = [
    { id: "sum-g1", type: "summary_completion",
      order: 1, text: summaryText, options: wordList, answer: ["E"] }, // Sustainable
    { id: "sum-g2", type: "summary_completion",
      order: 2, text: summaryText, options: wordList, answer: ["G"] }, // Economical
    { id: "sum-g3", type: "summary_completion",
      order: 3, text: summaryText, options: wordList, answer: ["B"] }, // Silicon
    { id: "sum-g4", type: "summary_completion",
      order: 4, text: summaryText, options: wordList, answer: ["D"] }, // Intermittent
    { id: "sum-g5", type: "summary_completion",
      order: 5, text: summaryText, options: wordList, answer: ["A"] }, // Storage
    { id: "sum-g6", type: "summary_completion",
      order: 6, text: summaryText, options: wordList, answer: ["F"] }, // Baseload
    { id: "sum-g7", type: "summary_completion",
      order: 7, text: summaryText, options: wordList, answer: ["C"] }, // Ecological
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "summary-completion-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "summary-completion-1",
      title: "Summary Completion: Renewable Energy",
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
