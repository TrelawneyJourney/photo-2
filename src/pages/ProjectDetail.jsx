import { useParams } from "react-router-dom";
import { allProjects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const photos = allProjects.flatMap((p) => p.photos);
  const photo = photos.find((p) => p.slug === slug);
  if (!photo) return <p>Foto no encontrada</p>;

  return (
    <div>
      <img src={photo.src} alt={photo.alt} />
    </div>
  );
}
{
  /**cambiar ruta navigate */
}
