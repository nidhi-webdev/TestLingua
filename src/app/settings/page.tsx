"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Bell, Lock, Eye } from "lucide-react";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 via-white to-blue-50">
        <div className="text-blue-900 text-lg">Loading...</div>
      </div>
    );
  }

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
              <p className="mt-2 text-slate-600">
                Manage your account and preferences
              </p>
            </div>

            {isSaved && (
              <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                ✓ Settings saved successfully!
              </div>
            )}

            {/* Profile Settings */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Profile Information
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={session?.user?.name || ""}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={session?.user?.email || ""}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Notifications
                </h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Email notifications for test results
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Weekly progress digest
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Course recommendations
                  </span>
                </label>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">Privacy</h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Make my profile private
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Allow analytics tracking
                  </span>
                </label>
              </div>
            </div>

            {/* Display Settings */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">Display</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Theme
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Language
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
