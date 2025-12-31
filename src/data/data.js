import { allProjects } from "./projects";

export const navLinks = [
  {
    label: "Proyectos",
    children: allProjects.map((project) => ({
      label: project.title,
      to: `/projects/${project.slug}`,
    })),
  },
  {
    label: "Acerca de mi",
    to: "/about",
  },
  {
    label: "Contacto",
    to: "/contact",
  },
];
