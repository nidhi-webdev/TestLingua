export interface ReadingQuestion {
  id: string;
  type: string;
  order: number;
  text: string;
  options?: string[];
  answer: string[];
}

export interface ReadingTest {
  id: string;
  title: string;
  section: number;
  difficulty: string;
  passage: string;
  questions: ReadingQuestion[];
}

export const mockReadingTest: ReadingTest = {
  id: "1",
  title: "The Discovery of Skara Brae",
  section: 1,
  difficulty: "Easy",
  passage: `
    <h2>The Discovery of Skara Brae</h2>
    <p>In the winter of 1850, a severe storm battered the Orkney Islands off the northern coast of Scotland. The howling winds and torrential rain stripped the earth from a large irregular mound known as Skerrabra at the Bay of Skaill on the mainland. When the storm finally cleared, local villagers discovered the outline of several stone buildings hidden beneath the sand. This was the dramatic unveiling of Skara Brae, a Neolithic settlement that would prove to be one of the best-preserved groups of prehistoric houses in Western Europe.</p>
    <br/>
    <p>Initially, the local laird, William Watt, began an amateur excavation of the site. Over the next two decades, Watt and others unearthed the remains of four stone houses, discovering a wealth of bone and stone tools, pottery, and ornaments. However, the site was eventually abandoned and remained relatively untouched until 1925, when another fierce storm damaged some of the previously excavated structures. Recognizing the importance of preserving the site, the government stepped in, and professional archaeologist Professor V. Gordon Childe was commissioned to properly excavate and secure Skara Brae.</p>
    <br/>
    <p>Childe's meticulous work revealed a cluster of eight dwellings, connected by low, covered passages. The layout of the village provided an extraordinary glimpse into the lives of Neolithic people who lived there roughly between 3180 BC and 2500 BC. The survival of Skara Brae is largely due to its unique construction. Unlike most prehistoric timber structures that have long since rotted away, the houses at Skara Brae were built entirely of flat flagstones naturally occurring along the local coastline. Because the islands lacked substantial trees, the inhabitants had to rely on stone not just for their walls, but also for their furniture.</p>
    <br/>
    <p>Each house followed a similar, remarkably sophisticated design. A low doorway, originally sealed by a stone slab, led into a single main room centered around a square hearth. Against the walls stood stone beds, which would have been filled with heather or straw for comfort. The most striking feature of each house was a stone 'dresser' facing the entrance, consisting of shelves supported by stone pillars. It is believed these dressers were used to display prized possessions and practical items, suggesting a societal structure that valued aesthetics and organization. Furthermore, the village featured a primitive but effective drainage system, with a rudimentary toilet in each dwelling, demonstrating an advanced understanding of sanitation for the era.</p>
    <br/>
    <p>Despite the rich material culture left behind, the exact reason for Skara Brae's abandonment remains a mystery. Early theories suggested a sudden cataclysm, perhaps a massive sandstorm similar to the one that uncovered it, forced the inhabitants to flee. Some archaeologists pointed to the discovery of a necklace left carelessly on the floor as evidence of a hasty departure. However, modern consensus favors a more gradual decline. Over centuries, the environment slowly changed; the encroaching sand dunes and a shifting climate may have made agriculture increasingly difficult. As their way of life became unsustainable, the inhabitants likely drifted away to more hospitable locations, allowing the sand to slowly reclaim their village.</p>
    <br/>
    <p>Today, Skara Brae is a UNESCO World Heritage site, recognized globally for its historical significance. It offers an unparalleled window into Neolithic domestic life, challenging previous assumptions about prehistoric societies. The artifacts found—including intricately carved stone balls, bone pins, and grooved ware pottery—reveal a community that was not merely surviving, but thriving. They were farmers, hunters, and skilled craftsmen, living in a cohesive, well-organized society long before the construction of Stonehenge or the Egyptian pyramids.</p>
  `,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      order: 1,
      text: "What was the immediate result of the severe storm in 1850?",
      options: [
        "A. It destroyed the local village near the Bay of Skaill.",
        "B. It revealed the outline of stone buildings beneath a mound.",
        "C. It forced the inhabitants of Skara Brae to abandon their homes.",
        "D. It stripped all the timber from the coastal areas."
      ],
      answer: ["B"]
    },
    {
      id: "q2",
      type: "multiple_choice",
      order: 2,
      text: "Who was responsible for the initial excavation of Skara Brae?",
      options: [
        "A. A professional team sent by the government.",
        "B. Professor V. Gordon Childe.",
        "C. The local laird, William Watt.",
        "D. Villagers from the Orkney Islands."
      ],
      answer: ["C"]
    },
    {
      id: "q3",
      type: "multiple_choice",
      order: 3,
      text: "Why did Professor V. Gordon Childe take over the excavation in 1925?",
      options: [
        "A. Because William Watt abandoned the project.",
        "B. Because a storm damaged previously excavated structures.",
        "C. Because the government wanted to find more bone tools.",
        "D. Because the site was declared a UNESCO World Heritage site."
      ],
      answer: ["B"]
    },
    {
      id: "q4",
      type: "multiple_choice",
      order: 4,
      text: "What unique building material was primarily used for the houses at Skara Brae?",
      options: [
        "A. Imported timber from the mainland.",
        "B. Clay bricks made from coastal sand.",
        "C. Flat flagstones found along the local coastline.",
        "D. Animal bones and straw."
      ],
      answer: ["C"]
    },
    {
      id: "q5",
      type: "multiple_choice",
      order: 5,
      text: "Which of the following artifacts was NOT explicitly mentioned as being found at Skara Brae?",
      options: [
        "A. Bone pins.",
        "B. Carved stone balls.",
        "C. Grooved ware pottery.",
        "D. Bronze weapons."
      ],
      answer: ["D"]
    },
    {
      id: "q6",
      type: "multiple_choice",
      order: 6,
      text: "Early theories suggested that Skara Brae was abandoned because of:",
      options: [
        "A. A sudden, massive sandstorm.",
        "B. A gradual change in the environment.",
        "C. A lack of agricultural resources.",
        "D. An invasion from the sea."
      ],
      answer: ["A"]
    },
    {
      id: "q7",
      type: "multiple_choice",
      order: 7,
      text: "According to the passage, the survival of Skara Brae is primarily due to:",
      options: [
        "A. The mild climate of the Orkney Islands.",
        "B. The use of naturally occurring stone for construction.",
        "C. The preservation efforts of William Watt.",
        "D. Its remote location away from the coastline."
      ],
      answer: ["B"]
    },
    {
      id: "q8",
      type: "multiple_choice",
      order: 8,
      text: "What was the purpose of the stone 'dresser' found in each house?",
      options: [
        "A. To store fuel for the central hearth.",
        "B. To block the low doorway during winter.",
        "C. To support the timber roof of the dwelling.",
        "D. To display practical items and prized possessions."
      ],
      answer: ["D"]
    },
    {
      id: "q9",
      type: "multiple_choice",
      order: 9,
      text: "What does the passage imply about the sanitation at Skara Brae?",
      options: [
        "A. It was surprisingly advanced for a Neolithic society.",
        "B. It was the primary cause of disease in the village.",
        "C. It relied entirely on the nearby ocean tides.",
        "D. It was less sophisticated than their furniture design."
      ],
      answer: ["A"]
    },
    {
      id: "q10",
      type: "multiple_choice",
      order: 10,
      text: "What artifact was initially used to support the theory of a hasty departure?",
      options: [
        "A. A primitive toilet.",
        "B. A carved stone ball.",
        "C. A discarded necklace.",
        "D. A broken stone bed."
      ],
      answer: ["C"]
    },
    {
      id: "q11",
      type: "multiple_choice",
      order: 11,
      text: "Why did the inhabitants use stone for their furniture?",
      options: [
        "A. Because stone was considered more aesthetically pleasing.",
        "B. Because the Orkney Islands lacked substantial trees.",
        "C. Because stone was easier to carve than wood.",
        "D. Because they wanted the furniture to last for generations."
      ],
      answer: ["B"]
    },
    {
      id: "q12",
      type: "multiple_choice",
      order: 12,
      text: "What is the currently accepted reason for the abandonment of Skara Brae?",
      options: [
        "A. A massive, sudden sandstorm.",
        "B. An invasion by neighboring tribes.",
        "C. A gradual climate shift making agriculture difficult.",
        "D. A devastating disease outbreak."
      ],
      answer: ["C"]
    },
    {
      id: "q13",
      type: "multiple_choice",
      order: 13,
      text: "In the final paragraph, the writer mentions Stonehenge and the Egyptian pyramids to:",
      options: [
        "A. Prove that Skara Brae is the oldest site in the world.",
        "B. Emphasize how early the advanced society at Skara Brae existed.",
        "C. Suggest that the inhabitants traded with other ancient cultures.",
        "D. Compare the architectural styles of different Neolithic sites."
      ],
      answer: ["B"]
    },
    {
      id: "q14",
      type: "multiple_choice",
      order: 14,
      text: "According to the passage, the stone 'dresser' suggests that the inhabitants of Skara Brae:",
      options: [
        "A. Needed sturdy furniture to survive severe storms.",
        "B. Used it primarily for preparing food near the hearth.",
        "C. Had a society that valued organization and aesthetics.",
        "D. Built it to block the low doorway from the cold."
      ],
      answer: ["C"]
    }
  ]
};
