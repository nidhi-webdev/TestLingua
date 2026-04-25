import Link from "next/link";
import Image from "next/image";
import { GitBranch, Share2, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-[#071A3A] to-[#031028] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="TestLingua Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-white">TestLingua</span>
            </div>
            <p className="text-sm text-gray-400">
              Master English exams with confidence and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Exams</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/exams/ielts" className="hover:text-white transition-colors">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="/exams/toefl" className="hover:text-white transition-colors">
                  TOEFL
                </Link>
              </li>
              <li>
                <Link href="/exams/cambridge" className="hover:text-white transition-colors">
                  Cambridge
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/70 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} TestLingua. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
                aria-label="Twitter"
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
                aria-label="GitHub"
              >
                <GitBranch size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
