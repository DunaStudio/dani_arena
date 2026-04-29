import { client } from "@/sanity/lib/client";
import { TESTIMONIOS_QUERY } from "@/sanity/lib/queries";
import TestimoniosSection from "./TestimoniosSection";

export interface TestimonioData {
  name: string;
  position: string;
  testimony: string;
}

export default async function TestimoniosSectionWrapper() {
  const testimonios: TestimonioData[] =
    (await client.fetch(TESTIMONIOS_QUERY)) ?? [];
  return <TestimoniosSection testimonios={testimonios} />;
}
