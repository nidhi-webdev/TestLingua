"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function TOEFLPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-50 to-slate-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Master the TOEFL Exam
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Complete preparation for the Test of English as a Foreign Language.
                </p>
                <button className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold inline-flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Exam Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Duration</p>
                      <p className="text-slate-600">2 hours 55 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-slate-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Format</p>
                      <p className="text-slate-600">Internet-based (iBT)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-slate-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Scoring</p>
                      <p className="text-slate-600">120 points total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Skills Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              The Four Skills
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Reading", time: "54-72 min" },
                { name: "Listening", time: "41-57 min" },
                { name: "Speaking", time: "17 min" },
                { name: "Writing", time: "29 min" },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <BookOpen className="w-8 h-8 text-slate-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-slate-600 text-sm">Duration: {skill.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our TOEFL Preparation Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "iBT practice tests",
                "Integrated tasks training",
                "Academic vocabulary",
                "Note-taking strategies",
                "Real exam questions",
                "Time management tips",
                "Speaking fluency practice",
                "Essay writing guidance",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Excel in TOEFL?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of successful test-takers who achieved their goals with TestLingua.
            </p>
            <button className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold">
              Start Learning Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
