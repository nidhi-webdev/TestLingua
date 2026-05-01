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
  audioUrl: "https://example.com/listening-section-2-type-1.mp3",
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
  audioUrl: "https://example.com/listening-section-2-type-2.mp3",
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
RECEPTIONIST: Good morning, and welcome to Westside Leisure Centre. I'm Claire, the membership coordinator, and I'm delighted to help you get started with us today. Let me give you an overview of our membership packages and facilities.

We have three main membership options. The Basic membership costs £35 per month and gives you access to the gym and swimming pool during standard hours, which are 6 AM to 10 PM, Monday to Friday, and 8 AM to 6 PM on weekends. The Premium membership, at £60 per month, includes everything in Basic plus access to all classes, including yoga, pilates, spin, and circuit training. You'll also get priority booking for classes and personal training sessions. Finally, our Elite membership at £90 per month is our most comprehensive option. It includes gym, pool, and classes, plus unlimited personal training consultations, access to the sauna and steam room, and extended hours until 11 PM on weekdays.

All memberships include a complimentary induction session where a trainer will show you how to use the equipment safely. We also provide access to our online portal where you can book classes, track your progress, and access workout videos.

Now, regarding our facilities. We have a fully equipped gymnasium with cardio machines, free weights, and resistance equipment. The swimming pool is 25 metres and has dedicated lanes for lap swimming plus a shallow end for aqua aerobics. Our teaching studios host group fitness classes throughout the day. We also have a physiotherapy clinic on site if you need any rehabilitation or injury support. The sauna and steam room are complimentary for Premium and Elite members, though Basic members can pay a small fee to use them.

For new members, we have a special promotion running this month. If you commit to a 12-month membership, you'll receive the first month completely free, plus a free gym bag and water bottle. Payment can be made by monthly direct debit or annual payment, and we accept all major credit cards.

Cancellation is straightforward – you simply give us 30 days' notice in writing, though if you're within the first 30 days of membership, there's a one-time £25 cancellation fee. We also offer a 7-day free trial if you'd like to experience the facilities before committing.

One important note: we have a strict no-phones policy in the gym areas for safety reasons, and we ask all members to wipe down equipment after use. We're located at 47 Northgate Street, there's free parking for members, and we're just a five-minute walk from the train station. Do you have any questions before we proceed with your registration?
`;

const type4Section2Test: ListeningTest = {
  id: "listening-type-4-section2",
  title: "Westside Leisure Centre Membership Briefing",
  difficulty: "Medium",
  audioUrl: "https://example.com/listening-section-2-type-4.mp3",
  transcript: type4Section2Transcript,
  sections: 2,
  questions: [
    {
      id: "l4s2q1",
      section: 2,
      type: "completion",
      text: "Basic membership costs: £_____ per month",
      answer: ["35"],
      order: 1
    },
    {
      id: "l4s2q2",
      section: 2,
      type: "completion",
      text: "Premium membership provides access to all classes including _____, pilates, spin, and circuit training",
      answer: ["yoga"],
      order: 2
    },
    {
      id: "l4s2q3",
      section: 2,
      type: "completion",
      text: "Elite membership costs: £_____ per month",
      answer: ["90"],
      order: 3
    },
    {
      id: "l4s2q4",
      section: 2,
      type: "completion",
      text: "Standard gym hours are 6 AM to 10 PM on weekdays and _____ to 6 PM on weekends",
      answer: ["8 AM"],
      order: 4
    },
    {
      id: "l4s2q5",
      section: 2,
      type: "completion",
      text: "The swimming pool is _____ metres long",
      answer: ["25"],
      order: 5
    },
    {
      id: "l4s2q6",
      section: 2,
      type: "completion",
      text: "New members with 12-month commitment receive _____ month completely free",
      answer: ["first", "the first"],
      order: 6
    },
    {
      id: "l4s2q7",
      section: 2,
      type: "completion",
      text: "Membership cancellation requires _____ days' written notice",
      answer: ["30"],
      order: 7
    },
    {
      id: "l4s2q8",
      section: 2,
      type: "completion",
      text: "There is a one-time cancellation fee of £_____ if cancelled within 30 days",
      answer: ["25"],
      order: 8
    },
    {
      id: "l4s2q9",
      section: 2,
      type: "completion",
      text: "The leisure centre is located at _____ Northgate Street",
      answer: ["47"],
      order: 9
    },
    {
      id: "l4s2q10",
      section: 2,
      type: "completion",
      text: "Members must wipe down _____ after use",
      answer: ["equipment"],
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
} as const;

export const mockListeningTest: ListeningTest = type4Test;

export const listeningTranscript = type4Transcript;
