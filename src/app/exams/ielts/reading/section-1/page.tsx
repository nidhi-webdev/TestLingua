"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, LayoutList, AlignLeft, Heading, Tag, ChevronsRight, PenLine, ClipboardList, ScanLine, HelpCircle } from "lucide-react";

const icons = [LayoutList, AlignLeft, AlignLeft, AlignLeft, Heading, Tag, ChevronsRight, PenLine, ClipboardList, ScanLine, HelpCircle];

export default function Section1Page() {
  const topics = [
    { id: 1, title: "Multiple Choice", description: "Choose one or more correct answers from a list of options.", questions: 14, href: "/exams/ielts/reading/test/1" },
    { id: 2, title: "Identifying Information", description: "Answer True, False, or Not Given based on the text.", questions: 14, href: "/exams/ielts/reading/test/identifying-information-1" },
    { id: 3, title: "Identifying Writer's Views", description: "Answer Yes, No, or Not Given based on writer's claims.", questions: 14, href: "/exams/ielts/reading/test/identifying-writers-views-1" },
    { id: 4, title: "Matching Information", description: "Find specific information within paragraphs.", questions: 14, href: "/exams/ielts/reading/test/matching-information-1" },
    { id: 5, title: "Matching Headings", description: "Match paragraph headings from a given list.", questions: 8, href: "/exams/ielts/reading/test/matching-headings-1" },
    { id: 6, title: "Matching Features", description: "Match statements to a list of options (e.g., people, theories).", questions: 10, href: "/exams/ielts/reading/test/1" },
    { id: 7, title: "Matching Sentence Endings", description: "Complete sentences by choosing the best endings.", questions: 10, href: "/exams/ielts/reading/test/1" },
    { id: 8, title: "Sentence Completion", description: "Fill in gaps in sentences using words from the text.", questions: 10, href: "/exams/ielts/reading/test/1" },
    { id: 9, title: "Summary / Note Completion", description: "Complete a summary, note, table, or flow-chart.", questions: 10, href: "/exams/ielts/reading/test/1" },
    { id: 10, title: "Diagram Label Completion", description: "Label a diagram based on a description in the text.", questions: 10, href: "/exams/ielts/reading/test/1" },
    { id: 11, title: "Short-Answer Questions", description: "Answer questions about factual details using a strict word limit.", questions: 10, href: "/exams/ielts/reading/test/1" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 pt-16 min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/exams/ielts/reading" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition mb-8 group">
              <ArrowRight className="h-4 w-4 rotate-180 transition group-hover:-translate-x-1" />
              Back to Reading Sections
            </Link>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-4">
                  <BookOpen className="h-4 w-4" />
                  IELTS Academic Reading
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  Reading{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Section 1
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-slate-400 text-lg leading-relaxed">
                  Master all 11 IELTS question types. Choose a topic below to start your practice.
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{topics.length}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Topics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Topics */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = icons[topic.id - 1];
              return (
                <Link
                  href={topic.href}
                  key={topic.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-blue-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400">#{topic.id}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{topic.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{topic.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="text-sm font-semibold text-slate-500">{topic.questions} Questions</span>
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                      Start Practice
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
