"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export default function Section1Page() {
  const topics = [
    { id: 1, title: "Multiple choice", description: "Choose one or more correct answers from a list.", status: "Not Started", questions: 10 },
    { id: 2, title: "Identifying information", description: "Answer True, False, or Not Given based on the text.", status: "Locked", questions: 10 },
    { id: 3, title: "Identifying writer's views", description: "Answer Yes, No, or Not Given based on writer's claims.", status: "Locked", questions: 10 },
    { id: 4, title: "Matching information", description: "Find specific information within paragraphs.", status: "Locked", questions: 10 },
    { id: 5, title: "Matching headings", description: "Match paragraph headings from a given list.", status: "Locked", questions: 10 },
    { id: 6, title: "Matching features", description: "Match statements to a list of options (e.g., people, theories).", status: "Locked", questions: 10 },
    { id: 7, title: "Matching sentence endings", description: "Complete sentences by choosing the best endings.", status: "Locked", questions: 10 },
    { id: 8, title: "Sentence completion", description: "Fill in gaps in sentences using words from the text.", status: "Locked", questions: 10 },
    { id: 9, title: "Summary/note completion", description: "Complete a summary, note, table, or flow-chart.", status: "Locked", questions: 10 },
    { id: 10, title: "Diagram label completion", description: "Label a diagram based on a description in the text.", status: "Locked", questions: 10 },
    { id: 11, title: "Short-answer questions", description: "Answer questions about factual details using a word limit.", status: "Locked", questions: 10 },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="relative bg-slate-900 py-16 text-white overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/exams/ielts/reading" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition mb-6">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Reading Sections
            </Link>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Section 1 Topics
            </h1>
            <p className="max-w-2xl text-slate-300 text-lg">
              Practice everyday topics and factual information. Choose a topic below to start your practice for Reading Section 1.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-12 min-h-[50vh]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <Link
                  href="/exams/ielts/reading/test/1"
                  key={topic.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        topic.status === 'Not Started' ? 'bg-slate-100 text-slate-600' : 'bg-slate-100/50 text-slate-400'
                      }`}>
                        {topic.status}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm font-medium text-slate-500">
                      {topic.questions} Questions
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-blue-50 p-2 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
