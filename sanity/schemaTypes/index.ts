import { type SchemaTypeDefinition } from "sanity";
import { galleryType } from "./galleryType";
import { testimonyType } from "./testimonyType";
import { trayectoryType } from "./trajectoryType";
import { trayectoriaEmpresas } from "./trajectoriaEmpresasType";
import { trayectoriaMedios } from "./trajectoriaMediosType";
import { trayectoriaEventos } from "./trajectoriaEventosType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    galleryType,
    testimonyType,
    trayectoriaEmpresas,
    trayectoriaMedios,
    trayectoriaEventos,
  ],
};
