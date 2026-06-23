interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-4 pt-8 border-t-2 border-[#0A7C6E]">
      <span className="text-6xl md:text-7xl font-black text-[#0A7C6E] leading-none font-[family-name:var(--font-jakarta)]">
        {value}
      </span>
      <span className="text-sm text-[#4B5563] leading-snug max-w-[200px]">
        {label}
      </span>
    </div>
  );
}
