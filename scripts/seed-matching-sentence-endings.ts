import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Matching Sentence Endings test...");

  const passage = `
<h2>The Architecture of the Great Barrier Reef</h2>

<p>The Great Barrier Reef, stretching over 2,300 kilometres along the coast of Queensland, Australia, is the largest living structure on Earth. While it is often described as a single entity, it is actually composed of over 2,900 individual reefs and 900 islands. This vast biological masterpiece was built over thousands of years by tiny organisms known as coral polyps. These polyps secrete calcium carbonate to create a hard skeleton, which over generations forms the massive limestone foundations of the reef.</p>

<p>The survival of the reef is dependent on a delicate symbiotic relationship between coral polyps and microscopic algae called zooxanthellae. These algae live inside the tissues of the coral and provide them with up to 90% of their energy through photosynthesis. In return, the coral provides the algae with a protected environment and the compounds they need for photosynthesis. This relationship is highly sensitive to changes in water temperature; even a slight increase can cause the coral to expel the algae, leading to a phenomenon known as coral bleaching.</p>

<p>Biodiversity is the hallmark of the Great Barrier Reef. It is home to thousands of species of fish, molluscs, and birds, as well as several species of sea turtles and marine mammals. The complex three-dimensional structure of the reef provides a variety of habitats, from shallow lagoons to deep-water gardens. This structural complexity is vital because it offers protection from predators and serves as a nursery for many juvenile marine species. Without the physical shelter provided by the coral skeletons, the current level of biodiversity would be impossible to sustain.</p>

<p>Climate change remains the most significant long-term threat to the reef's health. Rising ocean temperatures lead to more frequent and severe bleaching events, while increased carbon dioxide levels in the atmosphere cause ocean acidification. Acidification is particularly dangerous because it reduces the availability of the carbonate ions that coral polyps need to build their skeletons. If the rate of skeletal formation falls below the rate of natural erosion, the reef's structure will begin to dissolve. Protective measures, including improved water quality management and the reduction of local stressors, are essential but must be coupled with global efforts to reduce greenhouse gas emissions.</p>

<p>Tourism plays a dual role in the reef's story. On one hand, it provides billions of dollars to the Australian economy and raises global awareness about the importance of marine conservation. On the other hand, heavy tourist activity can cause physical damage to fragile coral structures and increase pollution in sensitive areas. Modern reef management focuses on sustainable tourism practices, ensuring that visitors can appreciate the reef's beauty without compromising its ecological integrity for future generations.</p>
`;

  const endings = [
    "A. results in the loss of essential energy-providing algae.",
    "B. depends on the accumulation of skeletal remains over long periods.",
    "C. is threatened by the decreasing availability of necessary minerals.",
    "D. provides a diverse range of environments for marine life.",
    "E. can both support and potentially harm the reef's ecosystem.",
    "F. are responsible for the primary construction of the limestone base.",
    "G. leads to a decrease in the overall size of the individual reefs.",
    "H. are vital for the protection of young sea creatures.",
    "I. is primarily found in the deeper sections of the coral gardens."
  ];

  const questions = [
    {
      id: "mse-q1",
      type: "matching_sentence_endings",
      order: 1,
      text: "The massive foundations of the Great Barrier Reef",
      options: endings,
      answer: ["B"],
    },
    {
      id: "mse-q2",
      type: "matching_sentence_endings",
      order: 2,
      text: "The tiny organisms known as coral polyps",
      options: endings,
      answer: ["F"],
    },
    {
      id: "mse-q3",
      type: "matching_sentence_endings",
      order: 3,
      text: "A slight rise in the temperature of the surrounding water",
      options: endings,
      answer: ["A"],
    },
    {
      id: "mse-q4",
      type: "matching_sentence_endings",
      order: 4,
      text: "The intricate physical structure of the coral reef",
      options: endings,
      answer: ["D"],
    },
    {
      id: "mse-q5",
      type: "matching_sentence_endings",
      order: 5,
      text: "The varied habitats within the reef system",
      options: endings,
      answer: ["H"],
    },
    {
      id: "mse-q6",
      type: "matching_sentence_endings",
      order: 6,
      text: "The process of acidification in the world's oceans",
      options: endings,
      answer: ["C"],
    },
    {
      id: "mse-q7",
      type: "matching_sentence_endings",
      order: 7,
      text: "The presence of international visitors on the reef",
      options: endings,
      answer: ["E"],
    }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "matching-sentence-endings-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "matching-sentence-endings-1",
      title: "Matching Sentence Endings: The Architecture of the Reef",
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
