import { defineType, defineArrayMember, defineField } from "sanity";

export const trayectoryType = defineType({
  name: "trayectoria",
  title: "Trayectoria",
  type: "document",

  fieldsets: [
    {
      name: "empresas",
      title: "Empresas",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "medios",
      title: "Medios",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "eventos",
      title: "Eventos",
      options: { collapsible: true, collapsed: true },
    },
  ],

  fields: [
    // -------- EMPRESAS --------
    defineField({
      name: "empresasDescripcion",
      title: "Descripción — Empresas",
      type: "text",
      fieldset: "empresas",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "empresasLogos",
      title: "Logos — Empresas",
      type: "array",
      fieldset: "empresas",
      of: [
        defineArrayMember({
          type: "object",
          preview: {
            select: { title: "name", media: "logo" },
          },
          fields: [
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: false },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // -------- MEDIOS --------
    defineField({
      name: "mediosDescripcion",
      title: "Descripción — Medios",
      type: "text",
      fieldset: "medios",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediosLogos",
      title: "Logos — Medios",
      type: "array",
      fieldset: "medios",
      of: [
        defineArrayMember({
          type: "object",
          preview: {
            select: { title: "name", media: "logo" },
          },
          fields: [
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: false },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // -------- EVENTOS --------
    defineField({
      name: "eventosDescripcion",
      title: "Descripción — Eventos",
      type: "text",
      fieldset: "eventos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventosVideos",
      title: "Videos — Eventos",
      type: "array",
      fieldset: "eventos",
      of: [
        defineArrayMember({
          type: "object",
          preview: {
            select: { title: "title" },
          },
          fields: [
            defineField({
              name: "title",
              title: "Título del evento",
              type: "string",
            }),
            defineField({
              name: "video",
              title: "Video",
              type: "file",
              options: { accept: "video/*" },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "poster",
              title: "Imagen de portada",
              type: "image",
              options: { hotspot: false },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Trayectoria",
        subtitle: "Gestión de logos, medios y eventos",
      };
    },
  },
});
