import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import StatBlock from "@/components/StatBlock";
import CycleDiagram from "@/components/CycleDiagram";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F6F2] min-h-[50vh] flex items-center">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8F5F3] opacity-60 blur-3xl pointer-events-none"
        />
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#E8F5F3] text-[#0A7C6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              About
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              The burden became the practice.
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl">
              PsynapseMD exists so that you can spend less time on documentation, and more time with patients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#111827] mb-8 font-[family-name:var(--font-jakarta)]">
                Origin
              </h2>
              <div className="border border-[#E5E3DC] rounded-2xl p-8 bg-[#F7F6F2]">
                <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide mb-3">
                  Placeholder — Content Pending
                </p>
                <p className="text-[#4B5563] italic leading-relaxed">
                  [PLACEHOLDER: Founder bio — Wayne&apos;s background, clinical context, and motivation for building PsynapseMD. To be supplied by product owner.]
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end pt-16">
              <ImagePlaceholder
                label="Founder Headshot"
                aspectRatio="1/1"
                className="max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audience paths */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">
            Built for Two Kinds of Practices
          </h2>
          <p className="text-[#4B5563] text-lg mb-12 max-w-2xl">
            Whether you run a multi-provider clinic or practice independently, PsynapseMD is built to fit your workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinics card */}
            <Link
              href="/clinics"
              className="group bg-white border border-[#E5E3DC] rounded-2xl p-8 hover:border-[#0A7C6E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">For Clinics</h3>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                Adopt PsynapseMD across your practice. Bring every provider's documentation to the same standard — consistent, compliant, and structured for prior authorization from the first note.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold text-sm group-hover:gap-3 transition-all">
                For clinics
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Individual card */}
            <Link
              href="/individual"
              className="group bg-white border border-[#E5E3DC] rounded-2xl p-8 hover:border-[#0A7C6E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">For Individual Clinicians</h3>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                Use PsynapseMD on your own to take back the time you spend on documentation. Dictate after each session, review the structured note, and get home earlier — without sacrificing quality.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold text-sm group-hover:gap-3 transition-all">
                For individual clinicians
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What it costs */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold text-[#0A7C6E] uppercase tracking-[0.3em] mb-4">The Status Quo</p>
          <h2 className="text-3xl font-bold text-[#111827] mb-12 font-[family-name:var(--font-jakarta)]">
            What it&apos;s costing you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <StatBlock
              value="$25–$30"
              label="Estimated cost to rework and resubmit a single denied claim."
            />
            <StatBlock
              value="15–20 min"
              label="Average time spent on documentation per patient encounter."
            />
            <StatBlock
              value="10–15%"
              label="Share of behavioral health prior auth requests initially denied."
            />
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <CycleDiagram />
          </div>
          <p className="mt-6 text-xs italic text-[#9CA3AF]">
            Figures shown are illustrative estimates, not sourced research findings.
          </p>
        </div>
      </section>

      {/* Built ethically and responsibly. brief */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#111827] mb-6 font-[family-name:var(--font-jakarta)]">
              Governance
            </h2>
            <p className="text-[#4B5563] leading-relaxed text-lg mb-8">
              PsynapseMD was developed with a formal AI and data governance framework, covering transparency and accountability, with reponsibility built into the design. No note is finalized without clinician review and attestation. Patient data is never used to train AI models. Humans present at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/clinics#compliance"
                className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold hover:gap-3 transition-all"
              >
                Compliance details for clinics
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        headline="See it in your practice."
        body=""
        buttonText="Request a Demo"
        href="/contact"
      />
    </>
  );
}
