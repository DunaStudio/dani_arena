import Image from "next/image";
import background from "@/public/images/ParaQuien/bg.jpg";
import { ParaQuienCardProps } from "@/utils/types";

export default function ParaQuienCard({
  number,
  title,
  description,
}: ParaQuienCardProps) {
  return (
    <div className="w-full p-4 h-100 max-h-125 flex flex-col justify-end relative rounded-[5px] overflow-hidden group">
      <Image
        src={background}
        alt="Background"
        fill
        className="object-cover group-hover:scale-105 transition-all ease-in-out duration-300"
      />
      <div className="bg-white rounded-[5px] p-5 z-10">
        <p className="font-light text-[20px] opacity-70 text-charcoal">
          {number}
        </p>
        <p className="font-medium text-charcoal text-[20px] mt-5">{title}</p>
        <p className="text-charcoal opacity-70 font-light text-[18px] mt-2.5">
          {description}
        </p>
      </div>
    </div>
  );
}
