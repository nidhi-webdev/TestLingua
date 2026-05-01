"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  Save,
  Clock,
  RotateCcw
} from 'lucide-react';

export default function ListeningSection1Page() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock data for Section 1 Questions
  const sectionData = {
    title: "Section 1: Accomodation Request",
    wordLimit: "NO MORE THAN TWO WORDS AND/OR A NUMBER",
    questions: [
      {
        id: "q1",
        type: "type-4", // Form/Note Completion
        label: "1. Name of the student:",
        placeholder: "Enter name",
        correctAnswer: "Amrendu Kumar"
      },
      {
        id: "q2",
        type: "type-4",
        label: "2. Date of birth:",
        placeholder: "DD/MM/YYYY",
        correctAnswer: "15/08/1995"
      },
      {
        id: "q3",
        type: "type-4",
        label: "3. Preferred accommodation type:",
        placeholder: "e.g. Shared house",
        correctAnswer: "Apartment"
      },
      {
        id: "q4",
        type: "type-6", // Short Answer
        label: "4. What is the maximum monthly rent the student can afford?",
        placeholder: "e.g. 500 dollars",
        correctAnswer: "800 dollars"
      },
      {
        id: "q5",
        type: "type-6",
        label: "5. Which suburb does the student prefer to live in?",
        placeholder: "e.g. Kensington",
        correctAnswer: "Manly"
      }
    ]
  };

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link 
            href="/exams/ielts/listening"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Sections
          </Link>

          {/* Test Header */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 mb-10 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-500/20">
                  Practice Mode
                </span>
                <h1 className="text-4xl font-black tracking-tight">{sectionData.title}</h1>
                <div className="flex items-center gap-6 text-slate-400 text-sm font-bold">
                  <div className="flex items-center gap-2">
                    <Clock size={16} /> 10:00
                  </div>
                  <div className="flex items-center gap-2">
                    <Info size={16} /> 5 Questions
                  </div>
                </div>
              </div>

              {/* Audio Player Placeholder */}
              <div className="w-full md:w-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-105 transition shadow-lg shadow-white/10">
                    <Play size={20} fill="currentColor" />
                  </button>
                  <div className="flex-1 space-y-2 min-w-[200px]">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-1/3" />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-400">
                      <span>02:15</span>
                      <span>10:00</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] font-black text-center text-slate-500 uppercase tracking-widest">Audio Track: Section 1 Simulation</p>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 mb-10 flex items-start gap-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Info size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-black text-blue-900 uppercase tracking-tight">Instructions</h4>
              <p className="text-sm text-blue-800/80 font-medium leading-relaxed">
                Complete the form and answer the questions below using <span className="font-black text-blue-900 underline decoration-2">{sectionData.wordLimit}</span> for each answer. 
                Listen to the recording carefully while filling in the blanks.
              </p>
            </div>
          </div>

          {/* Questions Content */}
          <div className="space-y-8">
            {/* Section 1 Type 4: Form Completion */}
            <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl shadow-slate-200/50">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Part 1: Personal Details</h2>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Question 1-3 • Form Completion</p>
              </div>

              <div className="grid gap-8 max-w-2xl">
                {sectionData.questions.slice(0, 3).map((q) => (
                  <div key={q.id} className="space-y-3">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-tight block">
                      {q.label}
                    </label>
                    <div className="relative">
                      <input 
                        type="text"
                        disabled={isSubmitted}
                        value={answers[q.id] || ""}
                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                        placeholder={q.placeholder}
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all font-medium focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-hidden ${
                          isSubmitted 
                            ? answers[q.id]?.toLowerCase() === q.correctAnswer?.toLowerCase()
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-500 bg-rose-50 text-rose-900'
                            : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                        }`}
                      />
                      {isSubmitted && (
                        <div className="absolute right-6 top-1/2 -translate-y-1/2">
                          {answers[q.id]?.toLowerCase() === q.correctAnswer?.toLowerCase() ? (
                            <CheckCircle2 size={20} className="text-emerald-500" />
                          ) : (
                            <AlertCircle size={20} className="text-rose-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {isSubmitted && answers[q.id]?.toLowerCase() !== q.correctAnswer?.toLowerCase() && (
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest pl-2">
                        Correct Answer: {q.correctAnswer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 1 Type 6: Short Answer Questions */}
            <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl shadow-slate-200/50">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Part 2: Preferences & Budget</h2>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Question 4-5 • Short Answer Questions</p>
              </div>

              <div className="grid gap-10 max-w-2xl">
                {sectionData.questions.slice(3).map((q) => (
                  <div key={q.id} className="space-y-4">
                    <p className="text-lg font-bold text-slate-900 leading-snug">
                      {q.label}
                    </p>
                    <div className="relative">
                      <input 
                        type="text"
                        disabled={isSubmitted}
                        value={answers[q.id] || ""}
                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                        placeholder={q.placeholder}
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all font-medium focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-hidden ${
                          isSubmitted 
                            ? answers[q.id]?.toLowerCase() === q.correctAnswer?.toLowerCase()
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-500 bg-rose-50 text-rose-900'
                            : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                        }`}
                      />
                      {isSubmitted && (
                        <div className="absolute right-6 top-1/2 -translate-y-1/2">
                          {answers[q.id]?.toLowerCase() === q.correctAnswer?.toLowerCase() ? (
                            <CheckCircle2 size={20} className="text-emerald-500" />
                          ) : (
                            <AlertCircle size={20} className="text-rose-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {isSubmitted && answers[q.id]?.toLowerCase() !== q.correctAnswer?.toLowerCase() && (
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest pl-2">
                        Correct Answer: {q.correctAnswer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Action Bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/30 gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Progress</p>
                <p className="text-xl font-black">{Object.keys(answers).length} / 5 Answered</p>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Time Remaining</p>
                <p className="text-xl font-black font-mono">07:45</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => {
                  setAnswers({});
                  setIsSubmitted(false);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition"
              >
                <RotateCcw size={18} /> Reset
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitted || Object.keys(answers).length === 0}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-10 py-4 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-400 transition shadow-xl shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={18} /> Submit Test
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
