import { CheckCircle, Zap, Users, Award, Sparkles, Target, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Adaptive Learning",
      description: "Our proprietary AI engine analyzes your performance in real-time, tailoring difficulty levels and study paths to maximize your growth.",
      color: "emerald",
      size: "large"
    },
    {
      icon: Award,
      title: "Expert Content",
      description: "Certified materials developed by examiners with 15+ years of experience.",
      color: "blue",
      size: "small"
    },
    {
      icon: HeartHandshake,
      title: "Student First",
      description: "Dedicated support and a global community of learners to keep you motivated.",
      color: "indigo",
      size: "small"
    },
    {
      icon: ShieldCheck,
      title: "Official Standards",
      description: "Authentic, exam-style simulations that mirror official IELTS, TOEFL, and Cambridge standards.",
      color: "sky",
      size: "large"
    },
  ];

  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Core Capabilities</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              The Smarter Way to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Prepare.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium leading-relaxed">
            Combining human expertise with cutting-edge AI to deliver the most effective exam prep experience on the market.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-6">
          {/* Large Card 1 */}
          <div className="md:col-span-4 group relative bg-white rounded-[2.5rem] border border-slate-200 p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Zap size={32} strokeWidth={2.5} className="fill-current opacity-20" />
                <Zap size={32} strokeWidth={2.5} className="absolute" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">{features[0].title}</h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                {features[0].description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Sparkles size={16} /> Powered by Gemini Flash Lite
              </div>
            </div>
            <div className="absolute top-10 right-10 opacity-5 text-slate-900 group-hover:scale-110 transition-transform duration-700">
              <Target size={240} />
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-2 group relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20">
            <div className="relative z-10 flex flex-col h-full text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">{features[1].title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {features[1].description}
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-2 group relative bg-white rounded-[2.5rem] border border-slate-200 p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:-rotate-12 transition-transform duration-500">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{features[2].title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Large Card 2 */}
          <div className="md:col-span-4 group relative bg-linear-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={32} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-black mb-4">{features[3].title}</h3>
                  <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-md">
                    {features[3].description}
                  </p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-blue-600 bg-slate-200" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-blue-600 bg-white flex items-center justify-center text-blue-600 text-[10px] font-bold">
                    +50k
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
