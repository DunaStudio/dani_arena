"use client";

import { useRef, useState } from "react";
import {
  FadeUp,
  RevealLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import ParaQuienCard from "@/components/ParaQuienComponents/ParaQuienCard";
import { paraQuienCardsData } from "@/utils/constants";

export default function ParaQuienSection() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.82 + 16));
    setCurrent(Math.min(index, paraQuienCardsData.length - 1));
  };

  const scrollToCard = (i: number) => {
    scrollRef.current?.children[i]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setCurrent(i);
  };

  return (
    <section
      id="para-quien"
      className="bg-porcelain w-full flex items-center justify-center px-6 md:px-20 py-12"
    >
      <div className="max-w-300 w-full flex flex-col justify-center items-center">
        <RevealLine delay={0}>
          <p className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal">
            Para quién
          </p>
        </RevealLine>

        <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px]  font-medium text-center leading-[1.2] mt-4">
          <RevealLine delay={0.08}>
            Trabajo con personas y organizaciones
          </RevealLine>
          <RevealLine delay={0.16}>que buscan más que verse bien</RevealLine>
        </h2>

        <FadeUp
          delay={0.28}
          className="text-charcoal/70 text-center text-xs lg:text-base font-light mt-6 max-w-160"
        >
          Profesionales, lideres y equipos que entienden que la imagen no es un
          detalle sino una herramienta estratégica para comunicar, diferenciarse
          y sostener su lugar.
        </FadeUp>

        <FadeUp delay={0.38} className="mt-6 flex flex-col items-center gap-4">
          <div className="w-10 h-px bg-goldenOrange/60" />
          <p className="text-charcoal text-center text-xs lg:text-sm font-light italic tracking-wide">
            No es vanidad, es visibilidad. No es estética, es percepción.
          </p>
        </FadeUp>

        <div className="md:hidden w-full mt-10">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {paraQuienCardsData.map((card, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[82%] bg-white rounded-[5px] p-5 flex flex-col gap-4"
              >
                <div className="rounded-full bg-porcelain p-3 w-max">
                  <img
                    src={card.icon.src}
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <p className="font-medium text-charcoal text-[16px]">
                  {card.title}
                </p>
                <p className="text-charcoal opacity-70 font-light text-[14px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {paraQuienCardsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-charcoal w-5" : "bg-charcoal/25 w-1.5"}`}
              />
            ))}
          </div>
        </div>

        <StaggerContainer className="hidden md:grid grid-cols-4 gap-5 mt-15 w-full">
          {paraQuienCardsData.map((card, i) => (
            <StaggerItem key={i} className="h-full flex">
              <ParaQuienCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
