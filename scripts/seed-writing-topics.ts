import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('Seeding specific Writing Topics for IELTS...');

  // Task 1 Focused Tests
  const task1Tests = [
    {
      id: "task1-line-graph",
      title: "Task 1 Practice: Line Graph",
      difficulty: "Medium",
      task1Prompt: "The graph below shows the consumption of fish and some different kinds of meat in a European country between 1979 and 2004.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&auto=format&fit=crop&q=60", // Placeholder for line graph
      task2Prompt: "Some people think that all teenagers should be required to do unpaid work in their free time to help the local community. They believe this would benefit both the individual teenager and society as a whole.\n\nDo you agree or disagree?",
    },
    {
      id: "task1-bar-chart",
      title: "Task 1 Practice: Bar Chart",
      difficulty: "Medium",
      task1Prompt: "The chart below shows the total number of minutes (in billions) of telephone calls in the UK, divided into three categories, from 1995-2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60", // Placeholder for bar chart
      task2Prompt: "In many countries, schools have severe problems with student behaviour. What do you think are the causes of this? What solutions can you suggest?",
    },
    {
      id: "task1-pie-chart",
      title: "Task 1 Practice: Pie Chart",
      difficulty: "Hard",
      task1Prompt: "The pie charts below show the main reasons for migration to and from the UK in 2007.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60", // Placeholder for pie chart
      task2Prompt: "Some people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighbourhood or teaching sports to younger children).\n\nTo what extent do you agree or disagree?",
    },
    {
      id: "task1-table",
      title: "Task 1 Practice: Table",
      difficulty: "Medium",
      task1Prompt: "The table below gives information on consumer spending on different items in five different countries in 2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: null,
      task2Prompt: "It is generally believed that some people are born with certain talents, for instance for sport or music, and others are not. However, it is sometimes claimed that any child can be taught to become a good sports person or musician.\n\nDiscuss both these views and give your own opinion.",
    },
    {
      id: "task1-map",
      title: "Task 1 Practice: Map",
      difficulty: "Hard",
      task1Prompt: "The maps below show the centre of a small town called Islip as it is now, and plans for its development.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60", // Placeholder for map
      task2Prompt: "Nowadays, many families have both parents working. Some people say that the mother should stay at home to take care of the children.\n\nDo you agree or disagree?",
    },
    {
      id: "task1-process",
      title: "Task 1 Practice: Process Diagram",
      difficulty: "Hard",
      task1Prompt: "The diagram below shows the process by which bricks are manufactured for the building industry.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60", // Placeholder for process diagram
      task2Prompt: "Global warming is one of the most serious issues that the world is facing today. What are the causes of global warming and what measures can governments and individuals take to tackle the issue?",
    }
  ];

  // Task 2 Focused Tests
  const task2Tests = [
    {
      id: "task2-opinion",
      title: "Task 2 Practice: Opinion Essay",
      difficulty: "Medium",
      task1Prompt: "The graph below shows the proportion of the population aged 65 and over between 1940 and 2040 in three different countries.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&auto=format&fit=crop&q=60",
      task2Prompt: "Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer.\n\nTo what extent do you agree or disagree with these opinions?",
    },
    {
      id: "task2-discussion",
      title: "Task 2 Practice: Discussion Essay",
      difficulty: "Medium",
      task1Prompt: "The table below shows the percentage of mobile phone owners using various mobile phone features.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: null,
      task2Prompt: "Some people think that a sense of competition in children should be encouraged. Others believe that children who are taught to co-operate rather than compete become more useful adults.\n\nDiscuss both these views and give your own opinion.",
    },
    {
      id: "task2-problem-solution",
      title: "Task 2 Practice: Problem & Solution",
      difficulty: "Hard",
      task1Prompt: "The diagrams below show the site of a school in 2004 and the plan for changes to the school site in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60",
      task2Prompt: "In many countries, the proportion of older people is steadily increasing. Does this trend have more positive or negative effects on society?\n\nWhat are the problems associated with an aging population, and what solutions can you suggest?",
    },
    {
      id: "task2-advantage",
      title: "Task 2 Practice: Advantage / Disadvantage",
      difficulty: "Hard",
      task1Prompt: "The bar chart shows the divorce rates in two European countries from 2011 to 2015.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      task2Prompt: "In some countries, young people are encouraged to work or travel for a year between finishing high school and starting university studies.\n\nDiscuss the advantages and disadvantages for young people who decide to do this.",
    },
    {
      id: "task2-two-part",
      title: "Task 2 Practice: Two-Part Question",
      difficulty: "Hard",
      task1Prompt: "The pie charts below show the comparison of different kinds of energy production of France in two years.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1ImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      task2Prompt: "Happiness is considered very important in life. Why is it difficult to define?\n\nWhat factors are important in achieving happiness?",
    }
  ];

  const allTests = [...task1Tests, ...task2Tests];

  for (const test of allTests) {
    await prisma.writingTest.upsert({
      where: { id: test.id },
      update: {
        title: test.title,
        difficulty: test.difficulty,
        task1Prompt: test.task1Prompt,
        task1ImageUrl: test.task1ImageUrl,
        task2Prompt: test.task2Prompt,
      },
      create: {
        id: test.id,
        title: test.title,
        difficulty: test.difficulty,
        task1Prompt: test.task1Prompt,
        task1ImageUrl: test.task1ImageUrl,
        task2Prompt: test.task2Prompt,
      },
    });
    console.log(`Seeded Writing Test: ${test.id}`);
  }

  console.log('Writing topics seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
