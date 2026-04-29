import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Upgrading short Section 1 tests to full-length IELTS passages...');

  const tests = [
    {
      id: "sentence-completion-1",
      title: "Sentence Completion: The Science of Cooking",
      section: 1,
      difficulty: "Easy",
      type: "sentence_completion",
      passage: `
        <h2>The Science of Culinary Transformations</h2>
        <p><b>A.</b> Cooking is often perceived primarily as an art form, a creative process where flavors and textures are blended to produce a pleasing meal. However, at its core, cooking is a series of complex scientific processes. Every time heat is applied to a raw ingredient, a sequence of chemical and physical transformations is triggered. Understanding these scientific principles not only demystifies the cooking process but also empowers chefs and home cooks alike to manipulate ingredients with greater precision and predictability. From the boiling of an egg to the searing of a steak, science is the unseen hand guiding the transformation of food.</p>
        <p><b>B.</b> One of the most fundamental and universally appreciated chemical reactions in cooking is the Maillard reaction. Named after the French chemist Louis-Camille Maillard, who first described it in 1912, this reaction occurs when amino acids (the building blocks of proteins) and reducing sugars are subjected to heat, typically above 140°C (285°F). This non-enzymatic browning is responsible for the complex, savory flavors and appealing dark colors found in a wide variety of cooked foods. It is the Maillard reaction that gives a beautifully seared steak its rich crust, roasted coffee beans their deep aroma, and freshly baked bread its golden-brown crust.</p>
        <p><b>C.</b> Distinct from the Maillard reaction, though often occurring alongside it, is the process of caramelization. While the Maillard reaction requires both amino acids and sugars, caramelization involves the pyrolysis, or heat-induced breakdown, of sugar alone. As sugar is heated to temperatures typically exceeding 160°C (320°F), the sweet, odorless crystals begin to melt and then rapidly decompose into hundreds of new, highly aromatic compounds. This process generates a complex profile of flavors—ranging from buttery and nutty to slightly bitter—and results in a characteristic dark brown color. Caramelization is the magic behind the sweet crust on a crème brûlée or the rich flavor of traditional caramel sauce.</p>
        <p><b>D.</b> The application of heat also fundamentally alters the physical structure of proteins, a process known as denaturation. In their raw state, protein molecules are folded into complex, three-dimensional shapes. When exposed to heat, the weak bonds holding these shapes together begin to break, causing the proteins to unwind or denature. Once denatured, these proteins can bump into each other and form new bonds, a process called coagulation. This is most vividly observed when cooking an egg; the clear, runny egg white gradually turns into a solid, opaque gel as the proteins denature and coagulate.</p>
        <p><b>E.</b> Another crucial scientific concept in the kitchen is emulsification—the forcing together of two immiscible (unmixable) liquids, such as oil and water. Many beloved culinary creations, including mayonnaise, hollandaise sauce, and vinaigrettes, are emulsions. Because oil and water naturally repel each other, creating a stable mixture requires an emulsifier. Emulsifiers, such as the lecithin found in egg yolks, have molecules with a water-loving (hydrophilic) head and an oil-loving (lipophilic) tail. By coating the droplets of dispersed liquid, emulsifiers prevent them from coalescing and separating, resulting in a smooth, stable sauce.</p>
      `,
      questions: [
        { id: "s1-sc-1", text: "Applying heat to food starts various [GAP].", answer: ["transformations"] },
        { id: "s1-sc-2", text: "The Maillard reaction involves sugars and [GAP].", answer: ["amino acids"] },
        { id: "s1-sc-3", text: "Meat turns brown because of the [GAP].", answer: ["Maillard reaction"] },
        { id: "s1-sc-4", text: "Freshly baked bread has a pleasant [GAP].", answer: ["aroma"] },
        { id: "s1-sc-5", text: "When sugar is heated, [GAP] occurs.", answer: ["caramelization"] },
        { id: "s1-sc-6", text: "Caramelization results in a [GAP] flavor.", answer: ["nutty"] },
        { id: "s1-sc-7", text: "The color of caramelized sugar is [GAP].", answer: ["dark brown"] },
        { id: "s1-sc-8", text: "Denaturation alters the physical structure of [GAP].", answer: ["proteins"] },
        { id: "s1-sc-9", text: "Proteins form new bonds during [GAP].", answer: ["coagulation"] },
        { id: "s1-sc-10", text: "Sugar breaks down during the process of [GAP].", answer: ["caramelization"] },
        { id: "s1-sc-11", text: "An egg white turns into a solid [GAP].", answer: ["gel"] },
        { id: "s1-sc-12", text: "Mayonnaise and vinaigrettes are examples of [GAP].", answer: ["emulsions"] },
        { id: "s1-sc-13", text: "Lecithin in egg yolks acts as an [GAP].", answer: ["emulsifier"] },
        { id: "s1-sc-14", text: "Emulsifiers prevent liquids from [GAP].", answer: ["separating"] }
      ]
    },
    {
      id: "flowchart-completion-1",
      title: "Summary/note/table/flow-chart completion: The Paper Recycling Process",
      section: 1,
      difficulty: "Easy",
      type: "flowchart_completion",
      passage: `
        <h2>The Mechanics of Paper Recycling</h2>
        <p><b>A.</b> In an era of increasing environmental awareness, the recycling of paper has become a critical component of global waste management strategies. The process of transforming used, discarded paper into fresh, usable products is not merely a matter of simple reuse; it involves a sophisticated, multi-step industrial operation. This operation requires a delicate balance of mechanical processing and chemical treatments to ensure that the final recycled product is of sufficient quality to meet consumer demands.</p>
        <p><b>B.</b> The journey begins with the collection and transportation of used paper to a specialized recycling center. Once the paper arrives at the facility, it undergoes a crucial sorting process. Paper is categorized by grade, quality, and type. For instance, high-quality office paper is separated from newsprint and cardboard. This sorting is essential because different grades of paper yield different qualities of recycled pulp, and mixing them can degrade the final product.</p>
        <p><b>C.</b> After sorting, the paper is transported into a massive vat known as a pulper. The pulper acts much like a giant industrial blender. Inside, the paper is mixed with copious amounts of water and specific chemicals. The mechanical action of the pulper breaks down the paper into its individual cellulose fibers, creating a watery, porridge-like mixture referred to as 'slurry.' This slurry forms the foundational material for the new paper.</p>
        <p><b>D.</b> The slurry is then pumped through a series of increasingly fine screens to filter out larger contaminants. This screening process effectively removes unwanted materials such as staples, paperclips, pieces of plastic, and bits of glass. Following the screening, the slurry often undergoes a centrifugal cleaning process. By spinning the mixture at high speeds, materials that are denser than the paper fibers, such as grit and small metal fragments, are thrown to the outside and removed.</p>
        <p><b>E.</b> For paper that has been previously printed on, an essential step is de-inking. The slurry is placed in a flotation tank where air bubbles are created. Special chemicals called surfactants cause the ink particles to detach from the paper fibers and adhere to the air bubbles, which are then skimmed off. Once clean, the pulp may be bleached to improve its whiteness and brightness.</p>
        <p><b>F.</b> In the final stage, the clean, bleached pulp is mixed with additional water and sprayed onto a rapidly moving wire mesh screen. As water drains away, the fibers bond together, forming a continuous, wet sheet of paper. This sheet is then passed through heavy, heated rollers that squeeze out moisture and press the fibers tightly together. Finally, the dried paper is wound into enormous rolls, ready to be distributed.</p>
      `,
      questions: [
        { id: "s1-fc-1", text: "Step 1: Used paper undergoes a crucial [GAP] process.", answer: ["sorting"] },
        { id: "s1-fc-2", text: "Step 2: Paper is separated based on its [GAP] and quality.", answer: ["grade"] },
        { id: "s1-fc-3", text: "Step 3: Paper is mixed with chemicals in a [GAP].", answer: ["pulper"] },
        { id: "s1-fc-4", text: "Step 4: A liquid mixture called [GAP] is produced.", answer: ["slurry"] },
        { id: "s1-fc-5", text: "Step 5: Contaminants are removed using fine [GAP].", answer: ["screens"] },
        { id: "s1-fc-6", text: "Step 6: Dense materials are removed via [GAP] cleaning.", answer: ["centrifugal"] },
        { id: "s1-fc-7", text: "Step 7: Ink is removed using [GAP] in a flotation tank.", answer: ["surfactants"] },
        { id: "s1-fc-8", text: "Step 8: The pulp is [GAP] to improve whiteness.", answer: ["bleached"] },
        { id: "s1-fc-9", text: "Step 9: Pulp is sprayed onto a moving [GAP] screen.", answer: ["wire mesh"] },
        { id: "s1-fc-10", text: "Step 10: Heated [GAP] squeeze out remaining moisture.", answer: ["rollers"] },
        { id: "s1-fc-11", text: "Step 11: The dried paper is wound into enormous [GAP].", answer: ["rolls"] },
        { id: "s1-fc-12", text: "Recycling requires mechanical processing and [GAP] treatments.", answer: ["chemical"] },
        { id: "s1-fc-13", text: "Cellulose [GAP] are separated in the pulper.", answer: ["fibers"] },
        { id: "s1-fc-14", text: "Air [GAP] carry ink to the surface during de-inking.", answer: ["bubbles"] }
      ]
    },
    {
      id: "diagram-completion-1",
      title: "Diagram Label Completion: The Structure of a Flower",
      section: 1,
      difficulty: "Easy",
      type: "diagram_completion",
      passage: `
        <h2>The Anatomy and Function of a Flower</h2>
        <p><b>A.</b> The flower is the marvel of the botanical world, an intricate structure designed with a single, crucial biological purpose: reproduction. While humans often prize flowers for their aesthetic beauty, every aspect of a flower's anatomy has evolved to facilitate the creation of seeds and ensure the continuation of the species. Understanding the structure of a flower reveals a highly specialized system where each component plays a specific role in the complex process of pollination and fertilization.</p>
        <p><b>B.</b> The outermost whorl of a flower is composed of the sepals. These are typically green, leaf-like structures that form the calyx. The primary function of the sepals is protection. Before the flower opens, the sepals tightly enclose the developing bud, shielding the delicate internal organs from environmental damage and potential predators. Once the flower blooms, the sepals usually fold back.</p>
        <p><b>C.</b> Moving inward, the next layer consists of the petals, collectively known as the corolla. Petals are arguably the most conspicuous part of the flower, often characterized by vibrant colors and distinct fragrances. This showiness is an evolutionary adaptation designed to attract specific pollinators, such as bees, butterflies, or birds, which are essential for transferring pollen.</p>
        <p><b>D.</b> The male reproductive organs of the flower are the stamens. Each stamen is composed of two main parts: the filament and the anther. The filament is a slender, supportive stalk that elevates the anther. The anther is the sac-like structure at the tip of the filament, and its crucial role is to produce, store, and release pollen grains—the capsules that contain the male gametes.</p>
        <p><b>E.</b> At the very center of the flower lies the female reproductive organ, known as the pistil. The pistil is composed of three regions: the stigma, the style, and the ovary. The stigma is the sticky receptive surface at the top, designed to catch pollen grains. Below the stigma is the style, a tube-like structure that connects the stigma to the base. The style acts as a conduit for the pollen tube.</p>
        <p><b>F.</b> The swollen base of the pistil is the ovary. The ovary is the protective chamber that houses the ovules, which contain the female egg cells. When a pollen grain germinates on the stigma, it sends a tube down through the style and into the ovary, allowing fertilization to occur. The ovule then develops into a seed.</p>
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
        { id: "s1-dc-10", text: "Label 10: Contain the female egg cells.", answer: ["ovules"] },
        { id: "s1-dc-11", text: "Label 11: Pollinators attracted by petals.", answer: ["bees"] },
        { id: "s1-dc-12", text: "Label 12: Produced by the stamens.", answer: ["pollen"] },
        { id: "s1-dc-13", text: "Label 13: Leaf-like structures.", answer: ["sepals"] },
        { id: "s1-dc-14", text: "Label 14: Function of the sepals.", answer: ["protection"] }
      ]
    },
    {
      id: "short-answer-1",
      title: "Short-Answer Questions: The Solar System",
      section: 1,
      difficulty: "Easy",
      type: "short_answer",
      passage: `
        <h2>The Exploration of the Solar System</h2>
        <p><b>A.</b> The solar system in which our Earth resides consists of a central star, the Sun, and all the celestial bodies that are bound to it by gravity. This includes the eight officially recognized planets, their known moons, and billions of smaller bodies such as asteroids, comets, and meteoroids. For centuries, our understanding of this vast system was limited to what could be observed from Earth with the naked eye or through early telescopes. However, the advent of space exploration in the mid-20th century transformed our perspective, turning points of light into complex, dynamic worlds.</p>
        <p><b>B.</b> The inner solar system is home to the four terrestrial planets: Mercury, Venus, Earth, and Mars. These planets are characterized by their dense, rocky compositions and solid surfaces. Mercury, the smallest and innermost planet, is a heavily cratered world with extreme temperature fluctuations. Venus, often called Earth's twin due to its similar size, is shrouded in a thick, toxic atmosphere of carbon dioxide, creating a runaway greenhouse effect that makes it the hottest planet in the solar system. Earth is the only known planet to harbor life. Mars, the Red Planet, has been the focus of intense exploration due to its Earth-like features, including polar ice caps and ancient river valleys.</p>
        <p><b>C.</b> Beyond the asteroid belt lies the outer solar system, dominated by the gas giants: Jupiter and Saturn. These colossal planets are composed primarily of hydrogen and helium. Jupiter, the largest planet, boasts a complex atmosphere with raging storms, most notably the Great Red Spot, a giant anticyclonic storm. Saturn is famous for its extensive and intricate ring system, composed of countless particles of ice and rock. Both gas giants possess numerous moons, some of which are believed to harbor subsurface oceans of liquid water, making them prime targets in the search for extraterrestrial life.</p>
        <p><b>D.</b> Further out are the ice giants, Uranus and Neptune. While similar in composition to the gas giants, they contain higher proportions of "ices" such as water, ammonia, and methane, which gives them their characteristic blue hues. Uranus is unique in that it rotates on its side, likely the result of a massive collision early in its history. Neptune is a world of fierce winds and violent storms. Beyond Neptune lies the Kuiper Belt, a vast, donut-shaped region of icy bodies, including the dwarf planet Pluto.</p>
        <p><b>E.</b> The exploration of the solar system has been achieved through a combination of robotic spacecraft and human missions. The Apollo program successfully landed humans on the Moon, providing invaluable data. Since then, robotic probes have visited every planet, providing detailed images and atmospheric data. Rovers like Curiosity and Perseverance continue to explore the Martian surface, searching for signs of ancient microbial life.</p>
      `,
      questions: [
        { id: "s1-sa-1", text: "How many officially recognized planets are in the solar system?", answer: ["eight"] },
        { id: "s1-sa-2", text: "What transformed our perspective of the solar system in the mid-20th century?", answer: ["space exploration"] },
        { id: "s1-sa-3", text: "What is the smallest and innermost planet?", answer: ["Mercury"] },
        { id: "s1-sa-4", text: "What gas makes up the thick atmosphere of Venus?", answer: ["carbon dioxide"] },
        { id: "s1-sa-5", text: "What features make Mars a focus of intense exploration?", answer: ["Earth-like features"] },
        { id: "s1-sa-6", text: "What are Jupiter and Saturn primarily composed of?", answer: ["hydrogen and helium"] },
        { id: "s1-sa-7", text: "What is the name of the giant storm on Jupiter?", answer: ["Great Red Spot"] },
        { id: "s1-sa-8", text: "What is Saturn's ring system composed of?", answer: ["ice and rock"] },
        { id: "s1-sa-9", text: "What gives Uranus and Neptune their blue hues?", answer: ["ices"] },
        { id: "s1-sa-10", text: "Which planet rotates on its side?", answer: ["Uranus"] },
        { id: "s1-sa-11", text: "What region of icy bodies lies beyond Neptune?", answer: ["Kuiper Belt"] },
        { id: "s1-sa-12", text: "What program successfully landed humans on the Moon?", answer: ["Apollo program"] },
        { id: "s1-sa-13", text: "What are rovers on Mars searching for signs of?", answer: ["microbial life"] },
        { id: "s1-sa-14", text: "What is the hottest planet in the solar system?", answer: ["Venus"] }
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

  console.log('🎉 Section 1 upgrades complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
