import { defineType, defineArrayMember, defineField } from "sanity";

export const trayectoryType = defineType({
  name: "trayectoria",
  title: "Trayectoria",
  type: "document",
  fields: [
    defineField({
      name: "empresasDescripcion",
      title: "Descripción — Empresas",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "empresasLogos",
      title: "Logos — Empresas",
      type: "array",
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

    defineField({
      name: "mediosDescripcion",
      title: "Descripción — Medios",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediosLogos",
      title: "Logos — Medios",
      type: "array",
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

    defineField({
      name: "eventosDescripcion",
      title: "Descripción — Eventos",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventosVideos",
      title: "Videos — Eventos",
      type: "array",
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
});
