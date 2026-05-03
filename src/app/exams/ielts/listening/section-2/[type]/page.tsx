"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Clock3, FileText, Headphones, Info, Mic2, PlayCircle, RotateCcw, Send, Sparkles } from "lucide-react";
import { listeningPracticeSets } from "@/data/mock-listening-test";

export default function Section2TypePage() {
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const params = useParams<{ type?: string }>();
  const routeType = typeof params?.type === "string" ? params.type : "type-3";
  const practiceSet = listeningPracticeSets[routeType as keyof typeof listeningPracticeSets];

  if (!practiceSet) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <Navbar />
        <main className="pt-16 pb-20">
          <section className="bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
              <Link
                href="/exams/ielts/listening/section-2"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Section 2
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
  const answeredCount = Object.values(answers).filter(v => v.trim() !== "").length;

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.filter(q =>
      q.answer.some(a => a.toLowerCase().trim() === (answers[q.id] || "").toLowerCase().trim())
    ).length;
  }, [submitted, questions, answers]);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("score-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Section 1–style layout for Plan/Map/Diagram Labelling & Multiple Choice ── */
  if (routeType === "type-3" || routeType === "type-1") {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900">
        <Navbar />
        <main className="pt-24 pb-20">
          <section className="relative pt-10 pb-28 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_40%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link href="/exams/ielts/listening/section-2" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.3em] group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Section 2
              </Link>
              <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">
                    <Headphones className="w-3.5 h-3.5" /> IELTS Listening · Section 2
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white tracking-tight leading-[1.05]">{practiceSet.title}</h1>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold"><Clock3 className="w-4 h-4 text-blue-400" /> 10 min</span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold"><FileText className="w-4 h-4 text-emerald-400" /> {totalQuestions} questions</span>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition duration-700" />
                  <div className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Audio Stream</p>
                        <p className="mt-1 text-xl font-black text-slate-900 tracking-tight">Listen Here</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><PlayCircle className="w-6 h-6" /></div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-1 bg-slate-50 rounded-2xl border border-slate-100">
                        <audio controls src={practiceSet.audioUrl} className="w-full h-11" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 px-2"><Info className="w-3.5 h-3.5" /> Listen carefully; audio plays only once in the real exam.</div>
                        <button onClick={() => setShowTranscript(!showTranscript)} className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${showTranscript ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
                          {showTranscript ? "Hide Transcript" : "Show Transcript"}
                        </button>
                      </div>
                      {showTranscript && (
                        <div className="mt-6 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 overflow-hidden">
                          <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-blue-600"><Mic2 className="w-3.5 h-3.5" /> Audio Transcript</div>
                          <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            <div className="space-y-4">
                              {practiceSet.transcript?.split('\n').map((line, i) => {
                                if (!line.trim()) return null;
                                const [speaker, ...textParts] = line.split(':');
                                const text = textParts.join(':');
                                if (!text) return <p key={i} className="text-xs text-slate-600 font-medium leading-relaxed">{line}</p>;
                                return (<div key={i} className="space-y-1"><span className="text-[9px] font-black uppercase tracking-wider text-slate-400">{speaker}</span><p className="text-xs text-slate-700 font-bold leading-relaxed">{text.trim()}</p></div>);
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

          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
            <div className="grid xl:grid-cols-[1fr_320px] gap-8 items-start">
              <div className="space-y-6">
                {submitted && (
                  <div id="score-card" className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col sm:flex-row items-center gap-6">
                    <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg ${score >= totalQuestions * 0.7 ? "bg-emerald-500 shadow-emerald-200" : score >= totalQuestions * 0.4 ? "bg-amber-500 shadow-amber-200" : "bg-rose-500 shadow-rose-200"}`}>
                      <span className="text-3xl font-black leading-none">{score}</span>
                      <span className="text-[8px] font-black uppercase tracking-wider">/ {totalQuestions}</span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-black text-slate-900">{score >= totalQuestions * 0.7 ? "Great job!" : score >= totalQuestions * 0.4 ? "Good effort!" : "Keep practising!"}</h3>
                      <p className="text-sm text-slate-500 font-medium mt-1">You answered {score} out of {totalQuestions} questions correctly.</p>
                    </div>
                    <button onClick={handleReset} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-colors shadow-lg"><RotateCcw className="w-4 h-4" /> Try Again</button>
                  </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-200 p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0"><FileText className="w-6 h-6" /></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Question Task</p>
                      <h2 className="text-xl font-black text-slate-900 leading-tight truncate">{routeType === "type-1" ? "Multiple choice questions" : "Plan/map/diagram labelling"}</h2>
                    </div>
                    {!submitted && <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest shrink-0">{answeredCount}/{totalQuestions} answered</span>}
                  </div>

                  <div className="space-y-6">
                    <div className="border-2 border-slate-100 rounded-2xl overflow-hidden">
                      <div className="bg-slate-900 px-6 sm:px-8 py-4 flex items-center justify-between">
                        <h3 className="text-white font-black uppercase tracking-widest text-[10px]">{routeType === "type-1" ? "Multiple Choice" : "Diagram Labelling"}</h3>
                        <span className="text-slate-500 text-[9px] font-bold tracking-widest">OFFICIAL PRACTICE</span>
                      </div>
                      <div className="p-6 sm:p-8 space-y-6 bg-slate-50/30">
                        {questions.map((question) => {
                          const isCorrect = question.answer.some(a => a.toLowerCase().trim() === (answers[question.id] || "").toLowerCase().trim());
                          return (
                            <div key={question.id} className={question.type === "multiple_choice" ? "space-y-4" : "grid sm:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6 items-start"}>
                              <label className="text-sm font-bold text-slate-700 flex items-center gap-3 pt-3">
                                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${submitted ? (isCorrect ? "bg-emerald-500 text-white" : "bg-rose-500 text-white") : "bg-slate-900 text-white"}`}>{question.order}</span>
                                {question.text}
                              </label>
                              {question.type === "multiple_choice" ? (
                                <div className="space-y-2 pl-10">
                                  {question.options?.map((option) => {
                                    const optionLetter = option.split(".")[0].trim();
                                    const isSelected = answers[question.id] === optionLetter;
                                    const isOptionCorrect = question.answer.includes(optionLetter);
                                    
                                    let btnClass = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50";
                                    if (submitted) {
                                      if (isOptionCorrect) {
                                        btnClass = "border-emerald-400 bg-emerald-50 text-emerald-900";
                                      } else if (isSelected && !isOptionCorrect) {
                                        btnClass = "border-rose-400 bg-rose-50 text-rose-900";
                                      } else {
                                        btnClass = "border-slate-200 bg-slate-50 opacity-50";
                                      }
                                    } else if (isSelected) {
                                      btnClass = "border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-500/10";
                                    }

                                    return (
                                      <button
                                        key={option}
                                        type="button"
                                        disabled={submitted}
                                        onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: optionLetter }))}
                                        className={`w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-bold outline-none transition-all ${btnClass} disabled:cursor-not-allowed`}
                                      >
                                        {option}
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="space-y-1.5">
                                  <input type="text" disabled={submitted} value={answers[question.id] || ""} onChange={(e) => setAnswers(prev => ({ ...prev, [question.id]: e.target.value }))} placeholder="Type your answer..." className={`w-full rounded-xl border-2 px-4 py-3 text-sm font-bold outline-none transition-all ${submitted ? (isCorrect ? "border-emerald-400 bg-emerald-50 text-emerald-900" : "border-rose-400 bg-rose-50 text-rose-900") : "border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"} disabled:cursor-not-allowed`} />
                                  {submitted && !isCorrect && <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 pl-1"><CheckCircle2 className="w-3 h-3" /> Correct: {question.answer[0]}</div>}
                                  {submitted && isCorrect && <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 pl-1"><CheckCircle2 className="w-3 h-3" /> Correct!</div>}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100">
                    {submitted ? (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-500">Score: <span className="text-slate-900">{score}/{totalQuestions}</span> · Review your answers above</p>
                        <button onClick={handleReset} className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-slate-900/10"><RotateCcw className="w-4 h-4" /> Reset &amp; Try Again</button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-medium text-slate-400">{answeredCount === totalQuestions ? <span className="text-emerald-600 font-bold">✓ All questions answered</span> : `${answeredCount} of ${totalQuestions} answered`}</p>
                        <button onClick={handleSubmit} disabled={answeredCount === 0} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 disabled:shadow-none disabled:cursor-not-allowed"><Send className="w-4 h-4" /> Submit Practice</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <aside className="xl:sticky xl:top-28 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">Progress</h3>
                    <span className="text-xs font-black text-blue-600">{answeredCount}/{totalQuestions}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
                  </div>
                  {submitted && <div className="mt-4 flex items-center gap-2 text-xs font-bold"><span className="text-emerald-600">{score} correct</span><span className="text-slate-300">·</span><span className="text-rose-500">{totalQuestions - score} incorrect</span></div>}
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/30">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-5 flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-blue-500" /> Exam Tips</h3>
                  <ul className="space-y-4">
                    {(routeType === "type-1" ? 
                      ["Read questions before listening", "Only one answer is correct", "Don't get tricked by distractors", "Audio plays only once"] : 
                      ["Follow word limits exactly", "NO MORE THAN TWO WORDS", "Spelling must be accurate", "Audio plays only once"]
                    ).map((text, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-600 leading-snug"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />{text}</li>
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

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Navbar />

      <main className="pt-16 pb-20">
        <section className="bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <Link
              href="/exams/ielts/listening/section-2"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Section 2
            </Link>

            <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                  <Headphones className="w-3.5 h-3.5" /> IELTS Listening Section 2
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
                      : routeType === "type-3"
                      ? "Listen carefully and complete the labels on the floor plan based on the recording."
                      : "Listen carefully and fill in gaps in a form, notes, table or flow chart based on the recording."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Clock3 className="w-4 h-4 text-sky-300" /> About 10 minutes
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-slate-200">
                    <Mic2 className="w-4 h-4 text-emerald-300" /> Section 2 difficulty
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
                    : routeType === "type-3"
                    ? "Label the floor plan diagram by completing each location with words from the recording. Follow word limits carefully."
                    : "Fill in gaps in a form, notes, table or flow chart using words from the recording. Follow word limits carefully."}
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
                      : routeType === "type-3"
                      ? "Plan/map/diagram labelling"
                      : "Form/note/table/flow chart completion"}
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
                      : routeType === "type-3"
                      ? "You have to complete labels on a visual such as a diagram, a set of pictures, a plan, or a map. The labels may be selected from a provided list or require words from the recording."
                      : "You have to fill in gaps in an outline (form, notes, table, or flow chart) that summarises part or all of the recording. You may select words from a list or write words directly from the recording."}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Important guidelines</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    {routeType === "type-2" && (
                      <>
                        <li>Listen carefully for detailed information in the recording</li>
                        <li>Understand how facts are connected to each other</li>
                        <li>Follow conversations between speakers carefully</li>
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
                    {routeType === "type-3" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>Contracted words like &apos;they&apos;re&apos; will not be tested</li>
                        <li>Hyphenated words like &apos;check-in&apos; count as single words</li>
                        <li>Do not change words from the recording in any way</li>
                      </>
                    )}
                    {routeType === "type-4" && (
                      <>
                        <li>Read the instructions very carefully as the word limit can change</li>
                        <li>Follow word limits exactly, e.g., <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span></li>
                        <li>Writing more than the word limit will result in losing the mark</li>
                        <li>You may be selecting from a list OR writing words from the recording</li>
                        <li>Do not change words from the recording in any way</li>
                        <li>Focus on main points that the listener would naturally write down</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What skills are tested?</h3>
                  <p>
                    {routeType === "type-2"
                      ? "This type tests your ability to listen for detailed information, follow conversations between two people, and recognise how facts in the recording are connected to each other."
                      : routeType === "type-1"
                      ? "This type tests many listening skills, such as detailed understanding of specific points, or general understanding of the main points of the recording."
                      : routeType === "type-3"
                      ? "This type tests your ability to understand descriptions of places and how they relate to the visual. It also tests your ability to understand spatial relationships and follow directions."
                      : "This type tests your ability to focus on main points and summarise information. It may involve understanding how different points relate to each other (in notes), how stages link together (in flow charts), or how facts fit into categories (in tables or forms)."}
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
                        : routeType === "type-3"
                        ? "Label the floor plan"
                        : "Complete the form/notes/table/flow chart"}
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
                      : routeType === "type-3"
                      ? "Diagram visualization & audio pipeline"
                      : "Form/flow chart visualization & audio pipeline"}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {routeType === "type-2"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can track answer patterns and provide detailed feedback on matching accuracy."
                    : routeType === "type-1"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can track which answer choices are most commonly selected and provide detailed feedback."
                    : routeType === "type-3"
                    ? "The transcript is stored separately for text-to-speech conversion. Later, you can add an interactive diagram visualization where labels map to specific regions of a floor plan image."
                    : "The transcript is stored separately for text-to-speech conversion. Later, you can visualize form fields, flow chart stages, or table categories with interactive completion tracking."}
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
                  {routeType === "type-3" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Diagram ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">TTS-ready</span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Real IELTS style</span>
                    </>
                  )}
                  {routeType === "type-4" && (
                    <>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">Form/flow chart ready</span>
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
