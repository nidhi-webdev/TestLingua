"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  User, 
  MessageCircle, 
  Users, 
  ArrowRight, 
  Mic, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";

const parts = [
  {
    id: "part-1",
    name: "Part 1: Interview",
    icon: User,
    color: "emerald",
    desc: "Personal questions about familiar topics like hobbies, home, or work.",
    duration: "4-5 mins",
    questions: "8-10 Qs",
    topics: ["Family", "Interests", "Daily Life"]
  },
  {
    id: "part-2",
    name: "Part 2: Long Turn",
    icon: MessageCircle,
    color: "teal",
    desc: "Speak about a specific topic (Cue Card) with 1 minute of preparation.",
    duration: "3-4 mins",
    questions: "1 Cue Card",
    topics: ["Events", "Objects", "Places"]
  },
  {
    id: "part-3",
    name: "Part 3: Discussion",
    icon: Users,
    color: "cyan",
    desc: "In-depth discussion with the examiner about abstract issues related to Part 2.",
    duration: "4-5 mins",
    questions: "4-6 Qs",
    topics: ["Society", "Trends", "Opinions"]
  }
];

export default function SpeakingCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Mic className="h-6 w-6 text-emerald-600" />
          Choose a Module
        </h2>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Exam Format
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {parts.map((part) => {
          const Icon = part.icon;
          const isHovered = hoveredId === part.id;

          return (
            <Link
              key={part.id}
              href={`/exams/ielts/speaking/test/${part.id}`}
              onMouseEnter={() => setHoveredId(part.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-emerald-200 overflow-hidden"
            >
              {/* Animated Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${part.color}-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              
              {/* Left Accent Bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${part.color}-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${part.color}-50 text-${part.color}-600 group-hover:bg-${part.color}-600 group-hover:text-white transition-colors duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  {part.duration}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {part.name}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {part.desc}
              </p>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {part.topics.map(topic => (
                  <span key={topic} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded transition-colors group-hover:bg-white group-hover:text-emerald-600">
                    {topic}
                  </span>
                ))}
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                  {part.questions}
                </span>
                <div className={`flex items-center gap-1 text-sm font-bold text-emerald-600 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`}>
                  Start Practice
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Tips Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center gap-6 shadow-lg shadow-emerald-900/10 relative overflow-hidden">
        <Sparkles className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10" />
        <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-white/20 items-center justify-center backdrop-blur-md">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">Speaking Preparation Tip</h4>
          <p className="text-emerald-50 text-sm leading-relaxed opacity-90">
            Focus on fluency and coherence. Don't worry about being perfect—speak naturally and expand on your answers using "because," "for example," and "in addition."
          </p>
        </div>
      </div>
    </div>
  );
}
