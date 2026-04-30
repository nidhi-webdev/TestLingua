import SpeakingClient from "@/components/ielts/SpeakingClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SpeakingTestPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <SpeakingClient partId={id} />
      </main>
      <Footer />
    </>
  );
}
