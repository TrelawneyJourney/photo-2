import Navbar from "../navbar/Navbar";
import FooterNavbar from "../navbar/FooterNavbar";
import { useState } from "react";
import { icons } from "../../assets/icons";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const MenuIcon = icons.Menu;

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={toggleMenu} className="md:hidden p-4">
          <MenuIcon />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 p-6 space-y-10 bg-white duration-300 ease-out md:static md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Navbar onClickMobile={() => setMobileOpen(false)} />
        <FooterNavbar />
      </aside>
    </>
  );
}
