import { createBrowserRouter } from "react-router-dom";
import LayoutContainer from "../components/layout/LayoutContainer";

import Home from "../pages/Home";
import PhotoModal from "../pages/PhotoModal";
import ProjectsPage from "../pages/ProjectsPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter(
  [
    {
      element: <LayoutContainer />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },

        { path: "/projects/:slug", element: <ProjectsPage /> },
      ],
    },
    { path: "/photoitem/:slug", element: <PhotoModal /> },
  ],
  { basename: "/photo-2/" },
);
