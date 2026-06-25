import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A7C6E] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Logo + tagline */}
          <div className="flex-shrink-0 max-w-[200px]">
            <img src="/logo.png" alt="PsynapseMD" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-xs text-gray-500 leading-relaxed">
              AI-assisted clinical documentation for interventional psychiatry.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Navigate</p>
            <Link href="/clinics" className="text-sm text-gray-400 hover:text-white transition-colors">Clinics</Link>
            <Link href="/individual" className="text-sm text-gray-400 hover:text-white transition-colors">Individual Clinicians</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Legal */}
          <nav className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Legal</p>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">HIPAA Notice</a>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; 2026 PsynapseMD. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built for interventional psychiatry — TMS, ketamine, Spravato.</p>
        </div>
      </div>
    </footer>
  );
}
