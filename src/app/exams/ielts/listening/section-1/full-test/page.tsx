"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Volume2, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Home
} from 'lucide-react';

export default function OfficialIELTSListening() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes for full test
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [score, setScore] = useState(0);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isSubmitted]);

  const questions = [
    { id: 1, label: "1. Name of the enquirer:", correctAnswer: "Sarah Thompson" },
    { id: 2, label: "2. Preferred length of stay:", correctAnswer: "6 months" },
    { id: 3, label: "3. Maximum weekly rent:", correctAnswer: "150 pounds" },
    { id: 4, label: "4. Type of room required:", correctAnswer: "Single" },
    { id: 5, label: "5. Preferred location:", correctAnswer: "Near station" },
    { id: 6, label: "6. Nearest supermarket:", correctAnswer: "Waitrose" },
    { id: 7, label: "7. Phone number:", correctAnswer: "07700 900345" },
    { id: 8, label: "8. View date:", correctAnswer: "Friday" },
    { id: 9, label: "9. Document required:", correctAnswer: "ID card" },
    { id: 10, label: "10. Deposit amount:", correctAnswer: "50 pounds" }
  ];

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id.toString()]?.trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsSubmitted(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen flex flex-col bg-[#f3f4f6] text-slate-800 font-sans select-none">
      
      {/* OFFICIAL TOP BAR */}
      <header className="h-14 bg-[#1e293b] text-white flex items-center justify-between px-6 shrink-0 border-b border-white/10 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-white/10">
            IELTS
          </div>
          <h1 className="text-sm font-bold opacity-80">Listening - Part 1</h1>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time Left</span>
            <span className={`text-xl font-black font-mono w-16 text-center ${timeLeft < 300 ? 'text-rose-400' : 'text-blue-400'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="h-6 w-px bg-white/20" />
          <button className="flex items-center gap-2 opacity-60 hover:opacity-100 transition">
            <Volume2 size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Volume</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <HelpCircle size={16} />
          </button>
        </div>
      </header>

      {/* SECONDARY INFO BAR */}
      <div className="h-10 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-40 shadow-xs">
        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Candidate: AMRENDU KUMAR (150895)</p>
        <div className="flex items-center gap-4">
           <button onClick={handleSubmit} className="text-[11px] font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest flex items-center gap-2 transition">
             <CheckCircle2 size={14} /> Submit Answer Sheet
           </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-10 flex justify-center">
          <div className="w-full max-w-4xl space-y-12 pb-20">
            
            {/* The "Paper" Container */}
            <div className="bg-white p-12 rounded shadow-sm border border-slate-200 min-h-screen">
              <div className="border-b-2 border-slate-900 pb-6 mb-10 flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Part 1</h2>
                  <p className="text-sm font-bold text-slate-500 italic mt-1">Questions 1-10</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recording 01</p>
                </div>
              </div>

              {/* Instructions Box */}
              <div className="mb-12 border-2 border-slate-200 p-6 italic text-sm font-medium leading-relaxed bg-slate-50 rounded">
                Complete the notes below. Write <span className="font-black underline uppercase">NO MORE THAN TWO WORDS AND/OR A NUMBER</span> for each answer.
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-slate-900 border-l-4 border-slate-900 pl-4">ACCOMMODATION DETAILS</h3>
                  
                  <div className="grid gap-10">
                    {questions.map((q) => (
                      <div key={q.id} className="group scroll-mt-20" id={`q-${q.id}`}>
                        <div className="flex items-start gap-6">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm transition-colors shrink-0 ${
                            activeQuestion === q.id 
                              ? 'bg-blue-600 text-white' 
                              : answers[q.id.toString()] 
                                ? 'bg-slate-200 text-slate-600'
                                : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                          }`}>
                            {q.id}
                          </span>
                          <div className="flex-1 space-y-3">
                            <p className="font-bold text-slate-700 leading-snug">{q.label}</p>
                            <div className="relative max-w-sm">
                              <input 
                                type="text"
                                onFocus={() => setActiveQuestion(q.id)}
                                disabled={isSubmitted}
                                value={answers[q.id.toString()] || ""}
                                onChange={(e) => handleInputChange(q.id.toString(), e.target.value)}
                                className={`w-full border-b-2 py-2 font-black transition-all outline-hidden ${
                                  isSubmitted 
                                    ? answers[q.id.toString()]?.trim().toLowerCase() === q.correctAnswer.toLowerCase()
                                      ? 'border-emerald-500 text-emerald-600'
                                      : 'border-rose-500 text-rose-600'
                                    : activeQuestion === q.id 
                                      ? 'border-blue-600 bg-blue-50/50' 
                                      : 'border-slate-300 hover:border-slate-400'
                                }`}
                              />
                              {isSubmitted && answers[q.id.toString()]?.trim().toLowerCase() !== q.correctAnswer.toLowerCase() && (
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-2">
                                  Correct: {q.correctAnswer}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {isSubmitted && (
                <div className="mt-20 p-10 bg-slate-900 rounded-xl text-white text-center space-y-4">
                  <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
                  <h2 className="text-3xl font-black">Test Submitted</h2>
                  <p className="text-slate-400">Your score for this part: <span className="text-white text-2xl font-black px-3">{score} / 10</span></p>
                  <Link href="/exams/ielts/listening/section-1" className="inline-block mt-6 px-8 py-3 bg-blue-600 rounded-lg font-black hover:bg-blue-500 transition uppercase tracking-widest text-xs">
                    Finish Review
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* OFFICIAL BOTTOM PALETTE */}
      <footer className="h-16 bg-[#1e293b] border-t border-white/10 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[70%] hide-scrollbar py-2">
          {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
            <button 
              key={num}
              onClick={() => {
                const el = document.getElementById(`q-${num}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setActiveQuestion(num);
              }}
              className={`w-9 h-9 rounded-md text-xs font-black transition-all shrink-0 flex items-center justify-center border ${
                activeQuestion === num 
                  ? 'bg-blue-600 text-white border-blue-400 scale-110' 
                  : answers[num.toString()]
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : num > 10 
                      ? 'bg-white/5 text-white/30 border-white/5 cursor-not-allowed' // Unavailable questions
                      : 'bg-white/10 text-white/60 border-white/10 hover:bg-white/20'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            disabled={activeQuestion === 1}
            onClick={() => setActiveQuestion(prev => Math.max(1, prev - 1))}
            className="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-md font-bold text-xs uppercase tracking-widest text-white hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed border border-white/10"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button 
            disabled={activeQuestion === 10}
            onClick={() => setActiveQuestion(prev => Math.min(10, prev + 1))}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-md font-bold text-xs uppercase tracking-widest text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 disabled:opacity-30 disabled:cursor-not-allowed border border-blue-400"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}
