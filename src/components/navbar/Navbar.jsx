import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/data";
import { useState } from "react";
import { icons } from "../../assets/icons";

export default function Navbar({ onClickMobile }) {
  const ChevronIcon = icons.Chevron;
  const [linkOpen, setLinkOpen] = useState(true);

  const handleOnClick = () => {
    setLinkOpen((prev) => !prev);
  };

  return (
    <nav>
      <ul className="space-y-1">
        {navLinks.map((item) => (
          <li key={item.label}>
            {/**item colapsable */}
            {item.children ? (
              <>
                <button
                  onClick={handleOnClick}
                  aria-expanded={linkOpen}
                  aria-controls="projects-submenu"
                  className="flex items-center gap-2 w-full text-left text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-current"
                >
                  <span>{item.label}</span>
                  <ChevronIcon open={linkOpen} />
                </button>

                {/* muestra el submenu */}
                <ul
                  id="projects-submenu"
                  className={`ml-4  space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    linkOpen
                      ? "max-h-40 opacity-100 translate-y-0 mt-2"
                      : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {/* items del submenu */}
                  {item.children.map((child) => (
                    <li
                      key={child.to}
                      className={`transition-all duration-300 delay-75 ${
                        linkOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      <NavLink
                        to={child.to}
                        onClick={onClickMobile}
                        className={({ isActive }) =>
                          `block text-sm transition-opacity ${
                            isActive
                              ? "opacity-100 text-slate-950 font-semibold"
                              : "opacity-50 hover:opacity-80"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // item simple
              <NavLink
                to={item.to}
                onClick={onClickMobile}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest transition-opacity ${
                    isActive
                      ? "opacity-100 text-slate-950 font-semibold"
                      : "opacity-60 hover:opacity-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
