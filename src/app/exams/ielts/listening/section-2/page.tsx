import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight, Clock, FileText, MessageSquare, Target, Zap } from "lucide-react";

export default function Section2Dashboard() {
  const questionTypes = [
    {
      id: "type-3",
      title: "Plan/map/diagram labelling",
      description: "Complete labels on a visual such as a diagram, a plan, a map, or a set of pictures.",
      skills: "Understanding descriptions of places and following directions.",
      href: "/exams/ielts/listening/section-2/type-3",
      icon: <MessageSquare className="w-8 h-8" />,
      accent: "bg-blue-600",
      iconBg: "bg-blue-50 text-blue-600",
      decor: "bg-blue-500/5",
      titleClass: "text-blue-600",
    },
    {
      id: "type-1",
      title: "Multiple choice",
      description: "Choose one correct answer, or more than one answer when the question requires it.",
      skills: "Understanding specific points and the main ideas of the recording.",
      href: "/exams/ielts/listening/section-2/type-1",
      icon: <FileText className="w-8 h-8" />,
      accent: "bg-slate-900",
      iconBg: "bg-slate-100 text-slate-900",
      decor: "bg-slate-900/5",
      titleClass: "text-slate-900",
    },
    {
      id: "type-2",
      title: "Matching",
      description: "Match a list of items from the recording to the correct options on the question paper.",
      skills: "Following a conversation and recognising how facts are connected.",
      href: "/exams/ielts/listening/section-2/type-2",
      icon: <Target className="w-8 h-8" />,
      accent: "bg-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-600",
      decor: "bg-emerald-500/5",
      titleClass: "text-blue-600",
    },
    {
      id: "type-4",
      title: "Form/note/table/flow chart/summary completion",
      description: "Fill in gaps in an outline of the recording using the correct words or letters.",
      skills: "Listening for facts, names, places, prices, times, and categories.",
      href: "/exams/ielts/listening/section-2/type-4",
      icon: <Clock className="w-8 h-8" />,
      accent: "bg-violet-600",
      iconBg: "bg-violet-50 text-violet-600",
      decor: "bg-violet-500/5",
      titleClass: "text-slate-900",
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
                  Listening <span className="text-blue-400">Section 2</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                  Choose a question type to begin your Section 2 practice set.
                </p>
              </div>

              <div className="text-right hidden md:block">
                <div className="space-y-1">
                  <p className="text-5xl font-black tracking-tighter">04</p>
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
                { label: "Section 2 (Medium)", active: true, href: "/exams/ielts/listening/section-2" },
                { label: "Section 3 (Hard)", active: false, href: "/exams/ielts/listening/section-3" },
                { label: "Section 4 (Expert)", active: false, href: "/exams/ielts/listening/section-4" },
              ].map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`whitespace-nowrap py-6 border-b-2 text-xs font-black uppercase tracking-widest transition-all ${
                    tab.active ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-8">
            {questionTypes.map((type) => (
              <Link
                key={type.id}
                href={type.href}
                className="group relative flex flex-col h-full bg-white rounded-[2.75rem] border border-slate-200/80 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] hover:-translate-y-1"
              >
                <div className={`h-1.5 w-full ${type.accent}`} />

                <div className="p-9 sm:p-10 flex flex-col h-full min-h-107.5">
                  <div className="flex justify-between items-start mb-10">
                    <div className={`w-20 h-20 rounded-3xl ${type.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Practice Set</p>
                      <p className="text-lg font-black text-slate-900 mt-2">10 Questions</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-5 mb-10">
                    <h2 className={`text-3xl font-black ${type.titleClass} transition-colors leading-[1.05] tracking-tight`}>
                      {type.title}
                    </h2>
                    <p className="text-base text-slate-500 leading-relaxed font-medium max-w-120">{type.description}</p>

                    <div className="pt-4 flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-500">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.22em] leading-relaxed">{type.skills}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={14} /> 10 Mins</span>
                    </div>
                    <span className={`flex items-center gap-1 font-black text-sm transition-colors ${type.titleClass} group-hover:opacity-90`}>
                      Start Practice <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                <div className={`absolute -right-8 -bottom-8 w-40 h-40 ${type.decor} rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700`} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
