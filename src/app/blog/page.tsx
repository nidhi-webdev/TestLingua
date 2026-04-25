"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Ace Your IELTS Speaking Test",
      excerpt:
        "Discover proven strategies to improve your fluency, vocabulary, and confidence in the IELTS speaking section.",
      category: "IELTS",
      author: "Sarah Johnson",
      date: "2026-04-20",
      readTime: "5 min read",
      image: "📚",
    },
    {
      id: 2,
      title: "TOEFL Reading: How to Manage Time Effectively",
      excerpt:
        "Master time management techniques that will help you complete all reading passages within the time limit.",
      category: "TOEFL",
      author: "Mike Chen",
      date: "2026-04-18",
      readTime: "6 min read",
      image: "⏱️",
    },
    {
      id: 3,
      title: "Cambridge English B2: Complete Study Guide",
      excerpt:
        "A comprehensive guide to prepare for the Cambridge English B2 (First) exam with tips and resources.",
      category: "Cambridge",
      author: "Emma Williams",
      date: "2026-04-15",
      readTime: "8 min read",
      image: "📖",
    },
    {
      id: 4,
      title: "Essential Vocabulary for IELTS Writing Task 1",
      excerpt:
        "Learn the must-know vocabulary and phrases to describe graphs, charts, and diagrams effectively.",
      category: "IELTS",
      author: "Sarah Johnson",
      date: "2026-04-12",
      readTime: "7 min read",
      image: "📝",
    },
    {
      id: 5,
      title: "TOEFL Integrated Writing: Connecting Sources",
      excerpt:
        "Learn how to synthesize information from multiple sources to write high-scoring integrated essays.",
      category: "TOEFL",
      author: "Mike Chen",
      date: "2026-04-10",
      readTime: "6 min read",
      image: "🔗",
    },
    {
      id: 6,
      title: "Common Mistakes in Cambridge English Speaking",
      excerpt:
        "Avoid these common errors that most test-takers make in the Cambridge English speaking sections.",
      category: "Cambridge",
      author: "Emma Williams",
      date: "2026-04-08",
      readTime: "5 min read",
      image: "❌",
    },
    {
      id: 7,
      title: "Listening Skills: Note-taking Strategies",
      excerpt:
        "Master effective note-taking techniques to improve your listening comprehension across all three exams.",
      category: "General",
      author: "Sarah Johnson",
      date: "2026-04-05",
      readTime: "7 min read",
      image: "👂",
    },
    {
      id: 8,
      title: "How to Overcome Exam Anxiety",
      excerpt:
        "Practical tips and mindfulness techniques to manage stress and perform your best on test day.",
      category: "General",
      author: "Mike Chen",
      date: "2026-04-02",
      readTime: "6 min read",
      image: "🧘",
    },
    {
      id: 9,
      title: "Creating Your Personalized Study Plan",
      excerpt:
        "Learn how to create an effective study schedule based on your goals, timeline, and learning style.",
      category: "General",
      author: "Emma Williams",
      date: "2026-03-30",
      readTime: "5 min read",
      image: "📅",
    },
  ];

  const categories = ["All", "IELTS", "TOEFL", "Cambridge", "General"];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                TestLingua Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Expert tips, study strategies, and insights to help you succeed in your English exam
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    idx === 0
                      ? "bg-blue-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-40 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">
                        {post.readTime}
                      </span>
                      <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get weekly tips, study strategies, and exam updates delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
