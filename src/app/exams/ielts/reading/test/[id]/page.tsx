import TestClient from "@/components/ielts/TestClient";
import { mockReadingTest } from "@/data/mock-reading-test";
import { notFound } from "next/navigation";

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Currently we only have mock test data for ID "1"
  if (resolvedParams.id !== "1") {
    notFound();
  }

  return <TestClient test={mockReadingTest} />;
}
