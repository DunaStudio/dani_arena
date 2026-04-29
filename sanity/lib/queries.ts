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

export const TRAYECTORIA_QUERY = `*[_type == "trayectoria"][0]{
  "empresas": {
    "description": empresasDescripcion,
    "logos": empresasLogos[]{
      name,
      "src": logo.asset->url
    }
  },
  "medios": {
    "description": mediosDescripcion,
    "logos": mediosLogos[]{
      name,
      "src": logo.asset->url
    }
  },
  "eventos": {
    "description": eventosDescripcion,
    "videos": eventosVideos[]{
      title,
      "src": video.asset->url,
      "poster": poster.asset->url
    }
  }
}`;
