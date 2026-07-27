import Link from "next/link";

const pillars = [
  {
    text: "HIPAA-compliant infrastructure hosted on Microsoft Azure — encrypted in transit and at rest.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    text: "AI governance policy written by a credentialed AI Governance Professional (AIGP) — transparent, accountable, and independently authored from design through deployment.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    text: "Human intervention at every step — no note is generated, reviewed, or finalized without a clinician in the loop.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function ComplianceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        {pillars.map((pillar, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E]">
              {pillar.icon}
            </div>
            <p className="text-[#4B5563] leading-relaxed pt-1.5">{pillar.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <img src="/aigp-certified.png" alt="AIGP Certified" className="w-auto h-14 object-contain object-left" />
        <div className="border-t border-[#E5E3DC] pt-6">
          <p className="text-[#4B5563] text-sm leading-relaxed mb-3">
            Responsibility is built into the design of this product — not added on after. We publish our approach openly.
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
  );
}
