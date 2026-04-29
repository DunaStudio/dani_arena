import { client } from "@/sanity/lib/client";
import { GALLERY_QUERY } from "@/sanity/lib/queries";
import GaleriaSection from "./GaleriaSection";
import type { GalleryImage } from "./GaleriaSection";

interface GalleryData {
  cells: { images: GalleryImage[] }[];
}

export default async function GaleriaSectionWrapper() {
  const data: GalleryData | null = await client.fetch(GALLERY_QUERY);
  const cells: GalleryImage[][] = data?.cells?.map((cell) => cell.images) ?? [];

  return <GaleriaSection cells={cells} />;
}
