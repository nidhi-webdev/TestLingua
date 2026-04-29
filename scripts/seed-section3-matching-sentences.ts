import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Matching Sentence Endings Test...');

  const testId = "matching-sentences-3";

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
      title: "Matching Sentence Endings: The Evolution of Ethnomusicology",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Evolution of Ethnomusicology</h2>
        <p>Ethnomusicology, the study of music in its social and cultural contexts, has undergone a radical transformation since its inception in the late 19th century. Originally termed 'comparative musicology,' the field was initially preoccupied with documenting 'primitive' musical systems that were believed to be vanishing under the weight of Western industrialization. Early researchers, often armed with primitive wax-cylinder recorders, sought to capture the exotic sounds of distant lands, viewing them as historical artifacts rather than living, evolving traditions. This early phase was characterized by a Eurocentric perspective that often prioritized technical transcription over cultural understanding.</p>
        <p>The mid-20th century marked a significant turning point, led by scholars like Alan Merriam, who argued that music is not just an object to be analyzed but a behavior to be understood. Merriam's influential book, <i>The Anthropology of Music</i>, redefined the discipline by insisting that researchers must immerse themselves in the communities they study. This shift toward ethnography—the systematic study of people and cultures—allowed ethnomusicologists to explore the complex relationship between musical structures and social organization. It became clear that music serves as a vital repository of cultural memory, a tool for social cohesion, and a medium for expressing political resistance.</p>
        <p>In the contemporary era, ethnomusicology has expanded its scope to include the study of globalized popular music, digital soundscapes, and the impact of migration on musical identity. The traditional distinction between 'folk' and 'art' music has largely dissolved, as researchers recognize the fluid boundaries of musical expression in a hyper-connected world. Furthermore, the field has become increasingly focused on 'applied ethnomusicology,' where research is used to solve real-world problems, such as preserving endangered languages or fostering cross-cultural dialogue in conflict zones. This practical turn reflects a growing awareness of the power of music to effect social change.</p>
        <p>As we look to the future, the discipline faces new challenges posed by the digital revolution. While digital technology has made it easier than ever to record and share music, it has also led to concerns about the 'homogenization' of global sound. As Western pop music reaches every corner of the globe, many fear that unique local traditions will be erased. However, ethnomusicologists are also finding that technology can be a powerful tool for cultural revitalization. Online archives and social media platforms are being used by indigenous communities to reclaim their musical heritage and share it with the world on their own terms. Ultimately, the story of ethnomusicology is the story of our ongoing attempt to understand the infinite variety of the human spirit as expressed through sound.</p>
      `,
      questions: {
        create: [
          // Questions 1-7: Matching Sentence Endings
          {
            id: "s3-ms-q1",
            type: "matching_sentence_endings",
            order: 1,
            text: "Early comparative musicologists primarily focused on",
            options: [
              "A. documenting musical systems they feared would disappear.",
              "B. proving the superiority of Western industrial sounds.",
              "C. developing the first digital soundscapes for research.",
              "D. reclaiming musical heritage via social media.",
              "E. understanding music as a form of human behavior.",
              "F. analyzing how migration affects modern pop music.",
              "G. fostering dialogue within modern conflict zones."
            ],
            answer: ["A"]
          },
          {
            id: "s3-ms-q2",
            type: "matching_sentence_endings",
            order: 2,
            text: "The first researchers in the field often treated music as",
            options: [
              "A. documenting musical systems they feared would disappear.",
              "B. a set of historical artifacts rather than a living tradition.",
              "C. a behavior to be understood within a community.",
              "D. a tool for expressing political resistance.",
              "E. a medium for digital homogenization.",
              "F. a primary cause of social alienation."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q3",
            type: "matching_sentence_endings",
            order: 3,
            text: "Alan Merriam argued that researchers needed to",
            options: [
              "A. focus solely on the technical transcription of songs.",
              "B. avoid using wax-cylinder recorders in the field.",
              "C. live within and experience the cultures they were studying.",
              "D. replace folk music with more complex art music.",
              "E. ignore the relationship between music and social organization."
            ],
            answer: ["C"]
          },
          {
            id: "s3-ms-q4",
            type: "matching_sentence_endings",
            order: 4,
            text: "The study of ethnography allowed scholars to see music as",
            options: [
              "A. a simple byproduct of industrialization.",
              "B. a way to organize social and cultural structures.",
              "C. a barrier to real cultural revitalization.",
              "D. a source of Eurocentric pride and technical mastery."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q5",
            type: "matching_sentence_endings",
            order: 5,
            text: "Contemporary ethnomusicology has moved beyond",
            options: [
              "A. the study of globalized popular soundscapes.",
              "B. the rigid separation of 'folk' and 'art' musical styles.",
              "C. the use of digital technology in field research.",
              "D. the need for cultural revitalization programs."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q6",
            type: "matching_sentence_endings",
            order: 6,
            text: "Applied ethnomusicology is increasingly used to",
            options: [
              "A. speed up the process of global homogenization.",
              "B. address practical issues like language preservation.",
              "C. prevent indigenous communities from using social media.",
              "D. focus exclusively on Western pop music trends."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q7",
            type: "matching_sentence_endings",
            order: 7,
            text: "Some experts worry that the digital revolution might",
            options: [
              "A. make it harder to record and share music globally.",
              "B. lead to the loss of unique local musical traditions.",
              "C. stop the evolution of Western industrialization.",
              "D. eliminate the need for ethnographic studies entirely."
            ],
            answer: ["B"]
          },
          // Questions 8-14: Multiple Choice (Standard)
          {
            id: "s3-ms-q8",
            type: "multiple_choice",
            order: 8,
            text: "What was ethnomusicology called when it first began?",
            options: [
              "A. Applied Ethnomusicology.",
              "B. Comparative Musicology.",
              "C. Anthropology of Sound.",
              "D. Digital Soundscapes."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q9",
            type: "multiple_choice",
            order: 9,
            text: "Which device was used by early researchers to record music?",
            options: [
              "A. Digital MP3 recorders.",
              "B. Wax-cylinder recorders.",
              "C. Magnetic tape machines.",
              "D. Satellite imaging tools."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q10",
            type: "multiple_choice",
            order: 10,
            text: "Who wrote the influential book 'The Anthropology of Music'?",
            options: [
              "A. Thomas Paine.",
              "B. Alan Merriam.",
              "C. Martin Luther King Jr.",
              "D. Milton Friedman."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q11",
            type: "multiple_choice",
            order: 11,
            text: "The term 'homogenization' in the final paragraph refers to:",
            options: [
              "A. The preservation of local sounds.",
              "B. The world's music becoming more similar.",
              "C. The use of ROVs in deep-sea research.",
              "D. The increase in musical diversity."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q12",
            type: "multiple_choice",
            order: 12,
            text: "How are indigenous communities using social media according to the text?",
            options: [
              "A. To hide their heritage from the world.",
              "B. To reclaim and share their musical traditions.",
              "C. To promote Western pop music exclusively.",
              "D. To replace the need for online archives."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q13",
            type: "multiple_choice",
            order: 13,
            text: "The writer concludes that ethnomusicology is primarily about:",
            options: [
              "A. Developing better recording hardware.",
              "B. Understanding the variety of the human spirit.",
              "C. Proving that Western music is superior.",
              "D. Eliminating the study of ancient artifacts."
            ],
            answer: ["B"]
          },
          {
            id: "s3-ms-q14",
            type: "multiple_choice",
            order: 14,
            text: "The practical turn in ethnomusicology shows an awareness of:",
            options: [
              "A. Music's ability to create social change.",
              "B. The high cost of wax cylinders.",
              "C. The failure of ethnographic research.",
              "D. The irrelevance of endangered languages."
            ],
            answer: ["A"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Matching Sentence Endings seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
