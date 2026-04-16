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
        className={`text-goldenOrange uppercase font-400 tracking-[25%] text-${orientation || "center"}}`}
      >
        {label}
      </p>
      <h2
        className={`text-charcoal font-medium text-[48px] text-${orientation || "center"}`}
      >
        {title}
      </h2>
      <p
        className={`text-charcoal opacity-70 text-${orientation || "center"} max-w-[80%] mt-6.25 font-400`}
      >
        {text}
      </p>
    </div>
  );
}
