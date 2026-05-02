"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, Sparkles } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function ListeningSection1TypePage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-4";
  const practiceSet = listeningPracticeSets[routeType as keyof typeof listeningPracticeSets] ?? listeningPracticeSets["type-4"];

  const questions = useMemo(() => practiceSet.questions, [practiceSet]);
  const totalQuestions = practiceSet.questions.length;

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.filter(q => 
      q.answer.some(a => a.toLowerCase().trim() === (answers[q.id] || "").toLowerCase().trim())
    ).length;
  }, [submitted, questions, answers]);

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Professional Header Section */}
        <section className="relative pt-12 pb-32 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_35%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/exams/ielts/listening/section-1"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.3em] group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
            </Link>

            {submitted && (
              <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-[2rem] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500 flex flex-col items-center justify-center text-white shadow-xl shadow-blue-500/20">
                      <span className="text-2xl font-black">{score}</span>
                      <span className="text-[8px] font-black uppercase">Score</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Practice Complete!</h3>
                      <p className="text-slate-400 font-medium">You got {score} out of {totalQuestions} questions correct.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {setAnswers({}); setSubmitted(false);}}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            <div className="mt-12 grid lg:grid-cols-[1fr_400px] gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">
                  <Headphones className="w-4 h-4" /> Official Exam Practice
                </div>
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.9] drop-shadow-sm">
                    {practiceSet.title}
                  </h1>
                  <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                    Sharpen your listening skills with our official simulation environment.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm">
                    <Clock3 className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-bold">10 Minutes</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold">{totalQuestions} Questions</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Audio Control Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
                <div className="relative bg-white rounded-[2.5rem] p-10 border border-slate-200/50 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Audio Stream</p>
                      <p className="mt-1 text-2xl font-black text-slate-900 tracking-tight">Listen Here</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <PlayCircle className="w-7 h-7" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-1 bg-slate-50 rounded-2xl border border-slate-100">
                      <audio 
                        controls 
                        src={practiceSet.audioUrl}
                        className="w-full h-12 custom-audio-player"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 px-2">
                      <Info className="w-3.5 h-3.5" />
                      Listen carefully; audio plays only once in the real exam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid xl:grid-cols-[1fr_400px] gap-8 items-start">
            <div className="space-y-8">
              {/* Question Area */}
              <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 p-10 sm:p-12">
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Question Task</p>
                    <h2 className="text-2xl font-black text-slate-900 leading-tight">
                      {routeType === "type-6" ? "Short-answer questions" : "Form/note/table/flow chart/summary completion"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {routeType === "type-4" ? (
                    <div className="bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-inner">
                      <div className="bg-slate-900 px-10 py-5 flex items-center justify-between">
                        <h3 className="text-white font-black uppercase tracking-widest text-[10px]">Official Membership Form</h3>
                        <div className="flex gap-1">
                          {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/20" />)}
                        </div>
                      </div>
                      <div className="p-10 sm:p-12 space-y-10">
                        {questions.map((question) => {
                          const isCorrect = question.answer.some(a => a.toLowerCase().trim() === (answers[question.id] || "").toLowerCase().trim());
                          const showFeedback = submitted;

                          return (
                            <div key={question.id} className="grid sm:grid-cols-[1.2fr_1fr] gap-8 items-center">
                              <label className="text-sm font-black text-slate-700 flex items-center gap-4">
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-lg ${
                                  showFeedback
                                    ? isCorrect ? "bg-emerald-500 text-white shadow-emerald-500/20" : "bg-rose-500 text-white shadow-rose-500/20"
                                    : "bg-slate-900 text-white shadow-slate-900/20"
                                }`}>
                                  {question.order}
                                </span>
                                {question.text}
                              </label>
                              <div className="space-y-2">
                                <input
                                  type="text"
                                  disabled={submitted}
                                  value={answers[question.id] || ""}
                                  onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                                  placeholder="Enter your answer..."
                                  className={`w-full rounded-2xl border-2 px-6 py-4 text-sm font-black outline-none transition-all shadow-sm ${
                                    showFeedback
                                      ? isCorrect 
                                        ? "border-emerald-500 bg-emerald-50 text-emerald-900" 
                                        : "border-rose-500 bg-rose-50 text-rose-900"
                                      : "border-slate-200 bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5"
                                  }`}
                                />
                                {showFeedback && !isCorrect && (
                                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest pl-2">
                                    Correct: {question.answer[0]}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {questions.map((question) => {
                        const isCorrect = question.answer.some(a => a.toLowerCase().trim() === (answers[question.id] || "").toLowerCase().trim());
                        const showFeedback = submitted;

                        return (
                          <div key={question.id} className={`rounded-[2rem] border p-8 group transition-all ${
                            showFeedback
                              ? isCorrect ? "border-emerald-200 bg-emerald-50/30" : "border-rose-200 bg-rose-50/30"
                              : "border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                          }`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-5">
                                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0 shadow-lg ${
                                  showFeedback
                                    ? isCorrect ? "bg-emerald-500 text-white shadow-emerald-500/20" : "bg-rose-500 text-white shadow-rose-500/20"
                                    : "bg-blue-600 text-white shadow-blue-600/20"
                                }`}>
                                  {question.order}
                                </span>
                                <p className="text-lg font-black text-slate-900 pt-1.5 leading-snug">{question.text}</p>
                              </div>
                            </div>
                            <div className="mt-6 ml-14 space-y-3">
                              <input
                                type="text"
                                disabled={submitted}
                                value={answers[question.id] || ""}
                                onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                                placeholder="Type your answer"
                                className={`w-full max-w-md rounded-2xl border-2 px-6 py-4 text-sm font-black outline-none transition-all shadow-sm ${
                                  showFeedback
                                    ? isCorrect 
                                      ? "border-emerald-500 bg-emerald-50 text-emerald-900" 
                                      : "border-rose-500 bg-rose-50 text-rose-900"
                                    : "border-slate-200 bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-600/5"
                                }`}
                              />
                              {showFeedback && !isCorrect && (
                                <p className="text-xs font-black text-emerald-600 uppercase tracking-widest pl-2">
                                  Correct Answer: {question.answer[0]}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <aside className="space-y-6">
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/30">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" /> Exam Guidelines
                </h3>
                <ul className="space-y-5">
                  {[
                    "Follow word limits exactly",
                    "NO MORE THAN TWO WORDS",
                    "Spelling must be accurate",
                    "Audio plays only once"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200">
                <h3 className="text-lg font-black leading-tight mb-4 tracking-tight">
                  {submitted ? "Want to try again?" : "Ready to submit?"}
                </h3>
                <p className="text-blue-100 text-sm font-medium mb-6 leading-relaxed">
                  {submitted 
                    ? "Reset your answers to practice this section again."
                    : "Double check your spelling and word counts before finishing."}
                </p>
                {submitted ? (
                  <button 
                    onClick={() => {setAnswers({}); setSubmitted(false);}}
                    className="w-full py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest transition-colors"
                  >
                    Reset Practice
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Submit Practice
                  </button>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
