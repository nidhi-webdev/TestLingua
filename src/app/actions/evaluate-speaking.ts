"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function evaluateSpeaking(formData: FormData, question: string) {
  try {
    const audioBase64 = formData.get("audio") as string;
    if (!audioBase64) throw new Error("No audio data provided");

    const model = genAI.getGenerativeModel({ model: "gemini-flash-lite-latest" });

    const prompt = `
      You are a strict, official IELTS Speaking Examiner. 
      Evaluate the candidate based on OFFICIAL IELTS SPEAKING DESCRIPTORS for the topic: "${question}".
      
      STRICTNESS RULE: Be very tough. Do NOT be polite or generous. 
      If the speaker has frequent pauses, limited vocabulary, or poor grammar, award a low Band (4.0 - 5.0). 
      Only award Band 7.0+ for high-level, fluent, and complex performances.

      Return ONLY a JSON object:
      {
        "overallBand": number,
        "criteria": {
          "fluency": { "score": number, "feedback": "Critical feedback on fluency and coherence" },
          "lexical": { "score": number, "feedback": "Critical feedback on vocabulary and range" },
          "grammar": { "score": number, "feedback": "Critical feedback on accuracy and complexity" },
          "pronunciation": { "score": number, "feedback": "Critical feedback on clarity and intonation" }
        },
        "transcript": "Exact transcription of the response",
        "suggestions": ["3 critical, specific improvement tips"]
      }
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "audio/webm",
          data: audioBase64
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    const jsonStr = text.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error: any) {
    console.error("❌ Speaking evaluation error:", error);
    return { 
      error: "AI Evaluation Error", 
      details: error.message || "Unknown error" 
    };
  }
}
