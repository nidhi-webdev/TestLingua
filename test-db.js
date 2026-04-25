const { PrismaClient } = require('./src/generated/prisma/client');
const prisma = new PrismaClient();
async function main() {
  const tests = await prisma.readingTest.findMany({ include: { questions: true } });
  console.log("Reading Tests in DB:", tests.length);
  console.log("Total Questions in DB:", tests[0]?.questions.length);
}
main().catch(console.error).finally(() => prisma.$disconnect());
