import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      {/* Hero — minimal landing */}
      <section className="relative overflow-hidden bg-[#F7F6F2] min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Dot grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0A7C6E18 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Precise ring decorations */}
        <div aria-hidden="true" className="absolute top-16 right-16 w-64 h-64 rounded-full border border-[#0A7C6E]/10 pointer-events-none" />
        <div aria-hidden="true" className="absolute top-28 right-28 w-40 h-40 rounded-full border border-[#0A7C6E]/15 pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-24 left-16 w-48 h-48 rounded-full border border-[#0A7C6E]/10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#111827] leading-[0.92] mb-8 font-[family-name:var(--font-jakarta)]">
            Clinical documentation,<br className="hidden md:block" /> handled.
          </h1>

          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-14">
            Dictate your session. Get a structured, payer-ready note. Move straight to authorization support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Trust Strip */}
      <TrustStrip />
    </>
  );
}
