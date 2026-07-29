import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F6F2] min-h-[88vh] flex items-center">
        {/* Dot grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0A7C6E18 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden="true" className="absolute bottom-24 left-16 w-48 h-48 rounded-full border border-[#0A7C6E]/10 pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-12 left-8 w-28 h-28 rounded-full border border-[#0A7C6E]/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111827] leading-[0.92] mb-8 font-[family-name:var(--font-jakarta)]">
              Clinical documentation,<br className="hidden md:block" /> built the right way.
            </h1>
            <p className="text-lg text-[#4B5563] leading-relaxed max-w-lg mb-14">
              PsynapseMD streamlines documentation for interventional psychiatry — with an AI governance framework written by a credentialed professional, privacy built into the design, and clinician control at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/clinics"
                className="group inline-flex items-center justify-center gap-3 bg-[#0A7C6E] text-white font-bold px-10 py-4 rounded-full hover:bg-[#085f54] transition-colors text-sm uppercase tracking-widest"
              >
                For Clinics
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/individual"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-[#111827] font-bold px-10 py-4 rounded-full border-2 border-[#111827] hover:border-[#0A7C6E] hover:text-[#0A7C6E] transition-colors text-sm uppercase tracking-widest"
              >
                For Clinicians
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — screenshot panel */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden border border-[#E5E3DC] shadow-2xl"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="h-[440px] overflow-hidden bg-[#F0EFEB]">
                <img
                  src="/screenshot-clinical-note.png"
                  alt="Clinical documentation dashboard"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />
    </>
  );
}
