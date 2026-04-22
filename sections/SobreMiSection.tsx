import {
  FadeUp,
  RevealLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import Image from "next/image";

const checkItems = [
  "Más de 10 años de experiencia en consultoría de imagen",
  "Enfoque integral: personal, empresarial y político",
  "Metodología adaptada a cada cliente y contexto",
  "Resultados medibles en presencia y percepción",
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
              <RevealLine delay={0.12}>Soy Dani Arena,</RevealLine>
              <RevealLine delay={0.16}>tu aliada en</RevealLine>
              <RevealLine delay={0.2}>imagen estratégica</RevealLine>
            </span>

            <span className="hidden md:block">
              <RevealLine delay={0.12}>Soy Dani Arena, tu aliada </RevealLine>
              <RevealLine delay={0.18}>en imagen estratégica</RevealLine>
            </span>
          </h2>

          <FadeUp
            delay={0.28}
            className="text-charcoal opacity-70 font-light text-sm lg:text-md mt-6"
          >
            Mi misión es democratizar la asesoría de imagen. No es un lujo
            exclusivo ni algo solo para mujeres interesadas en moda. Es una
            herramienta poderosa para cualquier persona o empresa que quiera
            comunicar mejor quién es y lo que ofrece.
          </FadeUp>
          <FadeUp
            delay={0.36}
            className="text-charcoal opacity-70 font-light text-sm lg:text-md mt-4"
          >
            Trabajo con un enfoque estratégico donde cada decisión de imagen
            tiene un propósito claro: conectar, persuadir y posicionar.
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
