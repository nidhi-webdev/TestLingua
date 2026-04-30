"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Mic, 
  Square, 
  Play, 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Volume2,
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react";

import { evaluateSpeaking } from "@/app/actions/evaluate-speaking";

interface SpeakingClientProps {
  partId: string;
}

export default function SpeakingClient({ partId }: SpeakingClientProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPrepPhase, setIsPrepPhase] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [results, setResults] = useState<any>(null);
  
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // Simulation data
  const partData = {
    "part-1": {
      title: "Part 1: Introduction & Interview",
      subtitle: "Personal Topics & General Questions",
      questions: [
        "Good morning. My name is Michael. To begin the test, could you tell me your full name, and whether you work or are a student?",
        "Thank you. Now, let's talk about where you live. Do you live in a house or an apartment?",
        "What do you like about the area where you live?",
        "Let's talk about your family. Do you spend much time with your family?",
        "Who are you closest to in your family?",
        "Now let's talk about hobbies. Do you think it is important to have a hobby? Why?",
        "What kind of hobbies are popular in your country?"
      ],
      duration: "4-5 mins"
    },
    "part-2": {
      title: "Part 2: Long Turn (Cue Card)",
      subtitle: "Individual Presentation",
      questions: [
        "Describe a beautiful place you have visited in your country. You should say:\n- Where it is\n- When you went there\n- What you did there\n- And explain why you think it is beautiful."
      ],
      prepTime: 60,
      speakingTime: 120
    },
    "part-3": {
      title: "Part 3: Two-Way Discussion",
      subtitle: "Abstract & In-depth Topics",
      questions: [
        "Why do you think some places become popular tourist destinations?",
        "Do you think tourism always has a positive impact on a local community?",
        "How has the way people travel changed compared to the past?",
        "Is it better to travel alone or with a group of people? Why?"
      ]
    }
  }[partId as keyof typeof partData] || partData["part-1"];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = (reader.result as string).split(',')[1];
          setIsEvaluating(true);
          const evaluation = await evaluateSpeaking(base64Audio, partData.questions[currentQuestionIndex]);
          setResults(evaluation);
          setIsEvaluating(false);
        };
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Please allow microphone access to practice speaking.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleStartPractice = () => {
    if (partId === "part-2") {
      setIsPrepPhase(true);
      setTimeLeft((partData as any).prepTime || 60);
    } else {
      startRecording();
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && isPrepPhase) {
      setIsPrepPhase(false);
      startRecording();
      setTimeLeft((partData as any).speakingTime || 120);
    } else if (timeLeft === 0 && isRecording && partId === "part-2") {
      stopRecording();
    }
    return () => clearInterval(timer);
  }, [timeLeft, isPrepPhase, isRecording]);

  const speak = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.includes("en-GB") || v.lang.includes("en-US"));
      if (englishVoice) utterance.voice = englishVoice;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (!isEvaluating && !results) {
      const currentQuestion = isPrepPhase || isRecording 
        ? partData.questions[currentQuestionIndex]
        : "";
      if (currentQuestion) speak(currentQuestion);
    }
  }, [currentQuestionIndex, isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (results) {
    if (results.error) {
      return (
        <div className="max-w-md mx-auto px-4 py-12 text-center">
          <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Evaluation Failed</h2>
          <p className="mt-2 text-slate-500 mb-1">{results.error}</p>
          <p className="text-xs text-rose-400 font-mono mb-6">{results.details}</p>
          <button 
            onClick={() => setResults(null)}
            className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Try Again
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
          <div className="bg-emerald-600 px-8 py-10 text-white text-center relative overflow-hidden">
             <Sparkles className="absolute -right-8 -top-8 w-40 h-40 opacity-10" />
             <div className="relative z-10">
               <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs mb-2">IELTS Speaking Performance</p>
               <h2 className="text-4xl font-black mb-6">Evaluation Summary</h2>
               <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
                 <div className="text-left">
                   <p className="text-[10px] font-bold text-emerald-200 uppercase">Predicted Band</p>
                   <p className="text-3xl font-black">{results.overallBand || "N/A"}</p>
                 </div>
                 <div className="w-px h-10 bg-white/20" />
                 <CheckCircle className="w-8 h-8 text-emerald-300" />
               </div>
             </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Criteria Breakdown</h3>
              {results.criteria ? Object.entries(results.criteria).map(([key, value]: any) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700 capitalize">{key}</span>
                    <span className="text-sm font-black text-emerald-600">Band {value.score || 0}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${((value.score || 0) / 9) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed italic">{value.feedback}</p>
                </div>
              )) : (
                <p className="text-sm text-slate-500 italic">No breakdown available.</p>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-600" />
                  Your Transcript
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{results.transcript}"
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Key Suggestions
                </h3>
                <ul className="space-y-3">
                  {results.suggestions.map((s: string, i: number) => (
                    <li key={i} className="text-xs text-amber-800 flex gap-2">
                      <span className="shrink-0 text-amber-400 font-bold">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-50 border-t flex justify-center gap-4">
            <button 
              onClick={() => setResults(null)}
              className="px-8 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              Try Again
            </button>
            <Link 
              href="/exams/ielts/speaking"
              className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 cursor-pointer"
            >
              Finish Session
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Loading Overlay */}
      {isEvaluating && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-emerald-100 rounded-full animate-ping absolute" />
            <div className="w-20 h-20 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin relative" />
            <Mic className="w-8 h-8 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Gemini AI is Evaluating...</h2>
          <p className="mt-2 text-slate-500 animate-pulse">Analyzing your pronunciation and lexical resource...</p>
        </div>
      )}

      {/* Back link */}
      <Link
        href="/exams/ielts/speaking"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-emerald-600 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
        Back to Speaking Modules
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{partData.title}</h1>
            <p className="text-slate-500 font-medium text-sm">{partData.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-4">
            {timeLeft > 0 && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${
                isPrepPhase ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}>
                <Clock className="w-4 h-4" />
                {isPrepPhase ? `Preparation: ${formatTime(timeLeft)}` : `Speaking: ${formatTime(timeLeft)}`}
              </div>
            )}
            
            <button
              onClick={stopRecording}
              disabled={!isRecording}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition shadow-lg ${
                isRecording ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20 cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              Finish Recording
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 min-h-[500px]">
          {/* Examiner Side */}
          <div className="lg:col-span-7 p-8 border-r border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Examiner Prompt</p>
                <p className="text-sm font-bold text-slate-700">Listen and Answer</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
              {isPrepPhase || isRecording ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border-2 border-emerald-100 p-8 shadow-sm relative">
                    <div className="absolute -top-3 -left-3 bg-emerald-600 text-white p-2 rounded-lg">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-xl font-medium text-slate-800 leading-relaxed italic whitespace-pre-wrap">
                      "{partData.questions[currentQuestionIndex]}"
                    </p>
                  </div>
                  
                  {isRecording && partId !== "part-2" && (
                    <div className="flex justify-center">
                      <button 
                        onClick={() => {
                          if (currentQuestionIndex < partData.questions.length - 1) {
                            setCurrentQuestionIndex(prev => prev + 1);
                          } else {
                            // If at last question, maybe show a hint or just let them finish
                            alert("You have reached the end of the questions. Click 'Finish Recording' to see your results!");
                          }
                        }}
                        className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition cursor-pointer"
                      >
                        Next Question <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Ready to start?</h2>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Ensure your microphone is connected. Gemini AI will listen and provide your band score instantly.
                  </p>
                  <button
                    onClick={handleStartPractice}
                    className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl shadow-slate-900/20 mx-auto cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Start AI Assessment
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed font-medium">
                <strong>IELTS Rule:</strong> Speak clearly and try to expand on your answers. Gemini AI will evaluate your fluency, vocabulary, and pronunciation.
              </p>
            </div>
          </div>

          {/* Recorder Side */}
          <div className="lg:col-span-5 bg-slate-50/50 p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isRecording ? "bg-rose-500 animate-pulse" : "bg-slate-300"}`} />
                <span className="text-sm font-bold text-slate-700">
                  {isRecording ? "Capturing Audio..." : "Mic Standby"}
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              {isRecording ? (
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-500">
                      <Mic className="w-12 h-12 text-emerald-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-slate-900">Recording Session</p>
                    <p className="text-sm text-slate-500 font-medium italic">"Keep speaking naturally..."</p>
                  </div>
                </div>
              ) : isPrepPhase ? (
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-amber-50 rounded-3xl flex flex-col items-center justify-center mx-auto border-2 border-amber-200">
                    <span className="text-3xl font-black text-amber-700">{timeLeft}</span>
                    <span className="text-[10px] font-bold text-amber-600 uppercase">Seconds</span>
                  </div>
                  <h3 className="font-bold text-slate-900">Preparation Time</h3>
                  <p className="text-xs text-slate-500 max-w-[200px] mx-auto">Use this time to plan your response. The recorder starts automatically.</p>
                </div>
              ) : (
                <div className="text-center opacity-40 grayscale">
                   <Mic className="w-20 h-20 text-slate-300 mx-auto mb-4" />
                   <p className="text-sm font-bold text-slate-500">Recorder inactive</p>
                </div>
              )}
            </div>

            {/* Note Taking Area (Scratchpad) */}
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Scratchpad / Notes</p>
              <textarea
                placeholder="Type your brainstorm notes here..."
                className="w-full h-40 bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition shadow-inner resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

