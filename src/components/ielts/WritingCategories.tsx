"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
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
  PenTool,
  FileText
} from "lucide-react";

export default function WritingCategories() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedTask = searchParams.get("task");

  const handleSelectTask = (task: "1" | "2" | null) => {
    if (task) {
      router.push(`${pathname}?task=${task}`);
    } else {
      router.push(pathname);
    }
  };

  const task1Topics = [
    { name: "Line Graph", icon: TrendingUp, desc: "Describe trends and changes over time." },
    { name: "Bar Chart", icon: BarChart, desc: "Compare quantities across different categories." },
    { name: "Pie Chart", icon: PieChart, desc: "Explain proportions and percentage distributions." },
    { name: "Table", icon: Table, desc: "Summarize and compare structured data points." },
    { name: "Map", icon: Map, desc: "Detail geographical changes or proposed layouts." },
    { name: "Process Diagram", icon: Activity, desc: "Explain the stages of how something works." }
  ];

  const task2Topics = [
    { name: "Opinion Essay", icon: MessageSquare, desc: "To what extent do you agree or disagree?" },
    { name: "Discussion Essay", icon: Scale, desc: "Discuss both views and give your opinion." },
    { name: "Problem & Solution", icon: Lightbulb, desc: "What are the causes and what measures can be taken?" },
    { name: "Advantage/Disadvantage", icon: ThumbsUp, desc: "Do the advantages outweigh the disadvantages?" },
    { name: "Two-Part Question", icon: HelpCircle, desc: "Answer two distinct direct questions." }
  ];

  if (!selectedTask) {
    return (
      <div className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Explore Writing Tasks</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              The IELTS Academic Writing test consists of two separate tasks. Select a task below to explore the specific question formats you will encounter on test day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Task 1 Card */}
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
                  Visual Reports. You must summarize, describe, or explain visual information such as graphs, charts, tables, or diagrams.
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

            {/* Task 2 Card */}
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
                  Essay Writing. You must respond to a point of view, argument, or problem in a formal academic style.
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

  const isTask1 = selectedTask === "1";
  const topics = isTask1 ? task1Topics : task2Topics;

  return (
    <div className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link 
          href="/exams/ielts/writing"
          scroll={false}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-purple-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Task Selection
        </Link>

        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          {isTask1 ? "Task 1: Visual Formats" : "Task 2: Essay Types"}
        </h2>
        <p className="text-slate-600 mb-10 max-w-3xl text-lg">
          {isTask1 
            ? "In Academic Task 1, you will be given one of the following visual formats. You must select the main features and summarize the data accurately."
            : "In Academic Task 2, you will be asked to write an essay responding to one of these core prompt structures."}
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div key={topic.name} className={`flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 transition hover:shadow-lg ${isTask1 ? 'hover:border-purple-300' : 'hover:border-indigo-300'}`}>
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white ${isTask1 ? 'text-purple-600' : 'text-indigo-600'}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{topic.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{topic.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
