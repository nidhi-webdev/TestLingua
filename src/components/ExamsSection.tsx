import { BookOpen, Globe, Award, ChevronRight, Zap } from "lucide-react";

interface ExamCardProps {
  title: string;
  description: string;
  accent: string;
  bgColor: string;
  icon: React.ElementType;
  href: string;
  modules: string[];
  stats: {
    tests: string;
    duration: string;
  };
}

const ExamCard: React.FC<ExamCardProps> = ({
  title,
  description,
  accent,
  bgColor,
  icon: Icon,
  href,
  modules,
  stats,
}) => {
  return (
    <div className="group relative h-full">
      {/* Background Glow */}
      <div className={`absolute -inset-0.5 bg-linear-to-r ${accent} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition duration-500`} />
      
      <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden flex flex-col transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-2xl group-hover:shadow-slate-200/50">
        <div className={`h-1.5 w-full bg-linear-to-r ${accent}`} />
        
        <div className="p-8 flex flex-col h-full">
          {/* Top Row: Icon & Module Count */}
          <div className="flex justify-between items-start mb-8">
            <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
              <Icon size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-[10px] font-black text-emerald-600 rounded-lg uppercase tracking-tighter mb-1">
                <Zap size={10} className="fill-current" />
                AI Evaluated
              </span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{modules.length} Modules</p>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-slate-900 group-hover:to-blue-600 transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium mt-2">
              {description}
            </p>
          </div>

          {/* Module List Preview */}
          <div className="flex flex-wrap gap-2 mb-8">
            {modules.map((mod) => (
              <span key={mod} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded-md bg-slate-50/50">
                {mod}
              </span>
            ))}
          </div>

          {/* Stats Divider */}
          <div className="grid grid-cols-2 gap-4 py-6 border-t border-slate-100 mt-auto">
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Questions</p>
              <p className="text-2xl font-black text-slate-900 mt-1">{stats.tests}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Time</p>
              <p className="text-2xl font-black text-slate-900 mt-1">{stats.duration}</p>
            </div>
          </div>

          {/* Action Button */}
          <a
            href={href}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/10 group-hover:shadow-emerald-500/20 group-hover:bg-emerald-600"
          >
            Start Practice
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ExamsSection() {
  const exams = [
    {
      title: "IELTS",
      description: "Complete preparation for both Academic and General Training modules with official marking criteria.",
      accent: "from-blue-600 via-blue-500 to-indigo-600",
      bgColor: "bg-blue-600",
      icon: BookOpen,
      href: "/exams/ielts",
      modules: ["Speaking", "Writing", "Reading", "Listening"],
      stats: { tests: "250+", duration: "2.5h" },
    },
    {
      title: "TOEFL",
      description: "Master the iBT format with integrated tasks and real-time AI-powered feedback on your delivery.",
      accent: "from-slate-800 via-slate-700 to-slate-900",
      bgColor: "bg-slate-900",
      icon: Globe,
      href: "/exams/toefl",
      modules: ["Reading", "Listening", "Speaking", "Writing"],
      stats: { tests: "300+", duration: "3h" },
    },
    {
      title: "Cambridge",
      description: "Refine your skills for C1 Advanced and C2 Proficiency with deep linguistic analysis.",
      accent: "from-indigo-600 via-violet-500 to-purple-600",
      bgColor: "bg-indigo-600",
      icon: Award,
      href: "/exams/cambridge",
      modules: ["Use of English", "Writing", "Listening", "Speaking"],
      stats: { tests: "200+", duration: "2.5h" },
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-4 block">Practice Platform</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Select Your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-600">Exam Path</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Every test is designed by experts and integrated with our advanced AI evaluation engine to provide instant, official-grade feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {exams.map((exam) => (
            <ExamCard key={exam.title} {...exam} />
          ))}
        </div>
      </div>
    </section>
  );
}
