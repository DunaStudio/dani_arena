import ParaQuienCard from "@/components/ParaQuienComponents/ParaQuienCard";
import SectionText from "@/components/SectionText";
import { paraQuienCardsData } from "@/utils/constants";

export default function ParaQuienSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center p-20">
      <div className="max-w-300 flex flex-col justify-center items-center">
        <SectionText
          label="Para quién"
          title="Trabajando con personas que buscan más que verse bien"
          text="Mi enfoque está en profesionales y organizaciones que entienden que la imagen es una inversión estratégica. No es vanidad — es visibilidad."
          orientation="center"
        />
        <div className="grid grid-cols-2 gap-5 mt-15">
          {paraQuienCardsData.map((card) => (
            <ParaQuienCard
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
