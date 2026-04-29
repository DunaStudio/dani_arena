import { defineType, defineArrayMember, defineField } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Galería",
  type: "document",
  fields: [
    defineField({
      name: "cells",
      title: "Celdas de la galería",
      type: "array",
      validation: (Rule) =>
        Rule.max(8).warning("La galería está diseñada para 8 celdas."),
      of: [
        defineArrayMember({
          name: "cell",
          title: "Celda",
          type: "object",
          preview: {
            select: {
              images: "images",
            },
            prepare({ images }) {
              const count = images?.length ?? 0;
              return {
                title:
                  count === 1 ? "1 imagen" : `${count} imágenes (carrusel)`,
                media: images?.[0]?.asset,
              };
            },
          },
          fields: [
            defineField({
              name: "images",
              title: "Imágenes",
              description:
                "Añadí una imagen para celda estática, o más de una para que funcione como carrusel.",
              type: "array",
              validation: (Rule) =>
                Rule.min(1).error("Cada celda necesita al menos una imagen."),
              of: [
                defineArrayMember({
                  name: "galleryImage",
                  title: "Imagen",
                  type: "object",
                  preview: {
                    select: {
                      alt: "alt",
                      media: "image",
                    },
                    prepare({ alt, media }) {
                      return { title: alt || "Sin descripción", media };
                    },
                  },
                  fields: [
                    defineField({
                      name: "image",
                      title: "Imagen",
                      type: "image",
                      options: { hotspot: true },
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "alt",
                      title: "Texto alternativo",
                      type: "string",
                      description:
                        "Descripción breve de la imagen (importante para accesibilidad y SEO).",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
