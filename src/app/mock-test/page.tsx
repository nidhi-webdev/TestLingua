"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Users, Award, ArrowRight } from "lucide-react";

export default function MockTestPage() {
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

  const mockTests = [
    {
      id: 1,
      name: "IELTS Full Mock Test - Academic",
      type: "IELTS",
      duration: "2h 45m",
      questions: 40,
      difficulty: "Intermediate",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "TOEFL Practice Test",
      type: "TOEFL",
      duration: "2h 55m",
      questions: 100,
      difficulty: "Advanced",
      color: "from-slate-500 to-slate-600",
    },
    {
      id: 3,
      name: "Cambridge FCE Mock Test",
      type: "Cambridge",
      duration: "3h 20m",
      questions: 130,
      difficulty: "Intermediate",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 4,
      name: "IELTS Writing Practice",
      type: "IELTS",
      duration: "1h",
      questions: 2,
      difficulty: "Beginner",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 5,
      name: "TOEFL Speaking Practice",
      type: "TOEFL",
      duration: "20m",
      questions: 6,
      difficulty: "Intermediate",
      color: "from-slate-500 to-slate-600",
    },
    {
      id: 6,
      name: "Cambridge CAE Listening",
      type: "Cambridge",
      duration: "40m",
      questions: 40,
      difficulty: "Advanced",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Mock Tests & Practice
              </h1>
              <p className="text-xl text-slate-600">
                Take full-length practice tests to assess your readiness
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Award className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Real Exam Conditions
                </h3>
                <p className="text-slate-600 text-sm">
                  Practice under actual exam timing and format
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Expert Scoring
                </h3>
                <p className="text-slate-600 text-sm">
                  Get detailed analysis and feedback on your performance
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Clock className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Unlimited Access
                </h3>
                <p className="text-slate-600 text-sm">
                  Take as many tests as you want, anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Tests Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Available Mock Tests
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{test.name}</h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                        {test.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{test.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{test.questions} questions</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-slate-600 mb-2">
                        Difficulty: <span className="font-semibold text-slate-900">{test.difficulty}</span>
                      </p>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-50 text-blue-900 rounded-lg hover:bg-blue-100 transition-colors font-semibold inline-flex items-center justify-center gap-2">
                      Start Test
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
