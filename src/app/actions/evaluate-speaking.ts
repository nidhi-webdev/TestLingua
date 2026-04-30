"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function evaluateSpeaking(audioBase64: string, question: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      You are an expert IELTS Speaking Examiner. 
      Analyze the provided audio recording of a student answering the following question: "${question}"
      
      Evaluate the response based on official IELTS criteria:
      1. Fluency and Coherence (0-9)
      2. Lexical Resource (0-9)
      3. Grammatical Range and Accuracy (0-9)
      4. Pronunciation (0-9)
      
      Provide a concise feedback report in JSON format:
      {
        "overallBand": number,
        "criteria": {
          "fluency": { "score": number, "feedback": "string" },
          "lexical": { "score": number, "feedback": "string" },
          "grammar": { "score": number, "feedback": "string" },
          "pronunciation": { "score": number, "feedback": "string" }
        },
        "transcript": "string",
        "suggestions": ["string", "string"]
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
