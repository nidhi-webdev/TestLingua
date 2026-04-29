import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Writer\'s Views (Y/N/NG) Test...');

  const testId = "writers-views-3";

  // Clean up existing
  await prisma.readingQuestion.deleteMany({
    where: { readingTestId: testId }
  });
  await prisma.readingTest.deleteMany({
    where: { id: testId }
  });

  await prisma.readingTest.create({
    data: {
      id: testId,
      title: "Identifying Writer's Views: Universal Basic Income",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Socio-Economic Impact of Universal Basic Income</h2>
        <p>The concept of Universal Basic Income (UBI)—a periodic cash payment delivered to all on an individual basis, without means test or work requirement—has migrated from the fringes of economic theory to the heart of mainstream political discourse. As automation and artificial intelligence threaten to disrupt traditional labor markets, proponents argue that UBI provides a necessary safety net, decoupling survival from employment. However, the implementation of such a radical policy remains one of the most contentious issues in contemporary economics, pitting visions of social liberation against fears of fiscal catastrophe and moral hazard.</p>
        <p>Historically, the idea of a guaranteed income can be traced back to thinkers like Thomas Paine and, more recently, Martin Luther King Jr. In the modern context, the primary justification is often centered on the 'Fourth Industrial Revolution.' If machines can perform tasks more efficiently than humans, the argument goes, wealth will increasingly concentrate in the hands of those who own the technology, while the working class faces stagnant wages or permanent displacement. UBI is presented as a mechanism to redistribute this 'automation dividend,' ensuring that the benefits of technological progress are shared across society. This perspective assumes that work, in its current form, is no longer a reliable vehicle for social stability.</p>
        <p>Critics, however, point to the staggering cost of such programs. Financing a meaningful UBI would require a massive overhaul of the tax system, potentially leading to higher income taxes or the introduction of substantial carbon or data taxes. Economists like Milton Friedman once flirted with the idea of a 'negative income tax,' but the scale of a truly universal program is unprecedented. There is also the psychological concern of 'labor supply response.' Opponents fear that if people are given money for doing nothing, they will lose the incentive to work, leading to a decrease in national productivity and a sense of purposelessness among the citizenry. Yet, pilot programs in countries like Finland and Canada suggest that while some people do reduce their working hours, many use the financial security to pursue education, caregiving, or entrepreneurial ventures.</p>
        <p>The writer believes that the debate over UBI often ignores the fundamental question of human dignity. For many, work is not just a source of income but a source of identity and social connection. Replacing a job with a check might solve the problem of poverty, but it does not necessarily solve the problem of social alienation. A UBI that is not accompanied by a reimagining of social contribution risks creating a class of 'the economically irrelevant.' Therefore, any successful transition to a UBI model must also involve a broader cultural shift that values unpaid labor—such as parenting, art, and community service—as much as traditional employment. Without this shift, UBI may simply be a palliative for a decaying social contract rather than a cure for inequality.</p>
      `,
      questions: {
        create: [
          {
            id: "s3-wv-q1",
            type: "yes_no_not_given",
            order: 1,
            text: "Universal Basic Income has only recently been discussed by economists.",
            options: [],
            answer: ["No"]
          },
          {
            id: "s3-wv-q2",
            type: "yes_no_not_given",
            order: 2,
            text: "Proponents of UBI see it as a way to separate the ability to survive from having a job.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q3",
            type: "yes_no_not_given",
            order: 3,
            text: "The 'Fourth Industrial Revolution' is expected to increase the gap between tech owners and workers.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q4",
            type: "yes_no_not_given",
            order: 4,
            text: "Most governments currently agree that UBI is the best solution for automation.",
            options: [],
            answer: ["Not Given"]
          },
          {
            id: "s3-wv-q5",
            type: "yes_no_not_given",
            order: 5,
            text: "Financing UBI would likely require changes to how taxes are collected.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q6",
            type: "yes_no_not_given",
            order: 6,
            text: "Milton Friedman was the first economist to suggest a universal payment system.",
            options: [],
            answer: ["Not Given"]
          },
          {
            id: "s3-wv-q7",
            type: "yes_no_not_given",
            order: 7,
            text: "There is evidence that UBI causes a significant number of people to stop working entirely.",
            options: [],
            answer: ["No"]
          },
          {
            id: "s3-wv-q8",
            type: "yes_no_not_given",
            order: 8,
            text: "Participants in the Finnish pilot program reported higher levels of happiness.",
            options: [],
            answer: ["Not Given"]
          },
          {
            id: "s3-wv-q9",
            type: "yes_no_not_given",
            order: 9,
            text: "The writer argues that providing money is not enough to ensure a sense of purpose.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q10",
            type: "yes_no_not_given",
            order: 10,
            text: "Work is purely a financial transaction for the majority of people.",
            options: [],
            answer: ["No"]
          },
          {
            id: "s3-wv-q11",
            type: "yes_no_not_given",
            order: 11,
            text: "A UBI system might lead to some people feeling disconnected from society.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q12",
            type: "yes_no_not_given",
            order: 12,
            text: "Parenting and art should be given more recognition in a post-UBI society.",
            options: [],
            answer: ["Yes"]
          },
          {
            id: "s3-wv-q13",
            type: "yes_no_not_given",
            order: 13,
            text: "Universal Basic Income is definitely the cure for all forms of social inequality.",
            options: [],
            answer: ["No"]
          },
          {
            id: "s3-wv-q14",
            type: "yes_no_not_given",
            order: 14,
            text: "The writer believes UBI will fail if we do not change how we define 'contribution'.",
            options: [],
            answer: ["Yes"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 Writer\'s Views seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
