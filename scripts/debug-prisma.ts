import { prisma } from "../src/lib/prisma";

async function main() {
  const question = await prisma.readingQuestion.findFirst();
  console.log("Question ID:", question?.id);
  console.log("Answer Type:", typeof question?.answer);
  console.log("Answer Value:", question?.answer);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
