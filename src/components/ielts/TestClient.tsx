"use client";

import { useState, useEffect } from "react";
import { ReadingTest } from "@/data/mock-reading-test";
import { CheckCircle2, AlertCircle, ChevronDown, AlignLeft } from "lucide-react";
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
  
  // Determine if this is a Section 2 test (ID ends with -2)
  const isSection2 = test.id.endsWith('-2');
  const sectionLink = isSection2 ? '/exams/ielts/reading/section-2' : '/exams/ielts/reading/section-1';

  const handleAnswer = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = async () => {
    let currentScore = 0;
    test.questions.forEach((q) => {
      const userAnswer = answers[q.id];
      const isCorrect = Array.isArray(q.answer) 
        ? q.answer.includes(userAnswer) // For single choice against array
        : userAnswer === q.answer;
      
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
          <Link href={sectionLink} className="text-slate-500 hover:text-slate-900 font-medium transition">
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
                href={sectionLink}
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
            className="max-w-3xl mx-auto text-slate-800 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-8 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-slate-800 [&_p]:mb-6"
            dangerouslySetInnerHTML={{ __html: test.passage }}
          />
        </div>

        {/* Right Pane - Questions */}
        <div className="w-1/2 overflow-y-auto bg-slate-50 p-8 lg:p-12 xl:p-16 relative shadow-[inset_10px_0_15px_-10px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto">
            {/* Official IELTS instructions for short answer questions */}
            {test.questions[0]?.type === "short_answer" && (
              <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Answer the questions below. Write your answers using <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span> from the text for each answer. Numbers can be written using figures (1, 2, etc.) or words (one, two, etc.). Hyphenated words such as 'check-in' count as single words. Write your answers in the boxes below.
                </p>
              </div>
            )}

            {/* Official IELTS instructions for flow-chart completion */}
            {test.questions[0]?.type === "flow_chart" && (
              <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Complete the flow-chart below. Choose <span className="font-bold">NO MORE THAN TWO WORDS</span> from the text for each answer. Write your answers in the boxes below.
                </p>
              </div>
            )}

            {/* Diagram Image Display */}
            {test.imageUrl && (
              <div className="mb-10 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-4 shadow-sm">
                <img 
                  src={test.imageUrl} 
                  alt="Test Diagram" 
                  className="h-auto w-full rounded-xl object-contain"
                />
                <p className="mt-3 text-center text-sm font-medium text-slate-500 italic">
                  Diagram: {test.title.split(':').pop()?.trim()}
                </p>
              </div>
            )}

            {/* Official IELTS instructions for diagram completion */}
            {test.questions[0]?.type === "diagram_completion" && (
              <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Label the diagram below. Choose <span className="font-bold">NO MORE THAN TWO WORDS</span> from the text for each answer. Write your answers in the boxes below.
                </p>
              </div>
            )}

            {/* Official IELTS instructions for summary completion */}
            {test.questions[0]?.type === "summary_completion" && (
              <div className="mb-8 space-y-6">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Complete the summary using the list of words, <span className="font-bold">A–G</span>, below. Write the correct letter, <span className="font-bold">A–G</span>, in the boxes below.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-blue-50/50 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">List of Words</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {test.questions[0].options.map((word) => (
                      <div key={word} className="text-slate-700 font-medium flex gap-3">
                        <span className="font-bold text-blue-600">{word.split('.')[0]}.</span>
                        <span>{word.split('.').slice(1).join('.').trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Official IELTS instructions for sentence completion */}
            {test.questions[0]?.type === "sentence_completion" && (
              <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Complete the sentences below. Choose <span className="font-bold">NO MORE THAN TWO WORDS</span> from the text for each answer. Write your answers in the boxes below.
                </p>
              </div>
            )}

            {/* Official IELTS instructions for matching sentence endings */}
            {test.questions[0]?.type === "matching_sentence_endings" && (
              <div className="mb-8 space-y-6">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Complete each sentence with the correct ending, <span className="font-bold">A–I</span>, below. Write the correct letter, <span className="font-bold">A–I</span>, in the boxes below.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-blue-50/50 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">List of Endings</h3>
                  <div className="space-y-3">
                    {test.questions[0].options.map((ending) => (
                      <div key={ending} className="text-slate-700 font-medium flex gap-3">
                        <span className="font-bold text-blue-600 shrink-0">{ending.split('.')[0]}.</span>
                        <span>{ending.split('.').slice(1).join('.').trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Official IELTS instructions for matching features */}
            {test.questions[0]?.type === "matching_features" && (
              <div className="mb-8 space-y-6">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Look at the following statements and the list of people below. Match each statement with the correct person, <span className="font-bold">A–D</span>. Write the correct letter, <span className="font-bold">A–D</span>, in the boxes below.
                  </p>
                  <p className="text-sm font-semibold text-blue-800 mt-2">NB: You may use any letter more than once.</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-blue-50/50 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">List of People</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {test.questions[0].options.map((feature) => (
                      <div key={feature} className="text-slate-700 font-medium flex gap-3">
                        <span className="font-bold text-blue-600">{feature.split('.')[0]}.</span>
                        <span>{feature.split('.').slice(1).join('.').trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Official IELTS instructions for matching headings */}
            {test.questions[0]?.type === "matching_headings" && (
              <div className="mb-8 space-y-6">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Instructions</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    The reading passage has eight paragraphs, <span className="font-bold">A–H</span>. Choose the correct heading for each paragraph from the list of headings below. Write the correct number, <span className="font-bold">i–xi</span>, in the boxes below.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">List of Headings</h3>
                  <ul className="space-y-2">
                    {test.questions[0].options.map((heading) => (
                      <li key={heading} className="text-slate-700 font-medium">
                        {heading}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

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
            <div className="space-y-4">
              {test.questions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isCorrect = submitted 
                  ? Array.isArray(q.answer)
                    ? q.answer.some(a => a.toLowerCase() === answers[q.id]?.trim().toLowerCase())
                    : answers[q.id]?.trim().toLowerCase() === q.answer.toLowerCase()
                  : null;
                
                return (
                  <div key={q.id} className="flex items-start gap-4 py-4 border-b border-slate-200 last:border-0 group">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-800 text-sm font-bold text-white group-hover:bg-blue-600 transition-colors mt-1">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      {q.type === "true_false_not_given" ? (
                        <div className="flex flex-col gap-3">
                          <p className="text-slate-800 font-medium leading-relaxed">{q.text}</p>
                          <div className="flex flex-wrap gap-2">
                            {(["Yes", "No"].includes(Array.isArray(q.answer) ? q.answer[0] : q.answer) ? ["Yes", "No", "Not Given"] : ["True", "False", "Not Given"]).map((opt) => {
                              const isSelected = answers[q.id] === opt;
                              const isActuallyCorrect = submitted && (Array.isArray(q.answer) ? q.answer.includes(opt) : q.answer === opt);
                              
                              return (
                                <button 
                                  key={opt}
                                  disabled={submitted}
                                  onClick={() => handleAnswer(q.id, opt)}
                                  className={`px-4 py-1.5 text-sm font-bold border transition-all ${
                                    isSelected
                                      ? 'bg-slate-800 border-slate-800 text-white' 
                                      : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                                  } ${isActuallyCorrect ? 'bg-emerald-600 border-emerald-600 text-white' : ''}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : q.type === "matching_headings" || q.type === "matching_sentence_endings" ? (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <p className="text-slate-800 font-medium flex-1">{q.text}</p>
                          <div className="relative w-full sm:w-64">
                            <select
                              disabled={submitted}
                              value={answers[q.id] || ""}
                              onChange={(e) => handleAnswer(q.id, e.target.value)}
                              className={`w-full border p-2 text-sm font-bold transition-all outline-none appearance-none ${
                                submitted
                                  ? isCorrect
                                    ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                                    : "border-red-400 bg-red-50 text-red-800"
                                  : answers[q.id]
                                  ? "border-slate-800 ring-1 ring-slate-800"
                                  : "border-slate-300 bg-white text-slate-600"
                              }`}
                            >
                              <option value="">Select...</option>
                              {q.options.map((opt) => (
                                <option key={opt} value={opt.split('.')[0].trim()}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ) : q.type === "matching_features" || q.type === "matching_information" ? (
                        <div className="flex flex-col gap-3">
                          <p className="text-slate-800 font-medium">{q.text}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {q.options.map((opt) => {
                              const letter = opt.split('.')[0].trim();
                              const isSelected = answers[q.id] === letter;
                              const isActuallyCorrect = submitted && (Array.isArray(q.answer) ? q.answer.includes(letter) : q.answer === letter);

                              return (
                                <button
                                  key={opt}
                                  disabled={submitted}
                                  onClick={() => handleAnswer(q.id, letter)}
                                  className={`flex h-8 w-8 items-center justify-center border text-xs font-bold transition-all ${
                                    isSelected
                                      ? 'bg-slate-800 border-slate-800 text-white'
                                      : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                                  } ${isActuallyCorrect ? 'bg-emerald-600 border-emerald-600 text-white' : ''}`}
                                >
                                  {letter}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : q.type === "sentence_completion" || q.type === "short_answer" || q.type === "diagram_completion" ? (
                        <div className="flex flex-col gap-3">
                          <div className="text-slate-800 font-medium leading-relaxed">
                            {q.type === "sentence_completion" ? (
                               q.text.split('[GAP]').map((part, index, array) => (
                                <span key={index}>
                                  {part}
                                  {index < array.length - 1 && (
                                    <input
                                      type="text"
                                      disabled={submitted}
                                      value={answers[q.id] || ""}
                                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                                      className={`mx-1 w-32 border-b-2 border-slate-400 bg-transparent px-1 text-sm font-bold outline-none focus:border-slate-900 ${
                                        submitted 
                                          ? isCorrect ? "text-emerald-700 border-emerald-500" : "text-red-700 border-red-400"
                                          : ""
                                      }`}
                                    />
                                  )}
                                </span>
                              ))
                            ) : (
                              <p>{q.text}</p>
                            )}
                          </div>
                          {q.type !== "sentence_completion" && (
                            <input
                              type="text"
                              disabled={submitted}
                              value={answers[q.id] || ""}
                              onChange={(e) => handleAnswer(q.id, e.target.value)}
                              className={`w-full sm:w-64 border p-2 text-sm font-bold transition-all outline-none ${
                                submitted
                                  ? isCorrect
                                    ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                                    : "border-red-400 bg-red-50 text-red-800"
                                  : answers[q.id]
                                  ? "border-slate-800 ring-1 ring-slate-800 text-slate-900"
                                  : "border-slate-300 bg-white text-slate-900"
                              }`}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          <p className="text-slate-800 font-medium leading-relaxed">{q.text}</p>
                          <div className="grid grid-cols-1 gap-1">
                            {q.options?.map((opt) => {
                              const optionLetter = opt.charAt(0);
                              const isSelected = answers[q.id] === optionLetter;
                              const isActuallyCorrect = submitted && (Array.isArray(q.answer) ? q.answer.includes(optionLetter) : q.answer === optionLetter);
                              
                              return (
                                <button 
                                  key={opt}
                                  disabled={submitted}
                                  onClick={() => handleAnswer(q.id, optionLetter)}
                                  className={`flex items-center gap-3 border p-2 text-left text-sm font-medium transition-all ${
                                    isSelected
                                      ? 'bg-slate-800 border-slate-800 text-white' 
                                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                                  } ${isActuallyCorrect ? 'bg-emerald-600 border-emerald-600 text-white' : ''}`}
                                >
                                  <span className="shrink-0 font-bold w-6 text-center">{optionLetter}</span>
                                  <span>{opt.substring(2)}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {submitted && !isCorrect && (
                        <div className="mt-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 inline-block">
                          Correct Answer: {Array.isArray(q.answer) ? q.answer.join(', ') : q.answer}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
