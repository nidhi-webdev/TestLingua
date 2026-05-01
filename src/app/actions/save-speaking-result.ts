"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveSpeakingResult(data: {
  partId: string;
  overallBand: number;
  transcript: string;
  modelAnswer: string;
  criteria: any;
  suggestions: string[];
}) {
  try {
    const result = await prisma.speakingResult.create({
      data: {
        partId: data.partId,
        overallBand: data.overallBand || 0,
        transcript: data.transcript || "No transcript available",
        modelAnswer: data.modelAnswer || "No model answer generated",
        criteria: data.criteria || {},
        suggestions: data.suggestions || [],
      }
    });

    revalidatePath("/exams/ielts/speaking");
    return { success: true, id: result.id };
  } catch (error) {
    console.error("Error saving speaking result:", error);
    return { success: false, error: "Failed to save results to database" };
  }
}
