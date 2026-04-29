
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, PenTool, TrendingUp, BarChart, PieChart, Table, Map, Activity } from "lucide-react";

import WritingCategories from "@/components/ielts/WritingCategories";


export const dynamic = "force-dynamic";

export default async function IELTSWritingPage({
  searchParams,
}: {
  searchParams: Promise<{ task?: string }>;
}) {
  const { task } = await searchParams;

  const heroTitle =
    task === "1" ? "Academic Task 1" :
    task === "2" ? "Academic Task 2" :
    "Writing Tasks";

  const heroSubtitle =
    task === "1"
      ? "Summarize, describe, or explain visual information such as graphs, charts, tables, or diagrams."
      : task === "2"
      ? "Write a formal essay responding to a point of view, argument, or problem."
      : "Master Task 1 and Task 2 with our interactive editor, word counts, and expert model answers.";

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/exams/ielts"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-100 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to IELTS Overview
            </Link>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-100">
                  IELTS Writing Practice
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">{heroTitle}</h1>
                <p className="mt-4 text-lg text-purple-100">
                  {heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Module Navigation Tabs */}
        <div className="sticky top-16 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-8 overflow-x-auto hide-scrollbar">
              <Link
                href="/exams/ielts/reading"
                className="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-colors border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
              >
                Reading
              </Link>
              <Link
                href="/exams/ielts/listening"
                className="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-colors border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
              >
                Listening
              </Link>
              <Link
                href="/exams/ielts/writing"
                className="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-colors border-blue-600 text-blue-600"
              >
                Writing
              </Link>
              <Link
                href="/exams/ielts/speaking"
                className="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-colors border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
              >
                Speaking
              </Link>
            </nav>
          </div>
        </div>

        <WritingCategories />


      </main>
      <Footer />
    </>
  );
}
