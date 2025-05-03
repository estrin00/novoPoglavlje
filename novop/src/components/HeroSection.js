import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hv.jpg";

const HeroSection = () => {

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 font-semibold">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg max-w-[90%] sm:max-w-xl">
          Novo poglavlje počinje!
        </h1>

        <p className="text-sm sm:text-base md:text-xl mb-6 max-w-[90%] sm:max-w-2xl drop-shadow">
          Okupljamo se oko zajedničke ideje – da naš Hvar može bolje. Vjerujemo u
          dijalog, konkretne promjene i politiku koja polazi od stvarnog života
          stanovnika. Ne nudimo velika obećanja, nego stvarne korake prema
          ravnoteži, pravednosti i dugoročnoj održivosti Hvara kao mjesta za
          život.
        </p>

        <Link
        to="/program"
          className="group bg-yellow hover:bg-blue text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold rounded transition-all duration-500 inline-flex items-center justify-center"
        >
          <span className="flex items-center justify-center">
            NAŠ PROGRAM
            <span className="hidden group-hover:inline-block ml-2 transition-all duration-300">
              »»
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
