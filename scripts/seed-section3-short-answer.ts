import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Short-answer Test...');

  const testId = "short-answer-3";

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
      title: "Short-answer Questions: Bilingualism and Cognition",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Cognitive Science of Language Acquisition in Bilingual Children</h2>
        <p>The study of bilingualism has undergone a paradigm shift over the last fifty years. In the early 20th century, many educators and psychologists believed that exposing children to two languages from birth would lead to 'cognitive confusion,' potentially hindering their academic development. However, modern research in neurobiology and developmental psychology has debunked these fears, revealing that the bilingual brain is not just different, but in many ways, more cognitively flexible. Understanding the mechanisms of language acquisition in children who grow up with 'two first languages' provides vital insights into the plasticity of the human mind.</p>
        <p>One of the most significant findings is the enhancement of 'executive function' in bilingual children. Executive function refers to a set of cognitive processes—including inhibitory control, working memory, and cognitive flexibility—that allow us to manage our thoughts and actions. Because bilinguals must constantly 'switch' between two language systems, their brains are in a state of perpetual linguistic exercise. This constant need to suppress one language while using the other strengthens the prefrontal cortex, the area of the brain responsible for higher-level decision-making. As a result, bilingual children often outperform their monolingual peers on tasks that require attention and problem-solving, even when those tasks have nothing to do with language.</p>
        <p>Furthermore, research has shown that bilingualism can delay the onset of age-related cognitive decline. A landmark study conducted at the University of Kentucky found that bilingual seniors had significantly more efficient brain activity when switching between tasks compared to monolinguals of the same age. This 'cognitive reserve'—the brain's ability to improvise and find alternate ways of getting a job done—is built up through years of managing two linguistic systems. While bilingualism does not prevent diseases like Alzheimer's, it appears to help the brain function better for longer despite the presence of physical pathology.</p>
        <p>Despite these clear advantages, the path to bilingualism is not without its challenges. Bilingual children often go through a 'silent period' where they listen more than they speak as they map the structures of both languages. They may also engage in 'code-switching,' where they blend words from both languages in a single sentence. While some parents worry that this is a sign of confusion, linguists argue that it is actually a sign of linguistic sophistication, as children utilize all their available resources to communicate. Ultimately, the successful development of a bilingual child depends heavily on the 'prestige' of the languages involved and the level of support provided by the home and school environments.</p>
      `,
      questions: {
        create: [
          // Questions 1-14: Short-answer
          {
            id: "s3-sa-q1",
            type: "short_answer",
            order: 1,
            text: "What was the common 20th-century fear regarding teaching children two languages?",
            options: [],
            answer: ["cognitive confusion"]
          },
          {
            id: "s3-sa-q2",
            type: "short_answer",
            order: 2,
            text: "What specific type of brain flexibility does modern research reveal in bilinguals?",
            options: [],
            answer: ["cognitively flexible"]
          },
          {
            id: "s3-sa-q3",
            type: "short_answer",
            order: 3,
            text: "Which cognitive processes are collectively known as 'executive function'?",
            options: [],
            answer: ["inhibitory control", "working memory", "cognitive flexibility"]
          },
          {
            id: "s3-sa-q4",
            type: "short_answer",
            order: 4,
            text: "What must bilinguals constantly do between their two language systems?",
            options: [],
            answer: ["switch"]
          },
          {
            id: "s3-sa-q5",
            type: "short_answer",
            order: 5,
            text: "Which part of the brain is strengthened by suppressing one language?",
            options: ["A. Prefrontal cortex"],
            answer: ["prefrontal cortex"]
          },
          {
            id: "s3-sa-q6",
            type: "short_answer",
            order: 6,
            text: "In what non-linguistic tasks do bilingual children often excel?",
            options: [],
            answer: ["attention", "problem-solving"]
          },
          {
            id: "s3-sa-q7",
            type: "short_answer",
            order: 7,
            text: "Bilingualism is found to delay the onset of what specific medical condition?",
            options: [],
            answer: ["cognitive decline"]
          },
          {
            id: "s3-sa-q8",
            type: "short_answer",
            order: 8,
            text: "Where was the landmark study on bilingual seniors conducted?",
            options: [],
            answer: ["University of Kentucky"]
          },
          {
            id: "s3-sa-q9",
            type: "short_answer",
            order: 9,
            text: "What term describes the brain's ability to find alternate ways to complete tasks?",
            options: [],
            answer: ["cognitive reserve"]
          },
          {
            id: "s3-sa-q10",
            type: "short_answer",
            order: 10,
            text: "Bilingualism helps the brain function despite the presence of what?",
            options: [],
            answer: ["physical pathology"]
          },
          {
            id: "s3-sa-q11",
            type: "short_answer",
            order: 11,
            text: "What do children do during the 'silent period' of language acquisition?",
            options: [],
            answer: ["listen"]
          },
          {
            id: "s3-sa-q12",
            type: "short_answer",
            order: 12,
            text: "What is the blending of two languages in one sentence called?",
            options: [],
            answer: ["code-switching"]
          },
          {
            id: "s3-sa-q13",
            type: "short_answer",
            order: 13,
            text: "What do linguists consider code-switching to be a sign of?",
            options: [],
            answer: ["linguistic sophistication"]
          },
          {
            id: "s3-sa-q14",
            type: "short_answer",
            order: 14,
            text: "What environmental factor regarding a language affects a child's success?",
            options: [],
            answer: ["prestige"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Short-answer seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
