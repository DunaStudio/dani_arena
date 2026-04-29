import {
  FadeUp,
  RevealLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import Image from "next/image";

const checkItems = [
  "Más de 20 años de experiencia en consultoría de imagen integral",
  "Formación en diseño aplicada a la construcción de identidad y percepción",
  "Enfoque transversal: trabajo con personas, empresas y contextos de liderazgo",
  "Metodología estratégica, adaptada a cada perfil, contexto y objetivo",
  "Integración de imagen, comunicación y psicología del color como sistema",
  "Procesos que generan claridad, coherencia y un posicionamiento diferencial",
];

export default function SobreMiSection() {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-porcelain flex justify-center px-6 md:px-20 pt-12 md:pt-20 pb-10 md:pb-16"
    >
      <div className="max-w-300 w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 flex flex-col">
          <RevealLine delay={0.06}>
            <p className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal">
              Sobre mí
            </p>
          </RevealLine>

          <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium leading-[1.2] mt-4">
            <span className="md:hidden">
              <RevealLine delay={0.12}>Soy Dani Arena —</RevealLine>
              <RevealLine delay={0.16}>transformo imagen en</RevealLine>
              <RevealLine delay={0.2}>posicionamiento estratégico</RevealLine>
            </span>

            <span className="hidden md:block">
              <RevealLine delay={0.12}>Soy Dani Arena —</RevealLine>
              <RevealLine delay={0.18}>transformo imagen en</RevealLine>
              <RevealLine delay={0.24}>posicionamiento estratégico</RevealLine>
            </span>
          </h2>

          <FadeUp
            delay={0.3}
            className="text-charcoal opacity-50 font-light text-sm lg:text-md mt-3 italic"
          >
            Para personas que lideran y entienden que la percepción también se gestiona.
          </FadeUp>

          <FadeUp
            delay={0.36}
            className="text-charcoal opacity-70 font-light text-sm lg:text-md mt-6"
          >
            Soy especialista en imagen estratégica con más de 20 años de
            experiencia, con formación en diseño y un enfoque integral que
            conecta identidad, comunicación y posicionamiento.
          </FadeUp>
          <FadeUp
            delay={0.42}
            className="text-charcoal opacity-70 font-light text-sm lg:text-md mt-4"
          >
            A lo largo de los años observé un patrón constante: muchas personas
            y organizaciones desarrollan su mensaje, pero no gestionan cómo se
            ven. Mi trabajo es alinear lo que sos, lo que hacés y lo que
            proyectás, para que todo comunique en la misma dirección.
          </FadeUp>
          <StaggerContainer
            className="mt-10 flex flex-col gap-5"
            staggerDelay={0.08}
            initialDelay={0.2}
          >
            {checkItems.map((item) => (
              <StaggerItem key={item}>
                <li className="flex items-center gap-4">
                  <div className="bg-goldenOrange/20 aspect-square rounded-full w-6 flex justify-center items-center">
                    <span className="text-goldenOrange text-sm leading-none">
                      ✓
                    </span>
                  </div>
                  <span className="text-charcoal font-light text-sm lg:text-md">
                    {item}
                  </span>
                </li>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="relative w-full md:w-115 h-96 md:h-145 shrink-0">
          <div className="absolute inset-0 top-[10%] rounded-[10px] overflow-hidden">
            <Image
              src="/images/SobreMi/FondoSobreMi.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 md:-bottom-16 left-0 right-0 h-[115%] md:h-[135%]">
            <Image
              src="/images/SobreMi/SobreMi.png"
              alt="Dani Arena"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
