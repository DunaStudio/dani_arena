"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { FadeIn, RevealLine } from "@/components/motion";
import useEmblaCarousel from "embla-carousel-react";

type TabKey = "empresas" | "medios" | "eventos";

interface TabContent {
  description: string;
  logos: { name: string; src: string }[];
  videos?: { src: string; title?: string; poster?: string }[];
}

interface TrayectoriaData {
  empresas: TabContent;
  medios: TabContent;
  eventos: TabContent;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "empresas", label: "Empresas" },
  { key: "medios", label: "Medios" },
  { key: "eventos", label: "Eventos" },
];

function MarqueeLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center shrink-0 px-5 h-25">
      <Image
        src={src}
        alt={name}
        width={160}
        height={100}
        quality={75}
        className="object-contain opacity-70 md:saturate-0 hover:opacity-100 md:hover:saturate-100 transition-all duration-200 max-h-16 w-auto"
      />
    </div>
  );
}

function Marquee({ logos }: { logos: { name: string; src: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef<number>(0);
  const SPEED = 0.5;

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      xRef.current -= SPEED;
      if (Math.abs(xRef.current) >= halfWidth) {
        xRef.current = 0;
      }
      track.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [logos]);

  const doubled = [...logos, ...logos];

  return (
    <div className="max-w-4xl overflow-hidden mx-auto">
      <div ref={trackRef} style={{ display: "flex", willChange: "transform" }}>
        {doubled.map((logo, i) => (
          <MarqueeLogo key={i} name={logo.name} src={logo.src} />
        ))}
      </div>
    </div>
  );
}

function VideosCarousel({
  videos,
}: {
  videos: { src: string; title?: string; poster?: string }[];
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: false,
    dragFree: true,
  });

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 justify-center">
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl bg-black shadow-lg shrink-0"
            style={{
              width: "220px",
              aspectRatio: "9 / 16",
              opacity: 0,
              animation: `logoIn 0.35s ease forwards`,
              animationDelay: `${i * 80}ms`,
            }}
          >
            <video
              src={video.src}
              title={video.title}
              poster={video.poster}
              controls
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrayectoriaSection({
  data,
}: {
  data: TrayectoriaData;
}) {
  const [activeTab, setActiveTab] = useState<TabKey>("empresas");
  const [displayTab, setDisplayTab] = useState<TabKey>("empresas");
  const [contentVisible, setContentVisible] = useState(true);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    const container = containerRef.current;
    if (!el || !container) return;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setIndicatorStyle({ left: eRect.left - cRect.left, width: eRect.width });
  }, [activeTab]);

  const handleTabChange = (key: TabKey) => {
    if (key === activeTab) return;

    setActiveTab(key);

    setContentVisible(false);

    setTimeout(() => {
      setDisplayTab(key);
      setContentVisible(true);
    }, 200);
  };

  const content = data[displayTab];

  return (
    <>
      <style>{`
        @keyframes logoIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section
        id="trayectoria"
        className="bg-porcelain w-full flex items-center justify-center py-12 px-6 md:py-24 md:px-8"
      >
        <div className=" w-full flex flex-col items-center gap-12">
          <div className="w-full justify-center items-center max-w-4xl">
            <RevealLine
              delay={0}
              className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal text-center"
            >
              Trayectoria
            </RevealLine>

            <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium text-center leading-[1.2] mt-4">
              <RevealLine delay={0.08}>Experiencia que </RevealLine>
              <RevealLine delay={0.16}>respalda el trabajo</RevealLine>
            </h2>
          </div>

          <FadeIn className="w-full max-w-4xl">
            <div
              ref={containerRef}
              className="relative flex items-center w-full border-b border-charcoal/20"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    ref={(el) => {
                      tabRefs.current[tab.key] = el;
                    }}
                    onClick={() => handleTabChange(tab.key)}
                    className="flex-1 text-center px-3 md:px-8 py-3 text-xs md:text-sm"
                    style={{
                      color: isActive ? "#504B4D" : "#888",
                      fontWeight: isActive ? 600 : 400,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}

              <span
                className="absolute bottom-0 h-0.5 bg-charcoal rounded-sm"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  transition:
                    "left 0.38s cubic-bezier(0.4, 0, 0.2, 1), width 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          </FadeIn>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3rem",
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            <p
              className="text-center text-charcoal text-base leading-relaxed max-w-xl"
              style={{ fontWeight: 300 }}
            >
              {content.description}
            </p>

            {content.videos && content.videos.length > 0 ? (
              <VideosCarousel videos={content.videos} />
            ) : (
              <div key={displayTab} className="w-full">
                <Marquee logos={content.logos} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
