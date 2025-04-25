import React from "react";
import heroImage from "../assets/hv.jpg";

const About = () => {
  return (
    <div className="relative w-full bg-cover bg-center bg-fixed text-white py-20 px-4 sm:px-6 lg:px-12 mb-auto"
         style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow">
          Naša politička stranka okuplja ljude koji vjeruju u bolje sutra za naš
          grad. Kroz dijalog, konkretne promjene i odlučne korake, mi ćemo
          raditi na stvaranju ravnoteže i pravednosti za sve građane Hvara.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow space-y-4">
          NOVO POGLAVLJE je građanska inicijativa koja okuplja ljude s vizijom Hvara kao grada po mjeri čovjeka. Okupljamo pojedince iz različitih područja života, ali sa zajedničkim ciljem: stvoriti bolju, pravedniju i skladniju budućnost za naš otok.
          <br /><br />
          Hvar je grad nevjerojatne ljepote, bogate povijesti i iznimnog potencijala. No, znamo da potencijal nije dovoljan – potrebna je odgovornost.
          <br /><br />
          Želimo grad koji njeguje održiv i odgovoran turizam, onaj koji poštuje lokalnu zajednicu, naš mir, kulturu i ritam života. Turizam koji obogaćuje, a ne narušava.
          <br /><br />
          Zalažemo se za transparentno upravljanje, za poticanje mladih, za očuvanje naše prirode, i za gradske odluke koje se donose u dijalogu s građanima. Vjerujemo u Hvar u kojem nema mjesta neredu, nego slozi i zajedničkom napretku.
          <br /><br />
          Novo poglavlje znači otvoriti novu stranicu – onu u kojoj se svi osjećamo kao dio priče. Jer Hvar to zaslužuje. A zajedno to možemo.
        </p>
      </div>
    </div>
  );
};

export default About;
