import { ProgramaCardProps } from "@/utils/types";

export default function ProgramaCard({
  label,
  title,
  text,
  button_text,
  url,
}: ProgramaCardProps) {
  return (
    <div className="bg-white rounded-[5px] p-10 flex flex-col items-end gap-5">
      <div>
        <p className="text-goldenOrange font-normal text-[12px] tracking-[25%] uppercase">
          {label}
        </p>
        <p className="text-charcoal font-medium text-[40px] mt-6.25">{title}</p>
        <p className="text-charcoal font-light text-[16px] mt-2">{text}</p>
      </div>
      <a
        className="bg-charcoal text-white rounded-full py-5 px-10 hover:bg-goldenOrange transition-colors w-max mt-12.5 text-sm"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>{button_text}</button>
      </a>
    </div>
  );
}
