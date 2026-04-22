import Link from "next/link";
import Image from "next/image";

const servicios = [
  "Asesoría Personal",
  "Empresas y productos",
  "Campañas Políticas",
  "Identidad Gráfica",
  "Capacitaciones",
  "Asesoría por hora",
  "Servicio a proveedores",
];

const navegacion = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mi", href: "/sobre-mi" },
  { label: "Que hago?", href: "/que-hago" },
  { label: "Servicios", href: "/servicios" },
  { label: "Para quién?", href: "/para-quien" },
  { label: "Programas", href: "/programas" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Trayectoria", href: "/trayectoria" },
];

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <footer className="w-full flex justify-center px-20 py-16 bg-charcoal">
      <div className="max-w-300 w-full flex flex-col gap-12 ">
        <div className="grid grid-cols-4 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <Image
              src="/logo2.svg"
              alt="Dani Arena"
              width={90}
              height={56}
              quality={100}
            />

            <p className="footer-link font-300 leading-[1.6] max-w-65 text-porcelain/70 text-sm">
              Consultoría de imagen estratégica para profesionales, empresas y
              campañas políticas. Transformando presencias para maximizar
              impacto.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 transition-colors duration-200 hover:border-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 transition-colors duration-200 hover:border-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex justify-center items-center w-10 h-10 rounded-full border border-white/35 transition-colors duration-200 hover:border-white"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-porcelain font-medium text-sm tracking-wide">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {servicios.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-porcelain/70 font-light text-sm transition-all ease-in-out duration-200 hover:text-goldenOrange"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-porcelain font-medium text-sm tracking-wide">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navegacion.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-porcelain/70 font-light text-sm transition-all ease-in-out duration-200 hover:text-goldenOrange"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-porcelain font-medium text-sm tracking-wide">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:daniarena@gmail.com"
                  className="text-porcelain/70 font-light text-sm transition-all ease-in-out duration-200 hover:text-goldenOrange"
                >
                  daniarena@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+541234567890"
                  className="text-porcelain/70 font-light text-sm transition-all ease-in-out duration-200 hover:text-goldenOrange"
                >
                  +54 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
