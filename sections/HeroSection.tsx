"use client";
import videoPoster from "@/public/images/heroVideoImg.png";
import { useState } from "react";
import Image from "next/image";
import { FadeIn, FadeUp, RevealLine } from "@/components/motion";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="inicio"
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
          <RevealLine delay={0.08}>Tu imagen habla</RevealLine>
        </h1>

        <FadeUp
          delay={0.28}
          className="text-charcoal/70 text-center text-xs lg:text-base font-light mt-6 max-w-130"
        >
          Trabajo la imagen como una herramienta estratégica de comunicación
          para personas, líderes y empresas que buscan coherencia, presencia y
          posicionamiento
        </FadeUp>

        <FadeIn
          delay={0.4}
          className="w-full mt-14 rounded-[10px] overflow-hidden aspect-video relative"
        >
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative block group"
              aria-label="Reproducir video"
            >
              <Image
                src={videoPoster}
                alt="Vista previa del video"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay oscuro sutil */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              {/* Botón play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 text-charcoal ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
            >
              <source
                src="https://res.cloudinary.com/djwaj0qea/video/upload/v1776882151/hero_qukk12.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
