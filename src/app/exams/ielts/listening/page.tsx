"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowLeft, Clock, Headphones, CircleHelp, ArrowRight } from "lucide-react";

export default function IELTSListeningQuestionsPage() {
  const [hasStartedTest, setHasStartedTest] = useState(false);

  const listeningStructure = [
    {
      section: "Section 1",
      format: "Conversation (everyday situation)",
    },
    {
      section: "Section 2",
      format: "Monologue (e.g., speech about a place)",
    },
    {
      section: "Section 3",
      format: "Academic discussion (students/teacher)",
    },
    {
      section: "Section 4",
      format: "Academic lecture",
    },
  ];

  const fullTestQuestions = listeningStructure.map((item, sectionIndex) => ({
    ...item,
    questions: Array.from({ length: 10 }, (_, questionIndex) => {
      const questionNumber = sectionIndex * 10 + questionIndex + 1;
      return {
        number: questionNumber,
        prompt: `Question ${questionNumber}: Listen carefully and choose the best answer based on the audio.`,
      };
    }),
  }));

  const questions = [
    {
      id: 1,
      type: "Multiple Choice",
      question:
        "In the audio, why does the student visit the library help desk?",
      options: [
        "To return overdue books",
        "To request a research room",
        "To ask about online journal access",
        "To register for a writing workshop",
      ],
    },
    {
      id: 2,
      type: "Sentence Completion",
      question:
        "The seminar starts at ____ and takes place in Room B-214.",
      options: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
    },
    {
      id: 3,
      type: "Matching Information",
      question:
        "Match each speaker with the concern they raised in the discussion.",
      options: [
        "Speaker A - Transport",
        "Speaker B - Budget",
        "Speaker C - Staffing",
        "Speaker D - Schedule",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/exams/ielts"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to IELTS Overview
            </Link>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100">
                  IELTS Listening Practice
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">Listening Questions</h1>
                <p className="mt-4 text-lg text-blue-100">
                  Practice real IELTS-style listening questions with timed sections,
                  clear instructions, and section-wise strategy tips.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-white/10 p-4">
                    <Clock className="mb-2 h-5 w-5 text-blue-100" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">Time</p>
                    <p className="font-semibold">30 Minutes</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <Headphones className="mb-2 h-5 w-5 text-blue-100" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">Format</p>
                    <p className="font-semibold">4 Audio Sections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {!hasStartedTest ? (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    Practice Set 1
                  </h2>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    3 Sample Questions
                  </span>
                </div>

                <div className="space-y-5">
                  {questions.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700">
                        <CircleHelp className="h-4 w-4" />
                        Question {item.id} • {item.type}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {item.options.map((option) => (
                          <li
                            key={option}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    onClick={() => setHasStartedTest(true)}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    Start Timed Test
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                    Download Answer Sheet
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    IELTS Listening Timed Test
                  </h2>
                  <p className="mt-3 text-slate-700">
                    Structure: The test has 4 sections, and each section has 10 questions.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {listeningStructure.map((item) => (
                      <li key={item.section} className="text-sm sm:text-base">
                        <span className="font-semibold">{item.section}</span> - {item.format}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  {fullTestQuestions.map((section) => (
                    <article
                      key={section.section}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {section.section}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          10 Questions
                        </span>
                      </div>
                      <p className="mb-5 text-sm text-slate-600">{section.format}</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {section.questions.map((question) => (
                          <div
                            key={question.number}
                            className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                          >
                            <p className="text-sm font-semibold text-blue-700">
                              Q{question.number}
                            </p>
                            <p className="mt-1 text-sm text-slate-700">{question.prompt}</p>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
