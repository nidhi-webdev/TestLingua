import Link from "next/link";
import { Clock3, CalendarDays, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "IELTS Writing Task 2: Build High-Scoring Arguments",
    excerpt:
      "Learn a practical framework to plan, structure, and polish essays under strict exam timing.",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    tag: "IELTS",
    href: "/blog/ielts-writing-task-2-guide",
    cardStyle: "from-slate-50 to-white border-slate-200/60",
    tagStyle: "bg-slate-100 text-slate-700",
  },
  {
    title: "TOEFL Speaking: 5 Drills To Improve Fluency Fast",
    excerpt:
      "Use repeatable speaking drills to reduce hesitation, improve coherence, and sound more confident.",
    date: "Apr 17, 2026",
    readTime: "5 min read",
    tag: "TOEFL",
    href: "/blog/toefl-speaking-fluency-drills",
    cardStyle: "from-zinc-50 to-white border-zinc-200/60",
    tagStyle: "bg-zinc-100 text-zinc-700",
  },
  {
    title: "Cambridge C1 Reading: Smart Time Management Tactics",
    excerpt:
      "Master section prioritization and scanning techniques to answer accurately before time runs out.",
    date: "Apr 14, 2026",
    readTime: "7 min read",
    tag: "Cambridge",
    href: "/blog/cambridge-c1-reading-time-management",
    cardStyle: "from-stone-50 to-white border-stone-200/60",
    tagStyle: "bg-stone-100 text-stone-700",
  },
];

const delays = ["delay-150", "delay-300", "delay-450"];

export default function BlogSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Actionable exam strategies, weekly study plans, and score-boosting tips from experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group rounded-2xl border bg-linear-to-br ${post.cardStyle} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-up ${delays[index]}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${post.tagStyle}`}>
                  {post.tag}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock3 size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {post.excerpt}
              </p>

              <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={15} />
                <span>{post.date}</span>
              </div>

              <Link
                href={post.href}
                className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800"
              >
                Read Article
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-up delay-600">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-900 hover:text-gray-900"
          >
            View All Blog Posts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
