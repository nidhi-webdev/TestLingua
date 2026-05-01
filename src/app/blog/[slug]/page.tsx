import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Calendar, ArrowLeft, Share2, Bookmark, User, ChevronRight } from "lucide-react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  
  // Mock data for the post (In a real app, you'd fetch this based on the slug)
  const post = {
    title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    tag: "Exam Strategy",
    date: "April 20, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Miller",
    authorRole: "Lead IELTS Specialist",
    content: `
      <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
        Success in English proficiency exams isn't just about how much you know; it's about how you apply that knowledge under pressure. In this guide, we'll break down the specific frameworks used by top-scoring candidates to master their time and structure.
      </p>

      <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6">The Importance of Structure</h2>
      <p className="mb-6">
        Whether you're tackling IELTS Writing Task 2 or TOEFL Integrated Speaking, your structure is the skeleton that holds your response together. Without a clear logical flow, even the most advanced vocabulary will fail to impress an examiner.
      </p>

      <div className="bg-slate-900 rounded-[2rem] p-10 my-12 text-white relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-4">Pro Tip: The PEEL Method</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">
          Point, Evidence, Explanation, Link. Use this for every body paragraph to ensure coherence and cohesion—two critical marking criteria.
        </p>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6">Managing Your Time Effectively</h2>
      <p className="mb-6">
        One of the biggest hurdles for students is the ticking clock. We recommend the 5-30-5 split: 5 minutes for planning, 30 minutes for writing, and 5 minutes for a final proofread.
      </p>
      
      <blockquote className="border-l-4 border-emerald-500 pl-8 my-10 italic text-2xl text-slate-700 font-serif">
        "Consistency in practice is the bridge between your current level and your target band score."
      </blockquote>

      <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6">Final Thoughts</h2>
      <p>
        Mastering these strategies takes time. Don't be discouraged if your first few attempts aren't perfect. Use our AI-powered practice modules to get instant feedback and keep refining your approach.
      </p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-12 font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Header */}
          <div className="space-y-6 mb-16">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">
              {post.tag}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-b border-slate-100 pb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">{post.author}</p>
                  <p className="text-xs font-bold text-slate-400">{post.authorRole}</p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-100 hidden sm:block" />
              <div className="flex items-center gap-4 text-sm text-slate-500 font-bold">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/50 prose-blockquote:p-8 prose-blockquote:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom Actions */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition">
                <Share2 size={18} /> Share
              </button>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition">
                <Bookmark size={18} /> Save
              </button>
            </div>
          </div>

          {/* Related CTA */}
          <div className="mt-20 p-12 bg-linear-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 leading-tight">Ready to start <br />practicing?</h3>
              <p className="text-blue-100 max-w-sm font-medium">Put these strategies into action with our AI-powered Speaking and Writing simulators.</p>
            </div>
            <Link 
              href="/exams"
              className="relative z-10 px-8 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition shadow-xl shadow-blue-900/20 flex items-center gap-2 group/btn"
            >
              Get Started Now
              <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
