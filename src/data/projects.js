import { estudioPhotos } from "./photos/estudio";
import { galaPhotos } from "./photos/gala";
import { marPhotos } from "./photos/mar";
import { nochePhotos } from "./photos/noche";

export const allProjects = [
  {
    id: 1,
    slug: "gala",
    title: "Gala",
    photos: galaPhotos,
  },
  {
    id: 2,
    slug: "mar",
    title: "Mar",
    photos: marPhotos,
  },
  {
    id: 3,
    slug: "noche",
    title: "Noche",
    photos: nochePhotos,
  },
  {
    id: 4,
    slug: "estudio",
    title: "Estudio",
    photos: estudioPhotos,
  },
];
