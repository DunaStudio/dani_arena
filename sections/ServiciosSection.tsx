const servicios = [
  {
    title: "Imagen personal",
    description:
      "Procesos para alinear tu imagen con tu identidad y objetivos. Trabajo integral desde la base.",
    cta: "Ver programas",
    url: "#",
  },
  {
    title: "Empresas y liderazgo",
    description:
      "Consultoría y capacitaciones para equipos y organizaciones. Imagen, cultura y comunicación alineadas.",
    cta: "Trabajar con mi equipo",
    url: "#",
  },
  {
    title: "Workshops y charlas",
    description:
      "Espacios para trabajar imagen, comunicación y presencia en formatos grupales y empresariales.",
    cta: "Consultar disponibilidad",
    url: "#",
  },
  {
    title: "Asesorías express",
    description:
      "Soluciones puntuales para momentos clave. Sesiones focalizadas con resultado inmediato.",
    cta: "Agendar sesión",
    url: "#",
  },
  {
    title: "Colorimetría",
    description:
      "Análisis de tonos para tu imagen natural. Herramientas precisas para una armonía visual.",
    cta: "Ver propuesta",
    url: "#",
  },
];

export default function ServiciosSection() {
  return (
    <section className="w-full bg-porcelain flex justify-center px-20 py-20">
      <div className="max-w-300 w-full flex flex-col gap-15">
        <div>
          <p className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal">
            Servicios
          </p>
          <h2 className="text-charcoal text-[48px] font-medium leading-[1.2] mt-4 max-w-[520px]">
            Soluciones de imagen para cada necesidad
          </h2>
        </div>

        <div className="flex gap-5">
          {servicios.map((servicio) => (
            <div
              key={servicio.title}
              className="flex-1 bg-white border border-charcoal/15 px-6 py-6 flex flex-col gap-4 rounded-sm"
            >
              <p className="text-charcoal font-medium text-[20px]">
                {servicio.title}
              </p>
              <p className="text-charcoal opacity-70 font-light text-sm flex-1">
                {servicio.description}
              </p>
              <a
                href={servicio.url}
                className="text-goldenOrange uppercase tracking-[0.15em] text-xs font-normal hover:opacity-70 transition-opacity"
              >
                {servicio.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
