"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Headphones, 
  ChevronRight, 
  Clock, 
  ListTodo, 
  MessageSquare, 
  Users, 
  School,
  Sparkles,
  Zap
} from 'lucide-react';

export default function ListeningCategories() {
  const sections = [
    {
      id: "section-1",
      title: "Section 1: Conversation in a Social Context",
      focus: "TRANSACTION / INFORMATION",
      description: "A conversation between two people set in an everyday social context (e.g., booking a hotel).",
      icon: <Users className="w-6 h-6" />,
      questions: "10 Questions",
      difficulty: "Easy",
      color: "blue"
    },
    {
      id: "section-2",
      title: "Section 2: Monologue in a Social Context",
      focus: "INFORMATION / DESCRIPTION",
      description: "A monologue set in an everyday social context (e.g., a speech about local facilities).",
      icon: <MessageSquare className="w-6 h-6" />,
      questions: "10 Questions",
      difficulty: "Medium",
      color: "emerald"
    },
    {
      id: "section-3",
      title: "Section 3: Conversation in an Academic Context",
      focus: "DISCUSSION / ANALYSIS",
      description: "A conversation between up to four people set in an educational context (e.g., a tutor and students).",
      icon: <Users className="w-6 h-6" />,
      questions: "10 Questions",
      difficulty: "Hard",
      color: "indigo"
    },
    {
      id: "section-4",
      title: "Section 4: Academic Lecture",
      focus: "LECTURE / PRESENTATION",
      description: "A monologue on an academic subject (e.g., a university lecture). No break in the middle.",
      icon: <School className="w-6 h-6" />,
      questions: "10 Questions",
      difficulty: "Very Hard",
      color: "rose"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header Banner */}
      <div className="relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden text-white group shadow-2xl shadow-slate-900/20">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 w-fit border border-white/10">
              <Zap size={12} className="text-emerald-400 fill-emerald-400" />
              AI Evaluated Modules
            </span>
            <h2 className="text-4xl font-black mb-4 tracking-tight leading-tight">IELTS Listening <br/>Practice Suite</h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              Master all four listening contexts with our authentic audio simulations and instant feedback.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-2xl font-black">40</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Questions</p>
              </div>
              <div>
                <p className="text-2xl font-black">30</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Minutes</p>
              </div>
            </div>
          </div>
        </div>
        <Headphones className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link 
            key={section.id}
            href={`/exams/ielts/listening/${section.id}`}
            className="group bg-white rounded-[2rem] border border-slate-200 p-8 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-${section.color}-50 flex items-center justify-center text-${section.color}-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {section.icon}
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 bg-${section.color}-50 text-[10px] font-black text-${section.color}-600 rounded-lg uppercase tracking-widest`}>
                  {section.difficulty}
                </span>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest flex items-center justify-end gap-1">
                  <ListTodo size={10} /> {section.questions}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{section.title}</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{section.focus}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2 pt-2">
                {section.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                <Clock size={14} /> 10 mins
              </div>
              <span className="flex items-center gap-1 text-slate-900 font-black text-sm group-hover:text-emerald-600 transition-colors">
                Start Section <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pro Tip Card */}
      <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100 flex items-start gap-6">
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
          <Sparkles size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-black text-amber-900 leading-none">IELTS Listening Tip</h4>
          <p className="text-sm text-amber-800/80 font-medium leading-relaxed">
            You will only hear the audio **once**. Use the time before each section starts to read the questions and predict what kind of information (name, number, date) you need to listen for.
          </p>
        </div>
      </div>
    </div>
  );
}
