import React from "react";
import { Link, useLocation } from "react-router-dom"; // Koristi Link za navigaciju

const NavBar = () => {
  const location = useLocation(); // Dohvaća trenutnu lokaciju

  const navLinkClass = (path) =>
    `text-zuta hover:text-indigo font-bold px-4 py-2 rounded-lg ${
      location.pathname === path ? "border-b-2 border-zuta" : ""
    }`;

  return (
    <nav className="flex justify-between items-center bg-modra text-zuta p-6">
      {/* Logo u lijevom kutu */}
      <div className="text-left font-bold text-2xl">Logo </div>

      {/* Gumbi u desnom kutu */}
      <div className="flex space-x-6 text-zuta">
        <Link to="/" className={navLinkClass("/")}>
          NASLOVNICA
        </Link>
        <Link to="/about" className={navLinkClass("/about")}>
          O NAMA
        </Link>
        <Link to="/program" className={navLinkClass("/program")}>
          PROGRAM
        </Link>
        <Link to="/contact" className={navLinkClass("/contact")}>
          KONTAKT
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
