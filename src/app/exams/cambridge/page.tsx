"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function CambridgePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Master Cambridge English
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Comprehensive preparation for Cambridge English Qualifications (KET, PET, FCE, CAE, CPE).
                </p>
                <button className="px-8 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition-colors font-semibold inline-flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Exam Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Duration</p>
                      <p className="text-slate-600">Varies by level (1-3 hours)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Levels</p>
                      <p className="text-slate-600">A1 to C2 (6 levels)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Recognition</p>
                      <p className="text-slate-600">Globally recognized qualification</p>
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
                { name: "Reading", time: "Variable" },
                { name: "Writing", time: "Variable" },
                { name: "Listening", time: "Variable" },
                { name: "Speaking", time: "Variable" },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <BookOpen className="w-8 h-8 text-indigo-600 mb-4" />
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
              Our Cambridge Preparation Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Level-specific practice tests",
                "All six Cambridge levels (A1-C2)",
                "Authentic exam materials",
                "Expert tutoring support",
                "Speaking test preparation",
                "Writing assessment feedback",
                "Vocabulary builder by level",
                "Progress tracking dashboard",
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
              Achieve Your Cambridge English Goal
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get certified with the world&apos;s most respected English qualification provider.
            </p>
            <button className="px-8 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition-colors font-semibold">
              Start Learning Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
