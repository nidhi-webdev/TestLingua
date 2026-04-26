"use client";

import { useState, useEffect } from "react";
import { ReadingTest } from "@/data/mock-reading-test";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { saveTestResultAction } from "@/app/actions/save-test-result";
import { resetTestResultAction } from "@/app/actions/reset-test-result";

interface TestClientProps {
  test: ReadingTest;
  previousResult?: any;
}

export default function TestClient({ test, previousResult }: TestClientProps) {
  const [answers, setAnswers] = useState<Record<string, string>>(previousResult?.answers || {});
  const [submitted, setSubmitted] = useState(!!previousResult);
  const [score, setScore] = useState(previousResult?.score || 0);

  const handleAnswer = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = async () => {
    let currentScore = 0;
    test.questions.forEach((q) => {
      const isCorrect = answers[q.id] === q.answer;
      if (isCorrect) currentScore++;
    });
    setScore(currentScore);
    setSubmitted(true);

    try {
      await saveTestResultAction({
        testId: test.id,
        score: currentScore,
        totalScore: test.questions.length,
        answers: answers
      });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  const handleReset = async () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    try {
      await resetTestResultAction(test.id);
    } catch (error) {
      console.error("Failed to reset progress", error);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm z-10 relative">
        <div className="flex items-center gap-4">
          <Link href="/exams/ielts/reading/section-1" className="text-slate-500 hover:text-slate-900 font-medium transition">
            ← Exit
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-900">{test.title}</h1>
        </div>
        
        <div className="flex items-center gap-6">

          
          {!submitted ? (
            <button
              onClick={calculateScore}
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-95"
            >
              Submit Test
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="rounded-lg border-2 border-slate-300 bg-white px-5 py-2.5 font-bold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
              >
                ↺ Reset
              </button>
              <Link
                href="/exams/ielts/reading/section-1"
                className="rounded-lg bg-slate-800 px-6 py-2.5 font-bold text-white shadow-md transition hover:bg-slate-900 hover:shadow-lg active:scale-95"
              >
                Return to Topics
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Split Screen */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Pane - Passage */}
        <div className="w-1/2 overflow-y-auto border-r border-slate-200 bg-white p-8 lg:p-12 xl:p-16 relative">
          <div 
            className="max-w-3xl mx-auto text-slate-800 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-6 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-slate-800 [&_p]:mb-6 [&_strong]:inline-flex [&_strong]:h-8 [&_strong]:w-8 [&_strong]:items-center [&_strong]:justify-center [&_strong]:rounded-md [&_strong]:bg-blue-600 [&_strong]:text-white [&_strong]:text-sm [&_strong]:font-bold [&_strong]:mr-3 [&_strong]:shrink-0"
            dangerouslySetInnerHTML={{ __html: test.passage }}
          />
        </div>

        {/* Right Pane - Questions */}
        <div className="w-1/2 overflow-y-auto bg-slate-50 p-8 lg:p-12 xl:p-16 relative shadow-[inset_10px_0_15px_-10px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto">
            {/* Official IELTS instructions for matching information */}
            {test.questions[0]?.type === "matching_information" && (
              <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  The reading passage has seven paragraphs, <span className="font-bold">A–G</span>. Which paragraph contains the following information? Write the correct letter, <span className="font-bold">A–G</span>, in the boxes below.
                </p>
                <p className="text-sm font-semibold text-blue-800 mt-2">NB: You may use any letter more than once.</p>
              </div>
            )}
            {submitted && (
              <div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border border-blue-100 shadow-sm">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">Test Complete</h2>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                    <span className="text-2xl font-bold text-blue-600">{score}/{test.questions.length}</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-blue-800">
                      You scored {(score / test.questions.length * 100).toFixed(0)}%
                    </p>
                    <p className="text-sm text-blue-600 mt-1">
                      Review your answers below.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-10">
              {test.questions.map((q, index) => {
                const isAnswered = !!answers[q.id];
                const isCorrect = submitted ? answers[q.id] === q.answer : null;
                
                return (
                  <div 
                    key={q.id} 
                    className={`rounded-2xl border p-8 shadow-sm transition-colors ${
                      submitted 
                        ? isCorrect 
                          ? 'border-emerald-200 bg-white' 
                          : 'border-red-200 bg-white'
                        : isAnswered 
                          ? 'border-blue-300 bg-white' 
                          : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-medium text-slate-900 leading-snug">
                        <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 shrink-0">
                          {index + 1}
                        </span>
                        {q.text}
                      </h3>
                      {submitted && (
                        isCorrect ? (
                          <CheckCircle2 className="h-8 w-8 text-emerald-500 shrink-0" />
                        ) : (
                          <AlertCircle className="h-8 w-8 text-red-500 shrink-0" />
                        )
                      )}
                    </div>

                    {q.type === "true_false_not_given" ? (
                      <div className="flex flex-col sm:flex-row gap-4 ml-11">
                        {(["Yes", "No"].includes(q.answer) ? ["Yes", "No", "Not Given"] : ["True", "False", "Not Given"]).map((opt) => {
                          const isOptSelected = answers[q.id] === opt;
                          const isOptActuallyCorrect = submitted && q.answer === opt;
                          
                          return (
                            <label 
                              key={opt}
                              className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border-2 p-4 font-bold transition-all ${
                                isOptSelected
                                  ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm' 
                                  : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:border-slate-300'
                              } ${isOptActuallyCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : ''} ${submitted && isOptSelected && !isCorrect ? 'border-red-400 bg-red-50' : ''}`}
                            >
                              <input
                                type="radio"
                                name={q.id}
                                value={opt}
                                disabled={submitted}
                                checked={isOptSelected}
                                onChange={(e) => handleAnswer(q.id, e.target.value)}
                                className="hidden"
                              />
                              {opt}
                            </label>
                          );
                        })}
                      </div>
                    ) : q.type === "matching_information" ? (
                      <div className="ml-11">
                        <div className="flex flex-wrap gap-3">
                          {q.options.map((opt) => {
                            const isSelected = answers[q.id] === opt;
                            const isActuallyCorrect = submitted && q.answer === opt;

                            let btnClass = "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50";
                            if (submitted && isActuallyCorrect) {
                              btnClass = "border-emerald-500 bg-emerald-500 text-white shadow-md";
                            } else if (submitted && isSelected && !isCorrect) {
                              btnClass = "border-red-400 bg-red-100 text-red-700";
                            } else if (isSelected) {
                              btnClass = "border-blue-600 bg-blue-600 text-white shadow-md";
                            }

                            return (
                              <label
                                key={opt}
                                className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border-2 text-lg font-bold transition-all ${btnClass}`}
                              >
                                <input
                                  type="radio"
                                  name={q.id}
                                  value={opt}
                                  disabled={submitted}
                                  checked={isSelected}
                                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                                  className="hidden"
                                />
                                {opt}
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 ml-11">
                        {q.options?.map((opt) => {
                          const optionLetter = opt.charAt(0);
                          const isSelected = answers[q.id] === optionLetter;
                          const isActuallyCorrect = submitted && q.answer === optionLetter;
                          
                          return (
                            <label 
                              key={opt}
                              className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-5 transition-all ${
                                isSelected
                                  ? 'border-blue-600 bg-blue-50 shadow-sm' 
                                  : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                              } ${isActuallyCorrect ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500' : ''} ${submitted && isSelected && !isCorrect ? 'border-red-400 bg-red-50' : ''}`}
                            >
                              <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? 'border-blue-600' : 'border-slate-300'}`}>
                                {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                              </div>
                              <input
                                type="radio"
                                name={q.id}
                                value={optionLetter}
                                disabled={submitted}
                                checked={isSelected}
                                onChange={(e) => handleAnswer(q.id, e.target.value)}
                                className="hidden"
                              />
                              <span className={`text-lg leading-relaxed ${isSelected ? 'text-blue-900 font-medium' : 'text-slate-700'}`}>{opt}</span>
                            </label>
                          )
                        })}
                      </div>
                    )}

                    {submitted && !isCorrect && (
                      <div className="mt-6 ml-11 rounded-xl bg-emerald-50 p-4 border border-emerald-200 flex gap-3">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Correct Answer</p>
                          <p className="text-lg font-medium text-emerald-900 mt-1">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
