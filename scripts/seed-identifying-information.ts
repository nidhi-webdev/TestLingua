import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Identifying Information test...");

  const passage = `
<h2>The Rise of Urban Vertical Farming</h2>

<p>As the global population continues to grow and arable land becomes increasingly scarce, urban vertical farming has emerged as one of the most promising solutions to the looming food security crisis. Vertical farms are multi-storey indoor facilities in which crops are grown in stacked layers under artificial lighting, without soil, and with precisely controlled temperature, humidity, and nutrient levels. Proponents argue that this model represents a radical reinvention of agriculture — one capable of producing food year-round, in the heart of cities, and with a fraction of the water used in conventional farming.</p>

<p>The concept of vertical farming was first formally proposed by Dickson Despommier, a professor of environmental health sciences at Columbia University, in 1999. Despommier and his students calculated that a single 30-storey vertical farm could theoretically feed 50,000 people per year. While this early vision was largely theoretical, it sparked a wave of commercial interest that grew significantly in the 2010s, fuelled by advances in LED technology, hydroponics, and investor enthusiasm for food-tech startups.</p>

<p>Unlike traditional agriculture, vertical farming does not depend on seasonal cycles or favourable weather conditions. Crops such as lettuce, spinach, kale, and herbs can be harvested multiple times per year, giving operators a reliable and predictable yield. Because the growing environment is entirely enclosed, pesticide use is effectively eliminated, which appeals to health-conscious consumers and reduces the environmental contamination associated with chemical runoff. Furthermore, vertical farms located inside or near cities dramatically reduce the distance food must travel from farm to consumer, cutting both transportation costs and carbon emissions associated with long-haul refrigerated logistics.</p>

<p>However, the vertical farming industry is not without its significant challenges. The most frequently cited obstacle is energy consumption. Artificial lighting — particularly the high-intensity LEDs needed to replace sunlight — is extraordinarily energy-intensive. Critics argue that unless vertical farms are powered entirely by renewable energy sources, the carbon footprint of indoor-grown produce can actually exceed that of conventionally farmed food shipped over long distances. Several high-profile vertical farming companies, including AeroFarms and Bowery Farming in the United States, have faced financial difficulties in recent years despite raising hundreds of millions of dollars in venture capital, underlining the gap between the technology's promise and its commercial viability.</p>

<p>Water efficiency, by contrast, is one area where vertical farms have demonstrated a clear and measurable advantage. Hydroponic and aeroponic systems recirculate water continuously, with some operators reporting up to 95% less water usage compared to open-field agriculture. This feature makes vertical farming particularly attractive in arid regions and countries facing chronic water shortages, where the economics of water conservation can offset the higher energy costs.</p>

<p>The future of vertical farming may lie not in replacing traditional agriculture wholesale, but in occupying a specific and complementary niche. Leafy greens, microgreens, and herbs are currently the most economically viable crops for indoor cultivation, while staple crops such as wheat, rice, and maize remain far too calorie-dense and land-hungry to be profitably grown indoors at scale. Researchers are, however, investigating the viability of growing strawberries, tomatoes, and even certain varieties of fish alongside crops in integrated aquaponic systems.</p>

<p>Governments in Singapore, Japan, and the Netherlands have been among the most active in supporting the vertical farming sector, offering subsidies, grants, and favourable regulatory conditions in recognition of these nations' limited agricultural land and acute dependence on food imports. Whether vertical farming can truly scale to feed the world's cities remains an open question, but its role as part of a more resilient and diversified global food system seems increasingly assured.</p>
`;

  const questions = [
    {
      id: "ii-q1",
      type: "true_false_not_given",
      order: 1,
      text: "Vertical farms use soil as the primary growing medium.",
      options: [],
      answer: ["False"],
    },
    {
      id: "ii-q2",
      type: "true_false_not_given",
      order: 2,
      text: "Dickson Despommier was the first person to formally propose the concept of vertical farming.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q3",
      type: "true_false_not_given",
      order: 3,
      text: "Despommier predicted that a 30-storey vertical farm could supply food for 50,000 people annually.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q4",
      type: "true_false_not_given",
      order: 4,
      text: "Commercial interest in vertical farming declined significantly during the 2010s.",
      options: [],
      answer: ["False"],
    },
    {
      id: "ii-q5",
      type: "true_false_not_given",
      order: 5,
      text: "Vertical farms require pesticides to protect crops from outdoor insects.",
      options: [],
      answer: ["False"],
    },
    {
      id: "ii-q6",
      type: "true_false_not_given",
      order: 6,
      text: "The energy demands of artificial lighting are the most commonly mentioned drawback of vertical farming.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q7",
      type: "true_false_not_given",
      order: 7,
      text: "AeroFarms and Bowery Farming are both based in Europe.",
      options: [],
      answer: ["False"],
    },
    {
      id: "ii-q8",
      type: "true_false_not_given",
      order: 8,
      text: "Some vertical farms use up to 95% less water than conventional open-field agriculture.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q9",
      type: "true_false_not_given",
      order: 9,
      text: "Researchers are currently testing the commercial-scale viability of growing wheat and rice indoors.",
      options: [],
      answer: ["Not Given"],
    },
    {
      id: "ii-q10",
      type: "true_false_not_given",
      order: 10,
      text: "The governments of Singapore, Japan, and the Netherlands have provided financial support to the vertical farming industry.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q11",
      type: "true_false_not_given",
      order: 11,
      text: "Vertical farms located near cities can reduce the carbon emissions associated with food transportation.",
      options: [],
      answer: ["True"],
    },
    {
      id: "ii-q12",
      type: "true_false_not_given",
      order: 12,
      text: "Strawberries and tomatoes are currently the most profitable crops grown in vertical farms.",
      options: [],
      answer: ["Not Given"],
    },
    {
      id: "ii-q13",
      type: "true_false_not_given",
      order: 13,
      text: "All major vertical farming companies have remained financially stable despite high operating costs.",
      options: [],
      answer: ["False"],
    },
    {
      id: "ii-q14",
      type: "true_false_not_given",
      order: 14,
      text: "The passage suggests that vertical farming will eventually replace traditional agriculture entirely.",
      options: [],
      answer: ["False"],
    },
  ];

  // Delete existing test if it already exists
  await prisma.readingTest.deleteMany({ where: { id: "identifying-information-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "identifying-information-1",
      title: "Identifying Information: The Rise of Urban Vertical Farming",
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
