"use client";
import { RevealLine } from "@/components/motion";
import SectionText from "@/components/SectionText";
import TestimonioCard from "@/components/TestimoniosComponents/TestimonioCard";
import { testimoniosCardsData } from "@/utils/constants";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

function ArrowButton({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "prev" | "next";
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={onClick}
      disabled={mounted ? disabled : false}
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 shrink-0"
      style={{
        borderColor: disabled ? "#d1d1d1" : "#3a3a3a",
        backgroundColor: disabled ? "transparent" : "#3a3a3a",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
      }}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "prev" ? (
          <path
            d="M10 12L6 8L10 4"
            stroke={disabled ? "#3a3a3a" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 4L10 8L6 12"
            stroke={disabled ? "#3a3a3a" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function TestimoniosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-porcelain w-full flex items-center justify-center px-6 md:px-20 py-12 md:py-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start gap-10 md:gap-12">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-0">
          <div>
            <RevealLine
              delay={0}
              className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal"
            >
              Testimonios
            </RevealLine>

            <h2 className="text-charcoal text-[34px] md:text-[48px] font-medium text-left leading-[1.2] mt-4">
              <RevealLine delay={0.08}>Resultados de lo que</RevealLine>
              <RevealLine delay={0.16}>logramos trabajando juntos</RevealLine>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <ArrowButton
              onClick={scrollPrev}
              disabled={prevDisabled}
              direction="prev"
            />
            <ArrowButton
              onClick={scrollNext}
              disabled={nextDisabled}
              direction="next"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimoniosCardsData.map((t, i) => (
              <TestimonioCard
                key={i}
                testimony={t.testimony}
                name={t.name}
                position={t.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
