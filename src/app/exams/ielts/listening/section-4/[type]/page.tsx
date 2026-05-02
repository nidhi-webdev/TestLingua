"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, Sparkles } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function Section4TypePage() {
  const [showTranscript, setShowTranscript] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-4";
  const practiceSet = listeningPracticeSets[`section4-${routeType}` as keyof typeof listeningPracticeSets];

  if (!practiceSet) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <Navbar />
        <main className="pt-16 pb-20">
          <section className="bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
              <Link
                href="/exams/ielts/listening/section-4"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Section 4
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
              href="/exams/ielts/listening/section-4"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Section 4
            </Link>

            <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                  <Headphones className="w-3.5 h-3.5" /> IELTS Listening Section 4
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                    {practiceSet.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    {routeType === "type-4" 
                      ? "Listen carefully and fill in gaps in the form, notes, table, or flow chart based on the recording."
                      : routeType === "type-5"
                      ? "Listen carefully and complete the sentences using information from the recording."
                      : "Listen carefully and answer the questions in short form based on the recording."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Clock3 className="w-4 h-4 text-sky-300" /> About 9 minutes
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Mic2 className="w-4 h-4 text-emerald-300" /> Section 4 difficulty
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
                  {routeType === "type-4"
                    ? "Complete the form, notes, table, or flow chart using words from the recording. Follow word limits carefully."
                    : routeType === "type-5"
                    ? "Complete the sentences using information from the recording. Follow word limits exactly as instructed."
                    : "Write short answers (usually 1-3 words) using information from the recording. Follow word limits carefully."}
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
                    {routeType === "type-4"
                      ? "Form/Note/Table/Flow Chart Completion"
                      : routeType === "type-5"
                      ? "Sentence completion"
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
                    {routeType === "type-4"
                      ? "You have to fill in gaps in an outline of part or all of the recording. The outline focuses on main ideas and facts and may be: a form (for names/facts), notes (to show relationships), a table (for categories), or a flow chart (for process stages). You may select from a list or write words from the recording."
                      : routeType === "type-5"
                      ? "You have to read sentences that summarise important information from the recording and fill in gaps in each sentence using information you hear. You need to understand both the specific information and relationships between ideas."
                      : "You have to read a question and write a short answer using information from the recording. Answers are typically 1-3 words. You may sometimes need to write two or three different answers to one question."}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important guidelines</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    {routeType === "type-4" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>Do not change words from the recording in any way</li>
                        <li>Focus on main points that the listener would naturally write down</li>
                        <li>Pay attention to the format – form, notes, table, or flow chart</li>
                      </>
                    )}
                    {routeType === "type-5" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>Contracted words like 'they're' will not be tested</li>
                        <li>Hyphenated words like 'check-in' count as single words</li>
                        <li>Understand how different ideas relate to one another (cause and effect, etc.)</li>
                      </>
                    )}
                    {routeType === "type-6" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>Contracted words like 'they're' will not be tested</li>
                        <li>Hyphenated words like 'check-in' count as single words</li>
                        <li>Focus on listening for specific facts like places, prices, and times</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What skills are tested?</h3>
                  <p>
                    {routeType === "type-4"
                      ? "This type focuses on your ability to identify the main points a listener would naturally write down. You must understand how facts relate to one another and fit into categories. You need to recognise the stages in a process if it's a flow chart."
                      : routeType === "type-5"
                      ? "This type focuses on your ability to identify important information in the recording. You must understand relationships between ideas, facts, and events – such as cause and effect, comparison, or sequence. You need to follow the flow of the monologue."
                      : "This type focuses on your ability to listen for specific facts in the recording. You need to identify and extract details like places, prices, times, and other key information quickly and accurately."}
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
                      {routeType === "type-4"
                        ? "Complete the form/notes/table"
                        : routeType === "type-5"
                        ? "Complete the sentences"
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
                          {question.type === "completion" || question.type === "short_answer" ? "Complete" : "Select"}
                        </span>
                      </div>

                      <div className="mt-4">
                        <input
                          type="text"
                          value={answers[question.id] || ""}
                          onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                          placeholder="Type your answer"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>
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
                      {routeType === "type-4"
                        ? "Form/Table visualization & audio pipeline"
                        : routeType === "type-5"
                        ? "Sentence completion & audio pipeline"
                        : "Short answer & audio pipeline"}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {routeType === "type-4"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can visualize form fields, tables, and flow chart stages with interactive completion tracking and detailed feedback."
                    : routeType === "type-5"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can provide detailed feedback on how well students identify key information and understand relationships in academic content."
                    : "The transcript is stored separately for text-to-speech conversion. Later, you can track which types of facts students struggle to identify and provide targeted feedback on listening for details."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest text-slate-200">
                  {routeType === "type-4" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Form/table ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
                  {routeType === "type-5" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Completion ready</span>
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
