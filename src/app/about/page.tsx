import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              Spend more time with your patients, not your computer screen.
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl">
              PsynapseMD was built by clinicians who felt the weight of documentation firsthand. The tool exists for one reason: to give that time back, without cutting corners on quality, ethics, or patient care.
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
              <div className="space-y-5 text-[#4B5563] leading-relaxed text-lg">
                <p>
                  PsynapseMD started with a straightforward frustration: too much of the clinical day was going to documentation, and not enough to patients. In interventional psychiatry especially — where treatment is complex, prior authorization is demanding, and every session carries weight — the administrative burden had become its own clinical problem.
                </p>
                <p>
                  The solution seemed obvious. AI could handle the structure. Clinicians could handle the care. But integrating AI into clinical workflows isn&apos;t straightforward — and we knew it. The questions around patient privacy, model accountability, data use, and clinician oversight weren&apos;t afterthoughts. They were the reason many tools in this space had already failed the people they were supposed to help.
                </p>
                <p>
                  So before writing a line of product code, we consulted with ethicists, AI governance professionals, and responsible technology advocates. The result is a tool designed around a simple principle: efficiency should never come at the expense of the human relationship at the center of care. PsynapseMD handles the documentation so clinicians can focus on what they trained to do.
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

      {/* Built ethically and responsibly */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center bg-white border border-[#E5E3DC] text-[#0A7C6E] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
                Ethics &amp; Governance
              </span>
              <h2 className="text-3xl font-bold text-[#111827] mb-6 font-[family-name:var(--font-jakarta)]">
                Responsible by design, not afterthought.
              </h2>
              <p className="text-[#4B5563] leading-relaxed text-lg mb-6">
                AI in clinical settings carries real responsibility. PsynapseMD's governance policy was written by a credentialed AI Governance Professional (AIGP) — not self-certified. Privacy and data limitation are structural design decisions, not settings. And accountability doesn't end at launch: we provide ongoing support to ensure the tool is used appropriately in your practice.
              </p>
              <p className="text-[#4B5563] leading-relaxed text-lg mb-10">
                No note is finalized without clinician review and attestation. Patient data is never used to train AI models. The AI structures documentation — it does not make clinical decisions.
              </p>
              <Link
                href="/responsible-use"
                className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold hover:gap-3 transition-all"
              >
                Read our full Responsible Use framework
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              {[
                { label: "Human-in-the-loop", detail: "Every note requires explicit clinician review and attestation before it is finalized." },
                { label: "Data never trains AI", detail: "Patient data processed through PsynapseMD is never used to improve or train AI models." },
                { label: "Transparent AI scope", detail: "The AI structures dictation. It does not diagnose, recommend treatment, or substitute for clinical judgment." },
                { label: "Audit-ready records", detail: "All finalized notes are clinician-attested and logged — structured to hold up under payer or clinical review." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-[#E5E3DC] rounded-2xl px-6 py-5"
                >
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

      {/* Audience paths */}
      <section className="py-20 bg-white">
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
              className="group relative overflow-hidden bg-[#F7F6F2] border border-[#E5E3DC] rounded-2xl p-8 hover:border-[#0A7C6E] transition-colors"
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
              className="group relative overflow-hidden bg-[#F7F6F2] border border-[#E5E3DC] rounded-2xl p-8 hover:border-[#0A7C6E] transition-colors"
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
