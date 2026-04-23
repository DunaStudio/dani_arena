import Link from "next/link";
import Image from "next/image";

const navegacion = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Que hago?", href: "#que-hago" },
  { label: "Servicios", href: "#servicios" },
  { label: "Para quién?", href: "#para-quien" },
  { label: "Programas", href: "#programas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Trayectoria", href: "#trayectoria" },
];

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.5"
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="9"
        width="4"
        height="12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal">
      <div className="md:hidden flex flex-col items-center gap-8 px-6 py-12">
        <Image
          src="/logo2.png"
          alt="Dani Arena"
          width={90}
          height={56}
          quality={100}
        />

        <div className="flex flex-col items-center gap-3 w-full">
          <h4 className="text-white font-medium text-sm">Navegación</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-1">
            {navegacion.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h4 className="text-white font-medium text-sm">Contacto</h4>
          <a
            href="mailto:daniarena@gmail.com"
            className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-colors"
          >
            daniarena@gmail.com
          </a>
          <a
            href="tel:+5492645448138"
            className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-colors"
          >
            +54 9 2645 44-8138
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h4 className="text-white font-medium text-sm">Redes Sociales</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61556523500815"
              aria-label="Facebook"
              className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/daniarena_asesoria/"
              target="_blank"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dani-arena/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center px-20 py-16">
        <div className="max-w-300 w-full flex flex-col gap-12">
          <div className="grid grid-cols-4 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <Image
                src="/logo2.svg"
                alt="Dani Arena"
                width={90}
                height={56}
                quality={100}
              />
              <p className="font-light leading-[1.6] max-w-65 text-porcelain/70 text-sm">
                Consultoría de imagen estratégica para profesionales, empresas y
                campañas políticas. Transformando presencias para maximizar
                impacto.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors duration-200"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/daniarena_asesoria/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors duration-200"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/dani-arena/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 hover:border-white transition-colors duration-200"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5 col-start-3">
              <h4 className="text-white font-medium text-sm">Navegación</h4>
              <ul className="flex flex-col gap-3">
                {navegacion.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-all ease-in-out duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-sm">Contacto</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:daniarena@gmail.com"
                    className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-all ease-in-out duration-200"
                  >
                    daniarena@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5492645448138"
                    className="text-porcelain/70 font-light text-sm hover:text-goldenOrange transition-all ease-in-out duration-200"
                  >
                    +54 9 2645 44-8138
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5 flex items-center justify-center w-full px-4 text-center">
        <p className="text-[12px] text-secondary font-light flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-charcoal/70">
          <span>
            © {new Date().getFullYear()} Todos los derechos reservados
          </span>
          <span className="text-goldenOrange">/</span>
          <span className="text-charcoal/70">
            Desarrollado por{" "}
            <a
              href="https://www.instagram.com/dunastudiosj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal font-semibold tracking-wider hover:text-goldenOrange transition-colors duration-300"
            >
              Duna Studio
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
