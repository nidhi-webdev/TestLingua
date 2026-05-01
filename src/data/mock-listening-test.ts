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

const fullTranscript = `
RECEPTIONIST: Good morning. Seaview Student Accommodation, how can I help you?

CALLER: Hi. I'm looking for a room for the new term.

RECEPTIONIST: Of course. Could I take your name, please?

CALLER: Yes, it's Daniel Green.

RECEPTIONIST: Thanks, Daniel. Are you booking for yourself only?

CALLER: Yes, just me.

RECEPTIONIST: Great. And what type of room are you looking for?

CALLER: A single room, ideally with a desk.

RECEPTIONIST: Noted. When would you like the room from?

CALLER: From the 3rd of September.

RECEPTIONIST: And for how long?

CALLER: About five months, until the end of January.

RECEPTIONIST: That should be possible. Do you have any preferences about the floor?

CALLER: I'd prefer a low floor because I don't like stairs.

RECEPTIONIST: Certainly. We also offer optional meals. Would you like breakfast included?

CALLER: No, thanks. I'd rather just have a kitchen I can use.

RECEPTIONIST: That's available. May I ask how you heard about us?

CALLER: A friend of mine, Lucia Patel, recommended it.

RECEPTIONIST: Right. And do you need parking?

CALLER: No, I won't have a car.

RECEPTIONIST: Fine. The monthly rent is 420 pounds, and the deposit is 200 pounds.

CALLER: Okay. How do I pay the deposit?

RECEPTIONIST: You can pay by debit card or bank transfer. Which do you prefer?

CALLER: Bank transfer, please.

RECEPTIONIST: No problem. I'll email the booking form to daniel.green@example.com.

CALLER: Perfect. Thanks for your help.

RECEPTIONIST: You're welcome. We'll look out for your application.
`;

export const mockListeningTest: ListeningTest = {
  id: "listening-1",
  title: "Student Accommodation Booking - Section 1",
  difficulty: "Easy",
  audioUrl: "https://example.com/listening-section-1.mp3",
  transcript: fullTranscript,
  sections: 1,
  questions: [
    {
      id: "lq1",
      section: 1,
      type: "completion",
      text: "Name: _______________",
      answer: ["Daniel Green"],
      order: 1,
      transcript: "CALLER: Yes, it's Daniel Green."
    },
    {
      id: "lq2",
      section: 1,
      type: "completion",
      text: "Room type: _______________",
      answer: ["Single room", "single room"],
      order: 2,
      transcript: "CALLER: A single room, ideally with a desk."
    },
    {
      id: "lq3",
      section: 1,
      type: "completion",
      text: "Start date: _______________",
      answer: ["3rd September", "September 3rd", "3 September", "September 3"],
      order: 3,
      transcript: "CALLER: From the 3rd of September."
    },
    {
      id: "lq4",
      section: 1,
      type: "completion",
      text: "Length of stay: _______________",
      answer: ["five months", "5 months", "5 month"],
      order: 4,
      transcript: "CALLER: About five months, until the end of January."
    },
    {
      id: "lq5",
      section: 1,
      type: "completion",
      text: "Floor preference: _______________",
      answer: ["Low floor", "low floor"],
      order: 5,
      transcript: "CALLER: I'd prefer a low floor because I don't like stairs."
    },
    {
      id: "lq6",
      section: 1,
      type: "short_answer",
      text: "What facility does the caller want instead of breakfast?",
      answer: ["Kitchen", "a kitchen", "use a kitchen"],
      order: 6,
      transcript: "CALLER: No, thanks. I'd rather just have a kitchen I can use."
    },
    {
      id: "lq7",
      section: 1,
      type: "short_answer",
      text: "Who recommended the accommodation?",
      answer: ["Lucia Patel", "Lucia", "a friend", "a friend named Lucia Patel"],
      order: 7,
      transcript: "CALLER: A friend of mine, Lucia Patel, recommended it."
    },
    {
      id: "lq8",
      section: 1,
      type: "short_answer",
      text: "What is the monthly rent?",
      answer: ["420 pounds", "420", "£420"],
      order: 8,
      transcript: "RECEPTIONIST: The monthly rent is 420 pounds, and the deposit is 200 pounds."
    },
    {
      id: "lq9",
      section: 1,
      type: "multiple_choice",
      text: "How can the deposit be paid?",
      options: [
        "A. Cash only",
        "B. Debit card or bank transfer",
        "C. Credit card or cheque"
      ],
      answer: ["B"],
      order: 9,
      transcript: "RECEPTIONIST: You can pay by debit card or bank transfer."
    },
    {
      id: "lq10",
      section: 1,
      type: "multiple_choice",
      text: "What email address will receive the booking form?",
      options: [
        "A. daniel.green@example.com",
        "B. lucia.patel@example.com",
        "C. booking@seaview.com"
      ],
      answer: ["A"],
      order: 10,
      transcript: "RECEPTIONIST: I'll email the booking form to daniel.green@example.com."
    }
  ]
};

export const listeningTranscript = fullTranscript;
