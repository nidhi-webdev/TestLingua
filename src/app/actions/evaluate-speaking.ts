"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function evaluateSpeaking(formData: FormData, question: string) {
  try {
    const audioBase64 = formData.get("audio") as string;
    if (!audioBase64) throw new Error("No audio data provided");

    const model = genAI.getGenerativeModel({ model: "gemini-flash-lite-latest" });

    const prompt = `
      As an IELTS Examiner, evaluate this audio for: "${question}"
      Return ONLY a JSON object:
      {
        "overallBand": number,
        "criteria": {
          "fluency": { "score": number, "feedback": "1 sentence" },
          "lexical": { "score": number, "feedback": "1 sentence" },
          "grammar": { "score": number, "feedback": "1 sentence" },
          "pronunciation": { "score": number, "feedback": "1 sentence" }
        },
        "transcript": "string",
        "suggestions": ["3 short tips"]
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
