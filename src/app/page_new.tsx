import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExamsSection from "@/components/ExamsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TestLingua - English Exam Preparation | IELTS, TOEFL, Cambridge",
  description:
    "Master IELTS, TOEFL, and Cambridge English exams with TestLingua. Expert-led courses, practice tests, and personalized feedback to help you achieve your target score.",
  keywords:
    "IELTS, TOEFL, Cambridge English, exam preparation, English learning",
  authors: [{ name: "TestLingua" }],
  openGraph: {
    title: "TestLingua - English Exam Preparation",
    description:
      "Prepare for IELTS, TOEFL, and Cambridge exams with expert guidance.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ExamsSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
