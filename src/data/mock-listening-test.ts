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
  audioUrl: "/audio/Generated Audio May 02, 2026 - 2_08PM.wav",
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
  audioUrl: "/audio/Generated Audio May 02, 2026 - 3_49PM.wav",
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

const type1Transcript = `
PRESENTER: Good morning, everyone. Welcome to the Riverside Arts Centre opening ceremony. I'm delighted to see so many people here today. We've been working on this project for three years, and it's finally ready to welcome the community.

Let me give you a brief overview of what we're offering. The Riverside Arts Centre is a state-of-the-art facility designed for both professional artists and members of the public. We have exhibition galleries, performance spaces, and teaching studios.

Our main gallery on the ground floor features contemporary art, and we update the exhibitions quarterly. We currently have an exhibition of local photographers' work, and it's been incredibly popular. Next month, we'll be showcasing international sculptors.

The performance space can accommodate up to 300 people. We host live music, theatre productions, and dance performances. We're particularly proud of our acoustics – they're excellent. We'll be hosting everything from classical concerts to modern jazz performances.

We also have four teaching studios available for rent. Artists can book these for workshops, masterclasses, or private lessons. The studios are fully equipped with art supplies and technology. Whether you're a painter, sculptor, or digital artist, there's something here for you.

One unique feature is our rooftop terrace. It overlooks the river, and it's a wonderful space for reflection and inspiration. We plan to host outdoor art installations there seasonally. The café is located near the terrace, so visitors can enjoy refreshments while taking in the views.

Regarding opening hours: we're open from 9 a.m. to 6 p.m. Tuesday through Saturday, and 11 a.m. to 5 p.m. on Sundays. We're closed on Mondays for maintenance. Entry is free for exhibitions, but performances and workshops have separate fees.

We're committed to making art accessible to everyone. We offer discounts for students, seniors, and family groups. We also have free community events every third Thursday of the month. Today, you'll enjoy a special preview tour, and there will be complimentary refreshments in the café.

Before I conclude, I'd like to mention our artist residency programme. We're offering studio space and a small grant to emerging artists. The application deadline is at the end of next month. If you're interested, please see our staff at the information desk.

Finally, thank you to everyone who made this possible – our sponsors, volunteers, and the local community. We look forward to serving you. Are there any questions?
`;

const type1Test: ListeningTest = {
  id: "listening-type-1",
  title: "Riverside Arts Centre Opening",
  difficulty: "Medium",
  audioUrl: "/audio/Generated Audio May 02, 2026 - 4_26PM.wav",
  transcript: type1Transcript,
  sections: 2,
  questions: [
    {
      id: "l1q1",
      section: 2,
      type: "multiple_choice",
      text: "How long has the Riverside Arts Centre been in development?",
      options: [
        "A. One year",
        "B. Two years",
        "C. Three years"
      ],
      answer: ["C"],
      order: 1,
      transcript: "We've been working on this project for three years, and it's finally ready"
    },
    {
      id: "l1q2",
      section: 2,
      type: "multiple_choice",
      text: "What is currently on display in the main gallery?",
      options: [
        "A. International sculptures",
        "B. Work by local photographers",
        "C. Digital art installations"
      ],
      answer: ["B"],
      order: 2,
      transcript: "We currently have an exhibition of local photographers' work, and it's been incredibly popular."
    },
    {
      id: "l1q3",
      section: 2,
      type: "multiple_choice",
      text: "What is the capacity of the performance space?",
      options: [
        "A. 200 people",
        "B. 300 people",
        "C. 400 people"
      ],
      answer: ["B"],
      order: 3,
      transcript: "The performance space can accommodate up to 300 people."
    },
    {
      id: "l1q4",
      section: 2,
      type: "multiple_choice",
      text: "What types of workshops can be held in the teaching studios?",
      options: [
        "A. Only painting and sculpture",
        "B. Only digital art",
        "C. Painting, sculpture, and digital art"
      ],
      answer: ["C"],
      order: 4,
      transcript: "Whether you're a painter, sculptor, or digital artist, there's something here for you."
    },
    {
      id: "l1q5",
      section: 2,
      type: "multiple_choice",
      text: "What is the purpose of the rooftop terrace?",
      options: [
        "A. Serving only food and drinks",
        "B. Hosting outdoor art installations",
        "C. Training artists"
      ],
      answer: ["B"],
      order: 5,
      transcript: "We plan to host outdoor art installations there seasonally."
    },
    {
      id: "l1q6",
      section: 2,
      type: "multiple_choice",
      text: "When is the centre open on Sundays?",
      options: [
        "A. 9 a.m. to 6 p.m.",
        "B. 11 a.m. to 5 p.m.",
        "C. 10 a.m. to 4 p.m."
      ],
      answer: ["B"],
      order: 6,
      transcript: "we're open from 9 a.m. to 6 p.m. Tuesday through Saturday, and 11 a.m. to 5 p.m. on Sundays."
    },
    {
      id: "l1q7",
      section: 2,
      type: "multiple_choice",
      text: "How often does the centre hold free community events?",
      options: [
        "A. Every second Thursday of the month",
        "B. Every third Thursday of the month",
        "C. Every Thursday of the month"
      ],
      answer: ["B"],
      order: 7,
      transcript: "We also have free community events every third Thursday of the month."
    },
    {
      id: "l1q8",
      section: 2,
      type: "multiple_choice",
      text: "What type of programme is the centre offering to emerging artists?",
      options: [
        "A. Student scholarship programme",
        "B. Artist residency programme with studio space and grant",
        "C. Mentorship programme only"
      ],
      answer: ["B"],
      order: 8,
      transcript: "We're offering studio space and a small grant to emerging artists."
    },
    {
      id: "l1q9",
      section: 2,
      type: "multiple_choice",
      text: "When is the deadline for the artist residency application?",
      options: [
        "A. End of this month",
        "B. End of next month",
        "C. End of the quarter"
      ],
      answer: ["B"],
      order: 9,
      transcript: "The application deadline is at the end of next month."
    },
    {
      id: "l1q10",
      section: 2,
      type: "multiple_choice",
      text: "What does the centre provide free of charge?",
      options: [
        "A. All performances and workshops",
        "B. Entry to exhibitions only",
        "C. All facilities and refreshments"
      ],
      answer: ["B"],
      order: 10,
      transcript: "Entry is free for exhibitions, but performances and workshops have separate fees."
    }
  ]
};

const type2Transcript = `
ACCOMMODATION ADVISOR: Good morning. Today I'm going to tell you about our five different accommodation options available for international students. Each one has different advantages depending on what you're looking for.

Let's start with university halls of residence. These are on campus, which means you can easily access all the facilities. The halls are comfortable with individual study rooms, shared kitchen facilities, and a strong community atmosphere. Many students love the social life here. However, it can be quite noisy, especially during exam season parties. The rent is moderate, at around £120 per week.

Next is homestay accommodation. You live with a local family who will welcome you into their home. This is excellent if you want to improve your English and learn about British culture. You'll have your own bedroom but share common areas with the family. The meals are usually included, which saves money. Some students find it less independent than they'd like, but most really enjoy the family atmosphere. The cost is typically £150 per week.

Then there's private student housing. This is usually in purpose-built blocks with your own flat or shared house with other students. It's more independent than halls, and you often get a better quality room with your own bathroom. The downside is it's more expensive, around £180 per week, and you're responsible for your own meals and shopping.

We also offer studio apartments. These are small, self-contained units perfect if you value privacy and independence. You have your own kitchen, bathroom, and living space. It's ideal for postgraduate students or those who prefer solitude. The trade-off is isolation – there's less community interaction. These cost about £220 per week.

Finally, there's shared flat accommodation with local students, not other international students. Living with British students is a fantastic way to integrate into the local culture and have genuine friendships. You'll have more independence than halls or homestay. The challenge is that British students may not understand the needs of international students, and house-hunting can be competitive. Rent typically ranges from £100 to £140 per week depending on location.

So in summary: halls are social and convenient; homestay is cultural and includes meals; private housing is independent and higher quality; studios are private and quiet; and shared flats with locals offer cultural integration. Do you have any questions about any of these options?
`;

const type2Test: ListeningTest = {
  id: "listening-type-2",
  title: "Student Accommodation Options",
  difficulty: "Medium",
  audioUrl: "/audio/Generated Audio May 03, 2026 - 11_16AM.wav",
  transcript: type2Transcript,
  sections: 2,
  questions: [
    {
      id: "l2q1",
      section: 2,
      type: "matching",
      text: "Best for improving English",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["B"],
      order: 1,
      transcript: "This is excellent if you want to improve your English and learn about British culture."
    },
    {
      id: "l2q2",
      section: 2,
      type: "matching",
      text: "Most expensive option",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["D"],
      order: 2,
      transcript: "These cost about £220 per week."
    },
    {
      id: "l2q3",
      section: 2,
      type: "matching",
      text: "Most affordable choice",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["E"],
      order: 3,
      transcript: "Rent typically ranges from £100 to £140 per week depending on location."
    },
    {
      id: "l2q4",
      section: 2,
      type: "matching",
      text: "Meals included",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["B"],
      order: 4,
      transcript: "The meals are usually included, which saves money."
    },
    {
      id: "l2q5",
      section: 2,
      type: "matching",
      text: "On campus location",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["A"],
      order: 5,
      transcript: "These are on campus, which means you can easily access all the facilities."
    },
    {
      id: "l2q6",
      section: 2,
      type: "matching",
      text: "Purpose-built with own bathroom",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["C"],
      order: 6,
      transcript: "It's usually in purpose-built blocks with your own flat or shared house with other students. It's more independent than halls, and you often get a better quality room with your own bathroom."
    },
    {
      id: "l2q7",
      section: 2,
      type: "matching",
      text: "Best for cultural integration",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["E"],
      order: 7,
      transcript: "Living with British students is a fantastic way to integrate into the local culture and have genuine friendships."
    },
    {
      id: "l2q8",
      section: 2,
      type: "matching",
      text: "Ideal for privacy and independence",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["D"],
      order: 8,
      transcript: "These are small, self-contained units perfect if you value privacy and independence."
    },
    {
      id: "l2q9",
      section: 2,
      type: "matching",
      text: "Strong social atmosphere",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["A"],
      order: 9,
      transcript: "Many students love the social life here."
    },
    {
      id: "l2q10",
      section: 2,
      type: "matching",
      text: "May be noisy",
      options: [
        "A. University halls of residence",
        "B. Homestay accommodation",
        "C. Private student housing",
        "D. Studio apartments",
        "E. Shared flat with local students"
      ],
      answer: ["A"],
      order: 10,
      transcript: "However, it can be quite noisy, especially during exam season parties."
    }
  ]
};

const type4Section2Transcript = `
RECEPTIONIST: Good morning, and welcome to Westside Leisure Centre. I'm Claire, the membership coordinator. How can I help you today?
CUSTOMER: Hi Claire, I'm interested in joining the centre. Could you give me some information about your membership packages?
RECEPTIONIST: Of course! We actually have three main options. Our Basic membership is quite popular—that's thirty-five pounds per month. It gives you full access to the gym and swimming pool during our standard hours.
CUSTOMER: And what are those hours, exactly?
RECEPTIONIST: On weekdays, we're open from six AM to ten PM. Then on weekends, it's eight AM to six PM.
CUSTOMER: That sounds reasonable. What about your other plans?
RECEPTIONIST: Well, we have the Premium membership for sixty pounds a month. That includes everything in the Basic plan, plus access to all our group classes—things like yoga, pilates, spin, and circuit training. You also get priority when booking those sessions.
CUSTOMER: I see. And you mentioned a third option?
RECEPTIONIST: Yes, that's our Elite membership at ninety pounds per month. It's our most comprehensive package. You get unlimited personal training consultations, access to the sauna and steam room, and we even extend the hours until eleven PM on weekdays just for Elite members.
CUSTOMER: That's a lot of features! Does every new member get any help starting out?
RECEPTIONIST: Absolutely. All memberships include a complimentary induction session where a professional trainer will show you how to use all the equipment safely. You'll also get access to our online portal for tracking your progress.
CUSTOMER: Great. Aside from the gym and pool, are there any other facilities I should know about?
RECEPTIONIST: We have a physiotherapy clinic right here on site for injury support. And as I mentioned, the sauna and steam room are free for Premium and Elite members, though Basic members can use them for a small extra fee.
CUSTOMER: Are there any special promotions for joining this month?
RECEPTIONIST: Yes, if you sign up for a twelve-month commitment, your first month is completely free! We'll even throw in a free gym bag and a water bottle.
CUSTOMER: That's a great deal. How does the payment work?
RECEPTIONIST: Most people set up a monthly direct debit, but you can also make an annual payment if you prefer. We accept all major credit cards.
CUSTOMER: And what if I need to cancel at some point?
RECEPTIONIST: It's very simple. You just need to give us thirty days' notice in writing. Just keep in mind that if you cancel within your very first month, there's a one-time twenty-five pound fee. We do offer a seven-day free trial if you want to test the waters first!
CUSTOMER: Perfect. One last thing—where exactly are you located and is there parking?
RECEPTIONIST: We're at forty-seven Northgate Street. There's plenty of free parking for members, and we're only a five-minute walk from the train station.
CUSTOMER: Excellent. Are there any specific rules I should follow in the gym?
RECEPTIONIST: Just two main ones: we have a strict no-phones policy in the workout areas for safety, and we ask everyone to wipe down the equipment after they use it.
CUSTOMER: That makes sense. Well, I think I have everything I need.
RECEPTIONIST: Wonderful! Shall we proceed with your registration?
`;

const type4Section2Test: ListeningTest = {
  id: "listening-type-4-section2",
  title: "Westside Leisure Centre Membership Briefing",
  difficulty: "Medium",
  audioUrl: "/audio/Generated Audio May 02, 2026 - 11_30AM.wav",
  transcript: type4Section2Transcript,
  sections: 2,
  questions: [
    {
      id: "l4s2q1",
      section: 1,
      type: "completion",
      text: "Basic membership monthly fee:",
      answer: ["35"],
      order: 1
    },
    {
      id: "l4s2q2",
      section: 1,
      type: "completion",
      text: "Premium membership (classes):",
      answer: ["yoga"],
      order: 2
    },
    {
      id: "l4s2q3",
      section: 1,
      type: "completion",
      text: "Elite membership monthly fee:",
      answer: ["90"],
      order: 3
    },
    {
      id: "l4s2q4",
      section: 1,
      type: "completion",
      text: "Weekend opening time:",
      answer: ["8 AM"],
      order: 4
    },
    {
      id: "l4s2q5",
      section: 1,
      type: "completion",
      text: "Swimming pool length:",
      answer: ["25", "25 metres"],
      order: 5
    },
    {
      id: "l4s2q6",
      section: 1,
      type: "completion",
      text: "Promotion: commitment for",
      answer: ["12 months"],
      order: 6
    },
    {
      id: "l4s2q7",
      section: 1,
      type: "completion",
      text: "Cancellation notice period:",
      answer: ["30 days"],
      order: 7
    },
    {
      id: "l4s2q8",
      section: 1,
      type: "completion",
      text: "One-time cancellation fee:",
      answer: ["25", "25 pounds"],
      order: 8
    },
    {
      id: "l4s2q9",
      section: 1,
      type: "completion",
      text: "Address: Northgate Street number",
      answer: ["47"],
      order: 9
    },
    {
      id: "l4s2q10",
      section: 1,
      type: "completion",
      text: "Rule: must wipe down",
      answer: ["equipment"],
      order: 10
    }
  ]
};

// Section 3: Conversation in an Academic Context

const section3Type1Transcript = `
STUDENT: Hi Professor Chen, I wanted to discuss my essay on climate change mitigation strategies.

PROFESSOR: Of course, Sarah. Please sit down. How are you feeling about the assignment so far? Have you made good progress?

STUDENT: Well, I've done quite a bit of research, but I'm not sure if I'm addressing all the required elements. The prompt mentions both technological and policy-based solutions, and I want to make sure I'm covering everything needed.

PROFESSOR: That's a good observation. The assignment definitely requires both perspectives to be covered thoroughly. What have you covered so far? Walk me through your current approach.

STUDENT: I've focused mainly on renewable energy technologies like solar and wind power, and I've discussed carbon pricing as a policy measure. But I feel like I might be missing something important that would really strengthen my argument.

PROFESSOR: Actually, what you've covered so far is a solid foundation. Have you considered the role of international cooperation and treaties in mitigation efforts?

STUDENT: Not really. Should I include that? Won't it make the essay too long?

PROFESSOR: Not at all. In fact, I'd strongly recommend including it. The Paris Agreement and similar international frameworks are absolutely crucial to understanding how mitigation strategies are actually implemented on a global scale. Along those lines, you should also consider discussing nature-based solutions – things like reforestation, wetland preservation, and soil conservation.

STUDENT: Those are really good points. Do you think I should reorganise my essay structure to include all of this?

PROFESSOR: That depends on what you've already written so far. But typically, I've found it works well to start with the problem statement, then move into technological solutions, followed by policy measures, then examine international cooperation, and finally conclude with natural solutions and their integration.

STUDENT: That makes sense. I can see how that flows logically. How long should the essay be?

PROFESSOR: Aim for around 2,500 to 3,000 words. The upper end gives you space to develop your arguments fully. Make sure your conclusion ties everything together and addresses the key question of why multiple approaches are necessary.

STUDENT: Got it. I think I have a much clearer direction now. One more question – what's the deadline for submission?

PROFESSOR: The deadline is next Friday, October 25th, by 5 PM. You'll submit it through the online portal. And Sarah, don't hesitate to email me if you have questions as you write.

STUDENT: Thank you, that's really helpful.
`;

const section3Type1Test: ListeningTest = {
  id: "listening-section3-type1",
  title: "Climate Change Essay Discussion",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-3-type-1.mp3",
  transcript: section3Type1Transcript,
  sections: 3,
  questions: [
    {
      id: "s3t1q1",
      section: 3,
      type: "multiple_choice",
      text: "What is Sarah mainly concerned about regarding her essay?",
      options: [
        "A. She hasn't done any research on the topic",
        "B. She's unsure if she's covering all the required elements",
        "C. She disagrees with the professor's interpretation"
      ],
      answer: ["B"],
      order: 1
    },
    {
      id: "s3t1q2",
      section: 3,
      type: "multiple_choice",
      text: "Which of the following has Sarah already covered in her essay?",
      options: [
        "A. International cooperation and treaties",
        "B. Nature-based solutions like reforestation",
        "C. Renewable energy and carbon pricing"
      ],
      answer: ["C"],
      order: 2
    },
    {
      id: "s3t1q3",
      section: 3,
      type: "multiple_choice",
      text: "According to the professor, what are nature-based solutions?",
      options: [
        "A. Only solar and wind power",
        "B. Reforestation, wetland preservation, and soil conservation",
        "C. International treaties and agreements"
      ],
      answer: ["B"],
      order: 3
    },
    {
      id: "s3t1q4",
      section: 3,
      type: "multiple_choice",
      text: "What does the professor suggest as the essay structure?",
      options: [
        "A. Technological solutions, policy measures, then international cooperation",
        "B. Problem statement, technological, policy, international cooperation, then natural solutions",
        "C. Natural solutions first, then all policy measures"
      ],
      answer: ["B"],
      order: 4
    },
    {
      id: "s3t1q5",
      section: 3,
      type: "multiple_choice",
      text: "Why does the professor recommend including international cooperation?",
      options: [
        "A. To make the essay longer",
        "B. To show how strategies are implemented on a global scale",
        "C. Because all essays need this section"
      ],
      answer: ["B"],
      order: 5
    },
    {
      id: "s3t1q6",
      section: 3,
      type: "multiple_choice",
      text: "What word count does the professor recommend?",
      options: [
        "A. Around 2,000 to 2,500 words",
        "B. Around 2,500 to 3,000 words",
        "C. At least 3,500 words"
      ],
      answer: ["B"],
      order: 6
    },
    {
      id: "s3t1q7",
      section: 3,
      type: "multiple_choice",
      text: "What should the conclusion address?",
      options: [
        "A. Only the history of climate change",
        "B. Personal recommendations for climate action",
        "C. Why multiple approaches are necessary"
      ],
      answer: ["C"],
      order: 7
    },
    {
      id: "s3t1q8",
      section: 3,
      type: "multiple_choice",
      text: "When is the essay deadline?",
      options: [
        "A. Next Wednesday by noon",
        "B. Next Friday by 5 PM",
        "C. The following Monday"
      ],
      answer: ["B"],
      order: 8
    },
    {
      id: "s3t1q9",
      section: 3,
      type: "multiple_choice",
      text: "How should Sarah submit her essay?",
      options: [
        "A. By email to the professor",
        "B. By hand in the professor's office",
        "C. Through the online portal"
      ],
      answer: ["C"],
      order: 9
    },
    {
      id: "s3t1q10",
      section: 3,
      type: "multiple_choice",
      text: "According to the professor, what should Sarah do if she has further questions?",
      options: [
        "A. Wait until the next meeting",
        "B. Email the professor",
        "C. Ask her classmates"
      ],
      answer: ["B"],
      order: 10
    }
  ]
};

const section3Type2Transcript = `
TUTOR: Hello David. I'm glad you came in for a tutoring session. Let's discuss the key concepts for your upcoming biology exam. I've prepared some comprehensive learning outcomes and study strategies that might really help you prepare effectively.

STUDENT: Thanks. There's so much to cover. What should I focus on most?

TUTOR: Well, there are several important areas, but let me start with the fundamentals. First, you need a solid understanding of photosynthesis – that's the process where plants convert light energy into chemical energy. This is absolutely fundamental to biology at this level.

STUDENT: Right, that's definitely important. What else should I prioritise?

TUTOR: Then there's cellular respiration, which is essentially the reverse of photosynthesis. It's how organisms release energy from glucose. You should also really understand the relationship between these two processes because the exam often tests how you can connect them.

STUDENT: That makes sense. What about memorisation techniques? I'm struggling to remember so much information.

TUTOR: Good question. For memorisation, I recommend several techniques. First, try creating concept maps. You visually connect related ideas and this really helps with long-term retention. Another very effective technique is the method of loci – you imagine walking through a familiar place, like your home, and associate information with different locations.

STUDENT: Those sound useful. Anything else I should be doing?

TUTOR: Yes, and this is crucial. Practice problems are absolutely essential. Working through past exam questions helps you understand the exam format and identifies your weak areas. Also, try teaching the material to someone else – explaining concepts forces you to think deeply about them and really understand the material.

STUDENT: What about managing time during the exam itself?

TUTOR: That's crucial too. I suggest reading all questions first to get an overview, allocating time proportionally to question marks, and answering easier questions first to build confidence before tackling harder ones.

STUDENT: Should I study alone or in groups?

TUTOR: Both have advantages. Study groups help you understand different perspectives and can be motivating, but solo study allows for focused work on your weak areas. I recommend alternating between both approaches.
`;

const section3Type2Test: ListeningTest = {
  id: "listening-section3-type2",
  title: "Exam Preparation Strategies",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-3-type-2.mp3",
  transcript: section3Type2Transcript,
  sections: 3,
  questions: [
    {
      id: "s3t2q1",
      section: 3,
      type: "matching",
      text: "Understanding the conversion of light energy into chemical energy",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Concept mapping",
        "D. The method of loci",
        "E. Study groups"
      ],
      answer: ["A"],
      order: 1
    },
    {
      id: "s3t2q2",
      section: 3,
      type: "matching",
      text: "How organisms release energy from glucose",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Concept mapping",
        "D. The method of loci",
        "E. Study groups"
      ],
      answer: ["B"],
      order: 2
    },
    {
      id: "s3t2q3",
      section: 3,
      type: "matching",
      text: "Visually connecting related ideas",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Concept mapping",
        "D. The method of loci",
        "E. Study groups"
      ],
      answer: ["C"],
      order: 3
    },
    {
      id: "s3t2q4",
      section: 3,
      type: "matching",
      text: "Imagining walking through a familiar place to associate information",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Concept mapping",
        "D. The method of loci",
        "E. Study groups"
      ],
      answer: ["D"],
      order: 4
    },
    {
      id: "s3t2q5",
      section: 3,
      type: "matching",
      text: "Learning advantages of multiple perspectives",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Concept mapping",
        "D. The method of loci",
        "E. Study groups"
      ],
      answer: ["E"],
      order: 5
    },
    {
      id: "s3t2q6",
      section: 3,
      type: "matching",
      text: "Working through previous assessment papers",
      options: [
        "A. Memorisation",
        "B. Teaching others",
        "C. Practice problems",
        "D. Time management",
        "E. Solo study"
      ],
      answer: ["C"],
      order: 6
    },
    {
      id: "s3t2q7",
      section: 3,
      type: "matching",
      text: "Explaining concepts to understand them better",
      options: [
        "A. Memorisation",
        "B. Teaching others",
        "C. Practice problems",
        "D. Time management",
        "E. Solo study"
      ],
      answer: ["B"],
      order: 7
    },
    {
      id: "s3t2q8",
      section: 3,
      type: "matching",
      text: "Allocating time proportionally to question marks",
      options: [
        "A. Memorisation",
        "B. Teaching others",
        "C. Practice problems",
        "D. Time management",
        "E. Solo study"
      ],
      answer: ["D"],
      order: 8
    },
    {
      id: "s3t2q9",
      section: 3,
      type: "matching",
      text: "Focusing on weak areas without distractions",
      options: [
        "A. Memorisation",
        "B. Teaching others",
        "C. Practice problems",
        "D. Time management",
        "E. Solo study"
      ],
      answer: ["E"],
      order: 9
    },
    {
      id: "s3t2q10",
      section: 3,
      type: "matching",
      text: "The inverse process of photosynthesis",
      options: [
        "A. Concept mapping",
        "B. Cellular respiration",
        "C. Memorisation",
        "D. Study groups",
        "E. Time management"
      ],
      answer: ["B"],
      order: 10
    }
  ]
};

const section3Type5Transcript = `
ADVISOR: Good morning! I'm Dr. Patricia Williams, the academic advisor for biology students. I'm here to brief you on your research project requirements for this semester. I know it can seem overwhelming, so I'll walk you through everything step by step.

STUDENT: Thank you. I'm keen to get started, but I do have some questions.

ADVISOR: Excellent. First, the overall project theme this year is "Biodiversity in Urban Ecosystems". Your project should explore how cities impact plant and animal diversity. You'll need to select a specific location for your study – ideally a local park or green space within the city. This is important because you'll need to visit it multiple times.

STUDENT: Do I need special equipment for fieldwork?

ADVISOR: Not necessarily, which is good news. For the initial phase, you'll conduct observations and surveys using simple methods. You'll document species using photographs, field notes, and specimen identification guides. In the second phase, you'll analyse your data using statistical software and compare your findings with existing research on the same area or similar urban ecosystems.

STUDENT: When are the key deadlines? I need to plan my time.

ADVISOR: Absolutely. Let me go through them carefully. The proposal is due on November 10th – this is just a two-page outline of your project. Your literature review should be submitted by December 1st. The final project report – that's around 5,000 words – is due on March 15th. Additionally, you'll give a formal presentation on April 5th, which is worth marks as well.

STUDENT: How many sources should I use for each section?

ADVISOR: Good question. For the literature review, use a minimum of 15 academic sources. For the final report, aim for at least 20 sources. You must use peer-reviewed journals primarily, though you can include reputable websites and books as supplementary sources. This is really important for academic integrity.

STUDENT: What about the assessment criteria? I want to know exactly what you're marking.

ADVISOR: Your project will be assessed in different areas. Research methodology – that's how you design your study – accounts for 25%. Analysis and interpretation of your findings is worth 35%, which is the largest component. The quality of your writing is 20%. Your use of appropriate scientific terminology accounts for 10%, and finally, your presentation skills during the oral presentation is worth 10%.

STUDENT: That's very clear. One final question – can I work with a partner or must I work alone?

ADVISOR: This is an individual project, so you must work alone. However, you can definitely discuss ideas with classmates and your project supervisor, who will be assigned next week. The supervisor will provide guidance throughout the process and will meet with you monthly.
`;

const section3Type5Test: ListeningTest = {
  id: "listening-section3-type5",
  title: "Research Project Briefing",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-3-type-5.mp3",
  transcript: section3Type5Transcript,
  sections: 3,
  questions: [
    {
      id: "s3t5q1",
      section: 3,
      type: "completion",
      text: "Project theme: _______________",
      answer: ["Biodiversity in Urban Ecosystems"],
      order: 1
    },
    {
      id: "s3t5q2",
      section: 3,
      type: "completion",
      text: "Study location should be: a local _______________",
      answer: ["park", "park or green space", "green space"],
      order: 2
    },
    {
      id: "s3t5q3",
      section: 3,
      type: "completion",
      text: "Proposal submission date: November _____",
      answer: ["10th"],
      order: 3
    },
    {
      id: "s3t5q4",
      section: 3,
      type: "completion",
      text: "Literature review deadline: _______________",
      answer: ["December 1st"],
      order: 4
    },
    {
      id: "s3t5q5",
      section: 3,
      type: "completion",
      text: "Final project report word count: approximately _____ words",
      answer: ["5,000"],
      order: 5
    },
    {
      id: "s3t5q6",
      section: 3,
      type: "completion",
      text: "Presentation date: April _____",
      answer: ["5th"],
      order: 6
    },
    {
      id: "s3t5q7",
      section: 3,
      type: "completion",
      text: "Minimum sources for literature review: _____",
      answer: ["15"],
      order: 7
    },
    {
      id: "s3t5q8",
      section: 3,
      type: "completion",
      text: "Research methodology accounts for _____ % of the grade",
      answer: ["25"],
      order: 8
    },
    {
      id: "s3t5q9",
      section: 3,
      type: "completion",
      text: "Analysis and interpretation worth _____ % of assessment",
      answer: ["35"],
      order: 9
    },
    {
      id: "s3t5q10",
      section: 3,
      type: "completion",
      text: "Project supervisors will meet with students _____",
      answer: ["monthly"],
      order: 10
    }
  ]
};

const section3Type6Transcript = `
LIBRARIAN: Hello! Welcome to the university library. I'm showing you around today to help you familiarise yourself with our research facilities and services. As a first-year student, you'll need to know where everything is and how to use our resources effectively.

STUDENT: Thanks for taking the time. I'm a bit overwhelmed actually. There's so much here.

LIBRARIAN: That's completely normal. Don't worry, you'll get the hang of it quickly. Let me start by showing you where the main collection is. Behind me, you see the open stacks – that's where most of our books are shelved. They're organised by the Dewey Decimal System, which is the standard system used in most libraries worldwide.

STUDENT: How do I find a specific book?

LIBRARIAN: Great question. You can search our online catalogue. Look at those computer terminals over there – use those to search. You can type the title, the author's name, or subject keywords. The system will tell you the shelf location and whether the book is available right now or already on loan.

STUDENT: What if a book I need is already borrowed?

LIBRARIAN: You have two options. You can place a hold – the system keeps a queue. When the book is returned by the other borrower, it's reserved for you for seven days. Alternatively, we have an inter-library loan service where we can borrow materials from other institutions if we don't have it. This takes a bit longer, usually about two weeks, but it's free.

STUDENT: That's helpful. What about journal articles and academic papers?

LIBRARIAN: Excellent question. We have access to many databases through our subscriptions. You can access them from computers here in the library or from your dorm using your student ID. Databases like JSTOR, ScienceDirect, and ProQuest are invaluable for academic research. They contain millions of peer-reviewed articles.

STUDENT: How long can I borrow books for?

LIBRARIAN: The standard loan period is four weeks. You can renew books online up to three times if no one else has placed a hold on them. Overdue fines are 50 pence per day per book, so please return them on time or renew them. We do send reminders before the due date.

STUDENT: Is there a quiet place to study?

LIBRARIAN: Absolutely. The upper floors – floors three, four, and five – are designated quiet zones where conversation is not permitted. We also have group study rooms on the third floor – you can book those online in advance if you need to collaborate with classmates. They're soundproof, so you won't disturb others.

STUDENT: Can I use my laptop here to study?

LIBRARIAN: Of course. There's WiFi throughout the building, and you'll find power outlets at most tables. We also have computers available for public use on this floor if you need them. We have both Windows and Mac computers available.

STUDENT: One last thing – are there orientation sessions?

LIBRARIAN: Yes! We run library orientation sessions every Friday at 2 PM. They last about 45 minutes. You'll learn more about our research tools, citation management software like RefWorks, and how to evaluate source credibility. It's highly recommended for all new students, and you'll get helpful tips that really speed up your research.
`;

const section3Type6Test: ListeningTest = {
  id: "listening-section3-type6",
  title: "University Library Orientation",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-3-type-6.mp3",
  transcript: section3Type6Transcript,
  sections: 3,
  questions: [
    {
      id: "s3t6q1",
      section: 3,
      type: "short_answer",
      text: "What classification system is used to organise books?",
      answer: ["Dewey Decimal System"],
      order: 1
    },
    {
      id: "s3t6q2",
      section: 3,
      type: "short_answer",
      text: "What can you search for in the online catalogue?",
      answer: ["title, author, or subject keywords"],
      order: 2
    },
    {
      id: "s3t6q3",
      section: 3,
      type: "short_answer",
      text: "How long will a book from inter-library loan usually take to arrive?",
      answer: ["about two weeks", "two weeks", "approximately two weeks"],
      order: 3
    },
    {
      id: "s3t6q4",
      section: 3,
      type: "short_answer",
      text: "How many times can you renew a book online?",
      answer: ["up to three times", "three times"],
      order: 4
    },
    {
      id: "s3t6q5",
      section: 3,
      type: "short_answer",
      text: "What is the standard loan period for books?",
      answer: ["four weeks"],
      order: 5
    },
    {
      id: "s3t6q6",
      section: 3,
      type: "short_answer",
      text: "How much do you pay per day for overdue books?",
      answer: ["50 pence"],
      order: 6
    },
    {
      id: "s3t6q7",
      section: 3,
      type: "short_answer",
      text: "Which floors are designated as quiet zones?",
      answer: ["floors three, four, and five", "upper floors", "three, four, and five"],
      order: 7
    },
    {
      id: "s3t6q8",
      section: 3,
      type: "short_answer",
      text: "Name one database available for academic research",
      answer: ["JSTOR", "ScienceDirect", "ProQuest"],
      order: 8
    },
    {
      id: "s3t6q9",
      section: 3,
      type: "short_answer",
      text: "When are library orientation sessions held?",
      answer: ["Friday at 2 PM", "every Friday at 2 PM"],
      order: 9
    },
    {
      id: "s3t6q10",
      section: 3,
      type: "short_answer",
      text: "How long does the library orientation session usually last?",
      answer: ["45 minutes", "about 45 minutes"],
      order: 10
    }
  ]
};

// Section 4: Monologue in an Academic Context

const section4Type4Transcript = `
LECTURER: Good morning, everyone. Today, I'll be discussing the evolution of renewable energy technology and its impact on global energy systems. This is particularly relevant as we face increasing pressure to reduce carbon emissions.

Let me start with a historical overview. In the 1970s, the first significant solar panels were developed, though they had an efficiency rate of only about 6 percent. Meanwhile, modern wind turbines were also being experimented with, but they were much smaller than the massive installations we see today.

The 1980s saw rapid development. Solar efficiency improved to around 12 percent, and commercial wind farms began operating in California. Investment was moderate, approximately $5 billion globally. However, there were significant challenges – technology was unreliable, and maintenance costs were extraordinarily high.

The turning point came in the 2000s. By 2005, solar panel efficiency had reached 15 percent, and costs had dropped dramatically. Wind energy became increasingly cost-effective. Government incentives played a crucial role during this period. Germany, for instance, invested heavily in photovoltaic installations. Annual investment reached $20 billion worldwide by 2008.

Today, the situation has transformed completely. Solar panel efficiency now exceeds 20 percent for commercial panels, with laboratory prototypes reaching over 45 percent. Wind turbine capacity has grown exponentially, with modern turbines producing 12 megawatts or more. Costs have become competitive with fossil fuels in many regions.

The global renewable energy market in 2024 is worth approximately $500 billion, with projections suggesting growth to $2 trillion by 2030. Challenges remain, however. Energy storage is still problematic – batteries can store power for hours, but large-scale storage for days is still difficult. Grid integration remains another challenge.

Looking forward, I predict that by 2040, renewable energy will account for over 50 percent of global electricity generation, up from approximately 30 percent today. This transformation will fundamentally reshape energy markets and geopolitical relationships. Thank you.
`;

const section4Type4Test: ListeningTest = {
  id: "listening-section4-type4",
  title: "History of Renewable Energy Technology",
  difficulty: "Hard",
  audioUrl: "https://example.com/listening-section-4-type-4.mp3",
  transcript: section4Type4Transcript,
  sections: 4,
  questions: [
    {
      id: "s4t4q1",
      section: 4,
      type: "completion",
      text: "1970s solar panel efficiency: _____ percent",
      answer: ["6"],
      order: 1
    },
    {
      id: "s4t4q2",
      section: 4,
      type: "completion",
      text: "1980s solar panel efficiency improved to: _____ percent",
      answer: ["12"],
      order: 2
    },
    {
      id: "s4t4q3",
      section: 4,
      type: "completion",
      text: "1980s global investment: approximately _____ billion",
      answer: ["5"],
      order: 3
    },
    {
      id: "s4t4q4",
      section: 4,
      type: "completion",
      text: "By 2008, annual global renewable investment reached: _____ billion",
      answer: ["20"],
      order: 4
    },
    {
      id: "s4t4q5",
      section: 4,
      type: "completion",
      text: "Current commercial solar panel efficiency: over _____ percent",
      answer: ["20"],
      order: 5
    },
    {
      id: "s4t4q6",
      section: 4,
      type: "completion",
      text: "Modern wind turbines produce: _____ megawatts or more",
      answer: ["12"],
      order: 6
    },
    {
      id: "s4t4q7",
      section: 4,
      type: "completion",
      text: "2024 global renewable energy market: approximately _____ billion",
      answer: ["500"],
      order: 7
    },
    {
      id: "s4t4q8",
      section: 4,
      type: "completion",
      text: "Projected market value by 2030: _____ trillion",
      answer: ["2"],
      order: 8
    },
    {
      id: "s4t4q9",
      section: 4,
      type: "completion",
      text: "Current renewable energy percentage of global electricity: approximately _____ percent",
      answer: ["30"],
      order: 9
    },
    {
      id: "s4t4q10",
      section: 4,
      type: "completion",
      text: "Predicted renewable energy percentage by 2040: over _____ percent",
      answer: ["50"],
      order: 10
    }
  ]
};

const section4Type5Transcript = `
PROFESSOR: Good afternoon. Today's lecture focuses on the psychology of decision-making and how cognitive biases affect our choices. This is crucial to understanding human behaviour in both personal and professional contexts.

Let me begin with a fundamental concept: bounded rationality. Unlike classical economics which assumes we make perfectly rational decisions, bounded rationality suggests that our decisions are limited by the information available, our cognitive abilities, and the time we have to decide.

One critical bias is confirmation bias. This is our tendency to search for, interpret, and remember information that confirms what we already believe. For example, if you believe electric cars are superior, you might focus on reading positive reviews about them while ignoring negative feedback. This bias can lead to poor decision-making because we're not considering all available evidence.

Another important phenomenon is anchoring bias. When we're making decisions, we rely heavily on the first piece of information we receive, which acts as an anchor. Imagine you're buying a car, and the dealer first mentions a high price. Even if they then offer a lower price, that initial anchor influences your perception of whether the final price is reasonable.

Then there's the availability heuristic. We tend to judge the likelihood of events based on how easily examples come to mind. For instance, after watching news about plane crashes, people often overestimate the danger of flying because those dramatic examples are very available in their memory.

The sunk cost fallacy is particularly damaging in business decisions. This is when people continue investing in a failing project because of money they've already invested, rather than making a rational assessment of future potential. For example, a company might continue funding an unsuccessful product because they've already spent millions on it.

Importantly, understanding these biases doesn't eliminate them. Even when we're aware of them, they still influence our thinking. The key is to implement systematic processes to counteract them, such as seeking diverse opinions or considering alternative scenarios.

In conclusion, recognising cognitive biases is essential for making better decisions. Whether in finance, medicine, or personal life, understanding these mental shortcuts helps us make more thoughtful choices. Thank you for your attention.
`;

const section4Type5Test: ListeningTest = {
  id: "listening-section4-type5",
  title: "Psychology of Decision-Making",
  difficulty: "Hard",
  audioUrl: "https://example.com/listening-section-4-type-5.mp3",
  transcript: section4Type5Transcript,
  sections: 4,
  questions: [
    {
      id: "s4t5q1",
      section: 4,
      type: "completion",
      text: "Bounded rationality suggests our decisions are limited by _____ available, cognitive abilities, and time.",
      answer: ["information", "the information"],
      order: 1
    },
    {
      id: "s4t5q2",
      section: 4,
      type: "completion",
      text: "Confirmation bias is our tendency to search for information that _____ what we already believe.",
      answer: ["confirms"],
      order: 2
    },
    {
      id: "s4t5q3",
      section: 4,
      type: "completion",
      text: "In anchoring bias, we rely heavily on _____ piece of information we receive.",
      answer: ["the first", "first"],
      order: 3
    },
    {
      id: "s4t5q4",
      section: 4,
      type: "completion",
      text: "The availability heuristic means we judge events based on how easily _____ come to mind.",
      answer: ["examples"],
      order: 4
    },
    {
      id: "s4t5q5",
      section: 4,
      type: "completion",
      text: "The sunk cost fallacy occurs when people continue investing based on _____ already invested.",
      answer: ["money they have", "money", "the money"],
      order: 5
    },
    {
      id: "s4t5q6",
      section: 4,
      type: "completion",
      text: "Understanding cognitive biases _____ eliminate them from our thinking.",
      answer: ["does not", "doesn't"],
      order: 6
    },
    {
      id: "s4t5q7",
      section: 4,
      type: "completion",
      text: "To counteract biases, we should seek _____ opinions and consider alternatives.",
      answer: ["diverse"],
      order: 7
    },
    {
      id: "s4t5q8",
      section: 4,
      type: "completion",
      text: "Cognitive biases affect decision-making in _____, medicine, and personal life.",
      answer: ["finance"],
      order: 8
    },
    {
      id: "s4t5q9",
      section: 4,
      type: "completion",
      text: "Classical economics assumes we make _____ rational decisions.",
      answer: ["perfectly"],
      order: 9
    },
    {
      id: "s4t5q10",
      section: 4,
      type: "completion",
      text: "The key to better decision-making is implementing _____ processes to counteract biases.",
      answer: ["systematic"],
      order: 10
    }
  ]
};

const section4Type6Transcript = `
LECTURER: Hello, everyone. I'm Dr. James Morrison, and today I'll be discussing climate change impacts on ocean ecosystems. This is a topic of critical importance for understanding future environmental challenges.

Ocean ecosystems face unprecedented challenges due to climate change. Let me outline the major impacts we're observing. First, ocean acidification. The oceans absorb approximately 30 percent of the carbon dioxide we emit. When CO2 dissolves in seawater, it forms carbonic acid, making the oceans more acidic. Over the past 150 years, ocean acidity has increased by 30 percent. This sounds modest, but on a pH scale, this represents a significant change.

The consequences are severe for marine life, particularly creatures with shells – molluscs, corals, and some crustaceans. Pteropods, which are crucial food sources for many fish species, are already showing signs of shell dissolution in some regions. Coral bleaching, caused by elevated temperatures, has affected massive areas. The Great Barrier Reef has experienced unprecedented bleaching events in recent years.

Temperature increases are another major concern. The oceans have absorbed approximately 90 percent of the excess heat from greenhouse gas emissions. This has warmed water layers, causing thermocline strengthening – the boundary between warm and cold water becoming more pronounced. This affects nutrient cycling and the distribution of marine species.

Sea level rise is also accelerating. Primarily caused by thermal expansion of warming water and melting ice sheets, sea levels have risen approximately 210 millimetres since 1880. Small island nations face existential threats. Some Pacific islands may become uninhabitable within this century.

Deoxygenation is another critical issue. Warmer water holds less dissolved oxygen, and stratification reduces mixing, creating dead zones where oxygen levels are insufficient for most marine life. The Black Sea, for example, has extensive dead zones.

Fisheries are severely impacted. Fish populations are shifting poleward and to deeper waters, disrupting traditional fishing communities. Commercial fish stocks are declining, with some species facing potential collapse.

The good news is that nature has remarkable resilience. If we reduce emissions and implement marine protection measures, some ecosystems can recover. Marine protected areas have shown positive results in preserving biodiversity and allowing population recovery.

In conclusion, ocean ecosystems face urgent challenges, but with determined action on climate change and marine protection, we can mitigate the worst impacts. Thank you.
`;

const section4Type6Test: ListeningTest = {
  id: "listening-section4-type6",
  title: "Climate Change Impacts on Ocean Ecosystems",
  difficulty: "Hard",
  audioUrl: "https://example.com/listening-section-4-type-6.mp3",
  transcript: section4Type6Transcript,
  sections: 4,
  questions: [
    {
      id: "s4t6q1",
      section: 4,
      type: "short_answer",
      text: "What percentage of carbon dioxide do oceans absorb?",
      answer: ["30 percent", "approximately 30 percent"],
      order: 1
    },
    {
      id: "s4t6q2",
      section: 4,
      type: "short_answer",
      text: "By how much has ocean acidity increased over the past 150 years?",
      answer: ["30 percent", "by 30 percent"],
      order: 2
    },
    {
      id: "s4t6q3",
      section: 4,
      type: "short_answer",
      text: "What percentage of excess heat from greenhouse gases have oceans absorbed?",
      answer: ["90 percent", "approximately 90 percent"],
      order: 3
    },
    {
      id: "s4t6q4",
      section: 4,
      type: "short_answer",
      text: "By how much have sea levels risen since 1880?",
      answer: ["210 millimetres", "approximately 210 millimetres"],
      order: 4
    },
    {
      id: "s4t6q5",
      section: 4,
      type: "short_answer",
      text: "Name one marine creature affected by ocean acidification.",
      answer: ["molluscs", "corals", "crustaceans", "pteropods"],
      order: 5
    },
    {
      id: "s4t6q6",
      section: 4,
      type: "short_answer",
      text: "What does thermocline strengthening mean?",
      answer: ["boundary between warm and cold water becomes more pronounced", "the boundary becomes stronger"],
      order: 6
    },
    {
      id: "s4t6q7",
      section: 4,
      type: "short_answer",
      text: "What causes sea level rise?",
      answer: ["thermal expansion and melting ice sheets"],
      order: 7
    },
    {
      id: "s4t6q8",
      section: 4,
      type: "short_answer",
      text: "What is deoxygenation?",
      answer: ["warmer water holds less dissolved oxygen"],
      order: 8
    },
    {
      id: "s4t6q9",
      section: 4,
      type: "short_answer",
      text: "How are fish populations responding to climate change?",
      answer: ["shifting poleward and to deeper waters"],
      order: 9
    },
    {
      id: "s4t6q10",
      section: 4,
      type: "short_answer",
      text: "What has shown positive results in preserving marine biodiversity?",
      answer: ["marine protected areas"],
      order: 10
    }
  ]
};

export const listeningPracticeSets = {
  "type-1": type1Test,
  "type-2": type2Test,
  "type-3": type3Test,
  "type-4": type4Section2Test,
  "type-6": type6Test,
  "section3-type-1": section3Type1Test,
  "section3-type-2": section3Type2Test,
  "section3-type-5": section3Type5Test,
  "section3-type-6": section3Type6Test,
  "section4-type-4": section4Type4Test,
  "section4-type-5": section4Type5Test,
  "section4-type-6": section4Type6Test,
} as const;

export const mockListeningTest: ListeningTest = type4Test;

export const listeningTranscript = type4Transcript;
