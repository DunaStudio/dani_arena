import { RevealLine, StaggerContainer, StaggerItem } from "@/components/motion";
import ProgramaCard from "@/components/ProgramasComponents/ProgramaCard";
import SectionText from "@/components/SectionText";
import { programasCardsData } from "@/utils/constants";

export default function ProgramasSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center px-6 md:px-20 py-12 md:py-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start">
        <RevealLine
          delay={0}
          className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal"
        >
          Programas destacados
        </RevealLine>

        <h2 className="text-charcoal text-[34px] md:text-[48px] font-medium text-left leading-[1.2] mt-4">
          <RevealLine delay={0.08}>Procesos de</RevealLine>
          <RevealLine delay={0.16}>transformación real</RevealLine>
        </h2>
        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.2}
          className="w-full flex flex-col md:flex-row gap-5 mt-5"
        >
          {programasCardsData.map((programa) => (
            <StaggerItem key={programa.title} className="flex-1">
              <ProgramaCard
                key={programa.title}
                label={programa.label}
                title={programa.title}
                text={programa.text}
                button_text={programa.button_text}
                url={programa.url}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
