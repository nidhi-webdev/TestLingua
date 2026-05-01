"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, Sparkles } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function Section3TypePage() {
  const [showTranscript, setShowTranscript] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-1";
  const practiceSet = listeningPracticeSets[`section3-${routeType}` as keyof typeof listeningPracticeSets];

  if (!practiceSet) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <Navbar />
        <main className="pt-16 pb-20">
          <section className="bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
              <Link
                href="/exams/ielts/listening/section-3"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Section 3
              </Link>
              <div className="mt-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                  Coming Soon
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mt-4">
                  This question type will be available soon. Please check back later.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
              href="/exams/ielts/listening/section-3"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Section 3
            </Link>

            <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                  <Headphones className="w-3.5 h-3.5" /> IELTS Listening Section 3
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                    {practiceSet.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    {routeType === "type-2" 
                      ? "Listen carefully and match the items to the correct options from the recording."
                      : routeType === "type-1"
                      ? "Listen carefully and select the correct answer for each question."
                      : routeType === "type-5"
                      ? "Listen carefully and fill in gaps in a form, notes, table or flow chart based on the recording."
                      : "Listen carefully and answer the short answer questions based on the recording."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Clock3 className="w-4 h-4 text-sky-300" /> About 12 minutes
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Mic2 className="w-4 h-4 text-emerald-300" /> Section 3 difficulty
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
                  {routeType === "type-2"
                    ? "Match each item to the correct option from the list based on information from the recording."
                    : routeType === "type-1"
                    ? "Select the correct answer (A, B, or C) for each question based on what you hear."
                    : routeType === "type-5"
                    ? "Fill in gaps in a form, notes, table or flow chart using words from the recording. Follow word limits carefully."
                    : "Answer short questions in no more than 3 words based on the recording."}
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
                    {routeType === "type-2"
                      ? "Matching"
                      : routeType === "type-1"
                      ? "Multiple choice"
                      : routeType === "type-5"
                      ? "Form/note/table/flow chart completion"
                      : "Short answer questions"}
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
                    {routeType === "type-2"
                      ? "You have to match items from the recording to a list of options on the question paper, then write the correct letter on the answer sheet."
                      : routeType === "type-1"
                      ? "You have to choose one correct answer (A, B or C) to complete a question or sentence, then write the correct letter on the answer sheet."
                      : routeType === "type-5"
                      ? "You have to fill in gaps in an outline (form, notes, table, or flow chart) that summarises part or all of the recording. You may select words from a list or write words directly from the recording."
                      : "You have to write answers to questions about the recording. Your answer should be no longer than three words and/or a number."}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important guidelines</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    {routeType === "type-2" && (
                      <>
                        <li>Listen carefully for detailed information in the recording</li>
                        <li>Understand how facts are connected to each other</li>
                        <li>Follow the conversation between two speakers carefully</li>
                        <li>Write the correct letter on your answer sheet</li>
                        <li>You may need to match multiple items to different options</li>
                      </>
                    )}
                    {routeType === "type-1" && (
                      <>
                        <li>Read the question carefully before listening</li>
                        <li>Listen for the specific information asked in the question</li>
                        <li>Only one answer is correct - choose the best option</li>
                        <li>Some questions test general understanding, others test specific points</li>
                        <li>Write the correct letter (A, B, or C) on your answer sheet</li>
                      </>
                    )}
                    {routeType === "type-5" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>You may be selecting from a list OR writing words from the recording</li>
                        <li>Do not change words from the recording in any way</li>
                        <li>Focus on main points that the listener would naturally write down</li>
                      </>
                    )}
                    {routeType === "type-6" && (
                      <>
                        <li>Your answer should not be longer than three words and/or a number</li>
                        <li>Writing more than three words will result in losing the mark</li>
                        <li>Use only words from the recording when answering</li>
                        <li>Write clearly and legibly on your answer sheet</li>
                        <li>Do not change words from the recording in any way</li>
                        <li>Focus on key information and specific details</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What skills are tested?</h3>
                  <p>
                    {routeType === "type-2"
                      ? "This type tests your ability to listen for detailed information, follow a conversation between two speakers, and recognise how facts in the recording are connected to each other."
                      : routeType === "type-1"
                      ? "This type tests many listening skills, such as detailed understanding of specific points, or general understanding of the main points of the recording."
                      : routeType === "type-5"
                      ? "This type tests your ability to focus on main points and summarise information. It may involve understanding how different points relate to each other (in notes), how stages link together (in flow charts), or how facts fit into categories (in tables or forms)."
                      : "This type tests your ability to listen for specific information and key details in an academic conversation."}
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
                      {routeType === "type-2"
                        ? "Matching questions"
                        : routeType === "type-1"
                        ? "Multiple choice questions"
                        : routeType === "type-5"
                        ? "Complete the form/notes/table/flow chart"
                        : "Answer the questions"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {questions.map((question) => (
                    <div key={question.id} className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-slate-50/80">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Question {question.order}</p>
                          <p className="mt-2 text-base font-semibold text-slate-900">{question.text}</p>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                          {question.type === "matching"
                            ? "Match"
                            : question.type === "multiple_choice"
                            ? "Select"
                            : question.type === "short_answer"
                            ? "Answer"
                            : "Complete"}
                        </span>
                      </div>

                      {question.type === "matching" ? (
                        <div className="mt-4">
                          <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest">
                              Select the matching option:
                            </label>
                            <div className="space-y-2">
                              {question.options?.map((option) => {
                                const optionLetter = option.split(".")[0].trim();
                                const isSelected = answers[question.id] === optionLetter;

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: optionLetter }))}
                                    className={`w-full text-left rounded-xl border px-4 py-3 text-sm font-medium transition ${
                                      isSelected
                                        ? "border-sky-500 bg-sky-50 text-sky-900 ring-2 ring-sky-200"
                                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : question.type === "multiple_choice" ? (
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
                        <div className="mt-4">
                          <input
                            type="text"
                            value={answers[question.id] || ""}
                            onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                            placeholder="Type your answer"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-300/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sky-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">How you&apos;ll use this later</p>
                    <h3 className="text-2xl font-black">
                      {routeType === "type-2"
                        ? "Matching & audio pipeline"
                        : routeType === "type-1"
                        ? "Multiple choice & audio pipeline"
                      : routeType === "type-5"
                      ? "Form/flow chart visualization & audio pipeline"
                      : "Short answer & audio pipeline"}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {routeType === "type-2"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can track answer patterns and provide detailed feedback on matching accuracy."
                    : routeType === "type-1"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can track which answer choices are most commonly selected and provide detailed feedback."
                    : routeType === "type-5"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can visualize form fields, flow chart stages, or table categories with interactive completion tracking."
                    : "The transcript is stored separately for text-to-speech conversion. Later, you can evaluate answer accuracy and provide detailed feedback on listening comprehension."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest text-slate-200">
                  {routeType === "type-2" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Matching ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
                  {routeType === "type-1" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">MCQ ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
                  {routeType === "type-5" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Form/flow chart ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
                  {routeType === "type-6" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Short answer ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
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
