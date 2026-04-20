import SectionText from "@/components/SectionText";
import Image from "next/image";
import Imagen from "@/public/images/ParaQuien/bg.jpg";

export default function GaleriaSection() {
  return (
    <div className="bg-porcelain w-full flex items-center justify-center p-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-start ">
        <SectionText
          label="Galería"
          title={`Registros que \n capturan mi trabajo`}
          orientation="left"
        />

        <div className="grid grid-cols-12 grid-rows-2 gap-4 w-full mt-15">
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-2">
            <Image
              src={Imagen}
              alt="Imagen 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-4 col-start-3">
            <Image
              src={Imagen}
              alt="Imagen 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-3 col-start-7">
            <Image
              src={Imagen}
              alt="Imagen 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-3 col-start-10">
            <Image
              src={Imagen}
              alt="Imagen 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-3 row-start-2">
            <Image
              src={Imagen}
              alt="Imagen 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-2 col-start-4 row-start-2">
            <Image
              src={Imagen}
              alt="Imagen 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-5 col-start-6 row-start-2">
            <Image
              src={Imagen}
              alt="Imagen 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative overflow-hidden h-50 rounded-[5px] col-span-2 col-start-11 row-start-2">
            <Image
              src={Imagen}
              alt="Imagen 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
