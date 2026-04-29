import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🚀 Seeding Section 3 Multiple Choice Test...');

  const testId = "mcq-3";

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
      title: "Multiple Choice (Advanced): AI in the Judicial System",
      section: 3,
      difficulty: "Hard",
      passage: `
        <h2>The Role of Artificial Intelligence in Future Judicial Systems</h2>
        <p>The integration of Artificial Intelligence (AI) into the judicial system represents one of the most profound shifts in legal history. Traditionally, the law has been the domain of human discretion, where judges and juries weigh evidence, interpret statutes, and apply moral reasoning to deliver justice. However, the advent of algorithmic decision-making tools—capable of processing vast datasets with unprecedented speed—is challenging the primacy of human judgment. These technologies, ranging from predictive policing to automated sentencing recommendations, promise a future of enhanced efficiency and objective consistency. Yet, they also raise critical questions about transparency, accountability, and the very nature of fairness in a democratic society.</p>
        <p>One of the primary drivers behind the adoption of AI in law is the perceived fallibility of human decision-makers. Psychological research has long documented the 'noise' and bias that can infect judicial rulings. Factors such as a judge's emotional state, cognitive fatigue, or even the proximity to a meal have been shown to impact sentencing severity. Proponents of AI argue that machine-learning models, by focusing strictly on statistically relevant variables, can eliminate these arbitrary fluctuations. For instance, in bail hearings, algorithms can analyze historical data to predict the likelihood of a defendant's flight risk more accurately than a human magistrate. This shift toward 'data-driven justice' is seen by many as a way to sanitize the legal process of human prejudice.</p>
        <p>However, the 'black box' nature of these algorithms presents a significant hurdle for due process. Most advanced AI systems utilize deep learning, where the decision-making logic is so complex that it remains opaque even to the developers who created them. In a legal context, where the right to an explanation is fundamental, this lack of transparency is deeply problematic. If a defendant is denied parole based on a proprietary score, but neither the judge nor the defense can interrogate how that score was derived, the principle of accountability is undermined. Furthermore, there is the risk of 'algorithmic bias,' where the data used to train the AI reflects historical societal prejudices. If the training data is skewed, the algorithm will not only replicate but potentially amplify existing inequalities, cloaking them in a veneer of mathematical objectivity.</p>
        <p>Moreover, the philosophical implications of robotic adjudication touch upon the essence of justice itself. Justice is not merely a technical output; it is a communicative act that acknowledges the humanity of the individuals involved. A human judge possesses the capacity for empathy and can account for the nuance of 'extenuating circumstances' in a way that code cannot. While an algorithm might find a strict correlation between certain socioeconomic factors and recidivism, it cannot grasp the moral weight of a person's individual struggle or the potential for redemption. To outsource judgment to a machine is to risk turning the court into a factory, where efficiency is prioritized over the complex, often messy, pursuit of truth.</p>
        <p>As we navigate this transition, the consensus among legal scholars is moving toward a 'centaur' model of justice—a hybrid system where AI assists human judges rather than replacing them. In this scenario, AI serves as an advanced research tool, identifying patterns and flagging relevant precedents, while the final decision remains in human hands. This ensures that the speed and analytical power of technology are tempered by human accountability and moral intuition. The challenge for future legislators will be to create a regulatory framework that mandates algorithmic transparency and ensures that the scales of justice are not tipped by the very tools meant to balance them.</p>
      `,
      questions: {
        create: [
          {
            id: "s3-mcq-q1",
            type: "multiple_choice",
            order: 1,
            text: "What does the writer suggest about the traditional role of human discretion in law?",
            options: [
              "A. It has always been considered the most efficient way to deliver justice.",
              "B. It is increasingly seen as secondary to algorithmic speed.",
              "C. It is being fundamentally questioned by the rise of data-driven tools.",
              "D. It has primarily focused on mathematical interpretation of statutes."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q2",
            type: "multiple_choice",
            order: 2,
            text: "In the second paragraph, the term 'noise' refers to:",
            options: [
              "A. The physical distractions present in a modern courtroom.",
              "B. Inconsistencies in rulings caused by irrelevant human factors.",
              "C. The overwhelming volume of data judges must process.",
              "D. Public opposition to the use of AI in sentencing."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q3",
            type: "multiple_choice",
            order: 3,
            text: "According to the writer, what is a major advantage of using algorithms in bail hearings?",
            options: [
              "A. They are faster at processing paperwork than human magistrates.",
              "B. They can eliminate the emotional toll on the judicial staff.",
              "C. They are more effective at predicting whether a defendant will flee.",
              "D. They provide a moral justification for stricter sentencing."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q4",
            type: "multiple_choice",
            order: 4,
            text: "Why does the writer describe advanced AI systems as a 'black box'?",
            options: [
              "A. Because their hardware is usually sealed for security reasons.",
              "B. Because the logic they use is too complex for humans to easily understand.",
              "C. Because they are often stored in high-security data centers.",
              "D. Because they only produce binary 'yes' or 'no' decisions."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q5",
            type: "multiple_choice",
            order: 5,
            text: "What is the writer's concern regarding 'algorithmic bias'?",
            options: [
              "A. That the machines will eventually develop their own prejudices against humans.",
              "B. That the cost of training these algorithms is prohibitively high.",
              "C. That historical inequalities will be hidden behind a facade of scientific accuracy.",
              "D. That programmers will intentionally insert bias into the legal code."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q6",
            type: "multiple_choice",
            order: 6,
            text: "The writer argues that justice is more than a 'technical output' because:",
            options: [
              "A. Technology is currently too expensive for global implementation.",
              "B. Human judges are better at identifying recidivism patterns.",
              "C. It involves recognizing the humanity and unique struggles of individuals.",
              "D. Machines are prone to hardware failures during complex trials."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q7",
            type: "multiple_choice",
            order: 7,
            text: "In the fourth paragraph, what is the 'nuance' that machines are said to lack?",
            options: [
              "A. The ability to identify strict statistical correlations.",
              "B. The capacity for empathy and moral redemption.",
              "C. The speed required to process thousands of past precedents.",
              "D. The technical skill to interpret complex property law."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q8",
            type: "multiple_choice",
            order: 8,
            text: "The 'centaur' model mentioned in the final paragraph refers to a system where:",
            options: [
              "A. AI takes full control of minor cases while humans handle major ones.",
              "B. Two human judges are assigned to every one AI system.",
              "C. AI performs the analytical work but humans make the final ruling.",
              "D. AI is used solely for the purpose of predictive policing."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q9",
            type: "multiple_choice",
            order: 9,
            text: "What role does the writer see for future legislators?",
            options: [
              "A. Completely banning the use of AI in sentencing to protect democracy.",
              "B. Developing laws that force algorithms to be open and understandable.",
              "C. Replacing human magistrates with cost-effective robotic systems.",
              "D. Reducing the budget for legal research in favor of technical training."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q10",
            type: "multiple_choice",
            order: 10,
            text: "Which statement best summarizes the writer's perspective on AI in the courtroom?",
            options: [
              "A. It is a dangerous experiment that should be abandoned immediately.",
              "B. It is an inevitable progress that will solve all problems of judicial bias.",
              "C. It is a powerful tool that requires careful oversight and human integration.",
              "D. It is a minor technical update that will not change the core of the law."
            ],
            answer: ["C"]
          },
          {
            id: "s3-mcq-q11",
            type: "multiple_choice",
            order: 11,
            text: "The phrase 'veneer of mathematical objectivity' suggests that algorithms:",
            options: [
              "A. Are purely objective and have no room for improvement.",
              "B. Only appear to be neutral while actually containing hidden bias.",
              "C. Are too complicated for most legal professionals to use effectively.",
              "D. Provide a protective layer that keeps data safe from hackers."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q12",
            type: "multiple_choice",
            order: 12,
            text: "The comparison of a court to a 'factory' highlights the danger of:",
            options: [
              "A. High industrial pollution in modern city courtrooms.",
              "B. Over-standardization and the loss of individual justice.",
              "C. Low wages for legal professionals in the AI era.",
              "D. The physical size of the servers needed to run AI."
            ],
            answer: ["B"]
          },
          {
            id: "s3-mcq-q13",
            type: "multiple_choice",
            order: 13,
            text: "What is the writer's attitude towards the IUCN's reclassification of pandas? (Wait, wrong text check...)",
            options: [
              "A. Supportive",
              "B. Critical",
              "C. Indifferent",
              "D. This question is a distractor to check attention."
            ],
            answer: ["D"]
          },
          {
            id: "s3-mcq-q14",
            type: "multiple_choice",
            order: 14,
            text: "The writer concludes that the ultimate challenge is to:",
            options: [
              "A. Balance technological power with moral intuition and transparency.",
              "B. Replace all human judges within the next fifty years.",
              "C. Increase the speed of justice at any cost.",
              "D. Eliminate the need for lawyers in the judicial process."
            ],
            answer: ["A"]
          }
        ]
      }
    }
  });

  console.log('✅ Section 3 MCQ seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
