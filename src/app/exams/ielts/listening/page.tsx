import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Headphones } from "lucide-react";
import ListeningCategories from "@/components/ielts/ListeningCategories";

export default function IELTSListeningQuestionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="bg-slate-900 py-16 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/exams/ielts"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white uppercase tracking-widest"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Overview
            </Link>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300 border border-white/10">
                  Interactive Skills Hub
                </span>
                <h1 className="text-5xl font-black md:text-6xl tracking-tight leading-tight">Listening <br/>Practice</h1>
                <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                  Train with official-standard audio tracks and interactive question sets across all four exam sections.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <Clock className="mb-4 h-6 w-6 text-emerald-400" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Duration</p>
                  <p className="text-xl font-black mt-1">30 Minutes</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <Headphones className="mb-4 h-6 w-6 text-blue-400" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Audio Format</p>
                  <p className="text-xl font-black mt-1">4 Sections</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Navigation Tabs */}
        <div className="sticky top-16 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-10 overflow-x-auto hide-scrollbar">
              {['Reading', 'Listening', 'Writing', 'Speaking'].map((skill) => (
                <Link
                  key={skill}
                  href={`/exams/ielts/${skill.toLowerCase()}`}
                  className={`whitespace-nowrap border-b-2 py-5 px-1 text-xs font-black uppercase tracking-widest transition-colors ${
                    skill === 'Listening' 
                      ? 'border-emerald-500 text-emerald-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {skill}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <section className="py-20 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ListeningCategories />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
