import { client } from "@/sanity/lib/client";
import { TRAYECTORIA_QUERY } from "@/sanity/lib/queries";
import TrayectoriaSection from "./TrayectoriaSection";

export default async function TrayectoriaSectionWrapper() {
  const data = await client.fetch(
    TRAYECTORIA_QUERY,
    {},
    { next: { revalidate: 60 } },
  );
  return <TrayectoriaSection data={data} />;
}
