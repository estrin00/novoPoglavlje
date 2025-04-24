import React from "react";
import heroImage from "../assets/hv.jpg"; // zamijeni s pravim pathom slike

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-center bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Novo poglavlje počinje!
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl drop-shadow">
        Okupljamo se oko zajedničke ideje – da naš otok može bolje. Vjerujemo u dijalog, konkretne promjene i politiku koja polazi od stvarnog života stanovnika. Ne nudimo velika obećanja, nego stvarne korake prema ravnoteži, pravednosti i dugoročnoj održivosti Hvara kao mjesta za život. </p>
        <button className="bg-orange text-white px-6 py-2 hover:bg-yellow transition duration-300 text-sm sm:text-base font-inter font-bold">
          NAŠ PROGRAM
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
