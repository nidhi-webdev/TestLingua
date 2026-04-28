import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🚀 Seeding ALL Section 2 Reading Tests...");

  const section2Tests = [
    {
      id: "1-2",
      title: "Multiple Choice: The Psychology of Workplace Productivity",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Evolution of the Productive Workspace</h2>
        <p>In the early 20th century, workplace design was dominated by the principles of Taylorism, a theory of management that analyzed and synthesized workflows. Its main objective was improving economic efficiency, especially labor productivity. Office spaces were modeled after factories: rows of identical desks facing a supervisor’s station, intended to maximize output through constant oversight. However, as the global economy shifted towards service and knowledge-based work, the rigid, clinical atmosphere of the traditional office began to be viewed as a hindrance rather than a help.</p>
        <p>Modern psychological research suggests that productivity is not merely a product of discipline, but is deeply influenced by the physical and social environment. One significant discovery is the 'Edge Effect,' a concept borrowed from ecology. Just as biodiversity is highest at the transition between two habitats, innovation in an office often peaks in 'collision zones'—shared spaces like cafeterias or lounges where employees from different departments interact spontaneously. Architects are now designing offices with deliberately non-linear paths to encourage these chance encounters, moving away from the isolated cubicles of the 1980s.</p>
        <p>Furthermore, the introduction of biophilic design—incorporating natural elements like sunlight, plants, and water—has shown a measurable impact on cognitive function. A study by the University of Exeter found that employees worked 15% more effectively when 'lean' workspaces were filled with just a few houseplants. The presence of greenery was found to lower heart rates and improve concentration. This challenges the long-held belief that a minimalist, distraction-free environment is the gold standard for focus.</p>
        <p>However, the trend toward 'open-plan' offices has not been without its critics. While intended to foster collaboration, many workers report that the lack of acoustic privacy leads to increased stress and a significant drop in deep-work capabilities. The challenge for future designers lies in creating 'hybrid' spaces: environments that offer the social stimulation of communal areas alongside 'monastic' zones for undisturbed, intensive tasks. As the workforce becomes more neurologically diverse, the ability to customize one’s immediate surroundings may become the most valued feature of the modern workplace.</p>
      `,
      questions: [
        {
          id: "s2-mc-q1",
          type: "multiple_choice",
          order: 1,
          text: "What was the primary goal of office design under Taylorism?",
          options: [
            "A. To create a comfortable social environment for workers.",
            "B. To ensure managers could observe every employee easily.",
            "C. To allow for the flexible movement of office furniture.",
            "D. To provide a variety of spaces for different tasks."
          ],
          answer: ["B"]
        },
        {
          id: "s2-mc-q2",
          type: "multiple_choice",
          order: 2,
          text: "What does the writer imply about the transition to knowledge-based work?",
          options: [
            "A. It made traditional management theories more relevant.",
            "B. It required a move away from factory-style office layouts.",
            "C. It resulted in a decrease in overall economic efficiency.",
            "D. It led to more supervision of individual employees."
          ],
          answer: ["B"]
        },
        {
          id: "s2-mc-q3",
          type: "multiple_choice",
          order: 3,
          text: "Modern psychological research indicates that performance is primarily driven by:",
          options: [
            "A. Strict adherence to workplace discipline.",
            "B. The salary and benefits provided to staff.",
            "C. The surrounding environment and social factors.",
            "D. The number of hours spent at a desk."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q4",
          type: "multiple_choice",
          order: 4,
          text: "According to the 'Edge Effect' theory, where does innovation most frequently occur?",
          options: [
            "A. In highly specialized departmental rooms.",
            "B. At the transition points between different habitats.",
            "C. Within the quietest areas of the building.",
            "D. In spaces where different groups of workers meet."
          ],
          answer: ["D"]
        },
        {
          id: "s2-mc-q5",
          type: "multiple_choice",
          order: 5,
          text: "Why are modern architects creating 'non-linear' paths in offices?",
          options: [
            "A. To make the office appear larger than it is.",
            "B. To increase the time it takes to reach a desk.",
            "C. To promote accidental interactions among staff.",
            "D. To save space for more specialized equipment."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q6",
          type: "multiple_choice",
          order: 6,
          text: "What change occurred in office design following the 1980s?",
          options: [
            "A. The introduction of more isolated cubicles.",
            "B. A reduction in the use of shared cafeteria spaces.",
            "C. A movement away from individual, enclosed workspaces.",
            "D. The standardization of linear walking paths."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q7",
          type: "multiple_choice",
          order: 7,
          text: "What is the defining characteristic of 'biophilic design'?",
          options: [
            "A. The use of advanced digital lighting systems.",
            "B. The integration of organic and natural elements.",
            "C. The removal of all unnecessary furniture.",
            "D. The use of recycled industrial materials."
          ],
          answer: ["B"]
        },
        {
          id: "s2-mc-q8",
          type: "multiple_choice",
          order: 8,
          text: "What did the University of Exeter study find regarding houseplants?",
          options: [
            "A. They are only effective in large, open-plan offices.",
            "B. They boost efficiency even in very simple work areas.",
            "C. they are less useful than sunlight for cognitive function.",
            "D. they have no impact on employees in 'lean' spaces."
          ],
          answer: ["B"]
        },
        {
          id: "s2-mc-q9",
          type: "multiple_choice",
          order: 9,
          text: "According to the text, greenery in the office has been shown to:",
          options: [
            "A. Increase the physical heart rate of employees.",
            "B. Improve the overall speed of manual tasks.",
            "C. Help workers maintain their concentration.",
            "D. Prevent employees from taking too many breaks."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q10",
          type: "multiple_choice",
          order: 10,
          text: "What previously held belief is challenged by biophilic research?",
          options: [
            "A. That plants are a distraction to serious work.",
            "B. That sunlight is essential for office productivity.",
            "C. That minimalist environments are best for focus.",
            "D. That natural light is more important than greenery."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q11",
          type: "multiple_choice",
          order: 11,
          text: "What is a common complaint about 'open-plan' office layouts?",
          options: [
            "A. They are too isolated for younger workers.",
            "B. They provide too much privacy for senior staff.",
            "C. The lack of sound-proofing leads to higher stress.",
            "D. They discourage employees from collaborating."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q12",
          type: "multiple_choice",
          order: 12,
          text: "The term 'monastic' zones refers to areas intended for:",
          options: [
            "A. Socializing during lunch and coffee breaks.",
            "B. Religious or spiritual activities for staff.",
            "C. Undisturbed and highly focused work tasks.",
            "D. Training new employees in large groups."
          ],
          answer: ["C"]
        },
        {
          id: "s2-mc-q13",
          type: "multiple_choice",
          order: 13,
          text: "What is the goal of creating 'hybrid' office spaces?",
          options: [
            "A. To replace physical offices with remote work options.",
            "B. To balance social areas with quiet, private zones.",
            "C. To combine factories and offices into one building.",
            "D. To reduce the amount of time spent in communal areas."
          ],
          answer: ["B"]
        },
        {
          id: "s2-mc-q14",
          type: "multiple_choice",
          order: 14,
          text: "What does the writer believe will be the most important future office feature?",
          options: [
            "A. The size and quality of the central cafeteria.",
            "B. The ability for workers to adjust their own space.",
            "C. The use of more expensive industrial furniture.",
            "D. The standardization of all workspaces for consistency."
          ],
          answer: ["B"]
        }
      ]
    },
    {
      id: "identifying-information-2",
      title: "Identifying Information: The Impact of Biomimicry on Modern Engineering",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Impact of Biomimicry on Modern Engineering</h2>
        <p>Biomimicry, the practice of looking to nature for inspiration to solve complex human problems, has transitioned from a niche academic interest to a cornerstone of sustainable engineering. By studying the biological blueprints of plants and animals, engineers are discovering solutions that are often more efficient and environmentally friendly than those derived through traditional mechanical trial and error. The philosophy posits that nature, having undergone 3.8 billion years of research and development through evolution, has already solved many of the challenges we face today.</p>
        <p>A classic example of biomimicry is the invention of Velcro. In 1941, Swiss engineer George de Mestral noticed how burrs from the burdock plant clung to his clothes and his dog's fur. Upon closer inspection under a microscope, he discovered thousands of tiny hooks that could latch onto loops of fabric. This simple observation led to a revolutionary fastening system that is now used in everything from children's shoes to space suits. While the concept seems intuitive today, it took de Mestral nearly a decade to perfect a manufacturing process that could replicate nature's precision at scale.</p>
        <p>In Japan, biomimicry was instrumental in solving a major infrastructure problem. The original Shinkansen bullet train was so fast that it created a deafening 'sonic boom' whenever it exited a tunnel, disturbing residents in nearby areas. Eiji Nakatsu, the train’s chief engineer and an avid birdwatcher, realized that the kingfisher, a bird that dives into water to catch fish, does so with very little splash. By redesigning the train's nose to mimic the elongated, aerodynamic beak of the kingfisher, the engineering team not only eliminated the noise problem but also increased the train's speed by 10% and reduced its electricity consumption by 15%.</p>
        <p>Furthermore, the 'Lotus Effect' has inspired a new generation of self-cleaning materials. The leaves of the lotus plant remain remarkably clean and dry despite growing in muddy water. Researchers found that this is not due to a smooth surface, but rather a microscopic forest of tiny wax-covered bumps that repel water droplets, causing them to roll off and carry dirt with them. Today, this principle is applied to exterior paints, window coatings, and even textiles, significantly reducing the need for chemical detergents. As we continue to face global resource shortages, the ability to mimic nature's low-energy, zero-waste systems may prove to be our most valuable technological asset.</p>
      `,
      questions: [
        {
          id: "s2-tf-q1",
          type: "true_false_not_given",
          order: 1,
          text: "Biomimicry was originally developed as a way to reduce industrial waste.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-tf-q2",
          type: "true_false_not_given",
          order: 2,
          text: "Nature is viewed by biomimicry proponents as a long-term research resource.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-tf-q3",
          type: "true_false_not_given",
          order: 3,
          text: "George de Mestral was a Swiss scientist who specialized in plant biology.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-tf-q4",
          type: "true_false_not_given",
          order: 4,
          text: "The hooks found on burdock burrs were visible only with the aid of a microscope.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-tf-q5",
          type: "true_false_not_given",
          order: 5,
          text: "It was immediately easy for de Mestral to mass-produce his hook-and-loop fastener.",
          options: [],
          answer: ["False"]
        },
        {
          id: "s2-tf-q6",
          type: "true_false_not_given",
          order: 6,
          text: "The primary complaint about the early Shinkansen train was its lack of speed.",
          options: [],
          answer: ["False"]
        },
        {
          id: "s2-tf-q7",
          type: "true_false_not_given",
          order: 7,
          text: "Eiji Nakatsu's interest in birds was a key factor in the train's redesign.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-tf-q8",
          type: "true_false_not_given",
          order: 8,
          text: "Kingfishers use their beaks to create a splash when they hunt.",
          options: [],
          answer: ["False"]
        },
        {
          id: "s2-tf-q9",
          type: "true_false_not_given",
          order: 9,
          text: "The new train design resulted in a significant reduction in power usage.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-tf-q10",
          type: "true_false_not_given",
          order: 10,
          text: "The surface of a lotus leaf is perfectly smooth to the touch.",
          options: [],
          answer: ["False"]
        },
        {
          id: "s2-tf-q11",
          type: "true_false_not_given",
          order: 11,
          text: "Water stays on a lotus leaf because it is absorbed by microscopic bumps.",
          options: [],
          answer: ["False"]
        },
        {
          id: "s2-tf-q12",
          type: "true_false_not_given",
          order: 12,
          text: "Lotus-inspired coatings are now more expensive than traditional paints.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-tf-q13",
          type: "true_false_not_given",
          order: 13,
          text: "Self-cleaning materials help decrease the reliance on artificial cleaning agents.",
          options: [],
          answer: ["True"]
        },
        {
          id: "s2-tf-q14",
          type: "true_false_not_given",
          order: 14,
          text: "The writer believes biomimicry will eventually replace all traditional engineering.",
          options: [],
          answer: ["Not Given"]
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
