import { TestimonioCardProps } from "@/utils/types";

export default function TestimonioCard({
  name,
  position,
  testimony,
}: TestimonioCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{position}</p>
      <p>{testimony}</p>
    </div>
  );
}
