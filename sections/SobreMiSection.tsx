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
      className="w-full bg-porcelain flex justify-center px-6 md:px-20 pt-12 md:pt-20 pb-0"
    >
      <div className="max-w-300 w-full flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-20">
        <div className="flex-1 flex flex-col pb-10 md:pb-24">
          <RevealLine delay={0.06}>
            <p className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal">
              Sobre mí
            </p>
          </RevealLine>

          <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium leading-[1.2] mt-4">
            <RevealLine delay={0.12}>Hola, soy Dani Arena.</RevealLine>
            <RevealLine delay={0.18}>Tu aliada estratégica.</RevealLine>
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-charcoal/70 font-light text-sm lg:text-md leading-relaxed max-w-xl">
            <FadeUp delay={0.24}>
              <p>
                Acompaño a personas y organizaciones a construir una presencia
                que no solo se vea bien, sino que trabaje a su favor. Mi enfoque
                combina la estética con la estrategia para lograr resultados
                tangibles.
              </p>
            </FadeUp>
          </div>

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
                  <span className="text-charcoal/70 font-light text-sm lg:text-md">
                    {item}
                  </span>
                </li>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="relative w-full md:w-115 h-80 md:h-145 shrink-0">
          <div className="absolute bottom-0 left-0 right-0 h-[125%] md:h-[135%]">
            <Image
              src="/images/SobreMi/SobreMi.png"
              alt="Dani Arena"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
