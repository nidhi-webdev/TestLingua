"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LogOut, BookOpen, Target, Trophy, Clock, BarChart3, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 via-white to-blue-50">
        <div className="text-blue-900 text-lg">Loading...</div>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  const examOptions = [
    {
      name: "IELTS",
      icon: "🎯",
      description: "International English Language Testing System",
      progress: 65,
      nextTest: "May 15, 2026",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "TOEFL",
      icon: "📚",
      description: "Test of English as a Foreign Language",
      progress: 45,
      nextTest: "June 1, 2026",
      color: "from-slate-500 to-slate-600",
    },
    {
      name: "Cambridge",
      icon: "🏆",
      description: "Cambridge English Qualification",
      progress: 55,
      nextTest: "June 20, 2026",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { label: "Study Streak", value: "12 days", icon: Trophy },
    { label: "Total Hours", value: "24 hrs", icon: Clock },
    { label: "Tests Completed", value: "8", icon: BarChart3 },
    { label: "Avg. Score", value: "78%", icon: Target },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Header with user info and logout */}
            <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back, {session?.user?.name?.split(" ")[0]}!
            </h1>
            <p className="mt-2 text-slate-600">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Path */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Your Exam Preparation
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {examOptions.map((exam) => (
              <div
                key={exam.name}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${exam.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{exam.name}</h3>
                      <p className="mt-1 text-sm opacity-90">
                        {exam.description}
                      </p>
                    </div>
                    <div className="text-3xl">{exam.icon}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {exam.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${exam.color}`}
                        style={{ width: `${exam.progress}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Next test: <span className="font-semibold text-slate-900">{exam.nextTest}</span>
                  </p>
                  <button className="w-full rounded-lg bg-blue-50 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              {
                action: "Completed IELTS Reading Practice",
                time: "2 hours ago",
                icon: BookOpen,
              },
              {
                action: "Scored 82% on TOEFL Speaking Test",
                time: "1 day ago",
                icon: Trophy,
              },
              {
                action: "Started Cambridge Writing Module",
                time: "3 days ago",
                icon: BookOpen,
              },
            ].map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div key={idx} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-b-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-slate-600">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
