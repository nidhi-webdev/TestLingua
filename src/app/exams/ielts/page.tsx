"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function IELTSPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Master the IELTS Exam
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Comprehensive preparation for the International English Language Testing System.
                </p>
                <button className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold inline-flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Exam Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Duration</p>
                      <p className="text-slate-600">2 hours 45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Format</p>
                      <p className="text-slate-600">Academic & General Training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Scoring</p>
                      <p className="text-slate-600">Band scores 0-9</p>
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
                { name: "Listening", time: "30 min" },
                { name: "Reading", time: "60 min" },
                { name: "Writing", time: "60 min" },
                { name: "Speaking", time: "11-14 min" },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
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
              Our IELTS Preparation Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Full-length practice tests",
                "Task-specific training",
                "Native speaker training",
                "Real exam questions",
                "Score prediction",
                "Performance analytics",
                "Grammar & vocabulary lessons",
                "Speaking practice with AI",
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
              Ready to Ace the IELTS?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of successful candidates who improved their scores with TestLingua.
            </p>
            <button className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">
              Start Learning Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
