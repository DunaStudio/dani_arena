"use client";
import SectionText from "@/components/SectionText";
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
  return (
    <button
      onClick={onClick}
      disabled={disabled}
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
    <div className="bg-porcelain w-full flex items-center justify-center p-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start gap-12">
        <div className="w-full flex items-end justify-between">
          <SectionText
            label="Testimonios"
            title={`Resultados de lo que \n logramos trabajando juntos`}
            orientation="left"
          />
          <div className="flex items-center gap-2 pb-1">
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
              <div
                key={i}
                className="shrink-0 w-72 bg-white rounded-[5px] p-7 flex flex-col justify-between gap-10"
                style={{ minHeight: "260px" }}
              >
                <p className="text-charcoal text-base leading-relaxed font-light">
                  "{t.testimony}"
                </p>

                <div className="flex flex-col">
                  <span className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </span>
                  <span className="text-charcoal opacity-60 text-xs">
                    {t.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
