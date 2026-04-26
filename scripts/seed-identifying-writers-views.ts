import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Identifying Writer's Views test...");

  const passage = `
<h2>The Remote Work Revolution: A Permanent Shift or a Passing Trend?</h2>

<p>Few developments in recent memory have reshaped the nature of professional life as profoundly as the widespread adoption of remote work. What began as an emergency response to the global pandemic of 2020 has, in the view of many commentators, evolved into a permanent and largely welcome transformation of the modern workplace. I believe that this shift, managed correctly, represents not merely a logistical adjustment but a fundamental improvement in the relationship between employers and employees — one that society should actively seek to preserve and build upon.</p>

<p>The evidence in favour of remote work is, to my mind, compelling. Numerous independent studies have documented significant improvements in worker productivity, satisfaction, and mental health when employees are given the autonomy to work from home. Freed from the tyranny of the daily commute, workers can reclaim hours that would otherwise be lost to crowded trains and traffic jams, investing that time in family, exercise, or creative pursuits. The suggestion, made by some traditionalist managers, that productivity inevitably suffers without physical supervision strikes me as not only empirically unsupported but as a revealing sign of an outdated and distrustful management philosophy.</p>

<p>Naturally, remote work is not without its genuine complications, and I would be dishonest to pretend otherwise. Loneliness and professional isolation are real risks, particularly for younger employees who are still building their networks and professional identities. In-person collaboration, I concede, does offer something that video calls cannot entirely replicate: the spontaneous, informal exchange of ideas that often generates the most creative solutions. However, these shortcomings should be addressed through thoughtful hybrid policies rather than used as a blanket justification for a return to five-day office attendance.</p>

<p>The environmental case for remote work is, I believe, even more straightforward. Fewer commuters mean fewer cars on the road, less aviation for short-haul business travel, and reduced energy consumption in large corporate office buildings. Critics who argue that remote work leads to higher home energy usage are, in my judgement, overstating a relatively minor effect while ignoring the much larger aggregate benefits of reduced transportation emissions. Governments that are serious about meeting their climate targets would do well to formalise the right to work remotely in employment legislation, rather than treating it as a discretionary perk.</p>

<p>The real estate industry, understandably, views this transformation with considerable anxiety, and the decline of city-centre office districts is a concern that deserves genuine policy attention. I do not dismiss these anxieties, but I would argue that the reinvention of commercial real estate into housing, community spaces, or mixed-use developments represents an opportunity rather than a catastrophe. Cities that embrace this reinvention creatively may, in time, become more liveable, more equitable, and more vibrant than they were when dominated by office towers.</p>

<p>Those who argue that remote work disadvantages certain groups — particularly women, who disproportionately shoulder domestic responsibilities — raise a point I take seriously. It would be naive to assume that working from home automatically creates a level playing field. Yet the solution, I maintain, lies in broader social reforms, including better childcare provision and more equitable sharing of domestic labour, rather than in abandoning a working model that offers genuine advantages to the majority.</p>

<p>In conclusion, I am firmly convinced that the remote work revolution represents one of the most positive, if unexpected, legacies of a deeply difficult period in global history. Resisting it out of habit, institutional inertia, or misplaced nostalgia for the pre-pandemic office would, in my view, be a profound mistake. The challenge now is not whether to accept remote work, but how to make it work equitably and sustainably for everyone.</p>
`;

  const questions = [
    {
      id: "iwv-q1",
      type: "true_false_not_given",
      text: "The writer believes that remote work is a beneficial development that society should try to maintain.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q2",
      type: "true_false_not_given",
      text: "The writer thinks the argument that productivity falls without physical supervision is outdated.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q3",
      type: "true_false_not_given",
      text: "The writer agrees that video calls are a perfectly adequate substitute for all forms of in-person collaboration.",
      options: [],
      answer: "No",
    },
    {
      id: "iwv-q4",
      type: "true_false_not_given",
      text: "The writer believes that the problems of professional isolation justify a full return to office-based work.",
      options: [],
      answer: "No",
    },
    {
      id: "iwv-q5",
      type: "true_false_not_given",
      text: "The writer considers the environmental benefits of remote work to be stronger than its workplace benefits.",
      options: [],
      answer: "Not Given",
    },
    {
      id: "iwv-q6",
      type: "true_false_not_given",
      text: "The writer feels that critics who emphasise the home energy costs of remote work are exaggerating the issue.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q7",
      type: "true_false_not_given",
      text: "The writer believes governments should legally protect the right to work remotely.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q8",
      type: "true_false_not_given",
      text: "The writer thinks the decline of city-centre office districts is entirely positive and has no drawbacks.",
      options: [],
      answer: "No",
    },
    {
      id: "iwv-q9",
      type: "true_false_not_given",
      text: "The writer considers the transformation of office buildings into residential or community spaces to be an opportunity.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q10",
      type: "true_false_not_given",
      text: "The writer believes remote work automatically solves gender inequality in the workplace.",
      options: [],
      answer: "No",
    },
    {
      id: "iwv-q11",
      type: "true_false_not_given",
      text: "The writer suggests that childcare reform is a more appropriate solution to gender imbalances than abandoning remote work.",
      options: [],
      answer: "Yes",
    },
    {
      id: "iwv-q12",
      type: "true_false_not_given",
      text: "The writer is opposed to any form of hybrid working arrangement.",
      options: [],
      answer: "No",
    },
    {
      id: "iwv-q13",
      type: "true_false_not_given",
      text: "The writer believes that younger employees benefit more from remote work than older, more experienced workers.",
      options: [],
      answer: "Not Given",
    },
    {
      id: "iwv-q14",
      type: "true_false_not_given",
      text: "The writer views resistance to remote work driven by habit and nostalgia as a serious error.",
      options: [],
      answer: "Yes",
    },
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "identifying-writers-views-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "identifying-writers-views-1",
      title: "Identifying Writer's Views: The Remote Work Revolution",
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
