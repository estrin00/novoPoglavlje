import React from "react";
import heroImage from "../assets/hv.jpg";

const About = () => {
  return (
    <div className="relative w-full bg-cover bg-center text-yellow py-20 px-4 sm:px-6 lg:px-12 mb-auto"
         style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow font-extrabold">
        Drage sugrađanke i dragi sugrađani, <br/>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow space-y-4 font-semibold">
        Obraćamo vam se s odgovornošću i entuzijazmom, motivirani nužnošću promjene načina upravljanja našim Hvarom.
        <br/>¸<br/>
        Mi smo nezavisna lista okupljena oko ostvarive vizije boljeg, uređenijeg, pravednijeg i vitalnijeg Hvara. Naš cilj, uz vašu potporu, jest otvoriti novo poglavlje za naš Hvar – poglavlje u kojem glas svakoga od vas ima vrijednost, a zajednički interes konačno postaje prioritet.

        Novo poglavlje Hvara predstavlja promjenu načina upravljanja gradom, u kojem oni koji rade, stvaraju i doprinose imaju odlučujuću ulogu, a oni o kojima se moramo brinuti nisu odbačeni ni zanemareni.
        <br/><br/>
          Izbori koji slijede i situacija u kojoj se nalazimo pred sve građanke i građane Hvara postavljaju zahtjev za drukčijim promišljanjem od dosadašnjeg o tome kome dati povjerenje u naredne četiri godine.
          <br /><br />
          Pred nama je vrijeme u kojem će se donositi odluke od sudbonosnog značaja i koje će definirati budućnost Hvara. Paralelno je potrebno rješavati akutne infrastrukturne probleme nastale višedesetljetnim zanemarivanjem, na što nas je brutalno podsjetio nedavni incident u Križnoj luci.
          <br /><br />
          Svjesni velikih izazova koji slijede, smatramo da simbioza različitih životnih i poslovnih iskustava kandidata na našoj listi nama daje širu perspektivu, a vama garantira puno kvalitetnija i razumnija rješenja od dosadašnjih.
          <br /><br />
          Hvala vam što nas već sada podupirete, slušate i pratite. Pred nama je vrijeme razgovora, susreta i konkretnih prijedloga – a sve s jednim ciljem: Hvar koji je zdrav, uređen, vitalan, zabavan, zanimljiv, lijep i poželjan.          <br /><br />
          S poštovanjem i vjerom u zajedništvo,
          Vaša nezavisna lista – Novo Poglavlje
          <br /><br />
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow font-extrabold">           For – i liti, i zimi!        </p>
      </div>
    </div>
  );
};

export default About;
