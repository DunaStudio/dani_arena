import ProgramaCard from "@/components/ProgramasComponents/ProgramaCard";
import SectionText from "@/components/SectionText";
import { programasCardsData } from "@/utils/constants";

export default function ProgramasSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center p-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start ">
        <SectionText
          label="Programas destacados"
          title={`Procesos de\n transformación real`}
          orientation="left"
        />
        <div className="w-full flex gap-5 mt-15">
          {programasCardsData.map((programa) => (
            <ProgramaCard
              key={programa.title}
              label={programa.label}
              title={programa.title}
              text={programa.text}
              button_text={programa.button_text}
              url={programa.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
