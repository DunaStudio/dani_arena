"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Que hago?", href: "#que-hago" },
  { label: "Servicios", href: "#servicios" },
  { label: "Para quién?", href: "#para-quien" },
  { label: "Programas", href: "#programas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Trayectoria", href: "#trayectoria" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  const navbar = document.querySelector("nav");
  if (!el) return;

  const navbarHeight = navbar?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full bg-white px-6 md:px-20 py-4 flex items-center justify-between border-b border-porcelain">
        <Link href="/">
          <Image src="/logo.svg" alt="Dani Arena" width={90} height={56} />
        </Link>

        <div className="hidden lg:flex items-center gap-3 xl:gap-9">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-charcoal text-xs xl:text-sm font-light hover:text-goldenOrange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contacto");
          }}
          className="hidden lg:block bg-charcoal text-white text-sm rounded-full py-3 px-7 hover:bg-goldenOrange transition-colors whitespace-nowrap"
        >
          Contacto
        </a>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden bg-white border-b border-porcelain overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen py-6" : "max-h-0"}`}
      >
        <div className="flex flex-col px-6 gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setTimeout(() => scrollTo(link.href), 300);
              }}
              className="text-charcoal text-base font-light py-3 border-b border-porcelain/60 hover:text-goldenOrange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setTimeout(() => scrollTo("#contacto"), 300);
            }}
            className="mt-4 bg-charcoal text-white text-sm rounded-full py-4 px-7 hover:bg-goldenOrange transition-colors text-center"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
