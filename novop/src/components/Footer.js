import React from "react";
import {Link } from "react-router-dom";
import logo from "../assets/logonp.jpg"; 
const Footer = () => {
  return (
    <footer className="bg-blue text-yellow px-6 py-10 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
        <h3 className="font-inter text-white font-semibold ">FOR – I LITI, I ZIMI!</h3>
        <p>VIJEĆE ODLUČUJE </p>
        
      </div>

      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-white">Naslovnica</a></li>
          <li><a href="/about" className="hover:text-white">O nama</a></li>
          <li><a href="/program" className="hover:text-white">Program</a></li>
          <li><a href="/contact" className="hover:text-white">Kontakt</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-end pt-4 sm:pt-0">
        <p className="mb-2 font-semibold px-4 text-white">LISTA N°6</p>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-28 md:h-32 w-auto" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
