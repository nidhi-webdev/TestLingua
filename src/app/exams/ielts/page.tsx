"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  Headphones,
  Mic,
  PenSquare,
  Target,
  Users,
} from "lucide-react";

export default function IELTSPage() {
  const skills = [
    {
      name: "Listening",
      icon: Headphones,
      duration: "30 min",
      focus: "Accents, maps, and multi-speaker conversations",
      href: "/exams/ielts/listening",
      cta: "Start Listening Questions",
    },
    {
      name: "Reading",
      icon: BookOpen,
      duration: "60 min",
      focus: "Academic texts, skimming, scanning, inference",
      href: "/exams/ielts/reading",
      cta: "Start Reading Questions",
    },
    {
      name: "Writing",
      icon: PenSquare,
      duration: "60 min",
      focus: "Task 1 reports and Task 2 argument essays",
      href: "",
      cta: "Coming soon",
    },
    {
      name: "Speaking",
      icon: Mic,
      duration: "11-14 min",
      focus: "Fluency, coherence, lexical resource",
      href: "",
      cta: "Coming soon",
    },
  ];

  const highlights = [
    "120+ full-length IELTS practice tests",
    "Band score prediction for each section",
    "Official-style writing tasks with rubric feedback",
    "Personalized weekly study plans",
    "Live speaking practice simulations",
    "Detailed analytics for weak-skill targeting",
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 py-20 text-white">
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100">
                  IELTS Professional Track
                </p>
                <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                  Master IELTS With Structured Precision
                </h1>
                <p className="mb-8 text-lg text-blue-100">
                  Train for Academic and General IELTS with exam-grade mock tests,
                  section-wise feedback, and a proven framework to reach your target
                  band.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-sky-900 transition hover:bg-sky-50">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                    View Study Plan
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-7 shadow-xl backdrop-blur-md">
                <h3 className="mb-6 text-xl font-semibold">Exam Snapshot</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/10 p-4">
                    <Clock className="mb-2 h-5 w-5 text-blue-200" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">
                      Duration
                    </p>
                    <p className="text-lg font-semibold">2h 45m</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <Target className="mb-2 h-5 w-5 text-blue-200" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">
                      Score Scale
                    </p>
                    <p className="text-lg font-semibold">Band 0-9</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <Users className="mb-2 h-5 w-5 text-blue-200" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">
                      Formats
                    </p>
                    <p className="text-lg font-semibold">Academic, General</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <Award className="mb-2 h-5 w-5 text-blue-200" />
                    <p className="text-xs uppercase tracking-wide text-blue-200">
                      Learners
                    </p>
                    <p className="text-lg font-semibold">50k+ trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Interactive Skill Hub
              </p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Skill-by-Skill Mastery
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Build confidence in each module with targeted practice and
                exam-style performance metrics.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                const isInteractive = Boolean(skill.href);
                return (
                  <div key={skill.name}>
                    {isInteractive ? (
                      <Link
                        href={skill.href}
                        className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                      >
                        <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-100">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {skill.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-blue-700">
                          {skill.duration}
                        </p>
                        <p className="mt-3 text-sm text-slate-600">{skill.focus}</p>
                        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                          {skill.cta}
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </p>
                      </Link>
                    ) : (
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-90 shadow-sm">
                        <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {skill.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {skill.duration}
                        </p>
                        <p className="mt-3 text-sm text-slate-600">{skill.focus}</p>
                        <p className="mt-5 text-sm font-semibold text-slate-500">
                          {skill.cta}
                        </p>
                      </div>
                    )}
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
                  What You Get
                </h3>
                <div className="space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
                <h3 className="mb-6 text-2xl font-bold">Performance Outcomes</h3>
                <div className="space-y-6">
                  {[{ label: "Average band improvement", value: "+1.2" }, { label: "Students crossing band 7", value: "81%" }, { label: "Course completion rate", value: "92%" }].map(
                    (item) => (
                      <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                          <span>{item.label}</span>
                          <span className="font-semibold text-white">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-700">
                          <div className="h-full w-4/5 rounded-full bg-blue-400" />
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-blue-300">
                  <BarChart3 className="h-4 w-4" />
                  Updated weekly from learner cohorts
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Ready for Your Target Band?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Start today with a guided IELTS roadmap, instant diagnostics, and
              premium practice resources.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800">
              Start Learning Now
                  <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
