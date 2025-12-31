import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function LayoutContainer() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-10 px-5">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
