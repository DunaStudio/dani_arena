import { defineType, defineArrayMember, defineField } from "sanity";

export const trayectoriaEventos = defineType({
  name: "trayectoriaEventos",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videos",
      title: "Videos",
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

  preview: {
    prepare() {
      return {
        title: "Eventos",
      };
    },
  },
});
