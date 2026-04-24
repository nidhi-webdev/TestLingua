import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-md z-50 shadow-sm">
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
              href="/exams"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Exams
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden sm:inline-block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
