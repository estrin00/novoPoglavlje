import React from "react";
import logo from "../assets/logonp.jpg"; 
const Footer = () => {
  return (
    <footer className="bg-blue text-yellow px-6 py-10 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
        <h3 className="font-inter text-white">FOR – I LITI, I ZIMI</h3>
        <p>… jer BRAVURA JE ŽIVIT OD LAVURA </p>
      </div>

      <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-white">Naslovnica</a></li>
          <li><a href="/about" className="hover:text-white">O nama</a></li>
          <li><a href="/program" className="hover:text-white">Program</a></li>
          <li><a href="/contact" className="hover:text-white">Kontakt</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
