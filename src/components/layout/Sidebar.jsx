import { Link } from "react-router-dom";
import { navLinks } from "../../data/data";

export default function Sidebar() {
  return (
    <aside className="w-64 p-6">
      <nav className="space-y-6">
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              {item.children && (
                <ul className="ml-4 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.to}>
                      {child.label}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
