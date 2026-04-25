import { BookOpen, Globe, Award } from "lucide-react";

interface ExamCardProps {
  title: string;
  description: string;
  accent: string;
  bgColor: string;
  icon: React.ElementType;
  href: string;
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
  stats,
}) => {
  return (
    <div
      className="group relative flex h-full min-h-[33rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up"
    >
      <div className={`absolute left-0 right-0 top-0 h-1 bg-linear-to-r ${accent}`} />

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
        <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center shadow-sm`}>
          <Icon className="text-white" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
        <div>
          <p className="text-slate-500 text-xs font-semibold tracking-wide">PRACTICE TESTS</p>
          <p className="text-4xl font-bold text-slate-900 mt-1 leading-none">{stats.tests}</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs font-semibold tracking-wide">DURATION</p>
          <p className="text-4xl font-bold text-slate-900 mt-1 leading-none">{stats.duration}</p>
        </div>
      </div>

      <a
        href={href}
        className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-slate-900 to-blue-900 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-slate-800 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
        aria-label={`Go to ${title} exam page`}
      >
        Go to Exam Page
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

export default function ExamsSection() {
  const exams = [
    {
      title: "IELTS",
      description:
        "International English Language Testing System. Prepare for academic and general training modules.",
      accent: "from-blue-900 to-blue-700",
      bgColor: "bg-blue-900",
      icon: BookOpen,
      href: "/exams/ielts",
      stats: {
        tests: "250+",
        duration: "2h 45m",
      },
    },
    {
      title: "TOEFL",
      description:
        "Test of English as a Foreign Language. Master iBT preparation with expert guidance.",
      accent: "from-slate-900 to-slate-700",
      bgColor: "bg-slate-900",
      icon: Globe,
      href: "/exams/toefl",
      stats: {
        tests: "300+",
        duration: "3h",
      },
    },
    {
      title: "Cambridge",
      description:
        "Cambridge English Qualifications. Prepare for B1, B2, C1, and C2 levels with focused practice across reading, writing, listening, and speaking.",
      accent: "from-indigo-900 to-indigo-700",
      bgColor: "bg-indigo-900",
      icon: Award,
      href: "/exams/cambridge",
      stats: {
        tests: "200+",
        duration: "2h 30m",
      },
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose Your Exam Path
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select your target exam and begin your personalized preparation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={exam.title} className={`animate-fade-up delay-${(index + 1) * 150}`}>
              <ExamCard {...exam} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
