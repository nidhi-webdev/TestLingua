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
CLAIRE: Good morning, everyone, and welcome to Westside Leisure Centre. I'm Claire, the membership coordinator here. Today, I'm going to give you a briefing on our centre and the membership packages we offer.

To start with, we have three main membership options designed to suit different needs. Our Basic membership is a very popular choice, priced at thirty-five pounds per month. This package gives you full access to both the gym and our twenty-five metre swimming pool during our standard operating hours. Speaking of which, we are open from six AM until ten PM on weekdays, and from eight AM to six PM at the weekends.

For those looking for more variety, we offer the Premium membership at sixty pounds a month. This includes all the benefits of the Basic plan, but also gives you access to all our group classes, including yoga, pilates, spin, and circuit training. Premium members also receive priority when booking these sessions.

Our most comprehensive package is the Elite membership, which costs ninety pounds per month. This is tailored for members who want the full experience, as it includes unlimited personal training consultations and access to the sauna and steam room. Elite members also enjoy extended access to the gym until eleven PM on weekdays.

Every new member at Westside receives a complimentary induction session. This is where a professional trainer will show you how to use all the equipment safely and effectively. You'll also get access to our online portal to track your fitness progress over time.

In terms of facilities, we also have an on-site physiotherapy clinic for any injury support you might need. The sauna and steam room are free for Premium and Elite members, although Basic members can also access them for a small additional fee.

This month, we have a special promotion: if you sign up for a twelve-month commitment, your first month will be completely free! To welcome you, we'll also provide a free gym bag and a water bottle.

When it comes to payments, most of our members choose to set up a monthly direct debit, but we also accept annual payments and all major credit cards. If you ever need to cancel, our policy is straightforward: we require thirty days' notice in writing. Please be aware that if a cancellation occurs within your very first month, there's a one-time twenty-five pound fee. We do, however, offer a seven-day free trial for those who want to try us out first.

We are conveniently located at forty-seven Northgate Street, which features plenty of free parking for members and is just a five-minute walk from the train station. Finally, I'd like to remind you of a couple of our house rules: for safety reasons, we have a strict no-phones policy in the workout areas, and we ask that everyone wipes down the equipment after use.

Thank you for listening, and I look forward to seeing you around the centre!
`;

const type4Section2Test: ListeningTest = {
  id: "listening-type-4-section2",
  title: "Westside Leisure Centre Membership Briefing",
  difficulty: "Medium",
  audioUrl: "/audio/Generated Audio May 03, 2026 - 11_39AM.wav",
  transcript: type4Section2Transcript,
  sections: 2,
  questions: [
    {
      id: "l4s2q1",
      section: 2,
      type: "completion",
      text: "Basic membership monthly fee:",
      answer: ["35"],
      order: 1,
      transcript: "CLAIRE: Our Basic membership is a very popular choice, priced at thirty-five pounds per month."
    },
    {
      id: "l4s2q2",
      section: 2,
      type: "completion",
      text: "Premium membership (classes):",
      answer: ["yoga"],
      order: 2,
      transcript: "CLAIRE: ...gives you access to all our group classes, including yoga, pilates, spin, and circuit training."
    },
    {
      id: "l4s2q3",
      section: 2,
      type: "completion",
      text: "Elite membership monthly fee:",
      answer: ["90"],
      order: 3,
      transcript: "CLAIRE: Our most comprehensive package is the Elite membership, which costs ninety pounds per month."
    },
    {
      id: "l4s2q4",
      section: 2,
      type: "completion",
      text: "Weekend opening time:",
      answer: ["8 AM"],
      order: 4,
      transcript: "CLAIRE: ...and from eight AM to six PM at the weekends."
    },
    {
      id: "l4s2q5",
      section: 2,
      type: "completion",
      text: "Swimming pool length:",
      answer: ["25", "25 metres"],
      order: 5,
      transcript: "CLAIRE: This package gives you full access to both the gym and our twenty-five metre swimming pool..."
    },
    {
      id: "l4s2q6",
      section: 2,
      type: "completion",
      text: "Promotion: commitment for",
      answer: ["12 months"],
      order: 6,
      transcript: "CLAIRE: ...if you sign up for a twelve-month commitment, your first month will be completely free!"
    },
    {
      id: "l4s2q7",
      section: 2,
      type: "completion",
      text: "Cancellation notice period:",
      answer: ["30 days"],
      order: 7,
      transcript: "CLAIRE: ...we require thirty days' notice in writing."
    },
    {
      id: "l4s2q8",
      section: 2,
      type: "completion",
      text: "One-time cancellation fee:",
      answer: ["25", "25 pounds"],
      order: 8,
      transcript: "CLAIRE: ...if a cancellation occurs within your very first month, there's a one-time twenty-five pound fee."
    },
    {
      id: "l4s2q9",
      section: 2,
      type: "completion",
      text: "Address: Northgate Street number",
      answer: ["47"],
      order: 9,
      transcript: "CLAIRE: We are conveniently located at forty-seven Northgate Street..."
    },
    {
      id: "l4s2q10",
      section: 2,
      type: "completion",
      text: "Rule: must wipe down",
      answer: ["equipment"],
      order: 10,
      transcript: "CLAIRE: ...and we ask that everyone wipes down the equipment after use."
    }
  ]
};

// Section 3: Conversation in an Academic Context

const section3Type1Transcript = `
PROFESSOR CHEN: Good afternoon, everyone. Sarah, James, Maya — thank you all for coming to this tutorial. Today we're going to discuss your group essay on climate change mitigation strategies. Let's start with where you all are. Sarah, you said you wanted to open?

SARAH: Yes, thanks. So I've been leading the research on technological solutions. I've covered solar and wind power in detail, and I'm fairly happy with that section. But I'm not sure our policy section is strong enough yet.

JAMES: I agree with Sarah. I've been working on the policy side — carbon pricing and emissions trading schemes — but I feel like we're missing the international dimension. Should we be covering things like the Paris Agreement more explicitly?

PROFESSOR CHEN: That's an excellent instinct, James. International frameworks are absolutely crucial to how mitigation strategies are implemented on a global scale. You definitely need to include that.

MAYA: I was actually going to raise that too. I've been looking at nature-based solutions — reforestation, wetland preservation, soil conservation — and I think they tie in well with both the technological and policy angles. But I'm not sure where they fit in the essay structure.

PROFESSOR CHEN: Maya, nature-based solutions work best as an integrating conclusion — they show how technology and policy must work together. So I'd suggest structuring the essay like this: start with a problem statement, then technological solutions, then policy measures, then international cooperation, and finally conclude with natural solutions and their integration. Does that feel manageable?

SARAH: That flow makes a lot of sense. How long should the whole essay be?

PROFESSOR CHEN: Aim for around 2,500 to 3,000 words as a group. The upper end gives you the space to develop each section fully. Make sure your conclusion ties everything together and addresses why multiple approaches are necessary — not just one strategy in isolation.

JAMES: Should we be referencing specific agreements like the Paris Agreement by name, or is it enough to describe the mechanisms?

PROFESSOR CHEN: Name them specifically — that shows precise academic knowledge. Vague references to "international treaties" won't impress the markers. Cite the actual agreements and explain what they commit countries to doing.

MAYA: What about the word count split between us? Is it okay if some sections are longer than others?

PROFESSOR CHEN: That's fine, as long as each section is proportionate to its importance. Analysis and interpretation carry the most weight in marking, so don't sacrifice depth for balance. One more thing — the deadline is next Friday, October 25th, by 5 PM. You'll submit it through the online portal as a single document. Don't hesitate to email me as a group if questions come up.

SARAH: Thank you, Professor. That's given us a much clearer direction.
`;

const section3Type1Test: ListeningTest = {
  id: "listening-section3-type1",
  title: "Group Tutorial: Climate Change Essay",
  difficulty: "Hard",
  audioUrl: "/audio/ElevenLabs_2026-05-03T10_46_28_Ria - Next-door chatty Girl_pvc_sp100_s50_sb75_v3.mp3",
  transcript: section3Type1Transcript,
  sections: 3,
  questions: [
    {
      id: "s3t1q1",
      section: 3,
      type: "multiple_choice",
      text: "Who is leading the research on technological solutions for the group essay?",
      options: [
        "A. James",
        "B. Maya",
        "C. Sarah"
      ],
      answer: ["C"],
      order: 1
    },
    {
      id: "s3t1q2",
      section: 3,
      type: "multiple_choice",
      text: "What aspect of the essay is James responsible for?",
      options: [
        "A. Nature-based solutions",
        "B. Policy measures such as carbon pricing",
        "C. Technological solutions like solar power"
      ],
      answer: ["B"],
      order: 2
    },
    {
      id: "s3t1q3",
      section: 3,
      type: "multiple_choice",
      text: "What topic has Maya been researching?",
      options: [
        "A. Carbon pricing and emissions trading",
        "B. Renewable energy and solar panels",
        "C. Reforestation, wetland preservation, and soil conservation"
      ],
      answer: ["C"],
      order: 3
    },
    {
      id: "s3t1q4",
      section: 3,
      type: "multiple_choice",
      text: "Where does Professor Chen suggest placing nature-based solutions in the essay?",
      options: [
        "A. As the opening section to introduce the topic",
        "B. As an integrating conclusion that ties technology and policy together",
        "C. As a stand-alone section in the middle"
      ],
      answer: ["B"],
      order: 4
    },
    {
      id: "s3t1q5",
      section: 3,
      type: "multiple_choice",
      text: "What does Professor Chen recommend as the first element of the essay structure?",
      options: [
        "A. Technological solutions",
        "B. International cooperation",
        "C. A problem statement"
      ],
      answer: ["C"],
      order: 5
    },
    {
      id: "s3t1q6",
      section: 3,
      type: "multiple_choice",
      text: "What word count does Professor Chen recommend for the group essay?",
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
      text: "What does Professor Chen say the conclusion must address?",
      options: [
        "A. Only the history of climate change",
        "B. Why multiple approaches are necessary",
        "C. Personal recommendations for climate action"
      ],
      answer: ["B"],
      order: 7
    },
    {
      id: "s3t1q8",
      section: 3,
      type: "multiple_choice",
      text: "What does Professor Chen advise James to do when referencing international agreements?",
      options: [
        "A. Refer to them vaguely as international treaties",
        "B. Avoid mentioning them to stay within word count",
        "C. Name them specifically and explain their commitments"
      ],
      answer: ["C"],
      order: 8
    },
    {
      id: "s3t1q9",
      section: 3,
      type: "multiple_choice",
      text: "When is the group essay deadline?",
      options: [
        "A. Next Wednesday by noon",
        "B. Next Friday by 5 PM",
        "C. The following Monday"
      ],
      answer: ["B"],
      order: 9
    },
    {
      id: "s3t1q10",
      section: 3,
      type: "multiple_choice",
      text: "How should the group submit their essay?",
      options: [
        "A. As separate individual documents by email",
        "B. By hand in the professor's office",
        "C. As a single document through the online portal"
      ],
      answer: ["C"],
      order: 10
    }
  ]
};

const section3Type2Transcript = `
DR FOSTER: Good afternoon, everyone. Marcus, Priya, Leon — welcome to this biology exam preparation session. I've asked you all to come together because you're sitting the unit four paper next Thursday, and I think it'll be more productive to go through the key areas as a group. Let's make a start. Marcus, do you want to tell us where you feel least confident?

MARCUS: Thanks, Dr Foster. Honestly, I keep getting confused between photosynthesis and cellular respiration. I know they're connected, but I can't always explain how.

DR FOSTER: That's a very common issue. Let's clarify it now. Photosynthesis is the process where plants use light energy to convert carbon dioxide and water into glucose and oxygen. Cellular respiration is essentially the reverse — organisms break down glucose to release energy in the form of ATP. The key point is that they're complementary processes, and the exam frequently asks you to compare them.

PRIYA: I'm okay with those two, but I struggle with the section on enzymes — specifically how temperature and pH affect enzyme activity. Can we go over that?

DR FOSTER: Of course. Enzymes are biological catalysts with an optimal temperature and pH. Beyond those optimal conditions, the enzyme's shape changes — it denatures — and it can no longer bind to its substrate. This is really important to explain precisely in the exam, not just say it "stops working."

LEON: What about the revision strategies themselves? I feel like I've been reading through notes, but the information isn't sticking.

DR FOSTER: That's a really honest observation, Leon. Passive reading is one of the least effective strategies. Instead, I want you all to try active recall — close your notes and try to write down everything you remember about a topic. Then check what you missed. It feels harder, but the research is clear that it leads to much better retention.

MARCUS: What about practice questions? Is it worth doing past papers at this stage?

DR FOSTER: Absolutely essential. Working through past papers does three things: it familiarises you with the exam format, it shows you the standard of answer expected, and it reveals your weak areas so you can target them. I'd suggest doing at least two full past papers before Thursday.

PRIYA: Should we be doing that in timed conditions?

DR FOSTER: Yes, at least one of them. Simulate exam conditions — no notes, strict timing, no phone. The other one you can do more openly to focus on quality of answers. Both approaches have value.

LEON: Is it worth forming a study group between the three of us?

DR FOSTER: Definitely. Teaching each other is one of the most powerful ways to consolidate knowledge. If you can explain a concept clearly to someone else, it means you genuinely understand it. What I'd suggest is that each of you takes a topic, prepares a short explanation, and then teaches it to the others. You'll quickly discover any gaps in your own understanding.
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
        "C. Active recall",
        "D. Enzyme denaturation",
        "E. Past papers"
      ],
      answer: ["A"],
      order: 1
    },
    {
      id: "s3t2q2",
      section: 3,
      type: "matching",
      text: "How organisms break down glucose to release energy as ATP",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Active recall",
        "D. Enzyme denaturation",
        "E. Past papers"
      ],
      answer: ["B"],
      order: 2
    },
    {
      id: "s3t2q3",
      section: 3,
      type: "matching",
      text: "Writing down everything you remember about a topic without looking at notes",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Active recall",
        "D. Enzyme denaturation",
        "E. Past papers"
      ],
      answer: ["C"],
      order: 3
    },
    {
      id: "s3t2q4",
      section: 3,
      type: "matching",
      text: "What happens to an enzyme when conditions exceed its optimal temperature or pH",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Active recall",
        "D. Enzyme denaturation",
        "E. Past papers"
      ],
      answer: ["D"],
      order: 4
    },
    {
      id: "s3t2q5",
      section: 3,
      type: "matching",
      text: "Reveals weak areas and shows the standard of answer expected",
      options: [
        "A. Photosynthesis",
        "B. Cellular respiration",
        "C. Active recall",
        "D. Enzyme denaturation",
        "E. Past papers"
      ],
      answer: ["E"],
      order: 5
    },
    {
      id: "s3t2q6",
      section: 3,
      type: "multiple_choice",
      text: "Which student raises the question about enzyme activity?",
      options: [
        "A. Marcus",
        "B. Leon",
        "C. Priya"
      ],
      answer: ["C"],
      order: 6
    },
    {
      id: "s3t2q7",
      section: 3,
      type: "multiple_choice",
      text: "What does Dr Foster describe as one of the least effective revision strategies?",
      options: [
        "A. Doing past papers",
        "B. Passive reading through notes",
        "C. Teaching others"
      ],
      answer: ["B"],
      order: 7
    },
    {
      id: "s3t2q8",
      section: 3,
      type: "multiple_choice",
      text: "How many full past papers does Dr Foster suggest completing before the exam?",
      options: [
        "A. At least one",
        "B. At least three",
        "C. At least two"
      ],
      answer: ["C"],
      order: 8
    },
    {
      id: "s3t2q9",
      section: 3,
      type: "multiple_choice",
      text: "What does Dr Foster recommend about timed exam conditions?",
      options: [
        "A. All papers should be done under strict exam conditions",
        "B. At least one paper should simulate real exam conditions",
        "C. Timed practice is not recommended at this stage"
      ],
      answer: ["B"],
      order: 9
    },
    {
      id: "s3t2q10",
      section: 3,
      type: "multiple_choice",
      text: "What does Dr Foster suggest each student should do in the study group?",
      options: [
        "A. Read a chapter and summarise it for the others",
        "B. Take a topic, prepare an explanation, and teach it to the others",
        "C. Complete a practice paper independently and compare answers"
      ],
      answer: ["B"],
      order: 10
    }
  ]
};

const section3Type5Transcript = `
DR WILLIAMS: Good morning, everyone. Aiden, Sophie, Ravi — thank you all for coming to this project briefing. As your academic advisor, I want to make sure each of you is clear on the requirements for this semester's research project before you get started. Let's go through everything together. Aiden, you look like you have a question already.

AIDEN: Yes, thanks Dr Williams. I wasn't sure about the overall theme. Is it fixed, or do we choose our own?

DR WILLIAMS: The theme is fixed for all students this year — it's "Biodiversity in Urban Ecosystems." Your project should explore how cities impact plant and animal diversity. You'll each select your own specific location though — ideally a local park or green space within the city. You'll need to visit it multiple times throughout the semester, so choose somewhere accessible.

SOPHIE: Do we need any specialist equipment for the fieldwork? I was worried it might be expensive.

DR WILLIAMS: Not at all, Sophie — that's good news. For the initial phase, you'll use simple observation and survey methods. You'll document species using photographs, field notes, and specimen identification guides. In the second phase, you'll analyse your data using statistical software, which is available through the university, and compare your findings with existing research.

RAVI: What are the key deadlines? I want to build a proper schedule.

DR WILLIAMS: Absolutely, let's go through them. Your project proposal is due November 10th — it's just a two-page outline, so don't overthink it. The literature review is due December 1st. The final report, which should be around 5,000 words, is due March 15th. And you'll each give a formal presentation on April 5th, which also contributes to your grade.

AIDEN: How many sources are we expected to use?

DR WILLIAMS: For the literature review, a minimum of 15 academic sources. For the final report, aim for at least 20. Peer-reviewed journals should be your primary sources — you can use reputable websites and books as supplements, but academic journals must form the core. This is critical for maintaining academic integrity.

SOPHIE: How will we be graded? I'd like to know what carries the most weight.

DR WILLIAMS: Good question. Research methodology accounts for 25% — that's how well you've designed your study. Analysis and interpretation of your data is the largest component at 35%. Writing quality is worth 20%. Scientific terminology accounts for 10%, and your oral presentation is also 10%.

RAVI: One last thing — is this an individual project, or can we collaborate?

DR WILLIAMS: It's strictly individual — you each submit your own report. That said, you're very welcome to discuss ideas with each other and with your assigned supervisor. Supervisors will be announced next week and will meet with each of you on a monthly basis throughout the project.
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
      type: "multiple_choice",
      text: "Which student asks about the number of sources required?",
      options: [
        "A. Sophie",
        "B. Ravi",
        "C. Aiden"
      ],
      answer: ["C"],
      order: 8
    },
    {
      id: "s3t5q9",
      section: 3,
      type: "multiple_choice",
      text: "Which student asks about the grading criteria?",
      options: [
        "A. Aiden",
        "B. Sophie",
        "C. Ravi"
      ],
      answer: ["B"],
      order: 9
    },
    {
      id: "s3t5q10",
      section: 3,
      type: "multiple_choice",
      text: "What does Dr Williams say about collaboration between students?",
      options: [
        "A. Students may submit a joint report if agreed in advance",
        "B. Collaboration is completely forbidden throughout the project",
        "C. Students may discuss ideas but must each submit their own individual report"
      ],
      answer: ["C"],
      order: 10
    }
  ]
};

const section3Type6Transcript = `
MS OKONKWO: Good morning, everyone. Welcome to the university library. I'm Ms Okonkwo, the research services librarian. Bethany, Joel, Fatima — I'm glad you could all make it to this orientation session. There's quite a lot to cover, so please do ask questions as we go. Let's start with the main collection. Those shelves behind me are the open stacks, where most of our books are organised by the Dewey Decimal System — the standard classification used in libraries around the world.

BETHANY: How do we actually find a specific book? Do we just walk through the shelves?

MS OKONKWO: Not quite — that would take forever! You use our online catalogue. You can see the computer terminals along that wall. Type in the title, the author's name, or some subject keywords, and the system will give you the shelf location and tell you whether the book is currently available or already on loan.

JOEL: What happens if the book I need is already borrowed by someone else?

MS OKONKWO: Good question, Joel. You have two options. First, you can place a hold — the system queues your request, and when the book is returned, it's reserved for you for seven days. Your second option is our inter-library loan service, where we borrow the item from another institution if we don't hold a copy. That takes around two weeks but it's completely free of charge.

FATIMA: What about access to journal articles? My supervisor mentioned using academic databases.

MS OKONKWO: Absolutely essential for research. We subscribe to several major databases — JSTOR, ScienceDirect, and ProQuest are the main ones. You can access all of them from the library computers or remotely from your accommodation using your student login. They contain millions of peer-reviewed articles across all disciplines.

BETHANY: How long are we allowed to borrow books for?

MS OKONKWO: The standard loan period is four weeks. You can renew online up to three times, as long as no one else has placed a hold on the item. Please do keep track of your due dates — overdue fines are 50 pence per day per book. We do send reminders, but the responsibility is ultimately yours.

JOEL: Are there quiet spaces for studying? Our halls of residence can be quite noisy.

MS OKONKWO: Yes, floors three, four, and five are designated quiet zones — no conversation permitted at all up there. On the third floor, you'll also find group study rooms, which you can book online in advance. They're fully soundproofed, so ideal for group work without disturbing others.

FATIMA: Is there anything else we should know before we leave today?

MS OKONKWO: One more thing — we run weekly library orientation sessions every Friday at 2 PM, lasting about 45 minutes. We cover research tools, citation management software like RefWorks, and how to assess the credibility of your sources. I'd strongly recommend attending at least once, especially before your first major assignment.
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
      text: "What classification system organises the books in the open stacks?",
      answer: ["Dewey Decimal System"],
      order: 1
    },
    {
      id: "s3t6q2",
      section: 3,
      type: "short_answer",
      text: "Which student asks how to find a specific book?",
      answer: ["Bethany"],
      order: 2
    },
    {
      id: "s3t6q3",
      section: 3,
      type: "short_answer",
      text: "How long does an inter-library loan usually take?",
      answer: ["about two weeks", "two weeks", "around two weeks"],
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
      text: "What is the standard loan period for borrowed books?",
      answer: ["four weeks"],
      order: 5
    },
    {
      id: "s3t6q6",
      section: 3,
      type: "short_answer",
      text: "What is the fine per day for an overdue book?",
      answer: ["50 pence"],
      order: 6
    },
    {
      id: "s3t6q7",
      section: 3,
      type: "short_answer",
      text: "Which floors are designated as quiet study zones?",
      answer: ["floors three, four, and five", "three, four, and five", "upper floors"],
      order: 7
    },
    {
      id: "s3t6q8",
      section: 3,
      type: "multiple_choice",
      text: "Which student asks about access to academic journal databases?",
      options: [
        "A. Bethany",
        "B. Joel",
        "C. Fatima"
      ],
      answer: ["C"],
      order: 8
    },
    {
      id: "s3t6q9",
      section: 3,
      type: "multiple_choice",
      text: "When are the weekly library orientation sessions held?",
      options: [
        "A. Every Thursday at 2 PM",
        "B. Every Friday at 2 PM",
        "C. Every Monday at 10 AM"
      ],
      answer: ["B"],
      order: 9
    },
    {
      id: "s3t6q10",
      section: 3,
      type: "multiple_choice",
      text: "What does Ms Okonkwo say about the group study rooms?",
      options: [
        "A. They are available on a first-come, first-served basis only",
        "B. They must be booked in person at the library desk",
        "C. They are soundproofed and can be booked online in advance"
      ],
      answer: ["C"],
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
