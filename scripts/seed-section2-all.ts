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
      title: "Identifying Writer's Views: The Ethical Implications of Algorithmic Governance",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Ethical Implications of Algorithmic Governance</h2>
        <p>In the digital age, the mantle of governance is increasingly being shared with—or surrendered to—automated systems. Algorithmic governance, the use of mathematical models to allocate resources, manage public services, and even influence judicial outcomes, promises a level of efficiency and objectivity that human bureaucrats could never achieve. However, as these systems become more deeply embedded in the fabric of society, we must confront the reality that they are far from neutral tools. In my view, the current enthusiasm for 'data-driven' decision-making often blinds us to the profound ethical risks of delegating power to opaque code.</p>
        <p>One of the most pressing concerns is the 'black box' problem. Many of the most advanced algorithms, particularly those utilizing deep learning, operate in ways that are not fully transparent even to their creators. When an algorithm denies a loan application or determines a criminal's risk of recidivism, the lack of an explainable rationale is a fundamental violation of due process. I contend that any system used to make life-altering decisions must be capable of providing a human-readable justification for its output. Efficiency should never be prioritized at the expense of accountability.</p>
        <p>Furthermore, the notion that algorithms are objective is a dangerous fallacy. An algorithm is only as unbiased as the data it consumes. If the historical data used to train a model reflects existing societal prejudices—such as racial or gender bias—the algorithm will not only replicate these biases but will also give them a veneer of scientific legitimacy. We are effectively codifying the prejudices of the past into the automated systems of the future. While some argue that we can simply 'scrub' data of bias, I believe this is a naive oversimplification of a deeply structural problem.</p>
        <p>Finally, our legal and regulatory frameworks are woefully unprepared for this shift. Current legislation often treats algorithms as proprietary intellectual property, allowing companies to hide their internal logic from public scrutiny. We urgently need a global consensus on algorithmic transparency that mandates independent audits of high-stakes systems. In the absence of such oversight, we risk creating a society where our lives are governed by forces that are neither elected nor understood. The question is not whether we should use algorithms, but how we can ensure they remain subservient to human values.</p>
      `,
      questions: [
        {
          id: "s2-yw-q1",
          type: "yes_no_not_given",
          order: 1,
          text: "Algorithmic governance is already being used in the legal system.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q2",
          type: "yes_no_not_given",
          order: 2,
          text: "Humans are generally more objective than mathematical models in decision-making.",
          options: [],
          answer: ["No"]
        },
        {
          id: "s2-yw-q3",
          type: "yes_no_not_given",
          order: 3,
          text: "The writer is concerned that the benefits of data-driven decisions are being exaggerated.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q4",
          type: "yes_no_not_given",
          order: 4,
          text: "The developers of deep learning algorithms always understand exactly how their systems work.",
          options: [],
          answer: ["No"]
        },
        {
          id: "s2-yw-q5",
          type: "yes_no_not_given",
          order: 5,
          text: "The 'black box' problem is most common in the financial sector.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-yw-q6",
          type: "yes_no_not_given",
          order: 6,
          text: "The writer believes that every automated decision must be explainable to humans.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q7",
          type: "yes_no_not_given",
          order: 7,
          text: "Accountability is more important than speed when making significant life choices.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q8",
          type: "yes_no_not_given",
          order: 8,
          text: "Most algorithms are currently used for purely scientific research.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-yw-q9",
          type: "yes_no_not_given",
          order: 9,
          text: "Algorithms have the power to make societal prejudices appear to be based on science.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q10",
          type: "yes_no_not_given",
          order: 10,
          text: "The writer agrees that cleaning data sets is an effective way to remove bias.",
          options: [],
          answer: ["No"]
        },
        {
          id: "s2-yw-q11",
          type: "yes_no_not_given",
          order: 11,
          text: "Existing laws protect the public's right to see the logic behind all corporate algorithms.",
          options: [],
          answer: ["No"]
        },
        {
          id: "s2-yw-q12",
          type: "yes_no_not_given",
          order: 12,
          text: "The writer calls for mandatory, external reviews of critical algorithmic systems.",
          options: [],
          answer: ["Yes"]
        },
        {
          id: "s2-yw-q13",
          type: "yes_no_not_given",
          order: 13,
          text: "Government-run algorithms are generally more transparent than those owned by private companies.",
          options: [],
          answer: ["Not Given"]
        },
        {
          id: "s2-yw-q14",
          type: "yes_no_not_given",
          order: 14,
          text: "The writer suggests that we should stop using algorithms in governance altogether.",
          options: [],
          answer: ["No"]
        }
      ]
    },
    {
      id: "matching-information-2",
      title: "Matching Information: The Science of Sleep and Cognitive Recovery",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Science of Sleep and Cognitive Recovery</h2>
        <p><strong>A</strong>. Sleep was long thought to be a passive state, a period of inactivity for the brain and body. However, modern neuroscience has revealed that the brain is intensely active during sleep, performing vital maintenance tasks that are impossible during waking hours. These processes are not merely for rest but are essential for cognitive function, emotional health, and physical longevity.</p>
        <p><strong>B</strong>. One of the most critical roles of sleep is the physical restoration of the body. During deep, non-REM sleep, the body increases its production of growth hormones and begins the repair of muscle tissue and damaged cells. This period of 'physical housekeeping' is why athletes prioritize long sleep durations to recover from intensive training. Without this stage, the body remains in a state of high physiological stress, which can eventually lead to chronic inflammation.</p>
        <p><strong>C</strong>. The cognitive benefits are equally profound. While we sleep, the brain undergoes a process called memory consolidation. Information gathered throughout the day is transferred from the short-term storage of the hippocampus to the long-term storage of the neocortex. This 'filing system' ensures that important skills and facts are preserved while redundant information is discarded. Studies have shown that students who sleep well after studying perform significantly better on tests than those who 'cram' all night.</p>
        <p><strong>D</strong>. Dreaming, primarily occurring during REM sleep, serves as a form of emotional therapy. By revisiting stressful events in a safe, dream-state environment, the brain can strip away the emotional intensity of a memory, leaving behind the factual lesson. This emotional processing is vital for resilience; individuals deprived of REM sleep often struggle with mood regulation and are more prone to anxiety and depression.</p>
        <p><strong>E</strong>. Even minor sleep deprivation can have a catastrophic impact on executive function—the mental skills that allow us to focus, plan, and multitask. The prefrontal cortex, the seat of high-level reasoning, is the first area to suffer when we lose sleep. This leads to increased impulsivity, a reduced ability to solve complex problems, and a heightened risk of errors in the workplace, which can be particularly dangerous in fields like medicine or aviation.</p>
        <p><strong>F</strong>. Genetics also play a significant role in determining our sleep needs. Scientists have identified specific gene mutations that allow some individuals to function perfectly on as little as four hours of sleep, while others require nine or ten hours to feel rested. These 'short sleepers' possess a unique physiological efficiency that researchers are currently studying to understand if similar traits could be induced in the general population.</p>
        <p><strong>G</strong>. Modern technology has significantly disrupted our ancestral circadian rhythms. The blue light emitted by smartphones and laptops mimics the frequency of daylight, tricking the brain into suppressing the production of melatonin, the hormone responsible for inducing sleep. This 'social jetlag' has led to a global epidemic of insomnia, as our biological clocks struggle to align with the demands of an always-on digital world.</p>
        <p><strong>H</strong>. Looking forward, sleep therapy is evolving beyond simple sedative medications. Researchers are exploring the use of 'acoustic stimulation'—playing specific sound frequencies that synchronize with brain waves—to deepen the quality of non-REM sleep. By optimizing the architecture of sleep, rather than just its duration, scientists hope to treat cognitive decline and even slow the progression of neurodegenerative diseases.</p>
      `,
      questions: [
        {
          id: "s2-mi-q1",
          type: "matching_information",
          order: 1,
          text: "a reference to how heredity influences sleep patterns",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["F"]
        },
        {
          id: "s2-mi-q2",
          type: "matching_information",
          order: 2,
          text: "an explanation of why screens disrupt sleep cycles",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["G"]
        },
        {
          id: "s2-mi-q3",
          type: "matching_information",
          order: 3,
          text: "a description of the role of sleep in physical tissue repair",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["B"]
        },
        {
          id: "s2-mi-q4",
          type: "matching_information",
          order: 4,
          text: "a mention of how sleep helps with emotional stability",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["D"]
        },
        {
          id: "s2-mi-q5",
          type: "matching_information",
          order: 5,
          text: "an example of how memory is strengthened during rest",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["C"]
        },
        {
          id: "s2-mi-q6",
          type: "matching_information",
          order: 6,
          text: "the consequences of sleep loss on professional performance",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["E"]
        },
        {
          id: "s2-mi-q7",
          type: "matching_information",
          order: 7,
          text: "a challenge to the idea that sleep is a period of total brain stillness",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["A"]
        },
        {
          id: "s2-mi-q8",
          type: "matching_information",
          order: 8,
          text: "a potential new method for enhancing the depth of sleep",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["H"]
        },
        {
          id: "s2-mi-q9",
          type: "matching_information",
          order: 9,
          text: "the biological mechanism responsible for inducing tiredness",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["G"]
        },
        {
          id: "s2-mi-q10",
          type: "matching_information",
          order: 10,
          text: "a mention of how athletes use sleep for better performance",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["B"]
        },
        {
          id: "s2-mi-q11",
          type: "matching_information",
          order: 11,
          text: "the specific part of the brain most affected by lack of rest",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["E"]
        },
        {
          id: "s2-mi-q12",
          type: "matching_information",
          order: 12,
          text: "how dreaming acts as a psychological buffer",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["D"]
        },
        {
          id: "s2-mi-q13",
          type: "matching_information",
          order: 13,
          text: "a comparison of academic success between rested and tired students",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["C"]
        },
        {
          id: "s2-mi-q14",
          type: "matching_information",
          order: 14,
          text: "a research effort focused on people with minimal sleep requirements",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          answer: ["F"]
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
