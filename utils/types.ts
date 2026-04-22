import { StaticImageData } from "next/image";

export interface SectionTextProps {
  label: string;
  title: string;
  text?: string;
  orientation?: "left" | "center";
}

export interface ParaQuienCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface ProgramaCardProps {
  label: string;
  title: string;
  text: string;
  button_text: string;
  url: string;
}

export interface TestimonioCardProps {
  name: string;
  position: string;
  testimony: string;
}
