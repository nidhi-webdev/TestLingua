import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🚀 Seeding ALL Section 2 Reading Tests...");

  const section2Tests = [
    {
      id: "1-2",
      title: "Multiple Choice: The Future of Renewable Energy",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Future of Renewable Energy</h2>
        <p>The global transition towards renewable energy sources is no longer a matter of if, but when. As the environmental costs of fossil fuels become increasingly undeniable, governments and industries are pouring billions into solar, wind, and hydroelectric power. However, the path to a carbon-neutral future is fraught with technical and economic hurdles. The primary challenge remains the intermittent nature of renewable sources; the sun does not always shine, and the wind does not always blow.</p>
        <p>To address this, researchers are focusing on advanced energy storage systems. Lithium-ion batteries currently dominate the market, but their reliance on scarce materials like cobalt and lithium raises sustainability concerns. Alternatives such as solid-state batteries and hydrogen fuel cells are being aggressively pursued, though they are not yet commercially viable at scale. Furthermore, the existing electrical grid, designed for centralized power plants, must be modernized to handle the decentralized influx of green energy.</p>
      `,
      questions: [
        {
          id: "s2-mc-q1",
          type: "multiple_choice",
          order: 1,
          text: "What is cited as the main obstacle to a carbon-neutral future?",
          options: ["A. The high cost of solar panels.", "B. The environmental impact of hydroelectric dams.", "C. The unreliable nature of renewable energy sources.", "D. A lack of government investment."],
          answer: ["C"]
        },
        {
          id: "s2-mc-q2",
          type: "multiple_choice",
          order: 2,
          text: "Which TWO alternatives to lithium-ion batteries are mentioned?",
          options: ["A. Lead-acid batteries.", "B. Solid-state batteries.", "C. Nickel-cadmium batteries.", "D. Hydrogen fuel cells.", "E. Kinetic energy storage."],
          answer: ["B", "D"]
        }
      ]
    },
    {
      id: "identifying-information-2",
      title: "Identifying Information: Urban Planning and Biodiversity",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Urban Planning and Biodiversity</h2>
        <p>Modern cities are often seen as concrete jungles, devoid of life. However, innovative urban planning is proving that biodiversity can thrive alongside human development. The concept of 'green corridors'—continuous strips of vegetation connecting isolated parks—allows wildlife to move safely through urban areas. This not only protects native species but also improves the quality of life for residents by reducing the 'urban heat island' effect and providing recreational spaces.</p>
      `,
      questions: [
        {
          id: "s2-ii-q1",
          type: "true_false_not_given",
          order: 1,
          text: "Green corridors help reduce the temperature in urban areas.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-ii-q2",
          type: "true_false_not_given",
          order: 2,
          text: "Most cities have successfully eliminated the 'urban heat island' effect.",
          options: [],
          answer: ["False"]
        }
      ]
    },
    {
      id: "identifying-writers-views-2",
      title: "Identifying Writer's Views: The Ethics of Artificial Intelligence",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Ethics of Artificial Intelligence</h2>
        <p>Artificial Intelligence (AI) is transforming every facet of our lives, from healthcare to finance. While the potential benefits are enormous, I believe we are moving too fast without adequate safeguards. AI algorithms are only as good as the data they are trained on, and if that data contains human biases, the AI will inevitably replicate and even amplify them. We need a global consensus on AI governance that prioritizes transparency and accountability above corporate profits.</p>
      `,
      questions: [
        {
          id: "s2-iw-q1",
          type: "yes_no_not_given",
          order: 1,
          text: "The writer is concerned about the speed at which AI is being developed.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-iw-q2",
          type: "yes_no_not_given",
          order: 2,
          text: "AI systems are inherently more objective than humans.",
          options: [],
          answer: ["No"]
        }
      ]
    },
    {
      id: "matching-information-2",
      title: "Matching Information: The Science of Sleep",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Science of Sleep</h2>
        <p><strong>Paragraph A:</strong> Sleep is a vital biological process that remains partially shrouded in mystery. While we sleep, our bodies repair tissues, consolidate memories, and flush out metabolic waste from the brain. Chronic sleep deprivation has been linked to a host of health issues, including obesity and heart disease.</p>
        <p><strong>Paragraph B:</strong> Recent studies have highlighted the role of circadian rhythms—the internal clock that regulates our sleep-wake cycle. Exposure to blue light from screens can disrupt this rhythm, making it harder to fall asleep.</p>
      `,
      questions: [
        {
          id: "s2-mi-q1",
          type: "matching_information",
          order: 1,
          text: "Which paragraph mentions the physical consequences of not getting enough sleep?",
          options: ["A", "B"],
          answer: ["A"]
        }
      ]
    },
    {
      id: "matching-headings-2",
      title: "Matching Headings: The Future of Transportation",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Future of Transportation</h2>
        <p><strong>Section A:</strong> Electric vehicles (EVs) are quickly becoming the standard for personal transportation. With lower operating costs and zero tailpipe emissions, they offer a clear advantage over internal combustion engines.</p>
        <p><strong>Section B:</strong> Autonomous driving technology promises to revolutionize how we move. By removing human error, self-driving cars could dramatically reduce accidents and optimize traffic flow.</p>
      `,
      questions: [
        {
          id: "s2-mh-q1",
          type: "matching_headings",
          order: 1,
          text: "Section A",
          options: ["i. The rise of self-driving tech", "ii. The transition to electric power", "iii. The history of the wheel"],
          answer: ["ii"]
        }
      ]
    },
    {
      id: "matching-features-2",
      title: "Matching Features: Pioneers of Modern Medicine",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Pioneers of Modern Medicine</h2>
        <p>Louis Pasteur developed the germ theory of disease, while Alexander Fleming discovered the first antibiotic, penicillin. Later, Jonas Salk developed the first successful polio vaccine, saving millions from paralysis.</p>
      `,
      questions: [
        {
          id: "s2-mf-q1",
          type: "matching_features",
          order: 1,
          text: "Who was responsible for the discovery of penicillin?",
          options: ["A. Louis Pasteur", "B. Alexander Fleming", "C. Jonas Salk"],
          answer: ["B"]
        }
      ]
    },
    {
      id: "matching-sentence-endings-2",
      title: "Matching Sentence Endings: The Architecture of the Reef",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Architecture of the Reef</h2>
        <p>Coral reefs are complex biological structures built by tiny organisms called polyps. These polyps secrete calcium carbonate to build a hard skeleton, which over thousands of years forms the massive reefs we see today.</p>
      `,
      questions: [
        {
          id: "s2-mse-q1",
          type: "matching_sentence_endings",
          order: 1,
          text: "Coral polyps create hard skeletons by...",
          options: ["A. ...absorbing nutrients from the water.", "B. ...secreting calcium carbonate.", "C. ...borrowing shells from other animals."],
          answer: ["B"]
        }
      ]
    },
    {
      id: "sentence-completion-2",
      title: "Sentence Completion: The Evolution of Language",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Evolution of Language</h2>
        <p>Language is a dynamic entity that evolves over time. Linguists believe that most modern European languages share a common ancestor known as Proto-Indo-European. This ancient language split into various branches as populations migrated and became isolated.</p>
      `,
      questions: [
        {
          id: "s2-sc-q1",
          type: "sentence_completion",
          order: 1,
          text: "Most European languages are thought to have originated from a common ancestor called ______.",
          options: [],
          answer: ["Proto-Indo-European"]
        }
      ]
    },
    {
      id: "flowchart-completion-2",
      title: "Flow-chart Completion: Water Purification Process",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Water Purification Process</h2>
        <p>The purification of water involves several stages. First, large debris is removed through a screen. Then, chemicals are added to clump smaller particles together in a process called flocculation. Finally, the water is filtered through sand and disinfected with chlorine.</p>
      `,
      questions: [
        {
          id: "s2-fc-q1",
          type: "flowchart_completion",
          order: 1,
          text: "Step 1: Removal of debris -> Step 2: ______ -> Step 3: Filtration",
          options: [],
          answer: ["Flocculation"]
        }
      ]
    },
    {
      id: "diagram-completion-2",
      title: "Diagram Completion: Anatomy of a Volcano",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Anatomy of a Volcano</h2>
        <p>A volcano consists of several key parts. At the base is the magma chamber, which connects to the surface through a main vent. When an eruption occurs, lava and ash are expelled through the crater at the top.</p>
      `,
      questions: [
        {
          id: "s2-dc-q1",
          type: "diagram_completion",
          order: 1,
          text: "Label #1: The opening at the top of the volcano.",
          options: [],
          answer: ["Crater"]
        }
      ]
    },
    {
      id: "short-answer-2",
      title: "Short-Answer Questions: The Great Barrier Reef",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Great Barrier Reef</h2>
        <p>The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers along the coast of Australia. It is home to thousands of species of fish, mollusks, and sea turtles.</p>
      `,
      questions: [
        {
          id: "s2-sa-q1",
          type: "short_answer",
          order: 1,
          text: "What is the approximate length of the Great Barrier Reef in kilometers?",
          options: [],
          answer: ["2,300"]
        }
      ]
    }
  ];

  for (const testData of section2Tests) {
    const { questions, ...testInfo } = testData;
    
    // Delete existing if already seeded
    await prisma.readingTest.deleteMany({ where: { id: testInfo.id } });

    const test = await prisma.readingTest.create({
      data: {
        ...testInfo,
        questions: {
          create: questions,
        },
      },
    });

    console.log(`✅ Seeded: ${test.title} (ID: ${test.id})`);
  }

  console.log("\n🎉 All Section 2 tests have been seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
