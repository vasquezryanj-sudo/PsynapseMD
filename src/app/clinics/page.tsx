import Link from "next/link";
import StatBlock from "@/components/StatBlock";
import ComplianceSection from "@/components/ComplianceSection";
import ValueGrid from "@/components/ValueGrid";
import CtaSection from "@/components/CtaSection";

const valueItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    headline: "Consistency Across Providers",
    description: "Every clinician's notes meet the same documentation standard, regardless of individual charting habits.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: "Reduced Documentation Time",
    description: "Less time charting means more capacity for patient care and higher clinician satisfaction.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    headline: "Stronger Prior Authorization Support",
    description: "Notes structured to support medical necessity from the first submission — fewer denials, less rework.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    headline: "Audit-Ready Records",
    description: "Every output is clinician-attested and logged — ready for payer audits without scrambling.",
  },
];


export default function ClinicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F6F2] min-h-[60vh] flex items-center">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8F5F3] opacity-60 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-40 -right-10 w-64 h-64 rounded-full border-2 border-[#0A7C6E] opacity-10 pointer-events-none"
        />
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              Practice-wide documentation, built the right way.
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-10">
              Consistent, compliant notes across every provider — with responsible AI at the foundation, and a governance framework written by a credentialed professional.
            </p>
            <Link
              href="/contact?type=clinic"
              className="inline-block bg-[#0A7C6E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#085f54] transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center bg-[#E8F5F3] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
                The Clinician Dashboard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6 font-[family-name:var(--font-jakarta)]">
                Every metric. One view.
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Symptom score trends, treatment timeline, tolerability, functional improvement, and the full clinical note — structured and surfaced automatically from your dictation.
              </p>
            </div>
            <div style={{ transform: "rotate(1deg)" }}>
              <div className="rounded-2xl overflow-hidden border border-[#E5E3DC] shadow-2xl bg-[#F0EFEB]">
                <img src="/screenshot-clinical-note.png" alt="Clinical documentation dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center bg-white border border-[#E5E3DC] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
            Ethics &amp; Governance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-10 font-[family-name:var(--font-jakarta)]">
            Responsibly Made
          </h2>
          <ComplianceSection />
        </div>
      </section>

      {/* What Inaction Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center bg-[#F7F6F2] border border-[#E5E3DC] text-[#6B7280] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
            The Status Quo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-14 font-[family-name:var(--font-jakarta)]">
            What It&apos;s Costing You
          </h2>
          <div className="flex flex-col md:flex-row gap-14 md:gap-20">
            <StatBlock
              value="$25–$30"
              label="Estimated administrative cost every time a denied claim is reworked and resubmitted."
            />
            <StatBlock
              value="15–20 min"
              label="Average time clinicians spend on documentation per patient encounter."
            />
            <StatBlock
              value="10–15%"
              label="Estimated share of behavioral health prior authorization requests initially denied."
            />
          </div>
        </div>
      </section>

      {/* Value Grid */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">
                Why Clinics Switch
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Better documentation outcomes. Less friction. A governance framework that holds up under scrutiny.
              </p>
            </div>
            <ValueGrid items={valueItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        headline="Guided from Day One."
        body="Every implementation starts with a consultation — not a sign-up link. We configure the system to your practice before any clinical use begins."
        buttonText="Request a Demo"
        href="/contact?type=clinic"
      />
    </>
  );
}
