import { RevealLine, StaggerContainer, StaggerItem } from "@/components/motion";
import { servicios } from "@/utils/constants";

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="w-full bg-porcelain flex justify-center py-12 md:py-20 md:px-20"
    >
      <div className="max-w-300 w-full flex flex-col gap-10 md:gap-15">
        <div className="px-6 md:px-0">
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase tracking-[0.25em] text-xs lg:text-sm font-normal"
          >
            Servicios
          </RevealLine>
          <h2 className="text-charcoal text-[28px] md:text-[36px] xl:text-[48px] font-medium leading-[1.2] mt-4 max-w-200">
            <RevealLine delay={0.12}>Otras formas de</RevealLine>
            <RevealLine delay={0.18}>trabajar juntos</RevealLine>
          </h2>
        </div>

        <div className="md:hidden flex gap-4 mx-6 overflow-x-auto snap-x snap-mandatory px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {servicios.map((servicio) => (
            <div
              key={servicio.title}
              className="snap-start shrink-0 w-72 bg-white p-4 lg:p-10 flex flex-col gap-4 rounded-[5px]"
            >
              <p className="text-charcoal font-medium text-[16px] md:text-[20px]">
                {servicio.title}
              </p>
              <p className="text-charcoal opacity-70 font-light text-sm flex-1 text-pretty">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.2}
          className="hidden md:grid grid-cols-3 grid-rows-2 lg:flex gap-5"
        >
          {servicios.map((servicio) => (
            <StaggerItem
              key={servicio.title}
              className="flex-1 bg-white p-6 flex flex-col gap-4 rounded-[5px]"
            >
              <p className="text-charcoal font-medium text-[16px] md:text-[18px]">
                {servicio.title}
              </p>
              <p className="text-charcoal opacity-70 font-light text-sm flex-1 text-pretty">
                {servicio.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
