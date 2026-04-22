import { RevealLine, StaggerContainer, StaggerItem } from "@/components/motion";
import { servicios } from "@/utils/constants";

export default function ServiciosSection() {
  return (
    <section className="w-full bg-porcelain flex justify-center px-20 py-20">
      <div className="max-w-300 w-full flex flex-col gap-15">
        <div>
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal"
          >
            Servicios
          </RevealLine>
          <h2 className="text-charcoal text-[48px] font-medium leading-[1.2] mt-4 max-w-200">
            <RevealLine delay={0.12}>Soluciones de imagen </RevealLine>
            <RevealLine delay={0.18}>para cada necesidad</RevealLine>
          </h2>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.2}
          className="flex gap-5"
        >
          {servicios.map((servicio) => (
            <StaggerItem
              key={servicio.title}
              className="flex-1 bg-white border-charcoal/15 px-6 py-6 flex flex-col gap-4 rounded-[5px]"
            >
              <p className="text-charcoal font-medium text-[20px]">
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
