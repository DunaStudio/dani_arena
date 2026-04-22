import { TestimonioCardProps } from "@/utils/types";

export default function TestimonioCard({
  name,
  position,
  testimony,
}: TestimonioCardProps) {
  return (
    <div
      className="shrink-0 w-[82vw] md:w-72 bg-white rounded-[5px] p-6 md:p-7 flex flex-col justify-between gap-8 md:gap-10"
      style={{ minHeight: "260px" }}
    >
      <p className="text-charcoal text-base leading-relaxed font-light">
        "{testimony}"
      </p>

      <div className="flex flex-col">
        <span className="font-semibold text-charcoal text-sm">{name}</span>
        <span className="text-charcoal opacity-60 text-xs">{position}</span>
      </div>
    </div>
  );
}
