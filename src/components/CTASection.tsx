import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Ace Your English Exam?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful students who have achieved their target scores with TestLingua.
          Start your free trial today and unlock full access to all our resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Start Your Free Trial
          </Link>
          <Link
            href="/demo"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
