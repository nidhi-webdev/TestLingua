import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Globe, Award, ChevronRight, Star } from "lucide-react";

export default function ExamsPage() {
  const exams = [
    {
      id: "ielts",
      title: "IELTS",
      fullName: "International English Language Testing System",
      description: "The world's most popular English language proficiency test for higher education and global migration.",
      modules: ["Speaking", "Writing", "Reading", "Listening"],
      color: "emerald",
      href: "/exams/ielts",
      rating: "4.9/5",
      students: "25k+",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      id: "toefl",
      title: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      description: "Measure your ability to use and understand English at the university level with the TOEFL iBT test.",
      modules: ["Reading", "Listening", "Speaking", "Writing"],
      color: "sky",
      href: "/exams/toefl",
      rating: "4.8/5",
      students: "12k+",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: "cambridge",
      title: "Cambridge English",
      fullName: "B2 First, C1 Advanced & C2 Proficiency",
      description: "In-depth exams that make learning English enjoyable, effective and rewarding for life.",
      modules: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
      color: "indigo",
      href: "/exams/cambridge",
      rating: "4.7/5",
      students: "8k+",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Choose Your <span className="text-emerald-600">Exam</span> Path
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Select the exam you are preparing for to access specialized practice modules, 
              AI-powered evaluations, and curated study materials.
            </p>
          </div>

          {/* Exam Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {exams.map((exam) => (
              <div 
                key={exam.id}
                className="group relative bg-white rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Accent Bar */}
                <div className={`h-2 w-full bg-${exam.color}-500`} />
                
                <div className="p-8">
                  {/* Icon & Rating */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${exam.color}-50 flex items-center justify-center text-${exam.color}-600 group-hover:scale-110 transition-transform duration-500`}>
                      {exam.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        {exam.rating}
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exam.students} Students</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{exam.title}</h2>
                      <p className="text-xs font-bold text-slate-400 leading-tight mt-1">{exam.fullName}</p>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-medium">
                      {exam.description}
                    </p>

                    {/* Modules Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exam.modules.map((module) => (
                        <span 
                          key={module}
                          className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <Link
                    href={exam.href}
                    className={`mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 cursor-pointer group-hover:bg-${exam.color}-600`}
                  >
                    Explore Modules
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative background element */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-${exam.color}-500/5 rounded-full blur-3xl`} />
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-20 p-8 bg-slate-900 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl font-bold">Not sure which exam to take?</h3>
              <p className="text-slate-400 max-w-md">Take our 5-minute diagnostic test to determine your current level and find the right exam for your goals.</p>
            </div>
            <button className="relative z-10 px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-400 transition shadow-xl shadow-emerald-500/30 cursor-pointer">
              Start Diagnostic Test
            </button>
            <Globe className="absolute -right-10 -bottom-10 w-64 h-64 opacity-5 text-white" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
