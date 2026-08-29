import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import ComplianceSection from "@/components/ComplianceSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";

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
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6 font-[family-name:var(--font-jakarta)]">
              Streamlines your work responsibly.<br className="hidden md:block" />
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed max-w-2xl mb-10">
              Dictate and get a structured note. Leave the charting time behind.
            </p>
            <Link
              href="/contact?type=individual"
              className="inline-block bg-[#0A7C6E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#085f54] transition-colors"
            >
              Request a Demo
            </Link>
          </div>
          <div className="hidden lg:block" style={{ transform: "rotate(1deg)" }}>
            <div className="rounded-2xl overflow-hidden border border-[#E5E3DC] shadow-2xl bg-[#F0EFEB]">
              <img src="/screenshot-clinical-note.png" alt="Clinical documentation dashboard" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">
            How It Works
          </h2>
          <p className="text-[#4B5563] mb-12 text-lg">PsynapseMD fits easily into your existing routine.</p>
          <HowItWorks variant="individual" />
        </div>
      </section>

      {/* Responsibly Made */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)]">
            Responsibly Made
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
            PsynapseMD was created with human-centered design principles, all of which prioritize the safety and privacy of the clinicians and patients alike.
          </p>
          <ComplianceSection />
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        headline="Built for You."
        body="Every setup starts with a conversation, not a sign-up link."
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
