import { createBrowserRouter } from "react-router-dom";
import LayoutContainer from "../components/layout/LayoutContainer";

import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter(
  [
    {
      element: <LayoutContainer />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects/:slug", element: <ProjectDetail /> },

        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  { basename: "/photo-2/" }
);
