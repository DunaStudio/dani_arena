import { defineType, defineArrayMember, defineField } from "sanity";

export const trayectoriaMedios = defineType({
  name: "trayectoriaMedios",
  title: "Medios",
  type: "document",
  fields: [
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Logos",
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
  ],

  preview: {
    prepare() {
      return {
        title: "Medios",
      };
    },
  },
});
