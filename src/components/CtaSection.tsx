import Link from "next/link";

interface CtaSectionProps {
  headline: string;
  body: string;
  buttonText: string;
  href: string;
}

export default function CtaSection({ headline, body, buttonText, href }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A7C6E] py-24 px-6">
      {/* Geometric ring decorations */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-[family-name:var(--font-jakarta)] leading-tight">
          {headline}
        </h2>
        {body && (
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{body}</p>
        )}
        <Link
          href={href}
          className="inline-block bg-white text-[#0A7C6E] font-bold px-10 py-4 rounded-full hover:bg-[#F7F6F2] transition-colors text-sm uppercase tracking-widest"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
