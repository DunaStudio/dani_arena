import {
  FadeUp,
  RevealLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import ParaQuienCard from "@/components/ParaQuienComponents/ParaQuienCard";
import SectionText from "@/components/SectionText";
import { paraQuienCardsData } from "@/utils/constants";

export default function ParaQuienSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center px-20 py-5">
      <div className="max-w-300 flex flex-col justify-center items-center">
        <RevealLine delay={0}>
          <p className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal">
            Para quién
          </p>
        </RevealLine>

        <h2 className="text-charcoal text-[48px] font-medium text-center leading-[1.2] mt-4">
          <RevealLine delay={0.08}>Trabajando con personas que</RevealLine>
          <RevealLine delay={0.16}>buscan más que verse bien</RevealLine>
        </h2>

        <FadeUp
          delay={0.28}
          className="text-charcoal/70 text-center text-base font-light mt-6 max-w-130"
        >
          Mi enfoque está en profesionales y organizaciones que entienden que la
          imagen es una inversión estratégica. No es vanidad — es visibilidad.
        </FadeUp>
        <StaggerContainer className="grid grid-cols-4 gap-5 mt-15">
          {paraQuienCardsData.map((card, i) => (
            <StaggerItem key={i} className="h-full flex">
              <ParaQuienCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
