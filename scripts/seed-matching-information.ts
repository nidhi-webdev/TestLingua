import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding Matching Information test...");

  const passage = `
<h2>The Science of Sleep</h2>

<p><strong>A</strong>&nbsp;&nbsp;For most of human history, sleep was considered a passive and largely uneventful state — a simple suspension of consciousness that the body required for basic restoration. This view began to change dramatically in the 1950s, when American researchers Eugene Aserinsky and Nathaniel Kleitman discovered rapid eye movement (REM) sleep, a phase characterised by intense brain activity comparable to wakefulness. Their discovery prompted a fundamental reconsideration of what sleep actually is and what it accomplishes, sparking a new scientific discipline devoted entirely to its study.</p>

<p><strong>B</strong>&nbsp;&nbsp;Sleep is not uniform throughout the night. It is structured into repeating cycles, each lasting approximately 90 minutes, within which the sleeper passes through distinct stages. The first stages involve non-rapid eye movement (NREM) sleep, which progresses from light sleep into deep, slow-wave sleep. This deep NREM phase is when the body carries out most of its physical repair work — releasing growth hormone, consolidating the immune system, and restoring muscle tissue. The cycle then shifts into REM sleep, during which the brain is highly active and most vivid dreaming occurs. A typical adult will complete four to six of these cycles per night.</p>

<p><strong>C</strong>&nbsp;&nbsp;The question of why humans dream has occupied scientists and philosophers alike for centuries. Contemporary neuroscience suggests that dreaming during REM sleep plays a critical role in emotional regulation. During this phase, the brain replays and processes emotionally charged experiences from waking life, but does so in an environment free from the stress hormones — particularly noradrenaline — that were present when those experiences originally occurred. This neurochemical calm allows the brain to reprocess difficult memories and extract meaning without the accompanying emotional distress, essentially acting as an overnight form of emotional therapy.</p>

<p><strong>D</strong>&nbsp;&nbsp;Millions of people worldwide suffer from chronic sleep disorders that significantly impair their quality of life. Insomnia — the persistent inability to fall or stay asleep — is the most prevalent, affecting an estimated 10 to 30 percent of adults globally. Sleep apnoea, a condition in which breathing repeatedly stops during sleep, is another widespread disorder that is frequently underdiagnosed, particularly in middle-aged men. Narcolepsy, though far rarer, causes sudden and uncontrollable episodes of sleep during the day, dramatically disrupting normal daily functioning. These conditions are associated with elevated risks of cardiovascular disease, depression, obesity, and impaired cognitive performance.</p>

<p><strong>E</strong>&nbsp;&nbsp;The human sleep-wake cycle is governed by an internal biological clock located in the suprachiasmatic nucleus (SCN), a tiny region of the hypothalamus in the brain. This circadian rhythm operates on a cycle of approximately 24 hours and is primarily synchronised by exposure to light. In the evening, as natural light diminishes, the SCN triggers the release of melatonin from the pineal gland, signalling to the body that it is time to sleep. Disruptions to this system — caused by shift work, transmeridian travel, or prolonged exposure to artificial blue light from screens — can desynchronise the circadian rhythm and make restful sleep significantly harder to achieve.</p>

<p><strong>F</strong>&nbsp;&nbsp;The consequences of insufficient sleep are both immediate and long-term. In the short term, even a single night of poor sleep impairs attention, reaction time, decision-making, and emotional control. Research conducted at the University of Pennsylvania demonstrated that subjects restricted to six hours of sleep per night for two weeks showed cognitive deficits equivalent to those caused by two consecutive nights of total sleep deprivation — yet the subjects themselves reported feeling only slightly sleepy, suggesting that chronic sleep loss impairs a person's ability to accurately assess their own level of impairment. Over longer periods, habitual short sleep is associated with increased risks of type 2 diabetes, hypertension, and certain cancers.</p>

<p><strong>G</strong>&nbsp;&nbsp;The market for sleep aids has grown substantially in recent decades, encompassing prescription medications, over-the-counter supplements, wearable tracking devices, white noise machines, and an expanding range of digital applications. Cognitive Behavioural Therapy for Insomnia (CBT-I), however, is now widely regarded by sleep specialists as the most effective long-term treatment for chronic insomnia, outperforming pharmacological solutions in clinical trials and producing durable improvements without the risk of dependence. Wearable technology capable of monitoring sleep stages has also opened new avenues for personalised sleep coaching, though experts caution that consumer devices still lack the precision of clinical polysomnography.</p>
`;

  const paragraphLetters = ["A", "B", "C", "D", "E", "F", "G"];

  const questions = [
    {
      id: "mi-q1",
      type: "matching_information",
      order: 1,
      text: "A description of how the brain processes distressing memories during sleep without the same emotional intensity.",
      options: paragraphLetters,
      answer: ["C"],
    },
    {
      id: "mi-q2",
      type: "matching_information",
      order: 2,
      text: "A reference to a specific university study that measured the effects of reduced sleep on cognitive performance.",
      options: paragraphLetters,
      answer: ["F"],
    },
    {
      id: "mi-q3",
      type: "matching_information",
      order: 3,
      text: "An explanation of the role of a specific hormone in preparing the body for sleep.",
      options: paragraphLetters,
      answer: ["E"],
    },
    {
      id: "mi-q4",
      type: "matching_information",
      order: 4,
      text: "A mention of a sleep disorder that is commonly not detected in a particular demographic group.",
      options: paragraphLetters,
      answer: ["D"],
    },
    {
      id: "mi-q5",
      type: "matching_information",
      order: 5,
      text: "Information about how the physical repair of the body is carried out during a specific sleep phase.",
      options: paragraphLetters,
      answer: ["B"],
    },
    {
      id: "mi-q6",
      type: "matching_information",
      order: 6,
      text: "An account of the scientific discovery that changed how researchers understand the nature of sleep.",
      options: paragraphLetters,
      answer: ["A"],
    },
    {
      id: "mi-q7",
      type: "matching_information",
      order: 7,
      text: "A comparison between a therapeutic approach and medication for treating a sleep condition.",
      options: paragraphLetters,
      answer: ["G"],
    },
    {
      id: "mi-q8",
      type: "matching_information",
      order: 8,
      text: "A statement about the limitations of consumer technology compared to clinical sleep measurement methods.",
      options: paragraphLetters,
      answer: ["G"],
    },
    {
      id: "mi-q9",
      type: "matching_information",
      order: 9,
      text: "A description of the structural pattern that characterises a full night of sleep.",
      options: paragraphLetters,
      answer: ["B"],
    },
    {
      id: "mi-q10",
      type: "matching_information",
      order: 10,
      text: "An explanation of how modern technology and travel habits can interfere with natural sleep patterns.",
      options: paragraphLetters,
      answer: ["E"],
    },
    {
      id: "mi-q11",
      type: "matching_information",
      order: 11,
      text: "A mention of the long-term health risks associated with consistently getting too little sleep.",
      options: paragraphLetters,
      answer: ["F"],
    },
    {
      id: "mi-q12",
      type: "matching_information",
      order: 12,
      text: "A reference to a specific brain structure responsible for regulating the body's daily sleep cycle.",
      options: paragraphLetters,
      answer: ["E"],
    },
    {
      id: "mi-q13",
      type: "matching_information",
      order: 13,
      text: "Information about a sleep disorder that causes people to fall asleep involuntarily during daytime activities.",
      options: paragraphLetters,
      answer: ["D"],
    },
    {
      id: "mi-q14",
      type: "matching_information",
      order: 14,
      text: "A description of the historical belief about sleep that was later proved to be incomplete.",
      options: paragraphLetters,
      answer: ["A"],
    },
  ];

  // Delete existing if already seeded
  await prisma.readingTest.deleteMany({ where: { id: "matching-information-1" } });

  const test = await prisma.readingTest.create({
    data: {
      id: "matching-information-1",
      title: "Matching Information: The Science of Sleep",
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
