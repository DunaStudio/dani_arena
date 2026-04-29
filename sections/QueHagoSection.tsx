import {
  FadeUp,
  RevealLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

const cards = [
  {
    number: "01",
    title: "Identidad",
    description:
      "La base de toda proyección. Definir quién sos, qué representás y desde dónde querés posicionarte.",
  },
  {
    number: "02",
    title: "Comunicación",
    description:
      "No es solo lo que decís, sino cómo, cuándo y para quién. Construcción de un mensaje claro, coherente y alineado a tu rol.",
  },
  {
    number: "03",
    title: "Lenguaje corporal",
    description:
      "El cuerpo como canal de percepción. Gestualidad, postura y movimiento al servicio de tu posicionamiento.",
  },
  {
    number: "04",
    title: "Presencia",
    description:
      "La forma en la que ocupás los espacios. Tu impacto en reuniones, entornos profesionales y escenarios de visibilidad.",
  },
  {
    number: "05",
    title: "Color estratégico",
    description:
      "El color como herramienta de comunicación. Aplicado a identidad personal y marca para reforzar percepción e intención.",
  },
  {
    number: "06",
    title: "Marca personal",
    description:
      "La integración de todos los elementos en una identidad sólida, reconocible y consistente en el tiempo.",
  },
];

export default function QueHagoSection() {
  return (
    <section
      id="que-hago"
      className="w-full bg-white flex justify-center px-6 md:px-20 py-12 md:py-20"
    >
      <div className="max-w-300 w-full flex flex-col gap-10 md:gap-15">
        <div className="flex flex-col items-start gap-0">
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal"
          >
            Que hago
          </RevealLine>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium leading-[1.2] mt-4 text-pretty">
              <RevealLine delay={0.12}>La imagen como sistema</RevealLine>
              <RevealLine delay={0.18}>de posicionamiento</RevealLine>
            </h2>
            <div className="flex-1 flex flex-col gap-5 md:pt-2">
              <FadeUp
                delay={0.28}
                className="text-charcoal/70 opacity-70 font-light text-sm lg:text-md"
              >
                Desarrollo la identidad y la imagen estratégica de personas que
                lideran, para que su presencia esté alineada con su nivel de
                decisión e influencia. No trabajo sobre la apariencia. Trabajo
                sobre la percepción.
              </FadeUp>
              <FadeUp
                delay={0.36}
                className="text-charcoal/70 opacity-70 font-light text-sm lg:text-md"
              >
                A través de un enfoque integral —que combina identidad,
                comunicación y psicología del color— construyo sistemas
                coherentes que proyectan con claridad quién sos, qué representás
                y cómo querés ser percibido/a.
              </FadeUp>
            </div>
          </div>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.2}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
        >
          {cards.map((card) => (
            <StaggerItem
              key={card.number}
              className="bg-porcelain rounded-[10px] p-6 lg:p-10 flex flex-col gap-4 md:gap-5"
            >
              <p className="text-charcoal opacity-30 font-light text-base">
                {card.number}
              </p>
              <p className="text-charcoal font-medium  text-[16px] lg:text-[20px]">
                {card.title}
              </p>
              <p className="text-charcoal opacity-70 font-light text-sm">
                {card.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
