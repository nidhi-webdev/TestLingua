"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Headphones,
  Mic,
  PenSquare,
  Target,
  Users,
} from "lucide-react";

export default function TOEFLPage() {
  const sections = [
    {
      name: "Reading",
      duration: "54-72 min",
      icon: BookOpen,
      note: "Academic passages and evidence-based responses",
    },
    {
      name: "Listening",
      duration: "41-57 min",
      icon: Headphones,
      note: "Lectures, campus dialogs, and inference questions",
    },
    {
      name: "Speaking",
      duration: "17 min",
      icon: Mic,
      note: "Independent and integrated speaking tasks",
    },
    {
      name: "Writing",
      duration: "29 min",
      icon: PenSquare,
      note: "Integrated writing with structured argument flow",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-800 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                  TOEFL iBT Program
                </p>
                <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                  Professional TOEFL Preparation
                </h1>
                <p className="mb-8 text-lg text-slate-200">
                  Build academic English mastery for university admissions with
                  integrated-skill training, intelligent scoring insights, and
                  exam-accurate timed practice.
                </p>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur">
                <h3 className="mb-5 text-xl font-semibold">Exam Overview</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-white/10 p-4">
                    <Clock className="mb-2 h-5 w-5 text-slate-200" />
                    <p className="text-xs uppercase tracking-wide text-slate-300">
                      Duration
                    </p>
                    <p className="font-semibold">2h 55m</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <Target className="mb-2 h-5 w-5 text-slate-200" />
                    <p className="text-xs uppercase tracking-wide text-slate-300">
                      Max Score
                    </p>
                    <p className="font-semibold">120 points</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <Users className="mb-2 h-5 w-5 text-slate-200" />
                    <p className="text-xs uppercase tracking-wide text-slate-300">
                      Format
                    </p>
                    <p className="font-semibold">Internet-based</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <CheckCircle className="mb-2 h-5 w-5 text-slate-200" />
                    <p className="text-xs uppercase tracking-wide text-slate-300">
                      Accepted By
                    </p>
                    <p className="font-semibold">12k+ institutions</p>
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
                TOEFL iBT Sections
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Structured section prep with integrated strategy drills and timed
                simulation workflows.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {section.duration}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">{section.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
              What Makes This Program Professional
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                "iBT practice tests",
                "Integrated tasks training",
                "Academic vocabulary",
                "Note-taking strategies",
                "Real exam questions",
                "Time management tips",
                "Speaking fluency practice",
                "Essay writing guidance",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Ready to Excel in TOEFL?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Join focused learners preparing for admission goals with a complete,
              professional TOEFL strategy stack.
            </p>
            <button className="rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-black">
              Start Learning Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
