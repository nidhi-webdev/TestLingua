import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Master Your English
            <span className="block bg-linear-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
              Exam Preparation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Prepare for IELTS, TOEFL, and Cambridge English exams with our comprehensive
            learning platform. Expert guidance, practice tests, and personalized feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/exams"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Preparing Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-xl mx-auto">
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10">
              <p className="text-3xl font-bold text-white">50k+</p>
              <p className="text-sm text-white/80">Active Students</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10">
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-sm text-white/80">Practice Tests</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md shadow-lg shadow-black/10">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/80">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
