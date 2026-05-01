export interface ListeningQuestion {
  id: string;
  section: number;
  type: "multiple_choice" | "matching" | "completion" | "short_answer";
  text: string;
  options?: string[];
  answer: string[];
  order: number;
  transcript?: string;
}

export interface ListeningTest {
  id: string;
  title: string;
  difficulty: string;
  audioUrl: string;
  transcript: string;
  sections: number;
  questions: ListeningQuestion[];
}

const type4Transcript = `
RECEPTIONIST: Good afternoon. Greenway Sports Centre, membership desk.

CALLER: Hello. I'm a new student and I'd like to join the gym.

RECEPTIONIST: Of course. May I have your name, please?

CALLER: Yes, it's Daniel Green.

RECEPTIONIST: Thank you, Daniel. Which membership are you interested in?

CALLER: The student monthly membership, if that's available.

RECEPTIONIST: Yes, it is. Have you used the centre before?

CALLER: No, this will be my first time.

RECEPTIONIST: That's fine. For the form, could I check your contact number?

CALLER: It's 07149 632814.

RECEPTIONIST: Thank you. And your email address?

CALLER: daniel.green@example.com.

RECEPTIONIST: Great. We also ask for the reason you want to join.

CALLER: Mainly to keep fit during term time.

RECEPTIONIST: Good. Do you need access to any particular facilities?

CALLER: I'd like to use the swimming pool as well.

RECEPTIONIST: Noted. The monthly fee is 28 pounds, and the joining fee is 12 pounds.

CALLER: Okay. How do I pay?

RECEPTIONIST: You can pay by card or bank transfer.

CALLER: Card would be easiest.

RECEPTIONIST: Perfect. I'll reserve the membership and email the form to you now.

CALLER: Thank you very much.

RECEPTIONIST: You're welcome.
`;

const type6Transcript = `
PRESENTER: Hello everyone. Before we start the campus volunteer programme, I'll give you a few details about the schedule.

CALLER: Excuse me, could I ask a question?

PRESENTER: Of course. What would you like to know?

CALLER: First, where do volunteers meet on Monday morning?

PRESENTER: In the Old Library, room B14.

CALLER: Thank you. And what time should we arrive?

PRESENTER: Please be there by 8.30 a.m.

CALLER: Fine. How long does the first session last?

PRESENTER: Until 11 o'clock.

CALLER: Will we get a break?

PRESENTER: Yes, a short tea break at around ten.

CALLER: Great. What should we bring with us?

PRESENTER: Just a notebook and a pen.

CALLER: Who will lead the training?

PRESENTER: Dr Helen Ward will introduce the programme, and Sarah Malik will supervise the group work.

CALLER: Right. Is there a dress code?

PRESENTER: Comfortable clothes are fine, but please wear your volunteer badge.

CALLER: Understood. And when does the programme finish?

PRESENTER: At the end of the term, in late June.

CALLER: Thank you. That's clear.

PRESENTER: You're welcome.
`;

const type4Test: ListeningTest = {
  id: "listening-type-4",
  title: "Sports Centre Membership Form",
  difficulty: "Easy",
  audioUrl: "https://example.com/listening-section-1-type-4.mp3",
  transcript: type4Transcript,
  sections: 1,
  questions: [
    {
      id: "l4q1",
      section: 1,
      type: "completion",
      text: "Name: _______________",
      answer: ["Daniel Green"],
      order: 1,
      transcript: "CALLER: Yes, it's Daniel Green."
    },
    {
      id: "l4q2",
      section: 1,
      type: "completion",
      text: "Membership type: _______________ membership",
      answer: ["student monthly"],
      order: 2,
      transcript: "CALLER: The student monthly membership, if that's available."
    },
    {
      id: "l4q3",
      section: 1,
      type: "completion",
      text: "Contact number: _______________",
      answer: ["07149 632814"],
      order: 3,
      transcript: "CALLER: It's 07149 632814."
    },
    {
      id: "l4q4",
      section: 1,
      type: "completion",
      text: "Email address: _______________",
      answer: ["daniel.green@example.com"],
      order: 4,
      transcript: "CALLER: daniel.green@example.com."
    },
    {
      id: "l4q5",
      section: 1,
      type: "completion",
      text: "Reason for joining: to keep fit during _______________",
      answer: ["term time"],
      order: 5,
      transcript: "CALLER: Mainly to keep fit during term time."
    },
    {
      id: "l4q6",
      section: 1,
      type: "completion",
      text: "Facility wanted: swimming _______________",
      answer: ["pool"],
      order: 6,
      transcript: "CALLER: I'd like to use the swimming pool as well."
    },
    {
      id: "l4q7",
      section: 1,
      type: "completion",
      text: "Monthly fee: _______________ pounds",
      answer: ["28"],
      order: 7,
      transcript: "RECEPTIONIST: The monthly fee is 28 pounds, and the joining fee is 12 pounds."
    },
    {
      id: "l4q8",
      section: 1,
      type: "completion",
      text: "Joining fee: _______________ pounds",
      answer: ["12"],
      order: 8,
      transcript: "RECEPTIONIST: The monthly fee is 28 pounds, and the joining fee is 12 pounds."
    },
    {
      id: "l4q9",
      section: 1,
      type: "multiple_choice",
      text: "How can the caller pay?",
      options: [
        "A. Cash only",
        "B. Card or bank transfer",
        "C. Cheque only"
      ],
      answer: ["B"],
      order: 9,
      transcript: "RECEPTIONIST: You can pay by card or bank transfer."
    },
    {
      id: "l4q10",
      section: 1,
      type: "short_answer",
      text: "What will the receptionist do next?",
      answer: ["email the form", "email the membership form", "send the form by email"],
      order: 10,
      transcript: "RECEPTIONIST: I'll reserve the membership and email the form to you now."
    }
  ]
};

const type6Test: ListeningTest = {
  id: "listening-type-6",
  title: "Campus Volunteer Briefing",
  difficulty: "Easy",
  audioUrl: "https://example.com/listening-section-1-type-6.mp3",
  transcript: type6Transcript,
  sections: 1,
  questions: [
    {
      id: "l6q1",
      section: 1,
      type: "short_answer",
      text: "Where do volunteers meet on Monday morning?",
      answer: ["Old Library, room B14", "room B14", "the Old Library"],
      order: 1,
      transcript: "PRESENTER: In the Old Library, room B14."
    },
    {
      id: "l6q2",
      section: 1,
      type: "short_answer",
      text: "What time should volunteers arrive?",
      answer: ["8.30 a.m.", "8:30 a.m.", "8.30"],
      order: 2,
      transcript: "PRESENTER: Please be there by 8.30 a.m."
    },
    {
      id: "l6q3",
      section: 1,
      type: "short_answer",
      text: "How long does the first session last?",
      answer: ["11 o'clock", "11 o'clock in the morning", "11"],
      order: 3,
      transcript: "PRESENTER: Until 11 o'clock."
    },
    {
      id: "l6q4",
      section: 1,
      type: "short_answer",
      text: "What short break will there be?",
      answer: ["tea break", "a short tea break"],
      order: 4,
      transcript: "PRESENTER: Yes, a short tea break at around ten."
    },
    {
      id: "l6q5",
      section: 1,
      type: "short_answer",
      text: "What should volunteers bring?",
      answer: ["notebook and a pen", "a notebook and a pen", "notebook and pen"],
      order: 5,
      transcript: "PRESENTER: Just a notebook and a pen."
    },
    {
      id: "l6q6",
      section: 1,
      type: "short_answer",
      text: "Who will introduce the programme?",
      answer: ["Dr Helen Ward", "Helen Ward"],
      order: 6,
      transcript: "PRESENTER: Dr Helen Ward will introduce the programme."
    },
    {
      id: "l6q7",
      section: 1,
      type: "short_answer",
      text: "Who will supervise the group work?",
      answer: ["Sarah Malik"],
      order: 7,
      transcript: "PRESENTER: ...and Sarah Malik will supervise the group work."
    },
    {
      id: "l6q8",
      section: 1,
      type: "short_answer",
      text: "What should volunteers wear?",
      answer: ["volunteer badge", "a volunteer badge"],
      order: 8,
      transcript: "PRESENTER: ...please wear your volunteer badge."
    },
    {
      id: "l6q9",
      section: 1,
      type: "short_answer",
      text: "What clothing is acceptable?",
      answer: ["comfortable clothes", "comfortable clothes are fine"],
      order: 9,
      transcript: "PRESENTER: Comfortable clothes are fine..."
    },
    {
      id: "l6q10",
      section: 1,
      type: "short_answer",
      text: "When does the programme finish?",
      answer: ["late June", "the end of the term"],
      order: 10,
      transcript: "PRESENTER: At the end of the term, in late June."
    }
  ]
};

const type3Transcript = `
TOUR GUIDE: Good morning, everyone. Welcome to the Central Community Centre. Today I'm going to show you around our brand new facility. We've just completed the renovations last month.

As you can see from the floor plan, the building is arranged over two levels. Let me explain what's on the ground floor first. When you enter through the main entrance, you'll notice the reception area on your left. That's where you can collect your visitor pass and get information about our facilities.

Moving to your right from the entrance, you'll find the fitness studio. It's a large, bright space with floor-to-ceiling windows overlooking the garden. We've equipped it with the latest exercise equipment and mirrors along the walls.

Behind the fitness studio, we have the swimming pool. It's Olympic-sized and heated to 28 degrees Celsius. The pool area also includes a shallow children's area which is perfect for swimming lessons.

Now, if you continue straight ahead from the reception, you'll reach the library. It's a quiet space for reading and studying. We have computers available there as well, in case you need internet access.

On the left side of the building, near the library, you'll see the café. It's got a large outdoor terrace where you can relax with a coffee. The café serves light lunches and refreshments throughout the day.

To the right of the library, there's the dance studio. It's equipped with mirrors, a sound system, and a sprung floor to protect your joints during classes.

In the far corner, next to the swimming pool, we have the physiotherapy clinic. This is staffed by qualified physiotherapists who can help with injuries or provide fitness advice.

On the upper floor, we have the seminar rooms. There are four seminar rooms available for rent for meetings, workshops, or classes. They're all equipped with projectors and conference phones.

Also on the upper floor, you'll find the lounge bar. It's a comfortable space with comfortable seating and a great view over the park.

And finally, the games room is located in the centre of the upper floor. It has table tennis, pool tables, and board games. It's very popular with our members.

So, that's our facility. I hope you'll enjoy exploring the centre. Does anyone have any questions?
`;

const type3Test: ListeningTest = {
  id: "listening-type-3",
  title: "Central Community Centre Floor Plan",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-2-type-3.mp3",
  transcript: type3Transcript,
  sections: 2,
  questions: [
    {
      id: "l3q1",
      section: 2,
      type: "completion",
      text: "Location 1 (ground floor, left of entrance): _______________",
      answer: ["reception area", "reception"],
      order: 1,
      transcript: "you'll notice the reception area on your left. That's where you can collect your visitor pass"
    },
    {
      id: "l3q2",
      section: 2,
      type: "completion",
      text: "Location 2 (ground floor, right side): _______________",
      answer: ["fitness studio", "fitness"],
      order: 2,
      transcript: "Moving to your right from the entrance, you'll find the fitness studio."
    },
    {
      id: "l3q3",
      section: 2,
      type: "completion",
      text: "Location 3 (ground floor, behind fitness studio): _______________",
      answer: ["swimming pool", "pool"],
      order: 3,
      transcript: "Behind the fitness studio, we have the swimming pool. It's Olympic-sized"
    },
    {
      id: "l3q4",
      section: 2,
      type: "completion",
      text: "Location 4 (ground floor, straight ahead): _______________",
      answer: ["library"],
      order: 4,
      transcript: "if you continue straight ahead from the reception, you'll reach the library."
    },
    {
      id: "l3q5",
      section: 2,
      type: "completion",
      text: "Location 5 (ground floor, left of library): _______________",
      answer: ["café"],
      order: 5,
      transcript: "On the left side of the building, near the library, you'll see the café."
    },
    {
      id: "l3q6",
      section: 2,
      type: "completion",
      text: "Location 6 (ground floor, right of library): _______________",
      answer: ["dance studio", "dance"],
      order: 6,
      transcript: "To the right of the library, there's the dance studio."
    },
    {
      id: "l3q7",
      section: 2,
      type: "completion",
      text: "Location 7 (ground floor, far corner): _______________",
      answer: ["physiotherapy clinic", "physiotherapy"],
      order: 7,
      transcript: "In the far corner, next to the swimming pool, we have the physiotherapy clinic."
    },
    {
      id: "l3q8",
      section: 2,
      type: "completion",
      text: "Location 8 (upper floor, centre): _______________",
      answer: ["games room", "games"],
      order: 8,
      transcript: "the games room is located in the centre of the upper floor. It has table tennis, pool tables"
    },
    {
      id: "l3q9",
      section: 2,
      type: "completion",
      text: "Location 9 (upper floor): _______________",
      answer: ["lounge bar", "lounge"],
      order: 9,
      transcript: "the lounge bar. It's a comfortable space with comfortable seating and a great view"
    },
    {
      id: "l3q10",
      section: 2,
      type: "short_answer",
      text: "What is the temperature of the swimming pool?",
      answer: ["28 degrees", "28°C", "28 degrees Celsius"],
      order: 10,
      transcript: "The pool area. It's Olympic-sized and heated to 28 degrees Celsius."
    }
  ]
};

export const listeningPracticeSets = {
  "type-3": type3Test,
  "type-4": type4Test,
  "type-6": type6Test,
} as const;

export const mockListeningTest: ListeningTest = type4Test;

export const listeningTranscript = type4Transcript;
