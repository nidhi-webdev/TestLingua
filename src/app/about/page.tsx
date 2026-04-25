"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-blue-50 to-indigo-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                About TestLingua
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Your dedicated partner in mastering English exams. We believe everyone
                deserves access to world-class exam preparation resources.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  At TestLingua, we&apos;re committed to making English exam preparation
                  accessible, affordable, and effective for learners worldwide. We
                  combine cutting-edge technology with expert teaching methods to help
                  students achieve their target scores.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  Whether you&apos;re preparing for IELTS, TOEFL, or Cambridge English, our
                  platform provides personalized learning paths, interactive practice
                  tests, and expert feedback to accelerate your progress.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
                  <p className="text-slate-600">Active Learners</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-indigo-900 mb-2">95%</div>
                  <p className="text-slate-600">Success Rate</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-900 mb-2">100+</div>
                  <p className="text-slate-600">Expert Instructors</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-pink-900 mb-2">24/7</div>
                  <p className="text-slate-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose TestLingua?
              </h2>
              <p className="text-lg text-slate-600">
                We&apos;re more than just a test prep platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Personalized Learning
                </h3>
                <p className="text-slate-600">
                  AI-powered recommendations tailored to your learning style and pace.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Expert Instructors
                </h3>
                <p className="text-slate-600">
                  Learn from certified educators with years of exam coaching experience.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Real Practice Tests
                </h3>
                <p className="text-slate-600">
                  Authentic exam questions with detailed explanations and scoring.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Global Community
                </h3>
                <p className="text-slate-600">
                  Connect with learners worldwide, share experiences, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                TestLingua was founded in 2023 by a group of education enthusiasts who
                experienced firsthand the challenges of English exam preparation. We
                realized that most platforms were outdated, expensive, or difficult to use.
              </p>
              <p>
                We set out to create something different&mdash;a modern, user-friendly platform
                that combines the best of technology and teaching. Today, TestLingua has
                helped tens of thousands of students achieve their English exam goals.
              </p>
              <p>
                Our team continues to innovate and improve, always listening to our users&apos;
                feedback. We&apos;re proud of what we&apos;ve built, but we&apos;re just getting started.
                Join us on this journey to make English exam preparation better for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-slate-600">
                Driven by passion for education and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "Former IELTS instructor with 10+ years of experience",
                },
                {
                  name: "Mike Chen",
                  role: "CTO & Co-founder",
                  bio: "Ed-tech expert passionate about AI-driven learning",
                },
                {
                  name: "Emma Williams",
                  role: "Head of Content",
                  bio: "Cambridge English certified expert and curriculum designer",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team is here to help. Get in touch with us anytime.
            </p>
            <a
              href="mailto:support@testlingua.com"
              className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
