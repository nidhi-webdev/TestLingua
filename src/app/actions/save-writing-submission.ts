"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function saveWritingSubmission(data: {
  testId: string;
  task1Answer: string;
  task2Answer: string;
  task1WordCount: number;
  task2WordCount: number;
}) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // We can save even if there's no user, but we link it if there is
    const submission = await prisma.writingSubmission.create({
      data: {
        userId: userId || null,
        writingTestId: data.testId,
        task1Answer: data.task1Answer,
        task2Answer: data.task2Answer,
        task1WordCount: data.task1WordCount,
        task2WordCount: data.task2WordCount,
      },
    });

    return { success: true, submissionId: submission.id };
  } catch (error) {
    console.error("Failed to save writing submission:", error);
    return { success: false, error: "Failed to save submission" };
  }
}
