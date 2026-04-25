"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        setError(result?.error || "Invalid email or password");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { redirect: true, callbackUrl: "/dashboard" });
    } catch {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <section className="hidden rounded-3xl border border-blue-800 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 p-10 text-blue-100 shadow-2xl lg:block">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
            Welcome Back
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white">
            Continue Your Exam Progress
          </h1>
          <p className="mt-4 max-w-md text-blue-200">
            Sign in to access your study plans, performance analytics, mock tests, and
            personalized recommendations.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl border border-blue-800 bg-blue-900/70 p-4">
              <p className="text-sm font-semibold text-white">Track your weekly progress</p>
              <p className="mt-1 text-sm text-blue-200">
                Monitor speaking, writing, and reading improvements in one dashboard.
              </p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-blue-900/70 p-4">
              <p className="text-sm font-semibold text-white">Pick up where you left off</p>
              <p className="mt-1 text-sm text-blue-200">
                Resume unfinished lessons and practice sessions instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Sign in to TestLingua</h2>
            <p className="mt-2 text-sm text-slate-600">
              Enter your details to continue your preparation.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            aria-label="Continue with Google"
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.278 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.962 3.038l5.657-5.657C34.226 6.053 29.417 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z" />
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.962 3.038l5.657-5.657C34.226 6.053 29.417 4 24 4c-7.732 0-14.438 4.364-17.694 10.691z" />
              <path fill="#4CAF50" d="M24 44c5.292 0 10.014-2.023 13.648-5.308l-6.312-5.334C29.251 35.091 26.765 36 24 36c-5.257 0-9.618-3.315-11.281-7.946l-6.522 5.025C9.411 39.556 16.093 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.24 3.578-3.836 6.487-7.967 8.358l.003-.002 6.312 5.334C35.202 39.448 44 34.182 44 24c0-1.341-.138-2.651-.389-3.917z" />
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              or
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form className="space-y-5" onSubmit={handleSignIn}>
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-300"
                />
                Remember me
              </label>
              <Link href="/forgot-password" className="font-semibold text-slate-700 hover:text-slate-900">
                Forgot password?
              </Link>
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
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-blue-800 hover:text-blue-900">
              Create one
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
