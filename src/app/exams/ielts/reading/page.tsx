"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Clock, Target, ListChecks } from "lucide-react";

export default function IELTSReadingPage() {
  const sections = [
    {
      name: "Section 1",
      description: "Everyday topics, factual information. Usually consists of multiple short texts.",
      duration: "20 min",
      questions: "13-14 Questions",
      href: "/exams/ielts/reading/section-1",
      cta: "Start Section 1",
      icon: ListChecks,
      active: true,
    },
    {
      name: "Section 2",
      description: "Work-related topics. Two or more short texts.",
      duration: "20 min",
      questions: "13-14 Questions",
      href: "/exams/ielts/reading/section-2",
      cta: "Start Section 2",
      icon: BookOpen,
      active: true,
    },
    {
      name: "Section 3",
      description: "Academic topic of general interest. One long text.",
      duration: "20 min",
      questions: "13-14 Questions",
      href: "/exams/ielts/reading/section-3",
      cta: "Start Section 3",
      icon: Target,
      active: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-900 py-20 text-white">
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Link href="/exams/ielts" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition mb-6">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to IELTS Overview
              </Link>
              <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                IELTS Reading Test
              </h1>
              <p className="mb-8 text-lg text-blue-100">
                The reading test comprises 3 sections and 40 questions in total. You have 60 minutes to complete all sections. Practice each section below to master different text types and question formats.
              </p>
              
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-300" />
                  <span>60 Minutes Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-blue-300" />
                  <span>40 Questions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24 min-h-[50vh]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.name}>
                    {section.active ? (
                      <Link
                        href={section.href}
                        className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                      >
                        <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-100">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {section.name}
                        </h3>
                        <div className="flex gap-4 mt-2 mb-4 text-sm font-medium text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {section.duration}</span>
                          <span className="flex items-center gap-1"><ListChecks className="w-4 h-4"/> {section.questions}</span>
                        </div>
                        <p className="mt-3 text-sm text-slate-600 line-clamp-3">{section.description}</p>
                        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                          {section.cta}
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </p>
                      </Link>
                    ) : (
                      <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 opacity-80 shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-50/50 z-10" />
                        <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-500 relative z-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 relative z-0">
                          {section.name}
                        </h3>
                        <div className="flex gap-4 mt-2 mb-4 text-sm font-medium text-slate-500 relative z-0">
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {section.duration}</span>
                          <span className="flex items-center gap-1"><ListChecks className="w-4 h-4"/> {section.questions}</span>
                        </div>
                        <p className="mt-3 text-sm text-slate-500 relative z-0">{section.description}</p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 relative z-20">
                          {section.cta}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
