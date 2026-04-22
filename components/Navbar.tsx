"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Sobre mí", href: "#" },
  { label: "Que hago?", href: "#" },
  { label: "Servicios", href: "#" },
  { label: "Para quién?", href: "#" },
  { label: "Programas", href: "#" },
  { label: "Testimonios", href: "#" },
  { label: "Trayectoria", href: "#" },
];

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
            <Link
              key={link.label}
              href={link.href}
              className="text-charcoal text-xs xl:text-sm font-light hover:text-goldenOrange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="#contacto"
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
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-charcoal text-base font-light py-3 border-b border-porcelain/60 hover:text-goldenOrange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 bg-charcoal text-white text-sm rounded-full py-4 px-7 hover:bg-goldenOrange transition-colors text-center"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
