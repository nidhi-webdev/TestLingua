"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Mic } from "lucide-react";
import SpeakingCategories from "@/components/ielts/SpeakingCategories";

export default function IELTSSpeakingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20 text-white relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-700/10 blur-[100px] -rotate-12 transform translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-teal-500/10 blur-[80px] rotate-12 transform -translate-x-1/4" />
          
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/exams/ielts"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white group"
            >
              <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to IELTS Overview
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                  IELTS Speaking
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-emerald-100 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Feedback Ready
                </span>
              </div>
              <h1 className="text-4xl font-bold md:text-6xl tracking-tight leading-tight">
                Master the <span className="text-emerald-400">IELTS Interview</span>
              </h1>
              <p className="mt-6 text-xl text-emerald-100/80 leading-relaxed max-w-2xl">
                Simulate authentic Speaking tests with AI-powered analysis. Practice Parts 1, 2, and 3 with real examiner topics and improve your fluency.
              </p>
            </div>
          </div>
        </section>

        {/* Module Navigation Tabs */}
        <div className="sticky top-16 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-8 overflow-x-auto hide-scrollbar">
              {["Reading", "Listening", "Writing", "Speaking"].map((tab) => {
                const isActive = tab === "Speaking";
                const href = `/exams/ielts/${tab.toLowerCase()}`;
                return (
                  <Link
                    key={tab}
                    href={href}
                    className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? "border-emerald-600 text-emerald-600" 
                        : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    {tab}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SpeakingCategories />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
