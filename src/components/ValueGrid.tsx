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
    <div className="divide-y divide-[#E5E3DC]">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-8 py-8 first:pt-0 last:pb-0">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#0A7C6E] mt-0.5">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold text-[#111827] mb-1.5 font-[family-name:var(--font-jakarta)]">
              {item.headline}
            </h4>
            <p className="text-[#4B5563] leading-relaxed text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
