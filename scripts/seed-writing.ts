import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding IELTS Writing Tests...');

  const tests = [
    {
      id: "writing-test-1",
      title: "Academic Writing Practice Test 1",
      difficulty: "Medium",
      task1Prompt: `The diagram below shows how a hydrogen fuel cell works. 

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
      task1ImageUrl: "/fuel_cell_diagram.png", // Using the existing diagram
      task2Prompt: `Some people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighborhood or teaching sports to younger children).

To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
    },
    {
      id: "writing-test-2",
      title: "Academic Writing Practice Test 2",
      difficulty: "Hard",
      task1Prompt: `The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
      task1ImageUrl: null, // Placeholder for a future chart image
      task2Prompt: `In many countries, the proportion of older people is steadily increasing.

Does this trend have more positive or negative effects on society?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`
    }
  ];

  for (const test of tests) {
    // Delete existing to prevent duplicates during multiple seeds
    await prisma.writingSubmission.deleteMany({ where: { writingTestId: test.id } });
    await prisma.writingTest.deleteMany({ where: { id: test.id } });

    await prisma.writingTest.create({
      data: test
    });
    console.log(`✅ Seeded: ${test.title}`);
  }

  console.log('🎉 Writing Tests seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
