export const GALLERY_QUERY = `*[_type == "gallery"][0]{
  cells[]{
    images[]{
      "src": image.asset->url,
      alt
    }
  }
}`;

export const TESTIMONIOS_QUERY = `*[_type == "testimony"] | order(_createdAt asc){
  name,
  "position": role,
  "testimony": content
}`;
