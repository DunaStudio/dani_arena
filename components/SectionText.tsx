import { SectionTextProps } from "@/utils/types";

export default function SectionText({
  label,
  title,
  text,
  orientation,
}: SectionTextProps) {
  return (
    <div
      className={`max-w-200 flex flex-col justify-center items-${orientation || "center"}`}
    >
      <p
        className={`text-goldenOrange uppercase font-400 tracking-[0.25em] text-sm text-${orientation || "center"}}`}
      >
        {label}
      </p>
      <h2
        className={`text-charcoal font-medium text-[48px] text-${orientation || "center"} whitespace-pre-line mt-4`}
      >
        {title}
      </h2>
      <p
        className={`text-charcoal opacity-70 text-${orientation || "center"} max-w-[80%] mt-6 font-light text-base`}
      >
        {text}
      </p>
    </div>
  );
}
