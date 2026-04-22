import { ProgramaCardProps } from "@/utils/types";

export default function ProgramaCard({
  label,
  title,
  text,
  button_text,
  url,
}: ProgramaCardProps) {
  return (
    <div className="bg-white rounded-[5px] p-6 md:p-10 flex flex-col items-end gap-5 h-full">
      <div className="w-full">
        <p className="text-goldenOrange font-normal text-[12px] tracking-[25%] uppercase">
          {label}
        </p>
        <p className="text-charcoal font-medium text-[24px] lg:text-[32px] md:text-[40px] mt-5 md:mt-6.25">
          {title}
        </p>
        <p className="text-charcoal font-light text-[14px] lg:text-[16px] mt-2">
          {text}
        </p>
      </div>
      <a
        className="bg-charcoal text-white rounded-full py-3 px-5 lg:py-5 lg:px-10 hover:bg-goldenOrange transition-colors w-full md:w-max text-center mt-6 md:mt-12.5 text-sm"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full">{button_text}</button>
      </a>
    </div>
  );
}
