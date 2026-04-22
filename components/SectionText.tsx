"use client";

import { RevealLine, FadeUp } from "@/components/motion";
import { SectionTextProps } from "@/utils/types";

export default function SectionText({
  label,
  title,
  text,
  orientation,
}: SectionTextProps) {
  const align = orientation ?? "center";
  const items = orientation === "left" ? "items-start" : "items-center";

  return (
    <div className={`max-w-200 flex flex-col justify-center ${items}`}>
      <RevealLine delay={0.06}>
        <p
          className={`text-goldenOrange uppercase font-400 tracking-[0.25em] text-sm text-${align}`}
        >
          {label}
        </p>
      </RevealLine>

      <RevealLine
        delay={0.1}
        className={`text-charcoal font-medium text-[48px] text-${align} whitespace-pre-line mt-4`}
      >
        {title}
      </RevealLine>

      <FadeUp
        delay={0.2}
        className={`text-charcoal opacity-70 text-${align} max-w-[80%] mt-6 font-light text-base`}
      >
        {text}
      </FadeUp>
    </div>
  );
}
