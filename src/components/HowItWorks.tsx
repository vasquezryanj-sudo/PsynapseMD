interface StepConfig {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const clinicSteps: StepConfig[] = [
  {
    number: "01",
    title: "Dictate",
    description: "Your clinician dictates session observations as they normally would — no new workflow required.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Review & Approve",
    description: "PsynapseMD structures the dictation into a complete, payer-ready note. The clinician reviews and approves before anything is finalized.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Authorization Support",
    description: "Documentation is structured from the start to support prior authorization — reducing rework and resubmission cycles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const individualSteps: StepConfig[] = [
  {
    number: "01",
    title: "You Talk.",
    description: "Dictate your clinical observations after each session — as naturally as you'd describe it to a colleague.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "It Writes.",
    description: "PsynapseMD transforms your dictation into a structured, treatment-specific clinical note ready for payer review.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Approve.",
    description: "Review the note, make any edits, and approve it with your attestation. Nothing is ever finalized without you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

interface HowItWorksProps {
  variant: "clinic" | "individual";
}

export default function HowItWorks({ variant }: HowItWorksProps) {
  const steps = variant === "clinic" ? clinicSteps : individualSteps;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E3DC]">
      {steps.map((step) => (
        <div
          key={step.number}
          className="relative bg-white p-8 overflow-hidden"
        >
          {/* Ghost step number */}
          <div className="absolute top-2 right-4 text-[80px] font-black text-[#F7F6F2] leading-none select-none pointer-events-none font-[family-name:var(--font-jakarta)]">
            {step.number}
          </div>

          {/* Icon */}
          <div className="relative z-10 w-10 h-10 rounded-lg border border-[#0A7C6E] flex items-center justify-center text-[#0A7C6E] mb-6">
            {step.icon}
          </div>

          {/* Content */}
          <h4 className="relative z-10 text-xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">
            {step.title}
          </h4>
          <p className="relative z-10 text-[#4B5563] text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
