import { type SchemaTypeDefinition } from "sanity";
import { galleryType } from "./galleryType";
import { testimonyType } from "./testimonyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType, testimonyType],
};
