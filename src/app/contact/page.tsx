import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F6F2] py-20 min-h-[30vh] flex items-center">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8F5F3] opacity-60 blur-3xl pointer-events-none"
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#E8F5F3] text-[#0A7C6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-4 font-[family-name:var(--font-jakarta)]">
              Request a Meeting
            </h1>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              PsynapseMD is implemented through a consultation, not a self-serve signup. Tell us about
              your practice and we&apos;ll be in touch to schedule a time.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <Suspense fallback={<div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
