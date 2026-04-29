import { prisma } from "../src/lib/prisma";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const topics = [
    // ── TASK 1 ─────────────────────────────────────────────────────────────
    {
      id: "task1-line-graph",
      title: "Line Graph: Meat Consumption",
      task1Prompt: "The graph below shows the consumption of fish and some different kinds of meat in a European country between 1979 and 2004.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "", // Handled by IELTSChart component
    },
    {
      id: "task1-bar-chart",
      title: "Bar Chart: Telephone Calls",
      task1Prompt: "The chart below shows the total minutes of telephone calls in the UK, divided into three categories, from 1995–2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "",
    },
    {
      id: "task1-pie-chart",
      title: "Pie Chart: Migration Reasons",
      task1Prompt: "The pie charts below show the main reasons why people moved to and from the UK in 2007.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "",
    },
    {
      id: "task1-table",
      title: "Table: Consumer Spending",
      task1Prompt: "The table below gives information about consumer spending on different items in five different countries in 2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "",
    },
    {
      id: "task1-map",
      title: "Map: Islip Town Development",
      task1Prompt: "The maps below show the town of Islip as it is now and the proposed development plan for the town centre in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "",
    },
    {
      id: "task1-process",
      title: "Process: Brick Manufacturing",
      task1Prompt: "The diagram below shows the process by which bricks are manufactured for the building industry.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task2Prompt: "",
      task1ImageUrl: "",
    },

    // ── TASK 2 ─────────────────────────────────────────────────────────────
    {
      id: "task2-opinion",
      title: "Opinion: Traditions vs Technology",
      task1Prompt: "",
      task2Prompt: "In many countries, traditional customs and ways of life are being lost as a result of the rapid development of technology and global communication. Some people believe that this is a negative development, while others argue that it is a necessary part of progress.\n\nTo what extent do you agree or disagree with this statement?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      task1ImageUrl: "",
    },
    {
      id: "task2-discussion",
      title: "Discussion: Crime Punishment",
      task1Prompt: "",
      task2Prompt: "Some people believe that there should be fixed punishments for each type of crime. Others, however, argue that the circumstances of an individual crime, and the motivation for committing it, should always be taken into account when deciding on the punishment.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      task1ImageUrl: "",
    },
    {
      id: "task2-problem-solution",
      title: "Problem & Solution: Urbanization",
      task1Prompt: "",
      task2Prompt: "In many parts of the world, more and more people are moving from rural areas to live in large cities. This trend has created several significant problems for both the people living in cities and those remaining in the countryside.\n\nWhat are the main problems associated with this trend, and what measures could be taken to address these issues?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      task1ImageUrl: "",
    },
    {
      id: "task2-advantage",
      title: "Advantage: Remote Working",
      task1Prompt: "",
      task2Prompt: "An increasing number of people are now working from home rather than in a traditional office environment. While this offers greater flexibility, some argue that it can lead to a sense of isolation and a lack of professional development.\n\nDo the advantages of this trend outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      task1ImageUrl: "",
    },
    {
      id: "task2-two-part",
      title: "Two-Part: Museums",
      task1Prompt: "",
      task2Prompt: "Many museums and historical sites are expensive to maintain and require significant funding. Some people believe that these places should be free to the public, while others argue that visitors should pay an entrance fee to help cover costs.\n\nWhy are museums and historical sites important to a society? Do you think the benefits of making these sites free outweigh the costs?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      task1ImageUrl: "",
    },
  ];

  console.log("Seeding authentic IELTS writing topics...");

  for (const topic of topics) {
    await prisma.writingTest.upsert({
      where: { id: topic.id },
      update: topic,
      create: topic,
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
