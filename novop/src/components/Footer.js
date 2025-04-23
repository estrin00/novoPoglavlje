import React from "react";
import logo from "../assets/logonp.jpg"; // prilagodi put ako treba

const Footer = () => {
  return (
    <footer className="bg-blue text-yellow px-6 py-10 flex justify-between items-start flex-wrap">
      
      {/* Lijeva strana */}
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
        <h3 className="font-inter text-lg">Udruga DICTUM, FACTUM! </h3>
        <p> Obala Fabrika 5 <br />21450, Hvar</p>
      </div>

      {/* Sredina */}
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-white">Naslovnica</a></li>
          <li><a href="/about" className="hover:text-white">O nama</a></li>
          <li><a href="/program" className="hover:text-white">Program</a></li>
          <li><a href="/contact" className="hover:text-white">Kontakt</a></li>
        </ul>
      </div>

      {/* Desna strana - logo */}
      <div className="w-full sm:w-1/3 flex justify-end">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
