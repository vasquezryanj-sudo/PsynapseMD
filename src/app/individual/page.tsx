import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import StatBlock from "@/components/StatBlock";
import CycleDiagram from "@/components/CycleDiagram";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";

const controlPoints = [
  "Nothing is finalized without your explicit approval.",
  "Every note is fully editable before you sign off.",
  "Your clinical judgment drives the output. The AI structures it, you own it.",
];

const walkthroughSteps = [
  "Dictate your clinical observations after the session — same as any transcription tool.",
  "PsynapseMD structures your dictation into a complete, treatment-specific note.",
  "Review, edit, and approve with your attestation.",
  "Documentation is structured to support prior authorization — less rework if a claim is reviewed.",
];

const faqItems = [
  {
    question: "How long does it take to learn?",
    answer:
      "Most clinicians are generating notes in their first session. PsynapseMD is designed around dictation — if you've ever used a transcription tool, the core interaction will feel familiar. Onboarding includes a walkthrough tailored to your practice.",
  },
  {
    question: "What if I don't agree with what it generates?",
    answer:
      "You edit it. Every note is fully editable before you approve it. The generated note is a starting point — you are always the one who decides what the final record says.",
  },
  {
    question: "Does this replace my clinical judgment?",
    answer:
      "No. PsynapseMD structures your clinical observations into documentation — it does not make clinical recommendations, suggest diagnoses, or guide treatment decisions. Your judgment is the input; the tool organizes the output.",
  },
  {
    question: "Is my patients' data safe?",
    answer:
      "Yes. PsynapseMD operates on HIPAA-compliant Microsoft Azure infrastructure. Patient data is encrypted in transit and at rest, and is never used to train or improve AI models.",
  },
  {
    question: "Can I edit notes before they're finalized?",
    answer:
      "Yes — always. No note is finalized without your explicit review and approval. Full edit access is a core part of the workflow, not an afterthought.",
  },
];

export default function IndividualPage() {
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
            <div className="inline-flex items-center gap-2 bg-[#E8F5F3] text-[#0A7C6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              For Individual Clinicians
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              Streamlines your work.<br className="hidden md:block" /> Responsibly.
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-10">
              Dictate after each session. Get a structured note. Leave the charting behind — without cutting corners on ethics, privacy, or clinician control.
            </p>
            <Link
              href="/contact?type=individual"
              className="inline-block bg-[#0A7C6E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#085f54] transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl font-semibold text-[#0A7C6E] italic leading-snug font-[family-name:var(--font-jakarta)]">
                &ldquo;You became a clinician to treat patients, not to chart at midnight.&rdquo;
              </p>
            </div>
            <div>
              <p className="text-[#4B5563] leading-relaxed text-lg">
                Ketamine, TMS, and Spravato each carry documentation requirements tied to payer expectations — not just clinical notes. Translating every session into that language takes time. Let PsynapseMD help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">
            How It Works
          </h2>
          <p className="text-[#4B5563] mb-12 text-lg">Fits your existing routine.</p>
          <HowItWorks variant="individual" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                caption: "Dictate Session Notes",
                description: "Speak naturally after the session. PsynapseMD transcribes and structures your observations in real time.",
                src: "/screenshot-dictate.png",
                pos: "object-top",
              },
              {
                caption: "Ketamine Treatment Dashboard",
                description: "Track symptom scores, treatment timeline, tolerability, and functional improvement across the full course of care — all in one view.",
                src: "/screenshot-clinical-note.png",
                pos: "object-top",
              },
              {
                caption: "Interventional Readiness — Type 1 Referral",
                description: "For initial consultations, PsynapseMD surfaces treatment resistance criteria, prior medication trials, and contraindication screening to support prior authorization from the first note.",
                src: "/screenshot-prior-auth.png",
                pos: "object-top",
              },
              {
                caption: "Review and Export",
                description: "Every note is fully editable before you attest. Export to PDF or copy directly to your EHR.",
                src: "/screenshot-review-export.png",
                pos: "object-center",
              },
            ].map(({ caption, description, src, pos }) => (
              <div key={caption} className="flex flex-col rounded-2xl overflow-hidden border border-[#E5E3DC]">
                <div className="w-full h-56 overflow-hidden bg-[#F0EFEB]">
                  <img src={src} alt={caption} className={`w-full h-full object-cover ${pos}`} />
                </div>
                <div className="px-5 py-4 bg-white border-t border-[#E5E3DC]">
                  <p className="text-xs font-bold text-[#111827] uppercase tracking-widest mb-1.5">{caption}</p>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You're Always in Control */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8 font-[family-name:var(--font-jakarta)]">
              You&apos;re Always in Control.
            </h2>
            <div className="space-y-5 mb-10">
              {controlPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0A7C6E] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#111827] text-lg font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E5E3DC] pt-8">
              <p className="text-[#4B5563] text-sm leading-relaxed mb-3">
                These aren&apos;t just product features — they reflect how this tool was designed to be used ethically in a clinical setting.
              </p>
              <Link
                href="/responsible-use"
                className="inline-flex items-center gap-2 text-[#0A7C6E] font-semibold text-sm hover:gap-3 transition-all"
              >
                Read our Responsible Use framework
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* What Inaction Costs */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 font-[family-name:var(--font-jakarta)]">
            What It&apos;s Costing You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <StatBlock
              value="$25–$30"
              label="Estimated cost of reworking and resubmitting a single denied claim."
            />
            <StatBlock
              value="15–20 min"
              label="Time you could be spending elsewhere, per patient encounter."
            />
            <StatBlock
              value="10–15%"
              label="Share of behavioral health prior auth requests denied on first submission."
            />
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <CycleDiagram />
          </div>
          <p className="mt-6 text-sm italic text-[#9CA3AF]">
            Figures shown are illustrative estimates, not sourced research findings.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        headline="Built for You."
        body="Every setup starts with a consultation — not a self-serve signup. We configure the system to your practice before any clinical use begins."
        buttonText="Request a Demo"
        href="/contact?type=individual"
      />

      {/* FAQ */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-10 text-center font-[family-name:var(--font-jakarta)]">
            Frequently Asked Questions
          </h2>
          <FaqSection items={faqItems} />
        </div>
      </section>
    </>
  );
}
