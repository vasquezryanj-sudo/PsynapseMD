interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 rounded-2xl flex items-center justify-center w-full ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-[#9CA3AF] text-sm font-medium px-4 text-center">{label}</span>
    </div>
  );
}
