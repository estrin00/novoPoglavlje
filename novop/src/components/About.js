import React, { useState } from "react";
import heroImage from "../assets/hv.jpg";
import lista from "../assets/lista.jpg"; 

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-12 mb-auto"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow font-extrabold">
          Drage sugrađanke i sugrađani, <br />
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow space-y-4 font-semibold">
          Obraćamo vam se s odgovornošću i entuzijazmom, motivirani nužnošću promjene načina upravljanja našim Hvarom.
          <br /><br />
          Mi smo nezavisna lista okupljena oko ostvarive vizije boljeg, uređenijeg, pravednijeg i vitalnijeg Hvara. Naš cilj, uz vašu potporu, jest otvoriti novo poglavlje za naš Hvar – poglavlje u kojem glas svakoga od vas ima vrijednost, a zajednički interes konačno postaje prioritet.
          <br /><br />
          Novo poglavlje Hvara predstavlja promjenu načina upravljanja gradom, u kojem oni koji rade, stvaraju i doprinose imaju odlučujuću ulogu, a oni o kojima se moramo brinuti nisu odbačeni ni zanemareni.
          <br /><br />
          Izbori koji slijede i situacija u kojoj se nalazimo pred sve građanke i građane Hvara postavljaju zahtjev za drukčijim promišljanjem od dosadašnjeg o tome kome dati povjerenje u naredne četiri godine.
          <br /><br />
          Pred nama je vrijeme u kojem će se donositi odluke od sudbonosnog značaja i koje će definirati budućnost Hvara. Paralelno je potrebno rješavati akutne infrastrukturne probleme nastale višedesetljetnim zanemarivanjem, na što nas je brutalno podsjetio nedavni incident u Križnoj luci.
          <br /><br />
          Svjesni velikih izazova koji slijede, smatramo da simbioza različitih životnih i poslovnih iskustava kandidata na našoj listi nama daje širu perspektivu, a vama garantira puno kvalitetnija i razumnija rješenja od dosadašnjih.
          <br /><br />
          Hvala vam što nas već sada podupirete, slušate i pratite. Pred nama je vrijeme razgovora, susreta i konkretnih prijedloga – a sve s jednim ciljem: Hvar koji je zdrav, uređen, vitalan, zabavan, zanimljiv, lijep i poželjan.
          <br /><br />
          S poštovanjem i vjerom u zajedništvo, <br />
          Vaša nezavisna lista – Novo Poglavlje
          <br /><br />
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow font-extrabold">
          For – i liti, i zimi!
        </p>

        
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          NAŠA LISTA
        </button>

        
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] mt-[80px]" 
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative bg-white rounded-xl p-4 shadow-2xl max-w-[90vw] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lista}
                alt="Lista"
                className="w-full h-auto max-h-[70vh] object-contain rounded-md"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 bg-yellow hover:bg-blue text-white text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center transition"
                title="lista"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
