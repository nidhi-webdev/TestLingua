import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.08))] animate-shimmer"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg backdrop-blur-md animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.85)]"></span>
            Live exam prep dashboard
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-fade-up delay-150">
            Master Your English
            <span className="block bg-linear-to-r from-slate-100 via-sky-200 to-slate-100 bg-clip-text text-transparent">
              Exam Preparation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-300">
            Prepare for IELTS, TOEFL, and Cambridge English exams with our comprehensive
            learning platform. Expert guidance, practice tests, and personalized feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-up delay-450">
            <Link
              href="/exams"
              className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-black/20"
            >
              Start Preparing Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-slate-300 text-slate-100 font-bold rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-xl mx-auto animate-fade-up delay-600">
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10 animate-float">
              <p className="text-3xl font-bold text-white">50k+</p>
              <p className="text-sm text-white/80">Active Students</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10 animate-float [animation-delay:1.2s]">
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-sm text-white/80">Practice Tests</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10 animate-float [animation-delay:2.4s]">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/80">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
