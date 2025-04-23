import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logonp.jpg";

const NavBar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `text-yellow hover:text-orange font-bold px-4 py-2 rounded-lg ${
      location.pathname === path ? "border-b-2 border-yellow" : ""
    }`;

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-blue text-yellow h-auto md:h-24 p-4 md:p-6 space-y-4 md:space-y-0">
      {/* Logo */}
      <div className="h-20 flex items-center">
        <img src={logo} alt="Logo" className="h-full w-auto" />
      </div>

      {/* Navigacija */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-yellow">
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
