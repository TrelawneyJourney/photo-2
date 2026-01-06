import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProjectDetail from "../../pages/ProjectDetail";

export default function LayoutContainer() {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-10 px-5">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet location={background || location} />
        {background && <ProjectDetail />}
      </main>
    </div>
  );
}
