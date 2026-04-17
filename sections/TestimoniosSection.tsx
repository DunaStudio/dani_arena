import SectionText from "@/components/SectionText";

export default function TestimoniosSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center p-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start ">
        <SectionText
          label="Testimonios"
          title={`Resultados de lo que \n logramos trabajando juntos`}
          orientation="left"
        />
      </div>
    </div>
  );
}
