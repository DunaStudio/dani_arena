import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className="w-full bg-white px-20 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-porcelain">
      <Link href="/">
        <Image src="/logo.svg" alt="Dani Arena" width={90} height={56} />
      </Link>
      <div className="flex items-center gap-5 xl:gap-9">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-charcoal text-sm font-light hover:text-goldenOrange transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <a
        href="#contacto"
        className="bg-charcoal text-white text-sm rounded-full py-3 px-7 hover:bg-goldenOrange transition-colors whitespace-nowrap"
      >
        Contacto
      </a>
    </nav>
  );
}
