import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Matching Headings test...");

  const passage = `
<h2>The Future of Transportation</h2>

<p><strong>A</strong>&nbsp;&nbsp;The world is on the brink of a mobility revolution. For over a century, the internal combustion engine has dominated our roads, but its reign is finally being challenged. The transition to electric vehicles (EVs) is no longer a distant possibility; it is an accelerating reality. Governments around the world are setting ambitious targets to phase out petrol and diesel cars, while automotive manufacturers are investing billions in battery technology and infrastructure. This shift is driven by a dual necessity: the urgent need to reduce carbon emissions and the desire for quieter, more efficient urban environments.</p>

<p><strong>B</strong>&nbsp;&nbsp;Beyond the shift in power sources, the way we interact with vehicles is also undergoing a radical transformation. Autonomous driving technology, once the stuff of science fiction, is making steady progress. From advanced driver-assistance systems (ADAS) in today's luxury cars to fully self-driving prototypes being tested on city streets, the goal is clear: to eliminate human error, which is responsible for the vast majority of road accidents. While technical and regulatory hurdles remain, the potential for safer, more predictable traffic flow is immense.</p>

<p><strong>C</strong>&nbsp;&nbsp;Another significant trend is the move away from individual car ownership toward 'Mobility as a Service' (MaaS). In many densely populated cities, owning a car is increasingly seen as a burden rather than a status symbol. Car-sharing platforms, ride-hailing services, and integrated public transport apps are allowing people to pay for the trips they need without the costs of maintenance, insurance, and parking. This shift has the potential to drastically reduce the number of vehicles on the road, freeing up valuable urban space for parks and pedestrian zones.</p>

<p><strong>D</strong>&nbsp;&nbsp;However, the revolution is not limited to the ground. Researchers and startups are looking to the skies to solve urban congestion. Urban Air Mobility (UAM), featuring electric vertical take-off and landing (eVTOL) aircraft, aims to provide rapid, point-to-point transportation over congested metropolitan areas. While the challenges of air traffic control, noise pollution, and public acceptance are significant, the prospect of 'flying taxis' is moving from the realm of fantasy into flight testing and certification phases.</p>

<p><strong>E</strong>&nbsp;&nbsp;The infrastructure supporting these changes must also evolve. Smart cities are being designed with sensors and data-driven systems to manage traffic in real-time. Smart charging grids will be essential to handle the increased load from millions of EVs, while dedicated lanes for autonomous vehicles could optimize efficiency. This interconnectedness promises a more seamless travel experience, but it also raises critical questions about data privacy and the security of critical transportation networks.</p>

<p><strong>F</strong>&nbsp;&nbsp;Finally, the environmental impact of this revolution extends beyond tailpipe emissions. The manufacturing process for batteries requires significant amounts of lithium, cobalt, and other minerals, raising concerns about ethical mining practices and resource scarcity. Developing a robust circular economy for battery recycling will be crucial to ensuring that the green transport revolution is truly sustainable. Without a focus on the entire lifecycle of vehicles, we risk simply shifting our environmental problems from the air to the ground.</p>

<p><strong>G</strong>&nbsp;&nbsp;Policy and regulation will play a decisive role in shaping the speed and direction of these changes. Governments must balance the need for innovation with the protection of public safety and labor rights. For instance, the rise of autonomous trucks could displace millions of professional drivers, necessitating large-scale retraining programs. Striking the right balance between market forces and social responsibility is perhaps the greatest challenge facing policymakers in the coming decade.</p>

<p><strong>H</strong>&nbsp;&nbsp;Ultimately, the transition to a new era of mobility is as much about cultural change as it is about engineering. For decades, the car has been a symbol of personal freedom and adulthood. Convincing people to give up their steering wheels or share their journeys requires a shift in mindset. As younger generations prioritize convenience and sustainability over ownership, the psychological landscape of transportation is shifting, paving the way for a world where movement is seamless, shared, and significantly more sustainable.</p>
`;

  const headings = [
    "i. The ethical cost of green technology",
    "ii. A shift in how we pay for travel",
    "iii. The role of data in modern mobility",
    "iv. Moving from ground to air to bypass traffic",
    "v. The end of the era of petrol and diesel",
    "vi. Challenges in maintaining autonomous systems",
    "vii. Improving road safety through technology",
    "viii. The impact of urban planning on car ownership",
    "ix. New power sources for a cleaner future",
    "x. The importance of government oversight",
    "xi. A psychological shift in travel habits"
  ];

  const questions = [
    { id: "mh-q1", type: "matching_headings",
      order: 1, text: "Paragraph A", options: headings, answer: ["v"] },
    { id: "mh-q2", type: "matching_headings",
      order: 2, text: "Paragraph B", options: headings, answer: ["vii"] },
    { id: "mh-q3", type: "matching_headings",
      order: 3, text: "Paragraph C", options: headings, answer: ["ii"] },
    { id: "mh-q4", type: "matching_headings",
      order: 4, text: "Paragraph D", options: headings, answer: ["iv"] },
    { id: "mh-q5", type: "matching_headings",
      order: 5, text: "Paragraph E", options: headings, answer: ["iii"] },
    { id: "mh-q6", type: "matching_headings",
      order: 6, text: "Paragraph F", options: headings, answer: ["i"] },
    { id: "mh-q7", type: "matching_headings",
      order: 7, text: "Paragraph G", options: headings, answer: ["x"] },
    { id: "mh-q8", type: "matching_headings",
      order: 8, text: "Paragraph H", options: headings, answer: ["xi"] }
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "matching-headings-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "matching-headings-1",
      title: "Matching Headings: The Future of Transportation",
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
