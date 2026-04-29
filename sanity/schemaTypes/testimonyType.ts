import { defineType, defineArrayMember, defineField } from "sanity";

export const testimonyType = defineType({
  name: "testimony",
  title: "Testimonios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required().error("El nombre es obligatorio."),
    }),
    defineField({
      name: "role",
      title: "Rol o relación",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("El rol o relación es obligatorio."),
    }),
    defineField({
      name: "content",
      title: "Contenido del testimonio",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("El contenido es obligatorio."),
    }),
  ],
});
