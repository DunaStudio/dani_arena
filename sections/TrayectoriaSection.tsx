"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import logo1 from "@/public/images/EmpresasLogos/logo1.png";
import logo2 from "@/public/images/EmpresasLogos/logo2.png";
import logo3 from "@/public/images/EmpresasLogos/logo3.png";
import logo4 from "@/public/images/EmpresasLogos/logo4.png";
import logo5 from "@/public/images/EmpresasLogos/logo5.png";
import logo6 from "@/public/images/EmpresasLogos/logo6.png";
import logo7 from "@/public/images/EmpresasLogos/logo7.png";

import medio01 from "@/public/images/MediosLogos/TodoNormal.png";
import medio02 from "@/public/images/MediosLogos/huarpe.png";
import medio03 from "@/public/images/MediosLogos/mananasCompartidas.png";
import medio04 from "@/public/images/MediosLogos/radioLaVoz.png";
import medio05 from "@/public/images/MediosLogos/teLoTengoQueDecir.png";
import medio06 from "@/public/images/MediosLogos/yoTeInvito.png";

import { FadeIn, RevealLine } from "@/components/motion";

type TabKey = "empresas" | "medios" | "eventos";

interface TabContent {
  description: string;
  logos: { name: string; src: string }[];
  videos?: { src: string; title?: string }[];
}

const tabsData: Record<TabKey, TabContent> = {
  empresas: {
    description:
      "Trabajé con profesionales, equipos y organizaciones que buscan fortalecer su comunicación desde la imagen.",
    logos: [
      { name: "Paula Rey", src: logo1.src },
      { name: "Florencia Egarrat", src: logo2.src },
      { name: "Oeste Andino", src: logo3.src },
      { name: "Idraet", src: logo4.src },
      { name: "Nails House", src: logo5.src },
      { name: "Angela Durand", src: logo6.src },
      { name: "Africa", src: logo7.src },
    ],
  },

  medios: {
    description:
      "Apariciones en medios gráficos, digitales y audiovisuales compartiendo perspectivas sobre imagen e identidad.",
    logos: [
      { name: "Todo Normal", src: medio01.src },
      { name: "Huarpe", src: medio02.src },
      { name: "Mañanas Compartidas", src: medio03.src },
      { name: "Radio La Voz", src: medio04.src },
      { name: "Te Lo Tengo Que Decir", src: medio05.src },
      { name: "Yo Te Invito", src: medio06.src },
    ],
  },
  eventos: {
    description:
      "Participé como oradora y consultora en eventos, conferencias y encuentros del mundo corporativo y creativo.",
    logos: [],
    videos: [
      { src: "/reel-porota.mp4", title: "Evento Porota" },
      { src: "/reel-sushi-club.mp4", title: "Evento Sushi Club" },
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "empresas", label: "Empresas" },
  { key: "medios", label: "Medios" },
  { key: "eventos", label: "Eventos" },
];

function MarqueeLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center shrink-0 px-10 h-20">
      <Image
        src={src}
        alt={name}
        width={160}
        height={80}
        quality={75}
        className="object-contain opacity-70 md:saturate-0 hover:opacity-100 md:hover:saturate-100 transition-all duration-200 max-h-16 w-auto"
      />
    </div>
  );
}

function Marquee({ logos }: { logos: { name: string; src: string }[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="w-full overflow-hidden">
      <div
        style={{ display: "flex", animation: "marquee 10s linear infinite" }}
      >
        {doubled.map((logo, i) => (
          <MarqueeLogo key={i} name={logo.name} src={logo.src} />
        ))}
      </div>
    </div>
  );
}

export default function TrayectoriaSection() {
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

  const content = tabsData[displayTab];

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

      <div className="bg-porcelain w-full flex items-center justify-center py-12 px-6 md:py-24 md:px-8">
        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
          <div className="w-full justify-center items-center">
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

          <FadeIn className="w-full">
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
                    className="flex-1 text-center px-8 py-3 text-sm"
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
              <div className="w-full flex flex-wrap justify-center gap-6">
                {content.videos.map((video, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl bg-black shadow-lg"
                    style={{
                      width: "min(220px, 45%)",
                      aspectRatio: "9 / 16",
                      opacity: 0,
                      animation: `logoIn 0.35s ease forwards`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <video
                      src={video.src}
                      title={video.title}
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div key={displayTab} className="w-full">
                <Marquee logos={content.logos} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
