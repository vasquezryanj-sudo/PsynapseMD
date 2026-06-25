"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/logo.png" alt="PsynapseMD" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/clinics" className="text-xs font-semibold text-[#4B5563] hover:text-[#0A7C6E] transition-colors uppercase tracking-widest">
            Clinics
          </Link>
          <Link href="/individual" className="text-xs font-semibold text-[#4B5563] hover:text-[#0A7C6E] transition-colors uppercase tracking-widest">
            Clinicians
          </Link>
          <Link href="/about" className="text-xs font-semibold text-[#4B5563] hover:text-[#0A7C6E] transition-colors uppercase tracking-widest">
            About
          </Link>
          <Link
            href="/contact"
            className="bg-[#0A7C6E] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#085f54] transition-colors uppercase tracking-widest"
          >
            Request a Demo
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#111827] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#111827] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#111827] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-t border-[#E5E3DC] px-6 py-6 flex flex-col gap-5">
          <Link href="/clinics" className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Clinics</Link>
          <Link href="/individual" className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Clinicians</Link>
          <Link href="/about" className="text-xs font-semibold text-[#4B5563] uppercase tracking-widest" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="bg-[#0A7C6E] text-white text-xs font-bold px-6 py-3 rounded-full text-center uppercase tracking-widest hover:bg-[#085f54] transition-colors" onClick={() => setMenuOpen(false)}>
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
