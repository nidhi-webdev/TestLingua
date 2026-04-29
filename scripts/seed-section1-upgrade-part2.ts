import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Upgrading remaining Section 1 tests to full-length IELTS passages...');

  const tests = [
    {
      id: "matching-information-1",
      title: "Matching Information: The History of the Bicycle",
      section: 1,
      difficulty: "Easy",
      type: "matching_information",
      passage: `
        <h2>The Evolutionary Journey of the Bicycle</h2>
        <p><b>A.</b> The bicycle, a ubiquitous mode of personal transport today, has a surprisingly complex and varied history of development. Unlike many inventions that can be attributed to a single genius moment, the bicycle evolved through a series of iterative improvements over nearly a century. The earliest recognizable ancestor of the modern bicycle was the 'dandy horse' or 'Laufmaschine' (running machine), invented by the German Baron Karl von Drais in 1817. This entirely wooden contraption featured two wheels in-line, a steerable front wheel, and a padded saddle. Crucially, it lacked pedals; the rider propelled the machine forward by pushing their feet against the ground, much like a modern balance bike for children. While it enjoyed a brief period of popularity among young European aristocrats, it was largely impractical for rough roads and quickly fell out of fashion.</p>
        <p><b>B.</b> The next major leap forward occurred in the 1860s, primarily in France, with the development of the 'velocipede'. Inventors Pierre Michaux and Pierre Lallement are widely credited with adding rotary cranks and pedals to the hub of the front wheel, creating the first truly pedal-powered bicycle. These machines were often affectionately, and somewhat painfully, referred to as 'boneshakers'. Their rigid wooden wheels, surrounded by solid iron rims, transmitted every jolt and bump of the cobblestone streets directly to the rider. Despite the excruciating ride, the velocipede sparked the first genuine bicycle craze, leading to the establishment of the first dedicated bicycle factories and riding academies in Paris and London.</p>
        <p><b>C.</b> The desire for greater speed led to the iconic, and highly dangerous, design of the 1870s: the 'high-wheeler', commonly known as the 'penny-farthing'. Because the pedals were still attached directly to the front wheel, the only way to increase the top speed was to increase the diameter of the wheel itself. This resulted in machines with front wheels up to five feet (1.5 meters) in diameter, paired with a tiny trailing wheel. While elegant and fast, the penny-farthing was notoriously perilous. The rider sat incredibly high up, and the center of gravity was positioned almost directly over the front axle. Any sudden stop—caused by a rut, a stone, or a sudden application of the rudimentary brake—could pitch the rider headfirst over the handlebars, a common accident known at the time as taking a 'header'. Consequently, cycling remained largely the preserve of young, athletic, and daring men.</p>
        <p><b>D.</b> The true revolution, and the birth of the bicycle as we recognize it today, occurred in 1885 with the introduction of the 'Rover safety bicycle' by John Kemp Starley. The safety bicycle featured two wheels of equal, or nearly equal, size and, most importantly, a chain-driven rear wheel. This design lowered the center of gravity, making the machine vastly more stable and easier to mount and dismount. Furthermore, gearing could now be used to multiply the pedal strokes, meaning the bike could go fast without needing a massive front wheel. The safety bicycle democratized cycling, making it accessible to a much broader demographic, crucially including women.</p>
        <p><b>E.</b> The final piece of the puzzle arrived in 1888 when a Scottish veterinarian named John Boyd Dunlop developed the pneumatic (air-filled) rubber tire. Initially designed to ease the bumpy tricycle rides of his young son, Dunlop’s invention was quickly adapted for bicycles. The pneumatic tire replaced the solid rubber tires that had been standard on safety bicycles, absorbing the shocks of uneven roads and dramatically improving both comfort and speed. With this innovation, the bicycle became a truly practical, efficient, and enjoyable tool for mass transportation. By the 1890s, a global 'golden age of cycling' had begun, profoundly impacting society by providing unprecedented personal mobility, influencing fashion, and even playing a role in early movements for women's suffrage.</p>
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
        <h2>The Complex Society of the Honeybee</h2>
        <p><b>Paragraph A</b>. Honeybees are arguably the most intensively studied insects in the world, owing not only to their economic importance as pollinators and honey producers but also to their fascinating social structure. A honeybee colony is an extraordinary example of a 'superorganism'—a highly organized society where tens of thousands of individuals function as a single, cohesive entity. The survival and prosperity of the hive depend entirely on an intricate division of labor, chemical communication, and unwavering cooperation among its three distinct castes: the queen, the workers, and the drones.</p>
        <p><b>Paragraph B</b>. At the heart of every colony is a single fertile female: the queen. Despite her royal title, the queen does not rule the hive in a political sense; rather, her primary function is reproduction. She is the mother of nearly every bee in the colony and is capable of laying up to 2,000 eggs in a single day during peak season. Furthermore, the queen maintains the social cohesion of the hive by constantly secreting a unique blend of chemicals known as 'queen substance'. These pheromones are spread throughout the colony by grooming and feeding, inhibiting the reproductive capacity of the worker bees and signaling that a healthy queen is present.</p>
        <p><b>Paragraph C</b>. The vast majority of the colony's population consists of worker bees—sterile females who perform all the necessary tasks to keep the hive functioning. The life of a worker bee is defined by a strict, age-based progression of duties. For the first few weeks of their adult lives, they act as 'house bees', cleaning the brood cells, nursing the developing larvae, packing pollen, and guarding the hive entrance. Only in the final weeks of their lives do they become 'field bees', undertaking the perilous job of leaving the hive to forage for nectar, pollen, water, and tree resin. A worker bee born in the busy summer months will literally work herself to death, typically living for only about six weeks.</p>
        <p><b>Paragraph D</b>. The only male bees in the colony are the drones, which are larger and bulkier than the workers. Drones have no stingers, they lack the anatomy to gather nectar or pollen, and they perform no maintenance tasks within the hive. Their sole biological purpose is to mate with a virgin queen from another colony, thereby ensuring genetic diversity. Drones spend their days flying to specific 'drone congregation areas' waiting for a queen to fly by. If a drone is successful in mating, he dies immediately afterward. As autumn approaches and resources become scarce, the workers aggressively expel all remaining drones from the hive to conserve winter food stores.</p>
        <p><b>Paragraph E</b>. To maximize their foraging efficiency, honeybees have developed one of the most sophisticated communication systems in the animal kingdom. When a successful forager returns to the hive, she performs a specific, rhythmic movement known as a 'dance' to convey information to her sisters. The famous 'waggle dance' communicates both the distance and the exact direction of a rich food source relative to the position of the sun. The duration of the waggle phase indicates the distance, while the angle of the dance indicates the direction. This remarkable ability allows a colony to rapidly mobilize thousands of workers to exploit newly blooming flowers miles away.</p>
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
        <h2>Pioneers of Early Aviation: The Quest for Flight</h2>
        <p><b>A.</b> The dream of human flight is as old as recorded history, yet it was only within the last two centuries that this dream transitioned from myth to reality. The foundation of modern aeronautics was laid not by an inventor of a flying machine, but by a British engineer named Sir George Cayley. Working in the first half of the 19th century, Cayley is rightfully recognized as the 'father of aviation'. He was the first to move away from the idea of ornithopters (machines with flapping wings like birds) and propose a fixed-wing aircraft. Crucially, Cayley identified the four fundamental aerodynamic forces of flight: lift, weight, thrust, and drag. He designed the first successful human-carrying glider, proving his theoretical concepts, though it was flown by an unwilling servant rather than Cayley himself.</p>
        <p><b>B.</b> Following Cayley’s theoretical breakthroughs, the latter half of the 19th century was dominated by attempts to master the physical act of flying. The most prominent figure of this era was the German engineer Otto Lilienthal, known globally as the 'Glider King'. Lilienthal brought a rigorous, scientific approach to aerodynamics, meticulously documenting the lifting properties of curved wings. Over a period of five years, he designed, built, and personally flew numerous monoplane and biplane gliders, completing over 2,000 successful flights from a specially constructed artificial hill near Berlin. Photographs of Lilienthal in flight inspired aviation enthusiasts worldwide, proving beyond doubt that controlled, heavier-than-air flight was achievable. Tragically, Lilienthal died in 1896 after a sudden gust of wind stalled his glider, causing a fatal crash.</p>
        <p><b>C.</b> The mantle was then taken up in the United States by two bicycle mechanics from Ohio, Orville and Wilbur Wright. The Wright brothers deeply studied Lilienthal’s aeronautical data but correctly identified that his fatal flaw was a lack of adequate control in the air. They focused their efforts on developing a reliable method for steering an aircraft, eventually inventing 'wing-warping', a precursor to modern ailerons. After years of meticulous wind-tunnel testing and glider flights on the sand dunes of Kitty Hawk, North Carolina, they achieved the ultimate breakthrough. On December 17, 1903, their powered aircraft, the Wright Flyer, completed the first sustained, controlled, powered, heavier-than-air flight in history, ushering in the modern aviation age.</p>
        <p><b>D.</b> While the Wright brothers were pioneering powered flight in America, significant, parallel developments were occurring in Europe, spearheaded by the flamboyant Brazilian inventor Alberto Santos-Dumont. Living in Paris, Santos-Dumont initially gained fame by designing and flying a series of steerable, motorized airships (dirigibles) around the city, demonstrating that sustained, powered flight was possible in lighter-than-air craft. He later turned his attention to airplanes. In 1906, he flew his bizarre-looking 14-bis aircraft in front of a massive crowd in Paris. Because the Wright brothers had operated in extreme secrecy, Santos-Dumont’s flight was heralded by the European press as the first true powered flight. Though later corrected by history, Santos-Dumont remained a vital catalyst for the booming European aviation industry.</p>
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
        <h2>The Great Barrier Reef: A Fragile Wonder</h2>
        <p><b>A.</b> Visible from outer space, the Great Barrier Reef is a natural monument of staggering proportions. Located off the northeastern coast of Australia in the Coral Sea, it is the largest living structure on Earth. Stretching for over 2,300 kilometers (1,400 miles) over an area of approximately 344,400 square kilometers, it is not a single, continuous entity, but rather a massive, complex network comprising nearly 3,000 individual reefs and 900 islands. This vast marine ecosystem is renowned worldwide for its unparalleled biodiversity, providing a critical habitat for thousands of marine species, including many that are rare or endangered.</p>
        <p><b>B.</b> The foundation of this colossal ecosystem is built by creatures that are surprisingly small: coral polyps. These tiny, soft-bodied organisms, related to jellyfish and sea anemones, live in massive colonies. The polyps extract calcium carbonate from the surrounding seawater, secreting it to construct hard, cup-like protective skeletons around themselves. Over thousands of years, as successive generations of polyps grow, die, and leave their skeletons behind, these calcium carbonate structures accumulate, slowly building the massive limestone framework of the reef. In this way, biological organisms act as geological architects.</p>
        <p><b>C.</b> The vibrant colors that characterize healthy coral reefs are not produced by the polyps themselves, which are largely transparent, but by microscopic algae called zooxanthellae. The polyps and the algae live in a mutually beneficial, symbiotic relationship. The coral provides the algae with a protected environment and the compounds they need for photosynthesis. In return, the algae produce oxygen and supply the coral with organic products of photosynthesis, which provide up to 90% of the coral's required nutrients. It is the diverse pigments of these internal algae that give the reef its spectacular array of colors.</p>
        <p><b>D.</b> Beyond their beauty and ecological significance, coral reefs provide crucial services to the planet and human populations. They act as natural breakwaters, buffering shorelines against the immense energy of ocean waves, storms, and floods, thereby protecting coastal communities from erosion and property damage. Furthermore, the reef acts as a massive nursery for marine life, supporting commercial and recreational fisheries that are vital to local and global economies. The Great Barrier Reef alone generates billions of dollars annually through tourism and related industries.</p>
        <p><b>E.</b> Despite its massive size, the Great Barrier Reef is highly sensitive to environmental changes and is currently facing an existential threat from global climate change. The most immediate and visible manifestation of this threat is coral bleaching. When water temperatures rise significantly above average, the stressed coral polyps expel the symbiotic zooxanthellae living in their tissues. Without the algae, the coral loses its major source of food and its brilliant color, revealing the stark, white calcium carbonate skeleton beneath. While bleached coral is not immediately dead, it is severely compromised and susceptible to disease. If the water temperatures do not return to normal relatively quickly, the polyps will starve to death, turning a vibrant ecosystem into a barren wasteland.</p>
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
    console.log(`✅ Upgraded to IELTS standard: ${test.title}`);
  }

  console.log('🎉 Section 1 final upgrades complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
