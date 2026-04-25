"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, LockKeyhole } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Signup failed");
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <section className="hidden rounded-3xl border border-blue-800 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 p-10 text-blue-100 shadow-2xl lg:block">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
            Join Now
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white">
            Start Your Exam Journey
          </h1>
          <p className="mt-4 max-w-md text-blue-200">
            Create your TestLingua account to unlock personalized study plans, practice tests, and expert guidance for IELTS, TOEFL, and Cambridge exams.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl border border-blue-800 bg-blue-900/70 p-4">
              <p className="text-sm font-semibold text-white">Personalized Learning Path</p>
              <p className="mt-1 text-sm text-blue-200">
                Get recommendations tailored to your exam target and skill level.
              </p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-blue-900/70 p-4">
              <p className="text-sm font-semibold text-white">Track Progress in Real-Time</p>
              <p className="mt-1 text-sm text-blue-200">
                Monitor your improvements across all four skills with detailed analytics.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
            <p className="mt-2 text-sm text-slate-600">
              Sign up to begin your exam preparation.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue-800 hover:text-blue-900">
              Sign in
            </Link>
          </p>

          <div className="mt-6 text-center text-sm text-slate-600">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">
              ← Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
