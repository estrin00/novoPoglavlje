import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logonp.jpg";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    `text-yellow hover:text-white font-bold px-4 py-2 rounded-lg ${
      location.pathname === path ? "border-b-2 border-yellow" : ""
    }`;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center bg-blue text-yellow h-auto p-4 md:p-6 sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
        
      </div>

      
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-yellow text-3xl"
        >
          {isMenuOpen ? "✖" : "☰"} 
        </button>
      </div>

    
      <div
        className={`md:flex md:space-x-6 md:ml-10 md:flex-row md:static absolute left-0 right-0 top-16 md:top-0 bg-blue flex flex-col justify-center items-center space-y-4 md:space-y-0 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link to="/" className={navLinkClass("/")} onClick={handleLinkClick}>
          NASLOVNICA
        </Link>
        <Link to="/about" className={navLinkClass("/about")} onClick={handleLinkClick}>
          O NAMA
        </Link>
        <Link to="/program" className={navLinkClass("/program")} onClick={handleLinkClick}>
          PROGRAM
        </Link>
        <Link to="/contact" className={navLinkClass("/contact")} onClick={handleLinkClick}>
          KONTAKT
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
