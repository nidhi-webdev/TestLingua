import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding ALL remaining Section 1 Reading Tests...');

  const tests = [
    {
      id: "matching-information-1",
      title: "Matching Information: The History of the Bicycle",
      section: 1,
      difficulty: "Easy",
      type: "matching_information",
      passage: `
        <h2>The History of the Bicycle</h2>
        <p><b>A</b>. The history of the bicycle is a fascinating journey of engineering and social change. The earliest ancestor of the modern bike was the 'dandy horse,' invented by Baron Karl von Drais in 1817. This wooden vehicle had no pedals; instead, the rider pushed themselves along with their feet. Despite its primitive design, it allowed people to travel much faster than walking, and it marked the beginning of personal, mechanized transportation.</p>
        <p><b>B</b>. By the 1860s, French inventors Pierre Michaux and Pierre Lallement developed the 'velocipede,' which featured pedals attached directly to the front wheel. These early bikes were often called 'boneshakers' because their wooden wheels with iron rims made for an incredibly uncomfortable ride on cobbled streets. However, they were a massive hit among young, daring men in Paris and London, sparking the first major bicycle craze.</p>
        <p><b>C</b>. The 1870s saw the rise of the 'high wheeler' or 'penny-farthing.' These iconic bicycles had a massive front wheel and a tiny rear wheel. While they were much faster than previous models, they were also extremely dangerous. A rider sat high above the ground, and any sudden stop could result in a 'header'—a violent fall over the handlebars. Despite the risk, the penny-farthing became a symbol of Victorian athletic prowess.</p>
        <p><b>D</b>. The true revolution occurred in 1885 with the invention of the 'safety bicycle' by J.K. Starley. This model featured two wheels of equal size and a chain-driven rear wheel. It was stable, easy to ride, and, most importantly, accessible to women. The safety bicycle played a crucial role in the women's suffrage movement, as it provided women with a new level of mobility and independence that had previously been denied to them.</p>
        <p><b>E</b>. The introduction of pneumatic (air-filled) tires by John Boyd Dunlop in 1888 further improved the cycling experience. These tires absorbed the shocks of the road, making the ride smooth and enjoyable. With this final major innovation, the bicycle became a practical tool for commuting and recreation for the masses. By the turn of the century, millions of people around the world were using bicycles for work and play.</p>
      `,
      questions: [
        { id: "s1-mi-1", text: "A mention of a specific nickname given to uncomfortable early bicycles.", answer: ["B"] },
        { id: "s1-mi-2", text: "A reference to how bicycles helped women gain more freedom.", answer: ["D"] },
        { id: "s1-mi-3", text: "A description of the very first pedal-less bicycle.", answer: ["A"] },
        { id: "s1-mi-4", text: "A mention of a specific type of fall that riders feared.", answer: ["C"] },
        { id: "s1-mi-5", text: "An explanation of why pneumatic tires were a significant improvement.", answer: ["E"] },
        { id: "s1-mi-6", text: "The name of the inventor who created the 'safety bicycle'.", answer: ["D"] },
        { id: "s1-mi-7", text: "A mention of the material used for wheels before rubber tires.", answer: ["B"] },
        { id: "s1-mi-8", text: "A comparison of wheel sizes on the penny-farthing.", answer: ["C"] },
        { id: "s1-mi-9", text: "The year the first dandy horse was introduced.", answer: ["A"] },
        { id: "s1-mi-10", text: "A reference to the 'boneshaker's' popularity in specific cities.", answer: ["B"] },
        { id: "s1-mi-11", text: "How the safety bicycle changed social norms for women.", answer: ["D"] },
        { id: "s1-mi-12", text: "The name of the man who patented air-filled tires.", answer: ["E"] },
        { id: "s1-mi-13", text: "The primary way riders moved the dandy horse.", answer: ["A"] },
        { id: "s1-mi-14", text: "The reason why the penny-farthing was considered a symbol of prowess.", answer: ["C"] }
      ]
    },
    {
      id: "matching-headings-1",
      title: "Matching Headings: The Life of Honeybees",
      section: 1,
      difficulty: "Easy",
      type: "matching_headings",
      passage: `
        <h2>The Life of Honeybees</h2>
        <p><b>Paragraph A</b>. Honeybees are social insects that live in complex, highly organized colonies. Each colony consists of a single queen, thousands of female worker bees, and a few hundred male drones. The survival of the hive depends on the seamless cooperation of these three groups, each of which has a specific and vital role to play. Without this division of labor, the colony would quickly collapse.</p>
        <p><b>Paragraph B</b>. The queen is the most important member of the hive. Her primary job is to lay eggs—up to 2,000 in a single day. She is the mother of all the bees in the colony and produces chemicals called pheromones that regulate the behavior of the other bees. A healthy queen can live for several years, ensuring the continued growth and stability of the population.</p>
        <p><b>Paragraph C</b>. Worker bees are the engine of the hive. These female bees do all the work, from cleaning the hive and feeding the larvae to foraging for nectar and pollen. As they age, their duties change, moving from internal hive maintenance to outdoor gathering. Despite their tireless efforts, worker bees have a short lifespan, typically living only six weeks during the busy summer months.</p>
        <p><b>Paragraph D</b>. Drones are the only male bees in the colony. Their sole purpose is to mate with a queen from another hive to ensure genetic diversity. They do not work, they do not have stingers, and they do not collect food. In fact, if food becomes scarce during the winter, the worker bees will often push the drones out of the hive to conserve resources.</p>
        <p><b>Paragraph E</b>. Communication is essential for a successful colony. Bees use a unique 'dance' language to tell their hive-mates where to find the best flowers. The 'waggle dance' provides information about the distance and direction of a food source relative to the sun. This sophisticated system allows the hive to efficiently exploit the surrounding environment.</p>
      `,
      questions: [
        { id: "s1-mh-1", text: "Paragraph A", answer: ["iii"], options: ["i. The queen's regulation", "ii. The short life of workers", "iii. The structure of the colony", "iv. The mating flight of drones", "v. Communicating food locations", "vi. Winter survival tactics"] },
        { id: "s1-mh-2", text: "Paragraph B", answer: ["i"], options: ["i. The queen's regulation", "ii. The short life of workers", "iii. The structure of the colony", "iv. The mating flight of drones", "v. Communicating food locations", "vi. Winter survival tactics"] },
        { id: "s1-mh-3", text: "Paragraph C", answer: ["ii"], options: ["i. The queen's regulation", "ii. The short life of workers", "iii. The structure of the colony", "iv. The mating flight of drones", "v. Communicating food locations", "vi. Winter survival tactics"] },
        { id: "s1-mh-4", text: "Paragraph D", answer: ["iv"], options: ["i. The queen's regulation", "ii. The short life of workers", "iii. The structure of the colony", "iv. The mating flight of drones", "v. Communicating food locations", "vi. Winter survival tactics"] },
        { id: "s1-mh-5", text: "Paragraph E", answer: ["v"], options: ["i. The queen's regulation", "ii. The short life of workers", "iii. The structure of the colony", "iv. The mating flight of drones", "v. Communicating food locations", "vi. Winter survival tactics"] },
        { id: "s1-mh-6", text: "What is the queen's main job?", answer: ["A"], options: ["A. Laying eggs", "B. Guarding the hive", "C. Collecting nectar", "D. Mating with workers"] },
        { id: "s1-mh-7", text: "How long do workers live in summer?", answer: ["B"], options: ["A. 2 weeks", "B. 6 weeks", "C. 6 months", "D. 2 years"] },
        { id: "s1-mh-8", text: "What is the purpose of drones?", answer: ["C"], options: ["A. Cleaning", "B. Foraging", "C. Mating", "D. Cooling"] },
        { id: "s1-mh-9", text: "What do bees use to communicate?", answer: ["D"], options: ["A. Sounds", "B. Colors", "C. Gestures", "D. Dances"] },
        { id: "s1-mh-10", text: "A waggle dance tells bees the distance to:", answer: ["A"], options: ["A. Flowers", "B. Water", "C. New hives", "D. The queen"] },
        { id: "s1-mh-11", text: "Worker bees are always:", answer: ["B"], options: ["A. Male", "B. Female", "C. Sterile drones", "D. Older than the queen"] },
        { id: "s1-mh-12", text: "Pheromones help the queen to:", answer: ["C"], options: ["A. Fly faster", "B. Find food", "C. Control the hive", "D. Sting enemies"] },
        { id: "s1-mh-13", text: "In winter, drones are often:", answer: ["D"], options: ["A. Given extra food", "B. Promoted to workers", "C. Hidden in the larvae", "D. Ejected from the hive"] },
        { id: "s1-mh-14", text: "The multi-store model is irrelevant here.", answer: ["A"], options: ["A. True", "B. False", "C. Not Given"] }
      ]
    },
    {
      id: "matching-features-1",
      title: "Matching Features: Pioneers of Early Aviation",
      section: 1,
      difficulty: "Easy",
      type: "matching_features",
      passage: `
        <h2>Pioneers of Early Aviation</h2>
        <p>The quest for human flight involved many brilliant and courageous individuals. Sir George Cayley is often called the 'father of aviation' because he was the first to identify the four forces of flight: lift, weight, thrust, and drag. His work in the early 19th century laid the theoretical foundation for all future aircraft. Later, Otto Lilienthal, known as the 'Glider King,' successfully completed thousands of flights in his custom-built gliders, proving that controlled, heavier-than-air flight was possible, though he tragically lost his life in a crash in 1896.</p>
        <p>In the United States, the Wright brothers, Orville and Wilbur, combined Cayley's theories with Lilienthal's practical experience. They spent years conducting wind tunnel tests and perfecting their flight control systems. Their hard work culminated in the first powered, controlled flight on December 17, 1903, at Kitty Hawk. While the Wrights were the first to fly, others like Alberto Santos-Dumont in France were also making significant strides, developing airships and eventually the first practical airplane in Europe, the 14-bis.</p>
      `,
      questions: [
        { id: "s1-mf-1", text: "Identified the four physical forces that allow an object to fly.", answer: ["George Cayley"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-2", text: "Was the first to achieve powered and controlled flight in America.", answer: ["Wright Brothers"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-3", text: "Conducted extensive glider tests before dying in a flight accident.", answer: ["Otto Lilienthal"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-4", text: "Built the 14-bis and was a key figure in European aviation.", answer: ["Santos-Dumont"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-5", text: "Recognized as the 'father of aviation'.", answer: ["George Cayley"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-6", text: "Used a wind tunnel to study flight control.", answer: ["Wright Brothers"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-7", text: "Performed thousands of successful glider flights.", answer: ["Otto Lilienthal"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-8", text: "Designed and flew early airships in France.", answer: ["Santos-Dumont"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-9", text: "Proved that heavier-than-air flight was physically possible.", answer: ["Otto Lilienthal"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-10", text: "Flew at Kitty Hawk in 1903.", answer: ["Wright Brothers"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-11", text: "Defined the term 'thrust' in an aviation context.", answer: ["George Cayley"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-12", text: "Known as the 'Glider King'.", answer: ["Otto Lilienthal"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-13", text: "Collaborated with his brother on aircraft design.", answer: ["Wright Brothers"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] },
        { id: "s1-mf-14", text: "Contributed to the development of European aircraft.", answer: ["Santos-Dumont"], options: ["George Cayley", "Otto Lilienthal", "Wright Brothers", "Santos-Dumont"] }
      ]
    },
    {
      id: "matching-sentence-endings-1",
      title: "Matching Sentence Endings: The Great Barrier Reef",
      section: 1,
      difficulty: "Easy",
      type: "matching_sentence_endings",
      passage: `
        <h2>The Great Barrier Reef</h2>
        <p>The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs. It supports a massive diversity of life, including many endangered species. Coral reefs are formed by colonies of tiny animals called polyps, which secrete calcium carbonate to build a hard skeleton. These reefs provide a vital habitat for fish and protect coastlines from erosion. However, rising ocean temperatures are leading to coral bleaching, a process where the coral expels the algae living in its tissues, causing it to turn white and potentially die.</p>
      `,
      questions: [
        { id: "s1-mse-1", text: "The Great Barrier Reef is considered", answer: ["A"], options: ["A. the largest coral system on Earth.", "B. a source of calcium carbonate for polyps.", "C. a threat to coastal erosion.", "D. a primary cause of rising temperatures."] },
        { id: "s1-mse-2", text: "Coral polyps build hard skeletons by", answer: ["B"], options: ["A. eating endangered fish species.", "B. secreting calcium carbonate.", "C. turning white during bleaching.", "D. protecting the coastline."] },
        { id: "s1-mse-3", text: "Rising ocean temperatures are", answer: ["C"], options: ["A. helping polyps build faster.", "B. protecting the 2,900 reefs.", "C. causing coral bleaching.", "D. preventing algae from leaving."] },
        { id: "s1-mse-4", text: "The process of bleaching occurs when", answer: ["D"], options: ["A. polyps grow too large.", "B. fish leave the habitat.", "C. the water becomes too cold.", "D. algae are expelled from coral."] },
        { id: "s1-mse-5", text: "Reefs are beneficial because they", answer: ["D"], options: ["A. increase coastal erosion.", "B. kill off endangered species.", "C. secrete ocean temperatures.", "D. provide habitats for fish."] },
        { id: "s1-mse-6", text: "There are more than", answer: ["B"], options: ["A. 100 endangered species.", "B. 2,900 individual reefs.", "C. 5,000 types of polyps.", "D. 10 major bleaching events."] },
        { id: "s1-mse-7", text: "Bleached coral will often", answer: ["A"], options: ["A. turn completely white.", "B. grow faster than before.", "C. move to cooler waters.", "D. produce more algae."] },
        { id: "s1-mse-8", text: "The reef protects the coast from", answer: ["B"], options: ["A. calcium carbonate.", "B. erosion by the sea.", "C. fish populations.", "D. human divers."] },
        { id: "s1-mse-9", text: "Algae live inside", answer: ["C"], options: ["A. the calcium carbonate.", "B. the 2,900 reefs.", "C. the coral tissues.", "D. the coastal erosion."] },
        { id: "s1-mse-10", text: "The Great Barrier Reef supports", answer: ["D"], options: ["A. only small fish.", "B. only white coral.", "C. only calcium carbonate.", "D. a massive diversity of life."] },
        { id: "s1-mse-11", text: "Individual reefs are composed of", answer: ["A"], options: ["A. colonies of polyps.", "B. 2,900 different fish.", "C. calcium and magnesium.", "D. rising temperatures."] },
        { id: "s1-mse-12", text: "Calcium carbonate is used to", answer: ["B"], options: ["A. feed the algae.", "B. build hard skeletons.", "C. clean the ocean.", "D. stop the bleaching."] },
        { id: "s1-mse-13", text: "Endangered species find", answer: ["C"], options: ["A. calcium carbonate useful.", "B. bleaching helpful.", "C. the reef to be a vital home.", "D. erosion beneficial."] },
        { id: "s1-mse-14", text: "The word 'polyps' refers to", answer: ["A"], options: ["A. tiny animals.", "B. large fish.", "C. types of rock.", "D. ocean currents."] }
      ]
    },
    {
      id: "sentence-completion-1",
      title: "Sentence Completion: The Science of Cooking",
      section: 1,
      difficulty: "Easy",
      type: "sentence_completion",
      passage: `
        <h2>The Science of Cooking</h2>
        <p>Cooking is as much a science as it is an art. When we apply heat to food, we trigger a series of chemical reactions that change its texture, flavor, and color. One of the most important reactions is the Maillard reaction, which occurs between amino acids and reducing sugars. This reaction is responsible for the browning of meat and the delicious aroma of freshly baked bread. Another key process is caramelization, which happens when sugar is heated until it breaks down, creating a complex, nutty flavor and a dark brown color.</p>
      `,
      questions: [
        { id: "s1-sc-1", text: "Applying heat to food starts various [GAP].", answer: ["chemical reactions"] },
        { id: "s1-sc-2", text: "The Maillard reaction involves sugars and [GAP].", answer: ["amino acids"] },
        { id: "s1-sc-3", text: "Meat turns brown because of the [GAP].", answer: ["Maillard reaction"] },
        { id: "s1-sc-4", text: "Freshly baked bread has a pleasant [GAP].", answer: ["aroma"] },
        { id: "s1-sc-5", text: "When sugar is heated, [GAP] occurs.", answer: ["caramelization"] },
        { id: "s1-sc-6", text: "Caramelization results in a [GAP] flavor.", answer: ["nutty"] },
        { id: "s1-sc-7", text: "The color of caramelized sugar is [GAP].", answer: ["dark brown"] },
        { id: "s1-sc-8", text: "Cooking changes the flavor, color, and [GAP] of food.", answer: ["texture"] },
        { id: "s1-sc-9", text: "Amino acids are one part of the [GAP].", answer: ["Maillard reaction"] },
        { id: "s1-sc-10", text: "Sugar breaks down during the process of [GAP].", answer: ["caramelization"] },
        { id: "s1-sc-11", text: "Heat is applied to trigger [GAP] in food.", answer: ["reactions"] },
        { id: "s1-sc-12", text: "The Maillard reaction is [GAP] for browning meat.", answer: ["responsible"] },
        { id: "s1-sc-13", text: "Cooking is described as both an art and a [GAP].", answer: ["science"] },
        { id: "s1-sc-14", text: "Caramelization creates a [GAP] dark color.", answer: ["complex"] }
      ]
    },
    {
      id: "flowchart-completion-1",
      title: "Summary/note/table/flow-chart completion: The Paper Recycling Process",
      section: 1,
      difficulty: "Easy",
      type: "flowchart_completion",
      passage: `
        <h2>The Paper Recycling Process</h2>
        <p>Recycling paper is a multi-step process that turns waste into valuable new products. First, used paper is collected and transported to a recycling center. Next, it is sorted by grade and quality. The sorted paper is then mixed with water and chemicals in a large vat called a pulper to create a 'slurry.' This slurry is filtered to remove contaminants like staples and glue. The clean pulp is then bleached to improve its whiteness before being pressed and dried into large sheets of new paper.</p>
      `,
      questions: [
        { id: "s1-fc-1", text: "Step 1: Used paper is [GAP] at a center.", answer: ["collected"] },
        { id: "s1-fc-2", text: "Step 2: Paper is [GAP] based on its quality.", answer: ["sorted"] },
        { id: "s1-fc-3", text: "Step 3: Paper is mixed with chemicals in a [GAP].", answer: ["pulper"] },
        { id: "s1-fc-4", text: "Step 4: A liquid called [GAP] is produced.", answer: ["slurry"] },
        { id: "s1-fc-5", text: "Step 5: Contaminants like [GAP] are filtered out.", answer: ["staples"] },
        { id: "s1-fc-6", text: "Step 6: The pulp is [GAP] to make it whiter.", answer: ["bleached"] },
        { id: "s1-fc-7", text: "Step 7: New paper is [GAP] and dried into sheets.", answer: ["pressed"] },
        { id: "s1-fc-8", text: "The recycling process turns [GAP] into new products.", answer: ["waste"] },
        { id: "s1-fc-9", text: "Paper is sorted by both grade and [GAP].", answer: ["quality"] },
        { id: "s1-fc-10", text: "Water and [GAP] are added in the pulper.", answer: ["chemicals"] },
        { id: "s1-fc-11", text: "Glue is removed during the [GAP] stage.", answer: ["filtered"] },
        { id: "s1-fc-12", text: "Bleaching improves the [GAP] of the pulp.", answer: ["whiteness"] },
        { id: "s1-fc-13", text: "Large [GAP] of paper are the final result.", answer: ["sheets"] },
        { id: "s1-fc-14", text: "Recycling is described as a [GAP] process.", answer: ["multi-step"] }
      ]
    },
    {
      id: "diagram-completion-1",
      title: "Diagram Label Completion: The Structure of a Flower",
      section: 1,
      difficulty: "Easy",
      type: "diagram_completion",
      passage: `
        <h2>The Structure of a Flower</h2>
        <p>A flower is the reproductive organ of a plant. It consists of several parts, each with a specific function. The <b>petals</b> are often brightly colored to attract pollinators like bees. At the center of the flower is the <b>pistil</b>, the female reproductive part, which consists of the stigma, style, and ovary. Surrounding the pistil are the <b>stamens</b>, the male reproductive parts, which produce pollen. Each stamen consists of an anther and a filament. The <b>sepals</b> are leaf-like structures that protect the flower while it is still a bud.</p>
      `,
      questions: [
        { id: "s1-dc-1", text: "Label 1: Brightly colored parts that attract bees.", answer: ["petals"] },
        { id: "s1-dc-2", text: "Label 2: The entire female reproductive organ.", answer: ["pistil"] },
        { id: "s1-dc-3", text: "Label 3: The entire male reproductive organ.", answer: ["stamens"] },
        { id: "s1-dc-4", text: "Label 4: Structures that protect the flower bud.", answer: ["sepals"] },
        { id: "s1-dc-5", text: "Label 5: Part of the stamen that makes pollen.", answer: ["anther"] },
        { id: "s1-dc-6", text: "Label 6: Part of the pistil that receives pollen.", answer: ["stigma"] },
        { id: "s1-dc-7", text: "Label 7: The stalk of the stamen.", answer: ["filament"] },
        { id: "s1-dc-8", text: "Label 8: The base of the pistil where eggs are.", answer: ["ovary"] },
        { id: "s1-dc-9", text: "Label 9: The stalk of the pistil.", answer: ["style"] },
        { id: "s1-dc-10", text: "Label 10: General term for reproductive organ.", answer: ["flower"] },
        { id: "s1-dc-11", text: "Label 11: Pollinators attracted by petals.", answer: ["bees"] },
        { id: "s1-dc-12", text: "Label 12: Produced by the stamens.", answer: ["pollen"] },
        { id: "s1-dc-13", text: "Label 13: Leaf-like structures.", answer: ["sepals"] },
        { id: "s1-dc-14", text: "Label 14: Function of petals.", answer: ["attract"] }
      ]
    },
    {
      id: "short-answer-1",
      title: "Short-Answer Questions: The Solar System",
      section: 1,
      difficulty: "Easy",
      type: "short_answer",
      passage: `
        <h2>The Solar System</h2>
        <p>Our solar system consists of the sun and everything that orbits it. This includes eight planets, dozens of moons, and millions of asteroids and comets. The four inner planets—Mercury, Venus, Earth, and Mars—are rocky and relatively small. The four outer planets—Jupiter, Saturn, Uranus, and Neptune—are gas giants and much larger. Jupiter is the largest planet in our solar system, while Mercury is the smallest and closest to the sun. Neptune is the farthest planet from the sun, and it takes nearly 165 Earth years to complete one orbit.</p>
      `,
      questions: [
        { id: "s1-sa-1", text: "How many planets are in the solar system?", answer: ["eight"] },
        { id: "s1-sa-2", text: "What is the smallest planet in the system?", answer: ["Mercury"] },
        { id: "s1-sa-3", text: "Which planet is the largest?", answer: ["Jupiter"] },
        { id: "s1-sa-4", text: "What type of planets are Jupiter and Saturn?", answer: ["gas giants"] },
        { id: "s1-sa-5", text: "How many Earth years does it take Neptune to orbit the sun?", answer: ["165"] },
        { id: "s1-sa-6", text: "What are Mercury, Venus, Earth, and Mars made of?", answer: ["rocky"] },
        { id: "s1-sa-7", text: "What orbits the sun besides planets and moons?", answer: ["asteroids and comets"] },
        { id: "s1-sa-8", text: "Which planet is closest to the sun?", answer: ["Mercury"] },
        { id: "s1-sa-9", text: "Which planet is farthest from the sun?", answer: ["Neptune"] },
        { id: "s1-sa-10", text: "How many moons are roughly in the system?", answer: ["dozens"] },
        { id: "s1-sa-11", text: "How many asteroids are there in the system?", answer: ["millions"] },
        { id: "s1-sa-12", text: "What is the center of our solar system?", answer: ["the sun"] },
        { id: "s1-sa-13", text: "Are outer planets smaller than inner ones?", answer: ["No"] },
        { id: "s1-sa-14", text: "Is Earth an inner or outer planet?", answer: ["inner"] }
      ]
    }
  ];

  for (const test of tests) {
    await prisma.readingQuestion.deleteMany({ where: { readingTestId: test.id } });
    await prisma.readingTest.deleteMany({ where: { id: test.id } });

    await prisma.readingTest.create({
      data: {
        id: test.id,
        title: test.title,
        section: test.section,
        difficulty: test.difficulty,
        passage: test.passage,
        questions: {
          create: test.questions.map((q, idx) => ({
            id: q.id,
            type: test.type,
            order: idx + 1,
            text: q.text,
            options: (q as any).options || [],
            answer: q.answer
          }))
        }
      }
    });
    console.log(`✅ Seeded: ${test.title}`);
  }

  console.log('🎉 Section 1 expansion complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
