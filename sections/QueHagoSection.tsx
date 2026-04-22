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
      "Definir quién sos y qué querés proyectar como base de toda decisión de imagen.",
  },
  {
    number: "02",
    title: "Comunicación",
    description:
      "Cómo lo decís, en qué contexto y con qué herramientas lo expresás.",
  },
  {
    number: "03",
    title: "Lenguaje corporal",
    description:
      "Tu postura, gestos y movimientos también son mensajes que comunican.",
  },
  {
    number: "04",
    title: "Presencia",
    description:
      "El impacto que generás en una sala, en una pantalla, en cada interacción.",
  },
  {
    number: "05",
    title: "Color estratégico",
    description:
      "La psicología del color aplicada a la comunicación personal y de marca.",
  },
  {
    number: "06",
    title: "Marca personal",
    description:
      "La alineación de todos los elementos para crear una presencia reconocible.",
  },
];

export default function QueHagoSection() {
  return (
    <section className="w-full bg-white flex justify-center px-20 py-20">
      <div className="max-w-300 w-full flex flex-col gap-15">
        <div className="flex flex-col items-start gap-0">
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal"
          >
            Que hago
          </RevealLine>
          <div className="grid grid-cols-2 gap-5">
            <h2 className="text-charcoal text-[48px] font-medium leading-[1.2] mt-4">
              <RevealLine delay={0.12}>La imagen como un</RevealLine>
              <RevealLine delay={0.18}>lenguaje completo</RevealLine>
            </h2>
            <div className="flex-1 flex flex-col gap-5 pt-2">
              <FadeUp
                delay={0.28}
                className="text-charcoal opacity-70 font-light text-base"
              >
                No se trata solo de cómo te vestís, sino de cómo comunicás, te
                expresás y te posicionás. A través de un enfoque integral,
                acompaño procesos donde se alinean la identidad, la comunicación
                y la presencia.
              </FadeUp>
              <FadeUp
                delay={0.36}
                className="text-charcoal opacity-70 font-light text-base"
              >
                También trabajo con empresas, integrando la imagen personal de
                líderes y equipos con la identidad de marca. El resultado es una
                imagen auténtica, estratégica y coherente, que genera confianza,
                credibilidad y posicionamiento.
              </FadeUp>
            </div>
          </div>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.2}
          className="grid grid-cols-3 gap-5"
        >
          {cards.map((card) => (
            <StaggerItem
              key={card.number}
              className="bg-porcelain rounded-[10px] p-10 flex flex-col gap-5"
            >
              <p className="text-charcoal opacity-30 font-light text-base">
                {card.number}
              </p>
              <p className="text-charcoal font-medium text-[20px]">
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
