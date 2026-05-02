import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight, Clock, FileText, MessageSquare, Target, Zap } from "lucide-react";

export default function Section4Dashboard() {
  const questionTypes = [
    {
      id: "type-4",
      title: "Form/Note/Table/Flow Chart",
      description: "Fill in gaps in an outline with words or numbers.",
      href: "/exams/ielts/listening/section-4/type-4",
      icon: <FileText className="w-8 h-8" />,
      accent: "bg-amber-600",
      iconBg: "bg-amber-50 text-amber-600",
      decor: "bg-amber-500/5",
      titleClass: "text-amber-600",
    },
    {
      id: "type-5",
      title: "Sentence Completion",
      description: "Complete sentences using information from the recording.",
      href: "/exams/ielts/listening/section-4/type-5",
      icon: <Target className="w-8 h-8" />,
      accent: "bg-teal-600",
      iconBg: "bg-teal-50 text-teal-600",
      decor: "bg-teal-500/5",
      titleClass: "text-teal-600",
    },
    {
      id: "type-6",
      title: "Short Answer Questions",
      description: "Write short answers (1-3 words) based on the recording.",
      href: "/exams/ielts/listening/section-4/type-6",
      icon: <MessageSquare className="w-8 h-8" />,
      accent: "bg-rose-600",
      iconBg: "bg-rose-50 text-rose-600",
      decor: "bg-rose-500/5",
      titleClass: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16 pb-20">
        <section className="bg-slate-900 pt-20 pb-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/exams/ielts/listening"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-10 font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Listening Sections
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  IELTS Academic Listening
                </div>

                <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
                  Listening <span className="text-blue-400">Section 4</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                  Choose a question type to begin your Section 4 practice set. Section 4 features a monologue in an academic context, typically a lecture.
                </p>
              </div>

              <div className="text-right hidden md:block">
                <div className="space-y-1">
                  <p className="text-5xl font-black tracking-tighter">03</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Question Types</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-10 overflow-x-auto hide-scrollbar">
              {[
                { label: "Section 1 (Easy)", active: false, href: "/exams/ielts/listening/section-1" },
                { label: "Section 2 (Medium)", active: false, href: "/exams/ielts/listening/section-2" },
                { label: "Section 3 (Hard)", active: false, href: "/exams/ielts/listening/section-3" },
                { label: "Section 4 (Expert)", active: true, href: "/exams/ielts/listening/section-4" },
              ].map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`whitespace-nowrap py-6 border-b-2 text-xs font-black uppercase tracking-widest transition-all ${tab.active ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Type Selection Cards - Reverted to 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {questionTypes.map((type) => (
              <Link
                key={type.id}
                href={type.href}
                className="group relative flex flex-col h-full bg-white rounded-[3rem] border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
              >
                {/* Accent Bar */}
                <div className={`h-1.5 w-full ${type.accent}`} />

                <div className="p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${type.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Practice Set</p>
                      <p className="text-lg font-black text-slate-900 mt-2">10 Questions</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    <h2 className={`text-2xl font-black text-slate-900 group-hover:${type.titleClass} transition-colors leading-tight`}>
                      {type.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {type.description}
                    </p>

                    <div className="pt-4 flex items-center gap-3">
                      <Target size={16} className="text-emerald-500" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Listening for Academic Details</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={14} /> 9 Mins</span>
                    </div>
                    <span className={`flex items-center gap-1 text-slate-900 font-black text-sm group-hover:${type.titleClass} transition-colors`}>
                      Start Practice <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Background Decor */}
                <div className={`absolute -right-8 -bottom-8 w-40 h-40 ${type.decor} rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="rounded-[2.75rem] bg-linear-to-r from-slate-900 to-slate-800 p-8 sm:p-10 text-white">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white/10 p-3 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">About Section 4</h3>
                <p className="text-slate-300 leading-relaxed">
                  Section 4 is a monologue delivered in an academic context. Typically, this is a university lecture on an academic topic. You hear the recording once and answer 10 questions (approximately 9 minutes). This is the most challenging section of the listening exam as there's no interaction between speakers – just one continuous monologue. The vocabulary is more academic and technical. You have time to read the questions before listening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
