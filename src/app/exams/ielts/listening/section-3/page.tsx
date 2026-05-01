import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight, Clock, FileText, MessageSquare, Target, Zap } from "lucide-react";

export default function Section3Dashboard() {
  const questionTypes = [
    {
      id: "type-1",
      title: "Multiple Choice",
      description: "Choose one correct answer (A, B, or C) from three possible options, or multiple answers when required.",
      details: "This type may be a question with three possible answers or the first half of a sentence with three possible sentence endings.",
      skills: "Understanding specific points and the main ideas of the recording.",
      href: "/exams/ielts/listening/section-3/type-1",
      icon: <FileText className="w-8 h-8" />,
      accent: "bg-slate-900",
      iconBg: "bg-slate-100 text-slate-900",
      decor: "bg-slate-900/5",
      titleClass: "text-slate-900",
    },
    {
      id: "type-2",
      title: "Matching",
      description: "Match a list of items from the recording to a list of options (A-E) on the question paper.",
      details: "Match items to correct options by understanding the connection between information in the conversation.",
      skills: "Following conversation between two speakers and recognising how facts are connected.",
      href: "/exams/ielts/listening/section-3/type-2",
      icon: <Target className="w-8 h-8" />,
      accent: "bg-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-600",
      decor: "bg-emerald-500/5",
      titleClass: "text-emerald-600",
    },
    {
      id: "type-5",
      title: "Form/Note/Table Completion",
      description: "Fill in gaps in an outline using the correct words or numbers with specified word limits.",
      details: "Read instructions carefully for word limits. For example: 'NO MORE THAN TWO WORDS'. Writing more than the limit means you lose the mark.",
      skills: "Identifying important information and understanding relationships between ideas, facts, and events.",
      href: "/exams/ielts/listening/section-3/type-5",
      icon: <Clock className="w-8 h-8" />,
      accent: "bg-amber-600",
      iconBg: "bg-amber-50 text-amber-600",
      decor: "bg-amber-500/5",
      titleClass: "text-amber-600",
    },
    {
      id: "type-6",
      title: "Short Answer Questions",
      description: "Write short answers (usually 1-3 words) using information from the recording.",
      details: "Follow word limits carefully. Contracted words like 'they're' will not be tested. Hyphenated words count as single words.",
      skills: "Listening for specific facts like places, prices, times, and other key details.",
      href: "/exams/ielts/listening/section-3/type-6",
      icon: <MessageSquare className="w-8 h-8" />,
      accent: "bg-rose-600",
      iconBg: "bg-rose-50 text-rose-600",
      decor: "bg-rose-500/5",
      titleClass: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Navbar />

      <main className="pt-16 pb-20">
        <section className="bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <Link
              href="/exams/ielts/listening"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Listening
            </Link>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                <Zap className="w-3.5 h-3.5" /> IELTS Listening
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mt-4">
                Section 3: Conversation in an Academic Context
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mt-4">
                This section features a conversation between two speakers (typically a student and a tutor or professor) discussing academic topics. You'll hear the full conversation once, so listen carefully and answer 4 types of questions.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-slate-200">
                  <Clock className="w-4 h-4 text-sky-300" /> About 12 minutes
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-slate-200">
                  <MessageSquare className="w-4 h-4 text-emerald-300" /> Section 3 difficulty
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-slate-200">
                  <FileText className="w-4 h-4 text-amber-300" /> 4 types
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Practice Types</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Choose Your Question Type</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            {questionTypes.map((type) => (
              <Link
                key={type.id}
                href={type.href}
                className="group relative flex flex-col h-full bg-white rounded-[2.75rem] border border-slate-200/80 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] hover:-translate-y-1"
              >
                <div className={`h-1.5 w-full ${type.accent}`} />

                <div className="p-9 sm:p-10 flex flex-col h-full min-h-115">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-20 h-20 rounded-3xl ${type.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Practice Set</p>
                      <p className="text-lg font-black text-slate-900 mt-2">10 Questions</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-10">
                    <h2 className={`text-3xl font-black ${type.titleClass} transition-colors leading-[1.05] tracking-tight`}>
                      {type.title}
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed font-semibold">{type.description}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{type.details}</p>

                    <div className="pt-3 flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-500 shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.22em] leading-relaxed">{type.skills}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={14} /> 12 Mins</span>
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

          <div className="mt-12 rounded-2xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white/10 p-3">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About Section 3</h3>
                <p className="text-slate-300 leading-relaxed">
                  Section 3 involves a conversation between two speakers in an academic setting. This could be a discussion between a student and a lecturer, a tutor and a student preparing for an exam, or two students collaborating on a project. The conversation is typically more complex and academic in nature compared to Section 2, featuring more specialized vocabulary and detailed discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
