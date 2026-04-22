import Image from "next/image";
import { ParaQuienCardProps } from "@/utils/types";

export default function ParaQuienCard({
  icon,
  title,
  description,
}: ParaQuienCardProps) {
  return (
    <div className="bg-white rounded-[5px] p-5 z-10 group hover:bg-charcoal transition-all ease-in-out duration-150 cursor-pointer">
      <div className="rounded-full bg-porcelain p-3 w-max flex flex-col">
        <Image
          src={icon}
          alt="Icon"
          className="object-contain w-7 h-7 group-hover:scale-120 transition-all ease-in-out duration-150"
        />
      </div>
      <p className="font-medium text-charcoal text-[16px] mt-5 group-hover:text-porcelain transition-all ease-in-out duration-150">
        {title}
      </p>
      <p className="text-charcoal opacity-70 font-light text-[14px] mt-2.5 group-hover:text-porcelain transition-all ease-in-out duration-150">
        {description}
      </p>
    </div>
  );
}
