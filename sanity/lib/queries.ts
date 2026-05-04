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

export const TRAYECTORIA_QUERY = `{
  "empresas": *[_type == "trayectoriaEmpresas" && _id == "trayectoriaEmpresas"][0] {
    "description": descripcion,
    "logos": logos[]{
      name,
      "src": logo.asset->url
    }
  },
  "medios": *[_type == "trayectoriaMedios" && _id == "trayectoriaMedios"][0] {
    "description": descripcion,
    "logos": logos[]{
      name,
      "src": logo.asset->url
    }
  },
  "eventos": *[_type == "trayectoriaEventos" && _id == "trayectoriaEventos"][0] {
    "description": descripcion,
    "videos": videos[]{
      title,
      "src": video.asset->url,
      "poster": poster.asset->url
    }
  }
}`;
