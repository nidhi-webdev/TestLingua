import Link from "next/link";
import { BookOpen, Globe, Award } from "lucide-react";

interface ExamCardProps {
  title: string;
  description: string;
  color: string;
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
  color,
  bgColor,
  icon: Icon,
  href,
  stats,
}) => {
  return (
    <Link href={href}>
      <div
        className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 ${color}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
            <Icon className="text-white" size={24} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
          <div>
            <p className="text-gray-500 text-xs font-semibold">PRACTICE TESTS</p>
            <p className="text-lg font-bold text-gray-900 mt-1">{stats.tests}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold">DURATION</p>
            <p className="text-lg font-bold text-gray-900 mt-1">{stats.duration}</p>
          </div>
        </div>

        <div className="mt-6 inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
          <span className={color.replace("border-t-4", "").replace("border-", "text-")}>Start Practice</span>
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
};

export default function ExamsSection() {
  const exams = [
    {
      title: "IELTS",
      description:
        "International English Language Testing System. Prepare for academic and general training modules.",
      color: "border-blue-600",
      bgColor: "bg-blue-600",
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
      color: "border-green-600",
      bgColor: "bg-green-600",
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
        "Cambridge English Qualifications. Prepare for B1, B2, C1, and C2 levels.",
      color: "border-red-600",
      bgColor: "bg-red-600",
      icon: Award,
      href: "/exams/cambridge",
      stats: {
        tests: "200+",
        duration: "2h 30m",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Exam Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your target exam and begin your personalized preparation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </div>
      </div>
    </section>
  );
}
