import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Matching Headings Test...');

  const testId = "matching-headings-3";

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
      title: "Matching Headings: The Architecture of Memory",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Psychological Architecture of Memory</h2>
        <p><b>Paragraph A</b>. Memory is not a single, monolithic entity, but a complex, multi-layered system that allows us to record, store, and later access information about the world. At its most basic level, memory can be divided into three distinct phases: encoding, storage, and retrieval. Encoding is the process of converting sensory input into a form that the brain can process. Storage involves the retention of that information over time, and retrieval is the process of bringing that stored information back into conscious awareness. Understanding how these stages interact is fundamental to the study of cognitive psychology.</p>
        <p><b>Paragraph B</b>. The first stage, encoding, is far from a passive recording process. It is highly selective and influenced by a variety of factors, including attention, motivation, and emotional state. We do not remember everything we see or hear; instead, our brains filter out the vast majority of sensory data, focusing only on what is perceived as relevant or significant. Information that is processed deeply—for example, by relating it to existing knowledge—is much more likely to be successfully encoded than information that is processed only superficially. This is known as the 'levels of processing' effect.</p>
        <p><b>Paragraph C</b>. Once information is encoded, it must be stored. The most influential model of memory storage is the multi-store model, which suggests that memory consists of three separate components: sensory memory, short-term memory (STM), and long-term memory (LTM). Sensory memory holds a brief, fleeting impression of sensory information, lasting only a fraction of a second. STM, often referred to as 'working memory,' has a limited capacity and can hold roughly seven items for about 20 to 30 seconds. LTM, by contrast, has a virtually unlimited capacity and can store information for years or even a lifetime.</p>
        <p><b>Paragraph D</b>. Long-term memory is itself subdivided into different types. Explicit (or declarative) memory involves the conscious recollection of facts and events. This includes episodic memory, which refers to personal experiences (like your first day of school), and semantic memory, which refers to general knowledge (like the capital of France). Implicit (or non-declarative) memory, on the other hand, involves skills and habits that we perform without conscious thought, such as riding a bike or typing on a keyboard. These different systems rely on distinct regions of the brain.</p>
        <p><b>Paragraph E</b>. The final stage, retrieval, is perhaps the most mysterious and fallible part of the memory system. We often think of retrieval as a process of 'playing back' a recorded event, but research has shown that memory is actually reconstructive. When we remember something, we are not accessing a pristine file; instead, we are piecing together fragments of information that may be influenced by our current beliefs, expectations, and even the way a question is phrased. This is why eye-witness testimony can be notoriously unreliable.</p>
        <p><b>Paragraph F</b>. Forgetting is another essential aspect of the memory architecture. While often seen as a failure, the ability to forget irrelevant or outdated information is crucial for cognitive efficiency. There are several theories as to why we forget, including decay theory (information fades over time), interference theory (new information blocks old information), and retrieval failure (the information is there, but we lack the 'cue' to access it). Understanding the mechanisms of forgetting is just as important as understanding the mechanisms of remembering.</p>
        <p><b>Paragraph G</b>. As we move further into the digital age, the way we use our memory is changing. With the world's information available at our fingertips, some researchers suggest that we are experiencing 'digital amnesia'—a tendency to forget information that we know can be easily found online. Instead of remembering the information itself, we are becoming better at remembering *where* to find it. Whether this shift represents a decline in cognitive ability or a necessary adaptation to an information-saturated world remains a subject of intense academic debate.</p>
      `,
      questions: {
        create: [
          {
            id: "s3-mh-q1",
            type: "matching_headings",
            order: 1,
            text: "Paragraph A",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["iv"]
          },
          {
            id: "s3-mh-q2",
            type: "matching_headings",
            order: 2,
            text: "Paragraph B",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["vi"]
          },
          {
            id: "s3-mh-q3",
            type: "matching_headings",
            order: 3,
            text: "Paragraph C",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["i"]
          },
          {
            id: "s3-mh-q4",
            type: "matching_headings",
            order: 4,
            text: "Paragraph D",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["v"]
          },
          {
            id: "s3-mh-q5",
            type: "matching_headings",
            order: 5,
            text: "Paragraph E",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["ii"]
          },
          {
            id: "s3-mh-q6",
            type: "matching_headings",
            order: 6,
            text: "Paragraph F",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["vii"]
          },
          {
            id: "s3-mh-q7",
            type: "matching_headings",
            order: 7,
            text: "Paragraph G",
            options: [
              "i. The multi-store model of storage",
              "ii. The fallibility of the retrieval process",
              "iii. Memory in the digital era",
              "iv. The three core phases of the memory system",
              "v. Different categories of long-term retention",
              "vi. The selective nature of initial processing",
              "vii. Why we lose information",
              "viii. The physical location of memories"
            ],
            answer: ["iii"]
          },
          // Questions 8-14 are additional multiple-choice check questions to fill the 14-question set
          {
            id: "s3-mh-q8",
            type: "multiple_choice",
            order: 8,
            text: "What does 'encoding' involve?",
            options: [
              "A. Recalling past events accurately.",
              "B. Converting sensory data into a brain-friendly form.",
              "C. Storing information for a lifetime.",
              "D. Reconstructing fragments of knowledge."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mh-q9",
            type: "multiple_choice",
            order: 9,
            text: "Short-term memory is often called:",
            options: [
              "A. Sensory memory.",
              "B. Working memory.",
              "C. Declarative memory.",
              "D. Implicit memory."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mh-q10",
            type: "multiple_choice",
            order: 10,
            text: "Which type of memory helps you ride a bicycle?",
            options: [
              "A. Episodic memory.",
              "B. Semantic memory.",
              "C. Implicit memory.",
              "D. Explicit memory."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mh-q11",
            type: "multiple_choice",
            order: 11,
            text: "The 'reconstructive' nature of memory means that:",
            options: [
              "A. We always remember events exactly as they happened.",
              "B. Memories are like pristine digital files.",
              "C. We piece together fragments influenced by current beliefs.",
              "D. Retrieval is the most reliable part of the system."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mh-q12",
            type: "multiple_choice",
            order: 12,
            text: "Which theory of forgetting suggests new info blocks old info?",
            options: [
              "A. Decay theory.",
              "B. Interference theory.",
              "C. Retrieval failure.",
              "D. Reconstructive theory."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mh-q13",
            type: "multiple_choice",
            order: 13,
            text: "'Digital amnesia' is the tendency to:",
            options: [
              "A. Forget how to use computers.",
              "B. Forget info that is easily found online.",
              "C. Over-remember historical facts.",
              "D. Use ROVs for genetic research."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mh-q14",
            type: "multiple_choice",
            order: 14,
            text: "The writer's tone regarding digital adaptation is:",
            options: [
              "A. Heavily critical.",
              "B. Entirely celebratory.",
              "C. Neutrally debating.",
              "D. Sarcastically dismissive."
            ],
            answer: ["C"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Matching Headings seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
