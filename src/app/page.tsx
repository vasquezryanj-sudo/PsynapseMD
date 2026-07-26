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
          <div className="inline-flex items-center gap-2 bg-[#E8F5F3] text-[#0A7C6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wide">
            Responsible AI · Interventional Psychiatry
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#111827] leading-[0.92] mb-8 font-[family-name:var(--font-jakarta)]">
            Clinical documentation,<br className="hidden md:block" /> built the right way.
          </h1>

          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-xl mx-auto mb-14">
            PsynapseMD streamlines documentation for interventional psychiatry — with an AI governance framework written by a credentialed professional, privacy built into the design, and clinician control at every step.
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

      {/* Ethos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">
              Responsible AI isn&apos;t a feature here.<br />It&apos;s the reason this product exists.
            </h2>
            <p className="text-[#4B5563] leading-relaxed">
              Every documentation tool promises efficiency. PsynapseMD was built around a harder premise: that efficiency in clinical AI cannot come at the cost of ethics, transparency, or clinician control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E3DC] border border-[#E5E3DC] rounded-2xl overflow-hidden mb-10">
            {[
              {
                label: "AIGP-Authored Governance",
                body: "Our AI policy was written by a credentialed AI Governance Professional — an independent expert in AI accountability and ethics. Not self-certified. Not drafted by engineers.",
              },
              {
                label: "Privacy by Design",
                body: "Data minimization is structural, not a setting. PsynapseMD was built to collect only what's needed to generate documentation. Features requiring broader access were excluded by design.",
              },
              {
                label: "Clinician in Control",
                body: "No note is finalized without your explicit review and attestation. The AI structures your dictation. You decide what the final record says. Every time.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <p className="text-[10px] font-bold text-[#0A7C6E] uppercase tracking-[0.3em] mb-3">{item.label}</p>
                <p className="text-[#4B5563] leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/responsible-use"
            className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold text-sm hover:gap-3 transition-all"
          >
            Read our full Responsible Use framework
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />
    </>
  );
}
