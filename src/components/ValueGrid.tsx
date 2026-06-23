import { ReactNode } from "react";

interface ValueItem {
  icon: ReactNode;
  headline: string;
  description: string;
}

interface ValueGridProps {
  items: ValueItem[];
}

export default function ValueGrid({ items }: ValueGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-[#E5E3DC] rounded-2xl p-8 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] mb-4">
            {item.icon}
          </div>
          <h4 className="text-lg font-bold text-[#111827] mb-2 font-[family-name:var(--font-jakarta)]">
            {item.headline}
          </h4>
          <p className="text-[#4B5563] leading-relaxed text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
