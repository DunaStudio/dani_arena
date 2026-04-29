"use client";

import { useState } from "react";
import { RevealLine } from "@/components/motion";
import { servicios } from "@/utils/constants";

export default function ServiciosSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="servicios"
      className="w-full bg-porcelain flex justify-center py-12 md:py-20 md:px-20"
    >
      <div className="max-w-300 w-full flex flex-col gap-10 md:gap-15">
        <div className="px-6 md:px-0 flex flex-col items-center text-center">
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal"
          >
            Servicios
          </RevealLine>
          <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium leading-[1.2] mt-4">
            <RevealLine delay={0.12}>Otras formas de</RevealLine>
            <RevealLine delay={0.18}>trabajar juntos</RevealLine>
          </h2>
          <p className="text-charcoal opacity-60 font-light text-sm md:text-base mt-4 max-w-xl text-pretty">
            La asesoría de imagen va más allá de la estética. Es estrategia,
            comunicación y la construcción de una presencia que abre puertas.
          </p>
        </div>

        <div className="px-6 md:px-0 flex flex-col">
          {servicios.map((servicio, index) => {
            const isOpen = openIndex === index;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={servicio.title}
                className="border-t border-charcoal/15 last:border-b"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-start gap-6 md:gap-10 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-charcoal/30 text-sm font-light w-6 shrink-0 mt-0.5">
                    {num}
                  </span>
                  <span className="text-charcoal font-medium text-[15px] md:text-[17px] flex-1 md:w-56 md:flex-none">
                    {servicio.title}
                  </span>
                  <span className="hidden md:block text-charcoal/70 font-light text-sm flex-1 text-pretty pr-10">
                    {servicio.description}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 mt-0.5 ${isOpen ? "bg-charcoal text-white" : "bg-transparent text-charcoal/40 border border-charcoal/20"}`}
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-12 md:pl-82 pr-12 pb-8">
                    <p className="text-charcoal/70 font-light text-sm leading-relaxed text-pretty mb-4">
                      {servicio.longDescription}
                    </p>

                    {servicio.itemsTitle && (
                      <p className="text-charcoal/70 font-medium text-sm mb-3">
                        {servicio.itemsTitle}
                      </p>
                    )}

                    {servicio.items && (
                      <ul className="flex flex-col gap-2 mb-4">
                        {servicio.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-charcoal/70 font-light text-sm"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-goldenOrange shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {servicio.footer && (
                      <p className="text-charcoal/70 font-light text-sm leading-relaxed text-pretty">
                        {servicio.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
