"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function saveTestResultAction(data: {
  testId: string;
  score: number;
  totalScore: number;
  answers: Record<string, string>;
}) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return { success: false, error: "Not logged in" };
  }

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return { success: false, error: "User not found" };
  }

  try {
    const result = await prisma.testResult.create({
      data: {
        userId: user.id,
        readingTestId: data.testId,
        score: data.score,
        totalScore: data.totalScore,
        answers: data.answers,
      },
    });

    return { success: true, resultId: result.id };
  } catch (error) {
    console.error("Failed to save test result:", error);
    return { success: false, error: "Failed to save result" };
  }
}
