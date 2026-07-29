interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="pl-6 border-l-2 border-[#0A7C6E]">
      <span className="text-5xl md:text-6xl font-black text-[#0A7C6E] leading-none block mb-2 font-[family-name:var(--font-jakarta)]">
        {value}
      </span>
      <span className="text-sm text-[#4B5563] leading-snug block max-w-[200px]">
        {label}
      </span>
    </div>
  );
}
