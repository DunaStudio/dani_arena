"use client";

import { FadeIn, FadeUp, RevealLine } from "@/components/motion";

export default function HeroSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-6 md:px-20 pt-12 md:pt-20 pb-0"
      style={{
        background: "linear-gradient(to bottom, white 72%, #fbf9f6 72%)",
      }}
    >
      <div className="max-w-300 w-full flex flex-col items-center">
        <RevealLine delay={0}>
          <p className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal">
            Consultoría de imagen integral
          </p>
        </RevealLine>

        <h1 className="text-charcoal text-[28px] md:text-[60px] font-medium text-center leading-[1.2] mt-4 max-w-200">
          <RevealLine delay={0.08}>Tu imagen es tu mejor</RevealLine>
          <RevealLine delay={0.16}>herramienta estratégica</RevealLine>
        </h1>

        <FadeUp
          delay={0.28}
          className="text-charcoal/70 text-center text-xs lg:text-base font-light mt-6 max-w-130"
        >
          Asesoría de imagen para profesionales, empresas y campañas políticas.
          Porque la imagen no es solo estética, es comunicación, presencia y
          estrategia.
        </FadeUp>

        <FadeIn
          delay={0.4}
          className="w-full mt-14 rounded-[10px] overflow-hidden aspect-video"
        >
          <video className="w-full h-full object-cover" controls playsInline>
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </FadeIn>
      </div>
    </section>
  );
}
