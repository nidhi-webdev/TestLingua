"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function resetTestResultAction(testId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return { success: false, error: "Not logged in" };
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return { success: false, error: "User not found" };
  }

  try {
    // Delete all test results for this user and this test
    await prisma.testResult.deleteMany({
      where: {
        userId: user.id,
        readingTestId: testId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to reset test result:", error);
    return { success: false, error: "Failed to reset result" };
  }
}
