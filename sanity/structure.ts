import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // 🔥 TRAYECTORIA AGRUPADA — cada ítem abre su documento singleton directamente
      S.listItem()
        .title("Trayectoria")
        .child(
          S.list()
            .title("Trayectoria")
            .items([
              S.listItem().title("Empresas").child(
                S.editor()
                  .id("trayectoriaEmpresas")
                  .schemaType("trayectoriaEmpresas")
                  .documentId("trayectoriaEmpresas"), // ID fijo = singleton
              ),
              S.listItem().title("Medios").child(
                S.editor()
                  .id("trayectoriaMedios")
                  .schemaType("trayectoriaMedios")
                  .documentId("trayectoriaMedios"), // ID fijo = singleton
              ),
              S.listItem().title("Eventos").child(
                S.editor()
                  .id("trayectoriaEventos")
                  .schemaType("trayectoriaEventos")
                  .documentId("trayectoriaEventos"), // ID fijo = singleton
              ),
            ]),
        ),

      // 👇 Resto de documentos, excluyendo los 3 de trayectoria y el viejo
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "trayectoriaEmpresas",
            "trayectoriaMedios",
            "trayectoriaEventos",
            "trayectoria", // excluir el schema viejo si todavía existe
          ].includes(item.getId()!),
      ),
    ]);
