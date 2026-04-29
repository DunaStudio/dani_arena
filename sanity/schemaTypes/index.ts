import { type SchemaTypeDefinition } from "sanity";
import { galleryType } from "./galleryType";
import { testimonyType } from "./testimonyType";
import { trayectoryType } from "./trajectoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType, testimonyType, trayectoryType],
};
