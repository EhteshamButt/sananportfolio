"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05050f]/90 backdrop-blur-lg border-b border-[#1e1e3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="/logo%20without%20bg%20(2).png"
            alt="SR Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <div className="text-white font-black text-sm tracking-wider">
              SANNAN
            </div>
            <div
              className="text-[10px] tracking-[0.35em] font-semibold"
              style={{
                background: "linear-gradient(90deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RENDERZ
            </div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.active
                  ? "text-sm font-semibold"
                  : "text-gray-400 hover:text-white text-sm font-medium transition-colors"
              }
              style={
                l.active
                  ? {
                      background: "linear-gradient(90deg, #a855f7, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : {}
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1e1e3a] bg-[#05050f] px-5 pb-5 pt-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.active ? "text-purple-400 font-semibold text-sm" : "text-gray-400 text-sm"
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-1 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-lg text-sm font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
