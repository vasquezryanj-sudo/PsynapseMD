import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export default function ResponsibleUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F6F2] min-h-[50vh] flex items-center">
        <div aria-hidden="true" className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8F5F3] opacity-60 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute top-40 -right-10 w-64 h-64 rounded-full border-2 border-[#0A7C6E] opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              Ethics isn&apos;t a feature.<br className="hidden md:block" /> It&apos;s the foundation.
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl">
              Privacy, accountability, and clinician control aren&apos;t settings in PsynapseMD. They&apos;re structural decisions made before the first line of code was written.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center bg-[#E8F5F3] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-10">
            Core Principles
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                number: "01",
                headline: "The clinician decides. Always.",
                body: "AI generates a draft. You review, edit, and attest. Nothing is finalized without you.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                number: "02",
                headline: "Patient data never trains AI.",
                body: "Your data produces your documentation. It is never sold, shared, or fed into any AI pipeline.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                number: "03",
                headline: "The AI documents. Not diagnoses.",
                body: "PsynapseMD structures what you dictate. It does not interpret findings, suggest treatment, or substitute for clinical judgment.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((p) => (
              <div key={p.number} className="bg-[#F7F6F2] border border-[#E5E3DC] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] flex-shrink-0">
                    {p.icon}
                  </div>
                  <span className="text-[9px] font-black text-[#0A7C6E] uppercase tracking-[0.3em]">{p.number}</span>
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2 font-[family-name:var(--font-jakarta)]">{p.headline}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the AI Works */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center bg-white border border-[#E5E3DC] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
            Transparency
          </span>
          <h2 className="text-3xl font-bold text-[#111827] mb-12 font-[family-name:var(--font-jakarta)]">
            How the AI works
          </h2>
          <div className="flex flex-col md:flex-row gap-0 md:divide-x md:divide-[#E5E3DC]">
            {[
              { step: "Input", desc: "You dictate observations after the session — freeform, in your own words." },
              { step: "Process", desc: "A language model structures your dictation into a treatment-specific note template. It organizes — it does not interpret." },
              { step: "Output", desc: "A complete draft is presented for review. Every field is editable. Nothing is pre-approved." },
              { step: "Finalization", desc: "The note becomes final only after your explicit review and attestation." },
            ].map((item, i) => (
              <div key={item.step} className={`flex-1 px-0 md:px-8 first:pl-0 last:pr-0 ${i > 0 ? "pt-8 md:pt-0 border-t md:border-t-0 border-[#E5E3DC]" : ""}`}>
                <span className="inline-flex items-center bg-[#E8F5F3] text-[#0A7C6E] text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                  {item.step}
                </span>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center bg-[#F7F6F2] border border-[#E5E3DC] text-[#6B7280] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
            Data Policy
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
            <div>
              <h3 className="text-lg font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">What we collect and why</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                Session dictations, generated note content, and account information — only what is required to produce documentation. Data minimization is a structural design constraint, not a preference.
              </p>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Infrastructure is HIPAA-compliant on Microsoft Azure, encrypted in transit and at rest. Business Associate Agreements (BAAs) in place as required. You retain ownership of your documentation at all times.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">What your data is never used for</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Training AI models",
                  "Improving AI models",
                  "Third-party sharing",
                  "Sale of data",
                  "Advertising",
                  "Analytics beyond service operation",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center bg-[#FEF2F2] text-[#DC2626] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#FECACA]">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-[#4B5563] text-xs leading-relaxed mt-6">
                Full terms are in your service agreement. Questions are handled directly — not through automated systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center bg-white border border-[#E5E3DC] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
                Accountability
              </span>
              <h2 className="text-3xl font-bold text-[#111827] mb-6 font-[family-name:var(--font-jakarta)]">
                AI Governance
              </h2>
              <img src="/aigp-certified.png" alt="AIGP Certified" className="w-48 h-auto object-contain mb-6" />
              <p className="text-[#4B5563] leading-relaxed text-sm mb-8">
                PsynapseMD&apos;s governance policy was authored by a credentialed AI Governance Professional (AIGP) — independently, not self-certified. Ethics and accountability are external constraints on this product, not internal claims about it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold text-sm hover:gap-3 transition-all"
              >
                Governance questions? Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: "Privacy by design", detail: "Data minimization is structural. Features requiring broader data access were excluded at the design stage." },
                { label: "Clinician attestation", detail: "Every note requires explicit clinician review and sign-off before it is stored as a finalized record." },
                { label: "Audit-ready records", detail: "All finalized notes are logged and structured to support payer audits and compliance review." },
                { label: "Non-clinical scope", detail: "PsynapseMD is a documentation tool. It does not make clinical recommendations or substitute for clinical judgment." },
                { label: "Ongoing accountability", detail: "Responsible use doesn't end at launch. A named point of contact is available throughout your engagement." },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#E5E3DC] rounded-2xl px-6 py-5">
                  <span className="inline-flex items-center bg-[#E8F5F3] text-[#0A7C6E] text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-2">
                    {item.label}
                  </span>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        headline="See it in your practice."
        body="Every setup starts with a consultation. We answer your questions before any clinical use begins."
        buttonText="Request a Demo"
        href="/contact"
      />
    </>
  );
}
