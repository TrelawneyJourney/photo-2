import Navbar from "../navbar/Navbar";
import FooterNavbar from "../navbar/FooterNavbar";
import Logo from "../navbar/Logo";
import { useEffect, useRef, useState } from "react";
import { icons } from "../../assets/icons";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const MenuIcon = icons.Menu;
  const CrossIcon = icons.Cross;
  const menuRef = useRef();

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOut = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOut);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="flex justify-between items-center md:hidden px-2">
        <div className="px-4">
          <Logo />
        </div>
        <button onClick={toggleMenu} className="z-50 p-4">
          {mobileOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden flex justify-end items-start p-4"
          onClick={toggleMenu}
        ></div>
      )}

      <aside
        ref={menuRef}
        className={`fixed inset-y-0 left-0 z-40 w-64 p-6 space-y-5 bg-white duration-300 ease-out md:static md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Logo />
        <Navbar onClickMobile={() => setMobileOpen(false)} />
        <FooterNavbar />
      </aside>
    </>
  );
}
