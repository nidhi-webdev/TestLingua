"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, Sparkles } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function ListeningSection1TypePage() {
  const [showTranscript, setShowTranscript] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-4";
  const practiceSet = listeningPracticeSets[routeType as keyof typeof listeningPracticeSets] ?? listeningPracticeSets["type-4"];

  const questions = useMemo(() => practiceSet.questions, [practiceSet]);

  const totalQuestions = practiceSet.questions.length;

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Navbar />

      <main className="pt-16 pb-20">
        <section className="bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <Link
              href="/exams/ielts/listening/section-1"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Section 1
            </Link>

            <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                  <Headphones className="w-3.5 h-3.5" /> IELTS Listening Section 1
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                    {practiceSet.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Listen carefully and answer all the questions based on the transcript provided.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Clock3 className="w-4 h-4 text-sky-300" /> About 10 minutes
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Mic2 className="w-4 h-4 text-emerald-300" /> Section 1 difficulty
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <FileText className="w-4 h-4 text-amber-300" /> 10 questions
                  </span>
                </div>
              </div>

              <div className="bg-white text-slate-900 rounded-4xl p-7 shadow-2xl shadow-black/20 border border-slate-200/70">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Practice Set</p>
                <p className="mt-2 text-3xl font-black">{totalQuestions} Questions</p>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  Use the transcript and the question prompts to practice the exact answer style used in IELTS Listening Section 1.
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-sky-600">
                  <PlayCircle className="w-4 h-4" /> Audio ready later via TTS
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/70 border border-slate-200 p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">What&apos;s involved?</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">
                    {routeType === "type-6" ? "Short-answer questions" : "Form/note/table/flow chart/summary completion"}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTranscript((value) => !value)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  <Info className="w-4 h-4" /> {showTranscript ? "Hide" : "Show"} transcript
                </button>
              </div>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-[15px]">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What&apos;s involved?</h3>
                  <p>
                    {routeType === "type-6" 
                      ? "In this type of question, you have to read a question and write a short answer using information from the recording."
                      : "Fill in the gaps in an outline using facts, names, or categories from the recording."}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important guidelines</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    <li>Read the instructions very carefully as the word limit can change</li>
                    <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span></li>
                    <li>Writing more than the word limit will result in losing the mark</li>
                    <li>Contracted words like &apos;they&apos;re&apos; will not be tested</li>
                    <li>Hyphenated words like &apos;check-in&apos; count as single words</li>
                    <li>Sometimes you may need to provide two or three different answers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What skills are tested?</h3>
                  <p>
                    This question type focuses on your ability to listen for facts such as places, prices, times, or other specific information heard in the recording.
                  </p>
                </div>
              </div>

              {showTranscript && (
                <div className="mt-8 rounded-[1.75rem] bg-slate-950 text-slate-100 p-6 border border-slate-800">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Transcript</p>
                      <h3 className="mt-2 text-xl font-black">{practiceSet.title}</h3>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-sky-200">
                      <Sparkles className="w-3.5 h-3.5" /> For later TTS conversion
                    </span>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-300 font-sans overflow-x-auto max-h-96">
                    {practiceSet.transcript}
                  </pre>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/70 border border-slate-200 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Practice Questions</p>
                    <h2 className="text-2xl font-black text-slate-900">
                      {routeType === "type-6" ? "Short-answer questions" : "Form/note/table/flow chart/summary completion"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {routeType === "type-4" ? (
                    <div className="bg-slate-50 border-2 border-slate-200 rounded-[2rem] overflow-hidden">
                      <div className="bg-slate-900 px-8 py-4 flex items-center justify-between">
                        <h3 className="text-white font-black uppercase tracking-widest text-xs">Membership Form</h3>
                        <span className="text-slate-400 text-[10px] font-bold tracking-widest">OFFICIAL PRACTICE</span>
                      </div>
                      <div className="p-8 sm:p-10 space-y-8">
                        {questions.map((question) => (
                          <div key={question.id} className="grid sm:grid-cols-[1fr_1.5fr] gap-6 items-center group">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-3">
                              <span className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">{question.order}</span>
                              {question.text}
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                value={answers[question.id] || ""}
                                onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                                placeholder="Type answer..."
                                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100 shadow-sm"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    questions.map((question) => (
                      <div key={question.id} className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-slate-50/80">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Question {question.order}</p>
                            <p className="mt-2 text-base font-semibold text-slate-900">{question.text}</p>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                            {question.type === "short_answer" ? "Short Answer" : "Gap fill"}
                          </span>
                        </div>
                        {question.type === "multiple_choice" ? (
                          <div className="mt-4 space-y-3">
                            {question.options?.map((option) => {
                              const isSelected = answers[question.id] === option;

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option }))}
                                  className={`w-full text-left rounded-xl border px-4 py-3 text-sm font-medium transition ${
                                    isSelected
                                      ? "border-sky-500 bg-sky-50 text-sky-900"
                                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                            <input
                              type="text"
                              value={answers[question.id] || ""}
                              onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                              placeholder="Type your answer"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                            />
                          </div>
                        )}
                        {question.transcript && (
                          <p className="mt-3 text-xs leading-6 text-slate-500 border-t border-slate-200 pt-3">
                            Transcript cue: {question.transcript}
                          </p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-300/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sky-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">How you&apos;ll use this later</p>
                    <h3 className="text-2xl font-black">Transcript and MP3 pipeline</h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  The transcript is stored separately so you can show it in the UI now, then feed the same text into a text-to-speech service later to generate the MP3.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest text-slate-200">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">UI transcript</span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
