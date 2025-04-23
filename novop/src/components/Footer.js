import React from "react";
import logo from "../assets/logonp.jpg"; 
const Footer = () => {
  return (
    <footer className="bg-blue text-yellow px-6 py-10 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
        <h3 className="font-inter text-lg">Udruga DICTUM, FACTUM!</h3>
        <p>Obala Fabrika 5 <br />21450, Hvar</p>
      </div>

      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-orange">Naslovnica</a></li>
          <li><a href="/about" className="hover:text-orange">O nama</a></li>
          <li><a href="/program" className="hover:text-orange">Program</a></li>
          <li><a href="/contact" className="hover:text-orange">Kontakt</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
