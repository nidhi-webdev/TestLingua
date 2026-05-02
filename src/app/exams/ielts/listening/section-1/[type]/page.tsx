"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, RotateCcw, Send, Sparkles, XCircle } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function ListeningSection1TypePage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-4";
  const practiceSet = listeningPracticeSets[routeType as keyof typeof listeningPracticeSets] ?? listeningPracticeSets["type-4"];

  const questions = useMemo(() => practiceSet.questions, [practiceSet]);
  const totalQuestions = practiceSet.questions.length;
  const answeredCount = Object.values(answers).filter(v => v.trim() !== "").length;

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.filter(q =>
      q.answer.some(a => a.toLowerCase().trim() === (answers[q.id] || "").toLowerCase().trim())
    ).length;
  }, [submitted, questions, answers]);

  const handleSubmit = () => {
    setSubmitted(true);
    // Scroll to the score card that appears just above the questions
    setTimeout(() => {
      document.getElementById("score-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* ── Hero Header ── */}
        <section className="relative pt-10 pb-28 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_40%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/exams/ielts/listening/section-1"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.3em] group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Section 1
            </Link>

            <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-12 items-center">
              {/* Left — Title & Meta */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">
                  <Headphones className="w-3.5 h-3.5" /> IELTS Listening · Section 1
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white tracking-tight leading-[1.05]">
                  {practiceSet.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold">
                    <Clock3 className="w-4 h-4 text-blue-400" /> 10 min
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold">
                    <FileText className="w-4 h-4 text-emerald-400" /> {totalQuestions} questions
                  </span>
                </div>
              </div>

              {/* Right — Audio Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition duration-700" />
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Audio Stream</p>
                      <p className="mt-1 text-xl font-black text-slate-900 tracking-tight">Listen Here</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-1 bg-slate-50 rounded-2xl border border-slate-100">
                      <audio
                        controls
                        src={practiceSet.audioUrl}
                        className="w-full h-11"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 px-2">
                        <Info className="w-3.5 h-3.5" />
                        Listen carefully; audio plays only once in the real exam.
                      </div>
                      
                      <button 
                        onClick={() => setShowTranscript(!showTranscript)}
                        className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                          showTranscript 
                            ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20" 
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {showTranscript ? "Hide Transcript" : "Show Transcript"}
                      </button>
                    </div>

                    {showTranscript && (
                      <div className="mt-6 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden">
                        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-blue-600">
                          <Mic2 className="w-3.5 h-3.5" /> Audio Transcript
                        </div>
                        <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          <div className="space-y-4">
                            {practiceSet.transcript?.split('\n').map((line, i) => {
                              if (!line.trim()) return null;
                              const [speaker, ...textParts] = line.split(':');
                              const text = textParts.join(':');
                              
                              if (!text) return <p key={i} className="text-xs text-slate-600 font-medium leading-relaxed">{line}</p>;
                              
                              return (
                                <div key={i} className="space-y-1">
                                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">{speaker}</span>
                                  <p className="text-xs text-slate-700 font-bold leading-relaxed">{text.trim()}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content Area ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
          <div className="grid xl:grid-cols-[1fr_320px] gap-8 items-start">

            {/* ── Main Column: Questions ── */}
            <div className="space-y-6">

              {/* Score Card — shown only after submission */}
              {submitted && (
                <div id="score-card" className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col sm:flex-row items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg ${
                    score >= totalQuestions * 0.7 ? "bg-emerald-500 shadow-emerald-200" : score >= totalQuestions * 0.4 ? "bg-amber-500 shadow-amber-200" : "bg-rose-500 shadow-rose-200"
                  }`}>
                    <span className="text-3xl font-black leading-none">{score}</span>
                    <span className="text-[8px] font-black uppercase tracking-wider">/ {totalQuestions}</span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-black text-slate-900">
                      {score >= totalQuestions * 0.7 ? "Great job!" : score >= totalQuestions * 0.4 ? "Good effort!" : "Keep practising!"}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      You answered {score} out of {totalQuestions} questions correctly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-colors shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </button>
                </div>
              )}

              {/* Question Form Card */}
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-200 p-8 sm:p-10">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Question Task</p>
                    <h2 className="text-xl font-black text-slate-900 leading-tight truncate">
                      {routeType === "type-6" ? "Short-answer questions" : "Form/note/table/flow chart/summary completion"}
                    </h2>
                  </div>
                  {!submitted && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest shrink-0">
                      {answeredCount}/{totalQuestions} answered
                    </span>
                  )}
                </div>

                {/* Questions */}
                <div className="space-y-6">
                  {/* ── Unified Form Layout for all Section 1 question types ── */}
                  <div className="border-2 border-slate-100 rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-6 sm:px-8 py-4 flex items-center justify-between">
                      <h3 className="text-white font-black uppercase tracking-widest text-[10px]">
                        {routeType === "type-4" ? "Membership Form" : "Short-Answer Questions"}
                      </h3>
                      <span className="text-slate-500 text-[9px] font-bold tracking-widest">OFFICIAL PRACTICE</span>
                    </div>
                    <div className="p-6 sm:p-8 space-y-6 bg-slate-50/30">
                      {questions.map((question) => {
                        const isCorrect = question.answer.some(a => a.toLowerCase().trim() === (answers[question.id] || "").toLowerCase().trim());

                        return (
                          <div key={question.id} className="grid sm:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6 items-start">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-3 pt-3">
                              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                                submitted
                                  ? isCorrect ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                                  : "bg-slate-900 text-white"
                              }`}>
                                {question.order}
                              </span>
                              {question.text}
                            </label>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                disabled={submitted}
                                value={answers[question.id] || ""}
                                onChange={(e) => setAnswers(prev => ({ ...prev, [question.id]: e.target.value }))}
                                placeholder="Type your answer..."
                                className={`w-full rounded-xl border-2 px-4 py-3 text-sm font-bold outline-none transition-all ${
                                  submitted
                                    ? isCorrect
                                      ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                                      : "border-rose-400 bg-rose-50 text-rose-900"
                                    : "border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                } disabled:cursor-not-allowed`}
                              />
                              {submitted && !isCorrect && (
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 pl-1">
                                  <CheckCircle2 className="w-3 h-3" /> Correct: {question.answer[0]}
                                </div>
                              )}
                              {submitted && isCorrect && (
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 pl-1">
                                  <CheckCircle2 className="w-3 h-3" /> Correct!
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ── Action Buttons — always at the bottom of the form ── */}
                <div className="mt-10 pt-6 border-t border-slate-100">
                  {submitted ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm font-bold text-slate-500">
                        Score: <span className="text-slate-900">{score}/{totalQuestions}</span> · Review your answers above
                      </p>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-slate-900/10"
                      >
                        <RotateCcw className="w-4 h-4" /> Reset & Try Again
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-400">
                        {answeredCount === totalQuestions
                          ? <span className="text-emerald-600 font-bold">✓ All questions answered</span>
                          : `${answeredCount} of ${totalQuestions} answered`
                        }
                      </p>
                      <button
                        onClick={handleSubmit}
                        disabled={answeredCount === 0}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 disabled:shadow-none disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" /> Submit Practice
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Sidebar — sticky so it stays visible while scrolling ── */}
            <aside className="xl:sticky xl:top-28 space-y-6">
              {/* Progress Indicator */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">Progress</h3>
                  <span className="text-xs font-black text-blue-600">{answeredCount}/{totalQuestions}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>
                {submitted && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold">
                    <span className="text-emerald-600">{score} correct</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-rose-500">{totalQuestions - score} incorrect</span>
                  </div>
                )}
              </div>

              {/* Guidelines */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/30">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Exam Tips
                </h3>
                <ul className="space-y-4">
                  {[
                    "Follow word limits exactly",
                    "NO MORE THAN TWO WORDS",
                    "Spelling must be accurate",
                    "Audio plays only once",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-600 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
