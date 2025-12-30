import { createBrowserRouter } from "react-router-dom";
import LayoutContainer from "../components/layout/LayoutContainer";

import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    element: <LayoutContainer />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects/:slug", element: <ProjectDetail /> },

      { path: "/contact", element: <Contact /> },
    ],
  },
]);
