import Link from "next/link";
import { ReactNode } from "react";

interface AudienceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

export default function AudienceCard({ title, description, href, icon }: AudienceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between bg-white border border-[#E5E3DC] rounded-2xl p-10 overflow-hidden hover:border-[#0A7C6E] hover:shadow-lg transition-all duration-300 min-h-[280px]"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0A7C6E] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Ghost number decoration */}
      <div className="absolute bottom-4 right-6 text-[120px] font-black text-[#F7F6F2] leading-none select-none pointer-events-none font-[family-name:var(--font-jakarta)] group-hover:text-[#E8F5F3] transition-colors duration-300">
        →
      </div>

      <div className="relative z-10">
        {icon && (
          <div className="mb-6 w-10 h-10 rounded-lg bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] group-hover:bg-[#0A7C6E] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-[family-name:var(--font-jakarta)] leading-tight">
          {title}
        </h3>
        <p className="text-[#4B5563] leading-relaxed">{description}</p>
      </div>

      <div className="relative z-10 flex items-center gap-2 mt-8 text-xs font-bold text-[#0A7C6E] uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
        Learn more
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
