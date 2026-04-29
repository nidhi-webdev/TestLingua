import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import WritingClient from "@/components/ielts/WritingClient";
import Navbar from "@/components/Navbar";

export default async function WritingTestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const test = await prisma.writingTest.findUnique({
    where: { id },
  });

  if (!test) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <Navbar />
      <WritingClient test={test} />
    </main>
  );
}
