"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Mic,
  PenSquare,
  Target,
} from "lucide-react";

export default function CambridgePage() {
  const levels = [
    { name: "A2 Key (KET)", focus: "Foundational everyday communication" },
    { name: "B1 Preliminary (PET)", focus: "Independent practical language use" },
    { name: "B2 First (FCE)", focus: "Upper-intermediate academic readiness" },
    { name: "C1 Advanced (CAE)", focus: "High-level professional fluency" },
    { name: "C2 Proficiency (CPE)", focus: "Near-native advanced command" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
                  Cambridge Qualification Path
                </p>
                <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                  Professional Cambridge Exam Preparation
                </h1>
                <p className="mb-8 text-lg text-indigo-100">
                  Prepare from A2 to C2 with level-based pathways, assessment
                  diagnostics, and polished exam strategies for each paper.
                </p>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-900 transition hover:bg-indigo-50">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur">
                <h3 className="mb-5 text-xl font-semibold">Exam Snapshot</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                    <Clock className="h-5 w-5 text-indigo-100" />
                    <div>
                      <p className="text-indigo-100">Duration</p>
                      <p className="font-semibold text-white">Varies by level</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                    <GraduationCap className="h-5 w-5 text-indigo-100" />
                    <div>
                      <p className="text-indigo-100">CEFR Coverage</p>
                      <p className="font-semibold text-white">A2 to C2</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                    <Target className="h-5 w-5 text-indigo-100" />
                    <div>
                      <p className="text-indigo-100">Recognition</p>
                      <p className="font-semibold text-white">Global benchmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Core Assessment Papers
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Train across all tested competencies with paper-specific
                frameworks and score-focused practice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Reading", icon: BookOpen, detail: "Comprehension and use of English" },
                { name: "Writing", icon: PenSquare, detail: "Structured responses by level" },
                { name: "Listening", icon: Clock, detail: "Contextual and detail-based listening" },
                { name: "Speaking", icon: Mic, detail: "Interactive and long-turn speaking" },
              ].map((paper) => {
                const Icon = paper.icon;
                return (
                  <div
                    key={paper.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {paper.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">{paper.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  Program Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Level-specific practice tests",
                    "Authentic exam materials",
                    "Speaking examiner simulations",
                    "Writing rubric feedback",
                    "Vocabulary ladders by CEFR level",
                    "Progress tracking dashboard",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  Choose Your Level
                </h3>
                <div className="space-y-3">
                  {levels.map((level) => (
                    <div
                      key={level.name}
                      className="rounded-xl border border-indigo-100 bg-white p-4"
                    >
                      <p className="font-semibold text-slate-900">{level.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{level.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Achieve Your Cambridge English Goal
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From B2 First to C2 Proficiency, train with a professional pathway
              tailored to your level and timeline.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-900 px-8 py-3 font-semibold text-white transition hover:bg-indigo-800">
              Start Learning Now
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
