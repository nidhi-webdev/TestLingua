"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  BarChart,
  PieChart,
  Table,
  Map,
  Activity,
  MessageSquare,
  Scale,
  Lightbulb,
  ThumbsUp,
  HelpCircle,
  FileText,
  Clock,
  AlignLeft,
} from "lucide-react";

const difficultyStyle: Record<string, string> = {
  Easy: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Medium: "bg-amber-50 text-amber-700 border border-amber-200",
  Hard: "bg-rose-50 text-rose-700 border border-rose-200",
};

const task1Topics = [
  { id: "task1-line-graph",  name: "Line Graph",      icon: TrendingUp,   desc: "Describe trends and changes over time.",                        difficulty: "Medium", time: "20 min", words: "150+" },
  { id: "task1-bar-chart",   name: "Bar Chart",        icon: BarChart,     desc: "Compare quantities across different categories.",               difficulty: "Easy",   time: "20 min", words: "150+" },
  { id: "task1-pie-chart",   name: "Pie Chart",        icon: PieChart,     desc: "Explain proportions and percentage distributions.",             difficulty: "Medium", time: "20 min", words: "150+" },
  { id: "task1-table",       name: "Table",            icon: Table,        desc: "Summarize and compare structured data points.",                 difficulty: "Easy",   time: "20 min", words: "150+" },
  { id: "task1-map",         name: "Map",              icon: Map,          desc: "Detail geographical changes or proposed layouts.",              difficulty: "Hard",   time: "20 min", words: "150+" },
  { id: "task1-process",     name: "Process Diagram",  icon: Activity,     desc: "Explain the stages of how something works.",                    difficulty: "Hard",   time: "20 min", words: "150+" },
];

const task2Topics = [
  { id: "task2-opinion",          name: "Opinion Essay",          icon: MessageSquare, desc: "To what extent do you agree or disagree?",                     difficulty: "Medium", time: "40 min", words: "250+" },
  { id: "task2-discussion",       name: "Discussion Essay",        icon: Scale,         desc: "Discuss both views and give your own opinion.",                 difficulty: "Medium", time: "40 min", words: "250+" },
  { id: "task2-problem-solution", name: "Problem & Solution",      icon: Lightbulb,     desc: "Identify the causes and propose effective measures.",           difficulty: "Hard",   time: "40 min", words: "250+" },
  { id: "task2-advantage",        name: "Advantage / Disadvantage",icon: ThumbsUp,      desc: "Do the advantages outweigh the disadvantages?",                difficulty: "Medium", time: "40 min", words: "250+" },
  { id: "task2-two-part",         name: "Two-Part Question",       icon: HelpCircle,    desc: "Answer two distinct direct questions in one cohesive essay.",   difficulty: "Hard",   time: "40 min", words: "250+" },
];

export default function WritingCategories() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedTask = searchParams.get("task");

  // ── Task-selection screen ────────────────────────────────────────────────
  if (!selectedTask) {
    return (
      <div className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Explore Writing Tasks</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              The IELTS Academic Writing test consists of two separate tasks. Select a task below to explore
              the specific question formats you will encounter on test day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Task 1 */}
            <Link
              href="/exams/ielts/writing?task=1"
              scroll={false}
              className="text-left group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 transition-all hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BarChart className="w-32 h-32 text-purple-900" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Academic Task 1</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Visual Reports. Summarize, describe, or explain visual information such as graphs, charts,
                  tables, or diagrams.
                </p>
                <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 mb-6">
                  <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">150 Words Min</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">20 Minutes</span>
                </div>
                <div className="inline-flex items-center gap-2 font-bold text-purple-700 transition-transform group-hover:translate-x-1">
                  Explore Topics &rarr;
                </div>
              </div>
            </Link>

            {/* Task 2 */}
            <Link
              href="/exams/ielts/writing?task=2"
              scroll={false}
              className="text-left group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 transition-all hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText className="w-32 h-32 text-indigo-900" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Academic Task 2</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Essay Writing. Respond to a point of view, argument, or problem in a formal academic style.
                </p>
                <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 mb-6">
                  <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">250 Words Min</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">40 Minutes</span>
                </div>
                <div className="inline-flex items-center gap-2 font-bold text-indigo-700 transition-transform group-hover:translate-x-1">
                  Explore Topics &rarr;
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Topic list screen ────────────────────────────────────────────────────
  const isTask1 = selectedTask === "1";
  const topics = isTask1 ? task1Topics : task2Topics;

  return (
    <div className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/exams/ielts/writing"
          scroll={false}
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Task Selection
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${isTask1 ? "bg-purple-100 text-purple-700" : "bg-indigo-100 text-indigo-700"}`}>
            {isTask1 ? "Academic Task 1" : "Academic Task 2"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {isTask1 ? "Choose a Visual Format" : "Choose an Essay Type"}
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            {isTask1
              ? "Each practice test is built around one of the six real IELTS Task 1 formats. Select a format to begin your timed session."
              : "Each practice test targets one of the five core Task 2 essay structures used in the real IELTS exam."}
          </p>
        </div>

        {/* ── Professional horizontal card list ─────────────────────────── */}
        <div className="flex flex-col gap-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                href={`/exams/ielts/writing/test/${topic.id}`}
                key={topic.id}
                className="group relative flex items-center gap-5 bg-white border border-slate-200 rounded-2xl pl-7 pr-5 py-5 transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Coloured left accent */}
                <div
                  className={`absolute inset-y-0 left-0 w-1 rounded-l-2xl ${
                    isTask1
                      ? "bg-gradient-to-b from-purple-400 to-purple-700"
                      : "bg-gradient-to-b from-indigo-400 to-indigo-700"
                  }`}
                />

                {/* Gradient icon */}
                <div
                  className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                    isTask1
                      ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-md shadow-purple-200"
                      : "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-md shadow-indigo-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Main text */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{topic.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyStyle[topic.difficulty]}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{topic.desc}</p>
                </div>

                {/* Meta chips — hidden on mobile */}
                <div className="hidden md:flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {topic.time}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${isTask1 ? "bg-purple-50 text-purple-700" : "bg-indigo-50 text-indigo-700"}`}>
                    <AlignLeft className="w-3 h-3" /> {topic.words}
                  </span>
                </div>

                {/* Arrow CTA */}
                <div
                  className={`shrink-0 ml-1 flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    isTask1
                      ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                      : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                  }`}
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          All prompts are IELTS Band 6–9 level &bull; Timed under real exam conditions
        </p>

      </div>
    </div>
  );
}
