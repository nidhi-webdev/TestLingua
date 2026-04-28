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
      title: "Matching Headings: The Future of Sustainable Urban Transportation",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Future of Sustainable Urban Transportation</h2>
        <div className="space-y-6">
          <p><strong>Paragraph A</strong>. As cities continue to expand at an unprecedented rate, the traditional reliance on private automobiles is becoming increasingly unsustainable. Urban centers are grappling with rising levels of congestion, air pollution, and carbon emissions. The challenge for urban planners is not just to improve existing systems, but to fundamentally rethink how people move within densely populated environments. This involves a shift from individual vehicle ownership to integrated, multi-modal public systems.</p>
          
          <p><strong>Paragraph B</strong>. One of the most promising developments in modern transit is the integration of digital technology. Real-time data analytics and mobile applications now allow passengers to coordinate their journeys across different modes of transport—such as buses, trains, and bike-shares—seamlessly. This 'Mobility as a Service' (MaaS) model prioritizes efficiency and convenience, reducing the friction that often discourages people from using public transit. By optimizing routes based on live demand, cities can ensure that resources are deployed where they are needed most.</p>
          
          <p><strong>Paragraph C</strong>. However, the largest hurdle in many established cities is the legacy of aging infrastructure. Retrofitting 19th-century subway tunnels or expanding narrow roads designed for horse-drawn carriages is a logistical nightmare and prohibitively expensive. Engineers are now looking at adaptive reuse strategies—finding ways to upgrade old assets with modern technology, such as automated signaling or lightweight rail cars, rather than starting from scratch. This 'smart-retrofitting' approach allows for significant improvements with minimal disruption.</p>
          
          <p><strong>Paragraph D</strong>. Another critical focus is the 'last-mile' problem: the difficulty of getting people from a major transit hub, like a train station, to their final destination. This gap is being filled by a surge in micro-mobility solutions, including electric scooters and shared bicycles. While these options are popular for their flexibility, they also present new challenges for city regulators, who must manage sidewalk clutter and ensure the safety of both riders and pedestrians.</p>
          
          <p><strong>Paragraph E</strong>. Pedestrianization is also gaining traction as a viable urban strategy. By closing major thoroughfares to motorized traffic, cities like Paris and Barcelona have transformed polluted roads into vibrant communal spaces. These car-free zones do more than just improve air quality; they have been shown to boost local economies by increasing foot traffic for businesses. The success of these initiatives often depends on the quality of the surrounding public transport network, which must be robust enough to handle the displaced travelers.</p>
          
          <p><strong>Paragraph F</strong>. Looking further ahead, the advent of autonomous vehicle technology could revolutionize public buses. Self-driving shuttles, operating on fixed loops, have the potential to operate 24/7 at a fraction of the current cost of manned services. These vehicles can communicate with each other to maintain perfect spacing, eliminating the 'clumping' effect where multiple buses arrive at once followed by a long gap. While the technology is still in testing phases, early trials suggest a high level of passenger acceptance.</p>
          
          <p><strong>Paragraph G</strong>. Despite these technological and structural advances, the psychological aspect of transit cannot be ignored. For many, a private car is seen as a symbol of status and personal freedom. Overcoming this cultural bias requires more than just efficient service; it requires public awareness campaigns and financial incentives, such as congestion pricing or subsidized passes. Until the public perceives public transit as being as prestigious and reliable as a private vehicle, the shift toward sustainability will be slow.</p>
          
          <p><strong>Paragraph H</strong>. Ultimately, the future of urban transport lies in a balance between speed, cost, and environmental impact. There is no single 'silver bullet' solution; rather, a successful city will employ a diverse portfolio of strategies tailored to its unique geography and population. By prioritizing human-centric design over car-centric engineering, the cities of tomorrow can become cleaner, quieter, and more inclusive places to live.</p>
        </div>
      `,
      questions: [
        {
          id: "s2-mh-q1",
          type: "matching_headings",
          order: 1,
          text: "Paragraph A",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["viii"]
        },
        {
          id: "s2-mh-q2",
          type: "matching_headings",
          order: 2,
          text: "Paragraph B",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["ii"]
        },
        {
          id: "s2-mh-q3",
          type: "matching_headings",
          order: 3,
          text: "Paragraph C",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["xi"]
        },
        {
          id: "s2-mh-q4",
          type: "matching_headings",
          order: 4,
          text: "Paragraph D",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["xii"]
        },
        {
          id: "s2-mh-q5",
          type: "matching_headings",
          order: 5,
          text: "Paragraph E",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["v"]
        },
        {
          id: "s2-mh-q6",
          type: "matching_headings",
          order: 6,
          text: "Paragraph F",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["vii"]
        },
        {
          id: "s2-mh-q7",
          type: "matching_headings",
          order: 7,
          text: "Paragraph G",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["iv"]
        },
        {
          id: "s2-mh-q8",
          type: "matching_headings",
          order: 8,
          text: "Paragraph H",
          options: [
            "i. The environmental impact of heavy rail",
            "ii. Integrating technology into public transit",
            "iii. The rise of micro-mobility solutions",
            "iv. Challenges in changing public perception",
            "v. Economic benefits of pedestrian-only zones",
            "vi. Historical development of the subway system",
            "vii. Future outlook for autonomous buses",
            "viii. Strategies for reducing car dependency",
            "ix. The role of data in route optimization",
            "x. Balancing speed with passenger comfort",
            "xi. Adapting old infrastructure for new needs",
            "xii. Addressing the 'last-mile' problem"
          ],
          answer: ["x"]
        }
      ]
    },
    {
      id: "matching-features-2",
      title: "Matching Features: Pioneers of Modern Epidemiology",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Pioneers of Modern Epidemiology</h2>
        <p>The field of public health has been shaped by visionary individuals who combined keen observation with rigorous data analysis. In the 19th century, before the germ theory of disease was widely accepted, several key figures laid the groundwork for how we understand and control the spread of illness today.</p>
        <p>John Snow is often regarded as the father of modern epidemiology. During the 1854 cholera outbreak in London, Snow famously mapped the cases of the disease and traced the source to a contaminated water pump on Broad Street. By convincing the local council to remove the pump handle, he effectively ended the outbreak. Snow’s work was groundbreaking because it used spatial analysis to prove that cholera was waterborne, rather than spread by 'miasma' or bad air, as was the prevailing belief of the time.</p>
        <p>In the same era, Ignaz Semmelweis made a critical discovery in a Vienna hospital. He noticed that the mortality rate from puerperal fever was significantly higher in wards where medical students performed deliveries after coming directly from autopsies, compared to wards managed by midwives. Semmelweis proposed that 'cadaveric particles' were being transferred on the students' hands. He implemented a mandatory hand-washing policy using chlorinated lime, which saw death rates plummet. Despite his success, his ideas were rejected by the medical establishment, leading to a tragic end for the frustrated physician.</p>
        <p>Florence Nightingale, while best known for her nursing work during the Crimean War, was also a brilliant statistician. She realized that more soldiers were dying from preventable hospital-acquired infections than from battle wounds. Nightingale used sophisticated data visualization, including her famous 'rose diagram,' to persuade the British government to invest in sanitary reforms. Her emphasis on hygiene, ventilation, and data-driven management transformed hospital design and saved countless lives.</p>
        <p>Finally, Louis Pasteur’s experiments eventually provided the scientific explanation for the observations of Snow and Semmelweis. Pasteur’s work on fermentation proved that microorganisms were responsible for the spoilage of food and the spread of disease. His development of the process of pasteurization and his creation of the first vaccines for rabies and anthrax solidified the 'germ theory' as the foundation of modern medicine, forever changing how humanity interacts with the microscopic world.</p>
      `,
      questions: [
        {
          id: "s2-mf-q1",
          type: "matching_features",
          order: 1,
          text: "Conducted an early example of spatial analysis in public health.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["A"]
        },
        {
          id: "s2-mf-q2",
          type: "matching_features",
          order: 2,
          text: "Faced significant professional backlash for suggesting hand-washing.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["B"]
        },
        {
          id: "s2-mf-q3",
          type: "matching_features",
          order: 3,
          text: "Used statistical visualization to advocate for sanitary reforms.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["C"]
        },
        {
          id: "s2-mf-q4",
          type: "matching_features",
          order: 4,
          text: "Proved that microorganisms are the cause of fermentation and disease.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["D"]
        },
        {
          id: "s2-mf-q5",
          type: "matching_features",
          order: 5,
          text: "Discovered that a specific water pump was the source of a cholera outbreak.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["A"]
        },
        {
          id: "s2-mf-q6",
          type: "matching_features",
          order: 6,
          text: "Emphasized the importance of hygiene and ventilation in hospitals.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["C"]
        },
        {
          id: "s2-mf-q7",
          type: "matching_features",
          order: 7,
          text: "Developed the first vaccine for rabies.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["D"]
        },
        {
          id: "s2-mf-q8",
          type: "matching_features",
          order: 8,
          text: "Observed that mortality rates were lower in wards managed by midwives.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["B"]
        },
        {
          id: "s2-mf-q9",
          type: "matching_features",
          order: 9,
          text: "Used a map to demonstrate that a disease was waterborne.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["A"]
        },
        {
          id: "s2-mf-q10",
          type: "matching_features",
          order: 10,
          text: "Introduced the use of chlorinated lime as a disinfectant.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["B"]
        },
        {
          id: "s2-mf-q11",
          type: "matching_features",
          order: 11,
          text: "Advocated for the use of data-driven management in healthcare.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["C"]
        },
        {
          id: "s2-mf-q12",
          type: "matching_features",
          order: 12,
          text: "Challenged the prevailing belief in 'miasma' or bad air.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["A"]
        },
        {
          id: "s2-mf-q13",
          type: "matching_features",
          order: 13,
          text: "Created the 'rose diagram' to explain causes of death.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["C"]
        },
        {
          id: "s2-mf-q14",
          type: "matching_features",
          order: 14,
          text: "Provided the scientific foundation for the 'germ theory'.",
          options: ["A. John Snow", "B. Ignaz Semmelweis", "C. Florence Nightingale", "D. Louis Pasteur"],
          answer: ["D"]
        }
      ]
    },
    {
      id: "matching-sentence-endings-2",
      title: "Matching Sentence Endings: The Evolution of Language and Cognitive Development",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Evolution of Language and Cognitive Development</h2>
        <p>The origins of human language remain one of the most enduring mysteries in evolutionary biology. Unlike tools or pottery, spoken words leave no fossil record, forcing researchers to rely on indirect evidence from genetics, archeology, and primatology. One school of thought, the 'continuity theory,' suggests that language evolved gradually as an extension of earlier animal communication systems. Proponents argue that the complex vocalizations and gestures seen in modern primates represent the ancestral building blocks of human syntax.</p>
        <p>Conversely, the 'discontinuity theory,' most famously championed by Noam Chomsky, posits that language is a unique human trait that emerged suddenly through a genetic mutation. Chomsky’s 'universal grammar' hypothesis suggests that humans are born with an innate capacity for structured syntax, a biological 'hard-wiring' that distinguishes us from all other species. While primates can be taught to use symbols, they generally fail to master the recursive nature of human grammar—the ability to nest phrases within phrases to create infinite meaning.</p>
        <p>Recent genetic breakthroughs have added a new layer to this debate. The discovery of the FOXP2 gene, often dubbed the 'language gene,' has shown that specific mutations were necessary for the fine motor control required for complex speech. Archeological finds also provide clues; the sophistication of early tool-making cultures indicates that language and technical skills likely co-evolved. The shift from gestural to vocal communication was a pivotal moment, as it allowed our ancestors to communicate effectively while their hands were occupied with manual tasks like foraging or hunting.</p>
        <p>Furthermore, the 'social brain hypothesis' suggests that language complexity is directly linked to the size and intricacy of ancestral social groups. As tribes grew larger, the need to manage social relationships and share complex information necessitated a more robust communication system. This is supported by studies on infants, which show that the ability to recognize phonemes—the distinct sounds of a language—is present even before a child begins to speak. Today, cognitive scientists argue that the recursive nature of language is not just for communication, but is the very tool that allows for abstract, high-level reasoning.</p>
        <p>However, the diversity of human language is currently under threat. The loss of ancient languages is concerning because each one represents a unique repository of cultural and ecological knowledge. As we look to the future, artificial intelligence models of language acquisition are helping to reveal the minimum computational requirements for syntax. Future research into linguistic evolution will likely incorporate a more interdisciplinary approach, combining data from genetics, computer science, and neurological scans of bilingual individuals to uncover how our brains continue to adapt to new linguistic environments.</p>
      `,
      questions: [
        {
          id: "s2-se-q1",
          type: "matching_sentence_endings",
          order: 1,
          text: "The 'continuity theory' suggests that human language",
          options: [
            "A. evolved gradually from earlier animal communication systems.",
            "B. are born with an innate capacity for structured syntax.",
            "C. possess a more limited range of vocalizations than previously thought.",
            "D. played a crucial role in the fine motor control of speech.",
            "E. language and technical skills co-evolved over time.",
            "F. our ancestors to communicate while performing manual tasks.",
            "G. is present even before a child begins to speak.",
            "H. the size and intricacy of ancestral social groups.",
            "I. distinguishes human thought from that of other species.",
            "J. complex linguistic structures had already been established.",
            "K. constant switching between languages enhances executive function.",
            "L. represents a loss of unique cultural and ecological knowledge.",
            "M. reveal the minimum computational requirements for syntax.",
            "N. incorporate data from both genetics and computer science.",
            "O. was a sudden mutation rather than a slow process.",
            "P. depends entirely on imitation of parental speech.",
            "Q. is irrelevant to the development of abstract reasoning.",
            "R. only occurs in the left hemisphere of the brain."
          ],
          answer: ["A"]
        },
        {
          id: "s2-se-q2",
          type: "matching_sentence_endings",
          order: 2,
          text: "Noam Chomsky's 'universal grammar' hypothesis posits that humans",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["B"]
        },
        {
          id: "s2-se-q3",
          type: "matching_sentence_endings",
          order: 3,
          text: "Researchers studying primate communication have observed that they",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["C"]
        },
        {
          id: "s2-se-q4",
          type: "matching_sentence_endings",
          order: 4,
          text: "The development of the FOXP2 gene is believed to have",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["D"]
        },
        {
          id: "s2-se-q5",
          type: "matching_sentence_endings",
          order: 5,
          text: "Archeological evidence from early tool-making cultures indicates that",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["E"]
        },
        {
          id: "s2-se-q6",
          type: "matching_sentence_endings",
          order: 6,
          text: "The shift from gestural to vocal communication allowed",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["F"]
        },
        {
          id: "s2-se-q7",
          type: "matching_sentence_endings",
          order: 7,
          text: "Studies on infants show that the ability to recognize phonemes",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["G"]
        },
        {
          id: "s2-se-q8",
          type: "matching_sentence_endings",
          order: 8,
          text: "The 'social brain hypothesis' links language complexity to",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["H"]
        },
        {
          id: "s2-se-q9",
          type: "matching_sentence_endings",
          order: 9,
          text: "Cognitive scientists argue that the recursive nature of language",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["I"]
        },
        {
          id: "s2-se-q10",
          type: "matching_sentence_endings",
          order: 10,
          text: "The emergence of symbolic art is often seen as evidence that",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["J"]
        },
        {
          id: "s2-se-q11",
          type: "matching_sentence_endings",
          order: 11,
          text: "Neurological scans of bilingual individuals suggest that",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["K"]
        },
        {
          id: "s2-se-q12",
          type: "matching_sentence_endings",
          order: 12,
          text: "The loss of ancient languages is concerning because it",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["L"]
        },
        {
          id: "s2-se-q13",
          type: "matching_sentence_endings",
          order: 13,
          text: "Artificial intelligence models of language acquisition help",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["M"]
        },
        {
          id: "s2-se-q14",
          type: "matching_sentence_endings",
          order: 14,
          text: "Future research into linguistic evolution will likely",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
          answer: ["N"]
        }
      ]
    },
    {
      id: "sentence-completion-2",
      title: "Sentence Completion: The Mechanics of Glacial Movement",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The Mechanics of Glacial Movement</h2>
        <p>Glaciers, often described as 'rivers of ice,' are massive bodies of dense ice that are constantly moving under their own weight. This movement is not uniform; it is a complex interplay of internal deformation and basal sliding. The rate of glacial flow depends on several factors, including the gradient of the underlying terrain, the thickness of the ice, and the temperature at the base of the glacier. In polar regions, where the ice is frozen to the bedrock, movement is primarily through internal deformation, whereas in temperate regions, water at the base acts as a lubricant, facilitating faster sliding.</p>
        <p>One of the most striking features of a moving glacier is the formation of crevasses. These deep cracks occur in the upper, brittle layer of the ice, known as the 'fracture zone,' which typically extends to a depth of about 50 meters. Below this depth, the intense pressure causes the ice to behave plastically, allowing it to flow without breaking. Crevasses often form where the glacier moves over a steep drop in the bedrock, a feature known as an 'icefall.' These areas are particularly hazardous for glaciologists and mountaineers alike.</p>
        <p>The movement of glaciers also has a profound impact on the landscape. As a glacier moves, it plucks rocks and debris from the valley floor and carries them along. These materials, known as 'glacial till,' act like sandpaper, grinding down the underlying rock in a process called abrasion. This creates distinct features such as 'striations'—long scratches on the bedrock—and 'cirques,' which are bowl-shaped hollows carved into the sides of mountains. The scale of this erosion is immense, capable of reshaping entire mountain ranges over thousands of years.</p>
        <p>Furthermore, glaciers play a crucial role in the global climate system. They act as massive reservoirs of fresh water, storing about 69% of the world's supply. The movement of ice from the interior of continents to the oceans, particularly through calving—the process where ice chunks break off into the sea—is a major contributor to sea-level rise. Monitoring the 'velocity' of glaciers using satellite imagery has become a vital tool for climate scientists, as changes in flow rates can indicate how rapidly the world's ice sheets are responding to rising global temperatures.</p>
      `,
      questions: [
        {
          id: "s2-sc-q1",
          type: "sentence_completion",
          order: 1,
          text: "Glaciers are frequently compared to [GAP] due to their continuous motion.",
          options: [],
          answer: ["rivers of ice"]
        },
        {
          id: "s2-sc-q2",
          type: "sentence_completion",
          order: 2,
          text: "Glacial flow is influenced by the steepness of the [GAP] below the ice.",
          options: [],
          answer: ["underlying terrain"]
        },
        {
          id: "s2-sc-q3",
          type: "sentence_completion",
          order: 3,
          text: "In cold polar areas, glaciers move mainly through a process of [GAP].",
          options: [],
          answer: ["internal deformation"]
        },
        {
          id: "s2-sc-q4",
          type: "sentence_completion",
          order: 4,
          text: "In warmer climates, [GAP] serves as a lubricant to help the glacier slide.",
          options: [],
          answer: ["water"]
        },
        {
          id: "s2-sc-q5",
          type: "sentence_completion",
          order: 5,
          text: "The brittle upper section of a glacier is referred to as the [GAP].",
          options: [],
          answer: ["fracture zone"]
        },
        {
          id: "s2-sc-q6",
          type: "sentence_completion",
          order: 6,
          text: "Crevasses usually reach a maximum depth of approximately [GAP].",
          options: [],
          answer: ["50 meters"]
        },
        {
          id: "s2-sc-q7",
          type: "sentence_completion",
          order: 7,
          text: "Underneath the surface layer, high levels of [GAP] make the ice flexible.",
          options: [],
          answer: ["intense pressure"]
        },
        {
          id: "s2-sc-q8",
          type: "sentence_completion",
          order: 8,
          text: "A steep section of bedrock can cause the formation of an [GAP].",
          options: [],
          answer: ["icefall"]
        },
        {
          id: "s2-sc-q9",
          type: "sentence_completion",
          order: 9,
          text: "The debris collected and transported by a glacier is called [GAP].",
          options: [],
          answer: ["glacial till"]
        },
        {
          id: "s2-sc-q10",
          type: "sentence_completion",
          order: 10,
          text: "Long marks left on rocks by the grinding action of ice are known as [GAP].",
          options: [],
          answer: ["striations"]
        },
        {
          id: "s2-sc-q11",
          type: "sentence_completion",
          order: 11,
          text: "Glacial erosion can create hollows in mountainsides called [GAP].",
          options: [],
          answer: ["cirques"]
        },
        {
          id: "s2-sc-q12",
          type: "sentence_completion",
          order: 12,
          text: "Glaciers contain roughly [GAP] of the planet's total fresh water.",
          options: [],
          answer: ["69%"]
        },
        {
          id: "s2-sc-q13",
          type: "sentence_completion",
          order: 13,
          text: "When large pieces of ice break off into the ocean, the process is called [GAP].",
          options: [],
          answer: ["calving"]
        },
        {
          id: "s2-sc-q14",
          type: "sentence_completion",
          order: 14,
          text: "Scientists use [GAP] to keep track of how fast glaciers are moving.",
          options: [],
          answer: ["satellite imagery"]
        }
      ]
    },
    {
      id: "flowchart-completion-2",
      title: "Summary/note/table/flow-chart completion: Silk - The Queen of Textiles",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>Silk: The Queen of Textiles</h2>
        <p>Silk is a natural protein fiber, some forms of which can be woven into textiles. The best-known silk is obtained from the cocoons of the larvae of the mulberry silkworm, <i>Bombyx mori</i>, reared in captivity (sericulture). The shimmering appearance of silk is due to the triangular prism-like structure of the silk fiber, which allows silk cloth to refract incoming light at different angles, thus producing different colors.</p>
        <p>Historically, silk production originated in China during the Neolithic period. For centuries, the Chinese authorities managed to keep the process a closely guarded secret, threatening anyone who attempted to smuggle silkworms or their eggs out of the country with the death penalty. It was not until the opening of the Silk Road that this precious commodity began to reach the Mediterranean world, eventually becoming a symbol of status and wealth in the Roman Empire. By the 6th century, the secret was finally leaked to the Byzantine Empire, allegedly by monks who hid silkworm eggs inside hollow bamboo walking sticks.</p>
        <p>The biological process of producing silk is fascinating. A silkworm begins its life as a tiny egg, which hatches into a larva that feeds exclusively on mulberry leaves for about 35 days. During this period, the larva grows rapidly, eventually reaching 10,000 times its initial weight. Once it has stored enough energy, the silkworm begins to spin its cocoon. It produces a continuous strand of liquid silk from two glands in its head, which hardens upon contact with the air. A single cocoon can contain a strand of silk that is between 300 and 900 meters long.</p>
        <p>Modern industrial silk production follows a strict sequence of steps. First, the cocoons are sorted by color and size. Then, they are subjected to 'stifling'—a heat treatment that prevents the moth from emerging and breaking the silk strand. The cocoons are then soaked in hot water to soften the 'sericin,' a gummy substance that holds the fibers together. This process, known as 'reeling,' allows the delicate filaments to be unwound and combined into a single thread. Finally, the silk is degummed, bleached, and dyed before being woven into the luxurious fabrics we recognize today.</p>
        <p>Despite the rise of synthetic fibers, the global silk market remains robust. Today, China remains the world's largest producer, accounting for nearly 80% of global output, followed by India. While the high cost of production makes it a niche product compared to cotton or polyester, its unique properties—such as breathability, thermal regulation, and hypoallergenic nature—ensure that it remains the preferred choice for high-end fashion and specialized medical sutures.</p>
      `,
      questions: [
        {
          id: "s2-mfc-q1",
          type: "flowchart_completion",
          order: 1,
          text: "Historical Milestone: Silk production was first developed in [GAP] thousands of years ago.",
          options: [],
          answer: ["China"]
        },
        {
          id: "s2-mfc-q2",
          type: "flowchart_completion",
          order: 2,
          text: "Historical Milestone: Smuggling eggs was once punishable by the [GAP].",
          options: [],
          answer: ["death penalty"]
        },
        {
          id: "s2-mfc-q3",
          type: "flowchart_completion",
          order: 3,
          text: "Historical Milestone: Silk became a major [GAP] in ancient Rome.",
          options: [],
          answer: ["symbol of status"]
        },
        {
          id: "s2-mfc-q4",
          type: "flowchart_completion",
          order: 4,
          text: "Historical Milestone: The Byzantine Empire obtained the secret via [GAP] walking sticks.",
          options: [],
          answer: ["hollow bamboo"]
        },
        {
          id: "s2-mfc-q5",
          type: "flowchart_completion",
          order: 5,
          text: "Historical Milestone: The silkworm larva eats only [GAP] for over a month.",
          options: [],
          answer: ["mulberry leaves"]
        },
        {
          id: "s2-mfc-q6",
          type: "flowchart_completion",
          order: 6,
          text: "Production Step 1: Heat treatment, or [GAP], is used to kill the pupa.",
          options: [],
          answer: ["stifling"]
        },
        {
          id: "s2-mfc-q7",
          type: "flowchart_completion",
          order: 7,
          text: "Production Step 2: Hot water is used to dissolve the [GAP] holding the fibers.",
          options: [],
          answer: ["sericin"]
        },
        {
          id: "s2-mfc-q8",
          type: "flowchart_completion",
          order: 8,
          text: "Production Step 3: Unwinding the filaments is a process called [GAP].",
          options: [],
          answer: ["reeling"]
        },
        {
          id: "s2-mfc-q9",
          type: "flowchart_completion",
          order: 9,
          text: "Production Step 4: The final thread can be [GAP] to achieve different colors.",
          options: [],
          answer: ["dyed"]
        },
        {
          id: "s2-mfc-q10",
          type: "flowchart_completion",
          order: 10,
          text: "Industrial Fact: A single cocoon may yield up to [GAP] of silk thread.",
          options: [],
          answer: ["900 meters"]
        },
        {
          id: "s2-mfc-q11",
          type: "flowchart_completion",
          order: 11,
          text: "Economic Fact: China currently controls about [GAP] of the world's silk production.",
          options: [],
          answer: ["80%"]
        },
        {
          id: "s2-mfc-q12",
          type: "flowchart_completion",
          order: 12,
          text: "Economic Fact: Silk remains a [GAP] compared to cheaper synthetics.",
          options: [],
          answer: ["niche product"]
        },
        {
          id: "s2-mfc-q13",
          type: "flowchart_completion",
          order: 13,
          text: "Linguistic Fact: The word 'sericulture' refers to the [GAP] of silkworms.",
          options: [],
          answer: ["rearing"]
        },
        {
          id: "s2-mfc-q14",
          type: "flowchart_completion",
          order: 14,
          text: "Modern Use: Silk is valued in medicine for making [GAP].",
          options: [],
          answer: ["medical sutures"]
        }
      ]
    },
    {
      id: "diagram-completion-2",
      title: "Diagram Label Completion: Vertical Axis Wind Turbines",
      section: 2,
      difficulty: "Medium",
      imageUrl: "/vawt_numbered.png",
      passage: `
        <h2>The Engineering of Vertical Axis Wind Turbines</h2>
        <p>Vertical Axis Wind Turbines (VAWTs) are a type of wind turbine where the main rotor shaft is set transversely to the wind while the main components are located at the base of the turbine. This arrangement allows the generator and gearbox to be located close to the ground, facilitating service and repair. VAWTs do not need to be pointed into the wind, which removes the need for wind-sensing and orientation mechanisms.</p>
        <p>The core of the machine is the <b>central shaft</b>, which rotates as the wind catches the blades. The blades themselves are often <b>aerofoils</b>, shaped to create lift and maximize rotational force. These are held in place by <b>support arms</b> that connect to the shaft. At the very top of the shaft, a <b>top bearing</b> ensures smooth rotation, while a similar <b>bottom bearing</b> is housed within the support structure at the base.</p>
        <p>To ensure stability, the entire assembly is often reinforced by <b>guy wires</b> that are anchored to the ground. The base of the turbine sits on a heavy <b>concrete foundation</b> to withstand high wind loads. Within the lower housing, the rotating shaft is connected to a <b>gearbox</b>, which increases the rotational speed before passing the kinetic energy to the <b>alternator</b> (or generator). The electricity generated is then carried away through <b>output cables</b>. Safety is managed by a <b>braking system</b>, usually located above the generator, which can stop the turbine during extreme weather. The outer frame that protects these internal components is known as the <b>support tower</b>, often featuring <b>access panels</b> for maintenance crews.</p>
      `,
      questions: [
        {
          id: "s2-dc-q1",
          type: "diagram_completion",
          order: 1,
          text: "Label 1: The rotating rod that runs through the center: [GAP]",
          options: [],
          answer: ["central shaft"]
        },
        {
          id: "s2-dc-q2",
          type: "diagram_completion",
          order: 2,
          text: "Label 2: The shaped blades that capture wind energy: [GAP]",
          options: [],
          answer: ["aerofoils"]
        },
        {
          id: "s2-dc-q3",
          type: "diagram_completion",
          order: 3,
          text: "Label 3: Connecting pieces between blades and shaft: [GAP]",
          options: [],
          answer: ["support arms"]
        },
        {
          id: "s2-dc-q4",
          type: "diagram_completion",
          order: 4,
          text: "Label 4: Rotating component at the very summit: [GAP]",
          options: [],
          answer: ["top bearing"]
        },
        {
          id: "s2-dc-q5",
          type: "diagram_completion",
          order: 5,
          text: "Label 5: Rotating component inside the base structure: [GAP]",
          options: [],
          answer: ["bottom bearing"]
        },
        {
          id: "s2-dc-q6",
          type: "diagram_completion",
          order: 6,
          text: "Label 6: Cables used to stabilize the turbine tower: [GAP]",
          options: [],
          answer: ["guy wires"]
        },
        {
          id: "s2-dc-q7",
          type: "diagram_completion",
          order: 7,
          text: "Label 7: The heavy base made of stone and cement: [GAP]",
          options: [],
          answer: ["concrete foundation"]
        },
        {
          id: "s2-dc-q8",
          type: "diagram_completion",
          order: 8,
          text: "Label 8: Component that increases rotational speed: [GAP]",
          options: [],
          answer: ["gearbox"]
        },
        {
          id: "s2-dc-q9",
          type: "diagram_completion",
          order: 9,
          text: "Label 9: The machine that converts motion to electricity: [GAP]",
          options: [],
          answer: ["alternator"]
        },
        {
          id: "s2-dc-q10",
          type: "diagram_completion",
          order: 10,
          text: "Label 10: Lines that transport the power produced: [GAP]",
          options: [],
          answer: ["output cables"]
        },
        {
          id: "s2-dc-q11",
          type: "diagram_completion",
          order: 11,
          text: "Label 11: Safety mechanism to halt rotation: [GAP]",
          options: [],
          answer: ["braking system"]
        },
        {
          id: "s2-dc-q12",
          type: "diagram_completion",
          order: 12,
          text: "Label 12: The main outer housing at the bottom: [GAP]",
          options: [],
          answer: ["support tower"]
        },
        {
          id: "s2-dc-q13",
          type: "diagram_completion",
          order: 13,
          text: "Label 13: Removable sections for technician entry: [GAP]",
          options: [],
          answer: ["access panels"]
        },
        {
          id: "s2-dc-q14",
          type: "diagram_completion",
          order: 14,
          text: "General term for this specific turbine design: [GAP]",
          options: [],
          answer: ["VAWT"]
        }
      ]
    },
    {
      id: "short-answer-2",
      title: "Short-Answer Questions: The History and Conservation of the Giant Panda",
      section: 2,
      difficulty: "Medium",
      passage: `
        <h2>The History and Conservation of the Giant Panda</h2>
        <p>The giant panda (<i>Ailuropoda melanoleuca</i>) is perhaps the most recognizable symbol of wildlife conservation in the world. Native to the mountain ranges of central China, primarily in Sichuan, but also in neighboring Shaanxi and Gansu, the panda's habitat is restricted to high-altitude temperate forests with a dense understory of bamboo. Despite being taxonomically classified as a carnivore, the panda's diet is 99% bamboo, an evolutionary quirk that requires the animal to consume between 12 and 38 kilograms of the plant every day to meet its energy needs.</p>
        <p>The first recorded encounter between a Westerner and a giant panda occurred in 1869, when the French missionary Armand David was shown a skin by a local hunter. It was not until 1936, however, that the first live panda, a cub named Su Lin, was brought to the United States. This sparked 'pandamania' across the West, leading to increased interest in the species but also a surge in poaching and illegal trade. By the 1960s, the Chinese government realized that the population was in critical decline and established the first four panda reserves.</p>
        <p>Conservation efforts have intensified over the last four decades. The 1980s saw the launch of the 'National Conservation Project for the Giant Panda,' which focused on creating 'bamboo corridors' to link isolated populations. This is vital because pandas are notoriously solitary and territorial; without corridors, inbreeding becomes a significant threat to genetic diversity. In 2016, after years of steady population growth, the International Union for Conservation of Nature (IUCN) officially reclassified the panda from 'Endangered' to 'Vulnerable,' a major milestone in conservation history.</p>
        <p>Despite this success, the species faces ongoing threats. Climate change is predicted to eliminate more than 35% of China's bamboo forests by the end of the century. Furthermore, while habitat loss from logging has been largely curtailed, fragmentation due to road and rail construction continues to isolate panda communities. Today, there are approximately 1,864 pandas living in the wild, with another 600 in captive breeding programs around the world. These programs, such as the Wolong National Nature Reserve, are essential for maintaining a 'backup' population and conducting research into the panda's complex reproductive biology.</p>
      `,
      questions: [
        {
          id: "s2-sa-q1",
          type: "short_answer",
          order: 1,
          text: "In which Chinese province are most giant pandas found?",
          options: [],
          answer: ["Sichuan"]
        },
        {
          id: "s2-sa-q2",
          type: "short_answer",
          order: 2,
          text: "What specific type of forest is the panda's natural home?",
          options: [],
          answer: ["temperate forests"]
        },
        {
          id: "s2-sa-q3",
          text: "What percentage of a panda's food comes from bamboo?",
          options: [],
          answer: ["99%"],
          order: 3,
          type: "short_answer"
        },
        {
          id: "s2-sa-q4",
          type: "short_answer",
          order: 4,
          text: "What is the maximum weight of bamboo a panda might eat in a single day?",
          options: [],
          answer: ["38 kilograms"]
        },
        {
          id: "s2-sa-q5",
          type: "short_answer",
          order: 5,
          text: "In what year did a Westerner first see a panda's skin?",
          options: [],
          answer: ["1869"]
        },
        {
          id: "s2-sa-q6",
          type: "short_answer",
          order: 6,
          text: "What was the name of the first panda taken alive to America?",
          options: [],
          answer: ["Su Lin"]
        },
        {
          id: "s2-sa-q7",
          type: "short_answer",
          order: 7,
          text: "How many panda reserves were originally created in the 1960s?",
          options: [],
          answer: ["four"]
        },
        {
          id: "s2-sa-q8",
          type: "short_answer",
          order: 8,
          text: "What was built to help connect different groups of pandas?",
          options: [],
          answer: ["bamboo corridors"]
        },
        {
          id: "s2-sa-q9",
          type: "short_answer",
          order: 9,
          text: "What biological problem does isolation cause for pandas?",
          options: [],
          answer: ["inbreeding"]
        },
        {
          id: "s2-sa-q10",
          type: "short_answer",
          order: 10,
          text: "Which organization changed the panda's status in 2016?",
          options: [],
          answer: ["IUCN"]
        },
        {
          id: "s2-sa-q11",
          type: "short_answer",
          order: 11,
          text: "What is the new conservation status of the giant panda?",
          options: [],
          answer: ["Vulnerable"]
        },
        {
          id: "s2-sa-q12",
          type: "short_answer",
          order: 12,
          text: "What percentage of bamboo habitat could be lost to global warming?",
          options: [],
          answer: ["35%"]
        },
        {
          id: "s2-sa-q13",
          type: "short_answer",
          order: 13,
          text: "What is the current estimated number of pandas in the wild?",
          options: [],
          answer: ["1,864"]
        },
        {
          id: "s2-sa-q14",
          type: "short_answer",
          order: 14,
          text: "Name one famous nature reserve used for panda breeding.",
          options: [],
          answer: ["Wolong"]
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
