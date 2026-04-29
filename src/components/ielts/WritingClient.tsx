"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Clock, AlertTriangle, CheckCircle, Send, FileText } from "lucide-react";
import { saveWritingSubmission } from "@/app/actions/save-writing-submission";

interface WritingTest {
  id: string;
  title: string;
  difficulty: string;
  task1Prompt: string;
  task1ImageUrl: string | null;
  task2Prompt: string;
}

interface WritingClientProps {
  test: WritingTest;
}

export default function WritingClient({ test }: WritingClientProps) {
  const [activeTab, setActiveTab] = useState<"task1" | "task2">("task1");
  const [task1Answer, setTask1Answer] = useState("");
  const [task2Answer, setTask2Answer] = useState("");
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Word Counters
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  };
  const task1WordCount = countWords(task1Answer);
  const task2WordCount = countWords(task2Answer);

  // Bullet point check
  const hasBulletPoints = (text: string) => {
    return /(^|\n)\s*([•\-\*]|\d+\.)/.test(text);
  };

  const handleAutoSubmit = useCallback(async () => {
    if (isSubmitted || isSubmitting) return;
    setIsSubmitting(true);
    
    await saveWritingSubmission({
      testId: test.id,
      task1Answer,
      task2Answer,
      task1WordCount,
      task2WordCount
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  }, [isSubmitted, isSubmitting, task1Answer, task2Answer, task1WordCount, task2WordCount, test.id]);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isSubmitted, handleAutoSubmit]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSubmitClick = () => {
    if (confirm("Are you sure you want to finish the test and submit your writing?")) {
      handleAutoSubmit();
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Writing Submitted Successfully!</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Your answers have been saved. In a real IELTS test, examiners would assess your writing based on Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Task 1 Summary</h3>
            <p className="text-slate-600 text-sm">Word Count: {task1WordCount} words</p>
            <p className={`text-sm mt-1 font-semibold ${task1WordCount >= 150 ? 'text-emerald-600' : 'text-red-500'}`}>
              {task1WordCount >= 150 ? "✅ Reached minimum limit" : "❌ Under 150 words penalty"}
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Task 2 Summary</h3>
            <p className="text-slate-600 text-sm">Word Count: {task2WordCount} words</p>
            <p className={`text-sm mt-1 font-semibold ${task2WordCount >= 250 ? 'text-emerald-600' : 'text-red-500'}`}>
              {task2WordCount >= 250 ? "✅ Reached minimum limit" : "❌ Under 250 words penalty"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">{test.title}</h1>
          <p className="text-sm text-slate-500">IELTS Academic Writing</p>
        </div>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-lg ${timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
            <Clock className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
          <button
            onClick={handleSubmitClick}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Test"}
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-slate-200">
        <button
          onClick={() => setActiveTab("task1")}
          className={`pb-3 px-2 text-sm font-bold border-b-2 transition ${
            activeTab === "task1" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Task 1 (150 words, 20 mins)
        </button>
        <button
          onClick={() => setActiveTab("task2")}
          className={`pb-3 px-2 text-sm font-bold border-b-2 transition ${
            activeTab === "task2" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Task 2 (250 words, 40 mins)
        </button>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Side: Prompt */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner h-[600px] overflow-y-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            {activeTab === "task1" ? "Academic Task 1" : "Academic Task 2"}
          </h2>
          
          <div className="prose prose-slate max-w-none whitespace-pre-wrap font-medium text-slate-800">
            {activeTab === "task1" ? test.task1Prompt : test.task2Prompt}
          </div>

          {activeTab === "task1" && test.task1ImageUrl && (
            <div className="mt-8 border-t border-slate-200 pt-8">
              <Image 
                src={test.task1ImageUrl} 
                alt="Task 1 Visual" 
                width={600} 
                height={400} 
                className="rounded-lg border border-slate-200 bg-white"
              />
            </div>
          )}
        </div>

        {/* Right Side: Text Editor */}
        <div className="flex flex-col h-[600px]">
          {hasBulletPoints(activeTab === "task1" ? task1Answer : task2Answer) && (
            <div className="mb-4 flex items-start gap-3 rounded-lg bg-orange-50 p-4 border border-orange-200 text-orange-800">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong>Warning:</strong> You must write your answers using full, connected sentences. You will be penalized for using notes or bullet points.
              </div>
            </div>
          )}
          
          <textarea
            className="flex-1 w-full rounded-2xl border border-slate-300 p-6 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-800 resize-none font-medium leading-relaxed"
            placeholder={activeTab === "task1" ? "Start writing your report here..." : "Start writing your essay here..."}
            value={activeTab === "task1" ? task1Answer : task2Answer}
            onChange={(e) => activeTab === "task1" ? setTask1Answer(e.target.value) : setTask2Answer(e.target.value)}
          />
          
          <div className="mt-4 flex items-center justify-between bg-slate-100 px-4 py-3 rounded-xl border border-slate-200">
            <span className="text-sm font-semibold text-slate-600">
              Word Count:
            </span>
            <span className={`text-sm font-bold ${
              activeTab === "task1" 
                ? (task1WordCount >= 150 ? "text-emerald-600" : "text-slate-600")
                : (task2WordCount >= 250 ? "text-emerald-600" : "text-slate-600")
            }`}>
              {activeTab === "task1" ? `${task1WordCount} / 150 min` : `${task2WordCount} / 250 min`}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
