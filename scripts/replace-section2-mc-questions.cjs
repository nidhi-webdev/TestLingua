const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2] || '';
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

// New harder multiple-choice questions for Skara Brae test
const harderMCQuestions = [
  {
    id: 'q1-2',
    text: 'The author\'s portrayal of the 1850 storm emphasizes which of the following aspects?',
    options: [
      'A. The destructive power of natural forces paradoxically revealing historical treasures',
      'B. The severity of weather patterns in the Orkney Islands compared to the mainland',
      'C. The danger posed to early archaeological efforts in harsh coastal environments',
      'D. The need for protective structures to preserve newly discovered sites'
    ],
    answer: 'A'
  },
  {
    id: 'q2-2',
    text: 'The transition from William Watt\'s amateur excavation to Professor Childe\'s professional work implies which concern?',
    options: [
      'A. Amateur archaeologists lack the necessary funding for comprehensive excavations',
      'B. Proper preservation and systematic documentation require specialized expertise',
      'C. The site\'s location made it difficult to access without professional equipment',
      'D. Local inhabitants were unable to properly identify the historical significance'
    ],
    answer: 'B'
  },
  {
    id: 'q3-2',
    text: 'Why might the author have specifically mentioned that Childe\'s work was "meticulous"?',
    options: [
      'A. To contrast with Watt\'s excavation techniques',
      'B. To emphasize the precision required to preserve delicate artifacts',
      'C. To suggest that previous excavations had damaged the site',
      'D. To indicate that professional archaeologists work slowly and cautiously'
    ],
    answer: 'A'
  },
  {
    id: 'q4-2',
    text: 'The passage argues that Skara Brae\'s construction materials reflect which underlying condition?',
    options: [
      'A. The inhabitants\' limited access to timber resources and resulting technological adaptation',
      'B. A deliberate aesthetic choice to distinguish the settlement from nearby communities',
      'C. Superior engineering knowledge passed down through generations',
      'D. Trade relationships that provided access to quality stone materials'
    ],
    answer: 'A'
  },
  {
    id: 'q5-2',
    text: 'The reference to artifacts such as "intricately carved stone balls" and "grooved ware pottery" serves primarily to:',
    options: [
      'A. Establish that the inhabitants possessed sophisticated artistic and technical skills',
      'B. Provide examples of objects that can be scientifically dated to verify the site\'s age',
      'C. Demonstrate the variety of materials available in the Orkney Islands',
      'D. Illustrate the religious or ceremonial practices of Neolithic communities'
    ],
    answer: 'A'
  },
  {
    id: 'q6-2',
    text: 'The passage\'s discussion of theories about Skara Brae\'s abandonment suggests that:',
    options: [
      'A. The discovery of a necklace definitively proves a sudden evacuation occurred',
      'B. Early interpretations often reflected incomplete evidence and modern understanding has evolved',
      'C. Environmental catastrophes are more likely to cause site abandonment than gradual decline',
      'D. Archaeologists have reached unanimous agreement on the causes of depopulation'
    ],
    answer: 'B'
  },
  {
    id: 'q7-2',
    text: 'What does the stone "dresser" in each dwelling suggest about Skara Brae\'s inhabitants?',
    options: [
      'A. They prioritized practical utility over aesthetic considerations in architecture',
      'B. They valued the public display of possessions and maintained organized domestic spaces',
      'C. They followed specific religious practices requiring ornamental stone structures',
      'D. They lacked the knowledge to construct more sophisticated furniture forms'
    ],
    answer: 'B'
  },
  {
    id: 'q8-2',
    text: 'The author\'s mention of a "primitive but effective drainage system" and individual toilets primarily serves to:',
    options: [
      'A. Demonstrate that sanitation technology originated in Neolithic societies',
      'B. Contrast the civilized nature of Skara Brae with the commonly held view of prehistoric peoples',
      'C. Explain why the site survived longer than other Neolithic settlements',
      'D. Indicate that the inhabitants had knowledge of early engineering principles'
    ],
    answer: 'B'
  },
  {
    id: 'q9-2',
    text: 'The passage implies that modern consensus differs from earlier theories about abandonment because:',
    options: [
      'A. New artifacts were discovered that contradicted previous assumptions',
      'B. Environmental and climatic evidence suggests a process rather than a single catastrophic event',
      'C. The site\'s significance has been recognized internationally as a UNESCO World Heritage site',
      'D. Contemporary researchers have more advanced tools than previous generations'
    ],
    answer: 'B'
  },
  {
    id: 'q10-2',
    text: 'The passage suggests that the inhabitants\' decision to use stone for furniture, walls, and tools reflects:',
    options: [
      'A. A preference for durable materials that would withstand harsh weather',
      'B. Limited options due to environmental constraints necessitating creative utilization of available resources',
      'C. Superior knowledge of construction methods compared to contemporary societies',
      'D. Spiritual or cultural beliefs that elevated stone as a sacred building material'
    ],
    answer: 'B'
  },
  {
    id: 'q11-2',
    text: 'According to the passage, how do the artifacts found at Skara Brae challenge previous assumptions about prehistoric societies?',
    options: [
      'A. They prove that primitive people had mastered advanced construction techniques',
      'B. They indicate a sophisticated, organized society with specialized skills and cultural values',
      'C. They demonstrate that Neolithic communities engaged in extensive trade networks',
      'D. They reveal religious practices more complex than those of later civilizations'
    ],
    answer: 'B'
  },
  {
    id: 'q12-2',
    text: 'The comparison to Stonehenge and Egyptian pyramids in the final paragraph suggests that Skara Brae represents:',
    options: [
      'A. Superior architectural achievements compared to other Neolithic structures',
      'B. Evidence of an advanced civilization that predates commonly recognized early civilizations',
      'C. A contemporary settlement that existed alongside other famous ancient structures',
      'D. Earlier evidence of organized society and cultural sophistication than typically assumed'
    ],
    answer: 'D'
  },
  {
    id: 'q13-2',
    text: 'What can be inferred about why stone beds were deliberately incorporated into each house design?',
    options: [
      'A. Stone provided better insulation than alternative materials available at the time',
      'B. The inhabitants lacked knowledge of constructing wood-framed beds',
      'C. Permanent, movable-yet-durable sleeping structures reflected both practical needs and domestic planning',
      'D. Religious requirements mandated that sleeping areas be constructed from the same material as walls'
    ],
    answer: 'C'
  },
  {
    id: 'q14-2',
    text: 'The passage\'s overall structure suggests that the site\'s significance lies primarily in:',
    options: [
      'A. Its role in establishing the historical timeline of prehistoric Scotland',
      'B. The quantity and quality of artifacts discovered within its boundaries',
      'C. Its unique preservation providing direct evidence of sophisticated Neolithic domestic life and social organization',
      'D. The international recognition it has achieved through UNESCO World Heritage designation'
    ],
    answer: 'C'
  }
];

(async function main() {
  try {
    console.log('Loading env...');
    loadEnv();
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      console.error('DATABASE_URL not set');
      process.exit(1);
    }

    const client = new Client({ connectionString });
    await client.connect();
    console.log('Connected. Replacing Section 2 multiple-choice questions...');

    // Only update test 1-2 (Skara Brae) with new harder questions
    const testId = '1-2';
    
    for (const newQuestion of harderMCQuestions) {
      // Check if question exists
      const exists = await client.query(
        'SELECT id FROM "ReadingQuestion" WHERE id = $1 AND "readingTestId" = $2',
        [newQuestion.id, testId]
      );

      if (exists.rowCount === 0) {
        console.warn(`  Question ${newQuestion.id} not found in test ${testId}, skipping`);
        continue;
      }

      // Update the question with new text and options
      await client.query(
        'UPDATE "ReadingQuestion" SET text = $1, options = $2, answer = $3 WHERE id = $4 AND "readingTestId" = $5',
        [
          newQuestion.text,
          newQuestion.options,
          newQuestion.answer,
          newQuestion.id,
          testId
        ]
      );

      console.log(`  ✓ Updated ${newQuestion.id}: "${newQuestion.text.substring(0, 60)}..."`);
    }

    console.log('\n✓ Section 2 multiple-choice questions replaced with harder versions.');
    console.log('  Other question types remain unchanged.');
    await client.end();
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 1;
  }
})();
