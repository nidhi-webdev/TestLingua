"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Settings, LogOut, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <nav className="fixed top-0 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="TestLingua Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
              TestLingua
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/exams"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Exams
            </Link>
            <Link
              href="/features"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              About
            </Link>
            {session?.user && (
              <Link
                href="/dashboard"
                className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* CTA Button / User Dropdown */}
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-900">
                    {session.user.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden sm:inline-block text-slate-700 hover:text-blue-900 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
