"use client";

import { useState, useRef, useLayoutEffect } from "react";
import SectionText from "@/components/SectionText";
import Image from "next/image";
import logo1 from "@/public/images/EmpresasLogos/logo1.png";
import logo2 from "@/public/images/EmpresasLogos/logo2.png";
import logo3 from "@/public/images/EmpresasLogos/logo3.png";
import logo4 from "@/public/images/EmpresasLogos/logo4.png";
import logo5 from "@/public/images/EmpresasLogos/logo5.png";
import logo6 from "@/public/images/EmpresasLogos/logo6.png";
import logo7 from "@/public/images/EmpresasLogos/logo7.png";

type TabKey = "empresas" | "formacion" | "medios" | "eventos";

interface TabContent {
  description: string;
  logos: { name: string; src: string }[];
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
  formacion: {
    description:
      "Formé parte de programas académicos, talleres y espacios de aprendizaje donde la presencia es protagonista.",
    logos: [
      { name: "Makro", src: "/logos/makro.svg" },
      { name: "Fiat", src: "/logos/fiat.svg" },
      { name: "Porota", src: "/logos/porota.svg" },
      { name: "Banco San Juan", src: "/logos/banco-san-juan.svg" },
      { name: "Sushi Club", src: "/logos/sushiclub.svg" },
      { name: "Fiat", src: "/logos/fiat.svg" },
    ],
  },
  medios: {
    description:
      "Apariciones en medios gráficos, digitales y audiovisuales compartiendo perspectivas sobre imagen e identidad.",
    logos: [
      { name: "Sushi Club", src: "/logos/sushiclub.svg" },
      { name: "Banco San Juan", src: "/logos/banco-san-juan.svg" },
      { name: "Makro", src: "/logos/makro.svg" },
      { name: "Porota", src: "/logos/porota.svg" },
    ],
  },
  eventos: {
    description:
      "Participé como oradora y consultora en eventos, conferencias y encuentros del mundo corporativo y creativo.",
    logos: [
      { name: "Fiat", src: "/logos/fiat.svg" },
      { name: "Porota", src: "/logos/porota.svg" },
      { name: "Sushi Club", src: "/logos/sushiclub.svg" },
      { name: "Makro", src: "/logos/makro.svg" },
      { name: "Banco San Juan", src: "/logos/banco-san-juan.svg" },
      { name: "Fiat", src: "/logos/fiat.svg" },
      { name: "Makro", src: "/logos/makro.svg" },
      { name: "Porota", src: "/logos/porota.svg" },
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "empresas", label: "Empresas" },
  { key: "formacion", label: "Formación" },
  { key: "medios", label: "Medios" },
  { key: "eventos", label: "Eventos" },
];

function LogoItem({
  name,
  src,
  index,
}: {
  name: string;
  src: string;
  index: number;
}) {
  return (
    <div
      className="flex items-center justify-center relative h-36 aspect-square"
      style={{
        opacity: 0,
        animation: `logoIn 0.35s ease forwards`,
        animationDelay: `${index * 35}ms`,
      }}
    >
      <Image
        src={src}
        alt={name}
        fill
        className="max-h-50 max-w-full object-contain opacity-70 saturate-0 hover:opacity-100 transition-all duration-200 hover:saturate-100 scale-90 hover:scale-100"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          const parent = img.parentElement;
          if (parent && !parent.querySelector(".logo-fallback")) {
            const fallback = document.createElement("span");
            fallback.className =
              "logo-fallback text-[#3a3a3a] font-semibold tracking-wide text-sm text-center";
            fallback.style.fontFamily = "serif";
            fallback.style.opacity = "0.75";
            fallback.textContent = name;
            parent.appendChild(fallback);
          }
        }}
      />
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
      `}</style>

      <div className="bg-porcelain w-full flex items-center justify-center py-24 px-8">
        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
          <SectionText
            label="Trayectoria"
            title={`Experiencia que \n respalda el trabajo`}
            orientation="center"
          />

          <div className="w-full">
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
          </div>

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

            <div
              key={displayTab}
              className="w-full flex flex-wrap justify-center gap-4 "
            >
              {content.logos.map((logo, i) => (
                <LogoItem
                  key={`${displayTab}-${i}`}
                  name={logo.name}
                  src={logo.src}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
