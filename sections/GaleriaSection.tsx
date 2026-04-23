"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback } from "react";

import Imagen from "@/public/images/ParaQuien/bg.jpg";

import ImagenAfrica1 from "@/public/images/africa/foto1.jpeg";
import ImagenAfrica2 from "@/public/images/africa/foto2.jpg";
import ImagenAfrica3 from "@/public/images/africa/foto3.jpg";
import ImagenAfrica4 from "@/public/images/africa/foto4.jpg";

import ImagenVinoteca1 from "@/public/images/vinoteca/foto1.jpg";
import ImagenVinoteca2 from "@/public/images/vinoteca/foto2.jpg";
import ImagenVinoteca3 from "@/public/images/vinoteca/foto3.jpg";

import ImagenMarfilia1 from "@/public/images/marfilia/foto1.jpg";
import ImagenMarfilia2 from "@/public/images/marfilia/foto2.jpg";

import ImagenVarios1 from "@/public/images/varios/foto1.jpg";
import ImagenVarios2 from "@/public/images/varios/foto2.jpg";
import ImagenVarios3 from "@/public/images/varios/foto3.jpg";
import ImagenVarios4 from "@/public/images/varios/foto4.jpg";
import { RevealLine, StaggerContainer, StaggerItem } from "@/components/motion";

type ImageSrc = string | StaticImageData;

interface GalleryImage {
  src: ImageSrc;
  alt: string;
}

const CELLS: GalleryImage[][] = [
  [{ src: ImagenVarios4, alt: "Imagen 1" }],
  [
    { src: ImagenAfrica1, alt: "Imagen 2a" },
    { src: ImagenAfrica2, alt: "Imagen 2b" },
    { src: ImagenAfrica3, alt: "Imagen 2c" },
    { src: ImagenAfrica4, alt: "Imagen 2d" },
  ],
  [{ src: ImagenVarios1, alt: "Imagen 3" }],
  [
    { src: ImagenMarfilia1, alt: "Imagen 4a" },
    { src: ImagenMarfilia2, alt: "Imagen 4b" },
  ],
  [{ src: ImagenVarios2, alt: "Imagen 5" }],
  [
    { src: ImagenVinoteca1, alt: "Imagen 6a" },
    { src: ImagenVinoteca2, alt: "Imagen 6b" },
    { src: ImagenVinoteca3, alt: "Imagen 6c" },
  ],
  [{ src: ImagenVarios3, alt: "Imagen 7" }],
  [{ src: Imagen, alt: "Imagen 8" }],
];

const CELL_CLASSES = [
  "col-span-2",
  "col-span-4 col-start-3",
  "col-span-3 col-start-7",
  "col-span-3 col-start-10",
  "col-span-3 row-start-2",
  "col-span-2 col-start-4 row-start-2",
  "col-span-5 col-start-6 row-start-2",
  "col-span-2 col-start-11 row-start-2",
];

const CELL_CLASES_MOBILE = [
  "col-span-2",
  "col-span-4 col-start-3",
  "col-span-3 row-start-2",
  "col-span-3 col-start-4 row-start-2",
  "col-span-6 row-start-3",
  "col-span-4 row-start-4",
  "col-span-2 col-start-5 row-start-4",
  "col-span-6 row-start-5",
];

interface CarouselCellProps {
  images: GalleryImage[];
  className: string;
  onOpen: (src: ImageSrc, alt: string) => void;
  intervalMs?: number;
}

function CarouselCell({
  images,
  className,
  onOpen,
  intervalMs = 3000,
}: CarouselCellProps) {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);
  const [next, setNext] = useState(0);
  const isCarousel = images.length > 1;

  const goTo = useCallback(
    (nextIndex: number, direction: "left" | "right") => {
      if (sliding) return;
      setNext(nextIndex);
      setSliding(direction);
      setTimeout(() => {
        setIndex(nextIndex);
        setSliding(null);
      }, 350);
    },
    [sliding],
  );

  const advance = useCallback(() => {
    goTo((index + 1) % images.length, "left");
  }, [goTo, index, images.length]);

  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(advance, intervalMs);
    return () => clearInterval(id);
  }, [isCarousel, advance, intervalMs]);

  const current = images[index];
  const nextImg = images[next];

  const currentExit = sliding === "left" ? "-100%" : "100%";
  const nextEnter = sliding === "left" ? "100%" : "-100%";

  return (
    <div
      className={`relative overflow-hidden h-50 rounded-[5px] cursor-pointer group ${className}`}
      onClick={() => !sliding && onOpen(current.src, current.alt)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transition: sliding
            ? "transform 350ms cubic-bezier(0.4,0,0.2,1)"
            : "none",
          transform: sliding ? `translateX(${currentExit})` : "translateX(0)",
          willChange: "transform",
        }}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {sliding && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "transform 350ms cubic-bezier(0.4,0,0.2,1)",
            transform: "translateX(0)",
            animation: `slideIn-${sliding} 350ms cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        >
          <style>{`
            @keyframes slideIn-left {
              from { transform: translateX(100%); }
              to   { transform: translateX(0); }
            }
            @keyframes slideIn-right {
              from { transform: translateX(-100%); }
              to   { transform: translateX(0); }
            }
          `}</style>
          <Image
            src={nextImg.src}
            alt={nextImg.alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
          />
        </svg>
      </div>

      {isCarousel && (
        <div
          className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? "left" : "right")}
              aria-label={`Ir a imagen ${i + 1}`}
              style={{
                height: 8,
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition:
                  "width 300ms cubic-bezier(0.4,0,0.2,1), background-color 300ms",
                width: i === index ? 28 : 8,
                backgroundColor:
                  i === index ? "white" : "rgba(255,255,255,0.5)",
                backdropFilter: "blur(4px)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface LightboxProps {
  src: ImageSrc | null;
  alt: string;
  onClose: () => void;
}

function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="relative"
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          width: "900px",
          height: "600px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}

export default function GaleriaSection() {
  const [lightbox, setLightbox] = useState<{
    src: ImageSrc;
    alt: string;
  } | null>(null);

  const openLightbox = useCallback((src: ImageSrc, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <>
      <div className="bg-porcelain w-full flex items-center justify-center p-6 md:p-20">
        <div className="max-w-300 w-full flex flex-col justify-center items-start">
          <RevealLine
            delay={0}
            className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal"
          >
            Galería
          </RevealLine>

          <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium text-left leading-[1.2] mt-4">
            <RevealLine delay={0.08}>Registros que</RevealLine>
            <RevealLine delay={0.16}>capturan mi trabajo</RevealLine>
          </h2>

          <StaggerContainer
            staggerDelay={0.08}
            initialDelay={0.2}
            className="grid grid-cols-6 grid-rows-5 gap-5 w-full mt-5 md:hidden"
          >
            {CELLS.map((images, i) => (
              <StaggerItem key={i} className={CELL_CLASES_MOBILE[i]}>
                <CarouselCell
                  key={i}
                  images={images}
                  className=""
                  onOpen={openLightbox}
                  intervalMs={3000 + i * 400}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            staggerDelay={0.08}
            initialDelay={0.2}
            className="grid-cols-12 grid-rows-2 gap-4 w-full mt-5 hidden md:grid"
          >
            {CELLS.map((images, i) => (
              <StaggerItem key={i} className={CELL_CLASSES[i]}>
                <CarouselCell
                  key={i}
                  images={images}
                  className={CELL_CLASSES[i]}
                  onOpen={openLightbox}
                  intervalMs={3000 + i * 400}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={closeLightbox}
      />
    </>
  );
}
