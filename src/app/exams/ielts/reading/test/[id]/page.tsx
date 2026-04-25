import TestClient from "@/components/ielts/TestClient";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const test = await prisma.readingTest.findUnique({
    where: { id: resolvedParams.id },
    include: {
      questions: true
    }
  });

  if (!test) {
    notFound();
  }

  const formattedTest = {
    ...test,
    questions: test.questions.map(q => ({
      ...q,
      type: q.type as "multiple_choice" | "true_false_not_given"
    }))
  };

  const session = await getServerSession(authOptions);
  let previousResult = null;

  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (user) {
      previousResult = await prisma.testResult.findFirst({
        where: {
          userId: user.id,
          readingTestId: resolvedParams.id,
        },
        orderBy: {
          completedAt: 'desc',
        },
      });
    }
  }

  return <TestClient test={formattedTest} previousResult={previousResult ? JSON.parse(JSON.stringify(previousResult)) : undefined} />;
}
