import React, { useState, useEffect } from "react";
import heroImage from "../assets/hv.jpg";
import {
  FaHeartbeat,
  FaCity,
  FaRunning,
  FaLaughBeam,
  FaLandmark,
  FaLeaf,
  FaThumbsUp,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const icons = [
  <FaHeartbeat />,
  <FaCity />,
  <FaRunning />,
  <FaLaughBeam />,
  <FaLandmark />,
  <FaLeaf />,
  <FaThumbsUp />,
];

const programData = [
  {
    title: "1. ZDRAV",
    subtitle: "… jer svaki je minut važan",
    bullets: [
      "Opća i specijalizirana zdravstvena usluga za građane, u koordinaciji i uz dodatno financiranje iz proračuna Grada u suradnji sa zdravstvenim ustanovama",
      "Osiguranje i financiranje smještaja od strane Grada za liječnike specijaliste i ostalo medicinsko osoblje",
      "Subvencioniranje specijalizacije liječnika",
      "Nabava brzog broda za hitne slučajeve prijevoza do zdravstvenih ustanova",
      "Posebna briga i uvođenje novih programa za osobe s invaliditetom, djecom s poteškoćama u razvoju, braniteljima te osobama treće životne dobi",
    ],
  },
  {
    title: "2. UREĐEN",
    subtitle: "… jer je sređena sredina pitanje budućnosti cijele zajednice",
    bullets: [
      "Uvođenje komunalnog reda 24/7",
      "Urbanistička reforma",
      "Izmjena prostornog plana radi olakšavanja uvjeta za građenje",
      "Ukidanje restriktivnih UPU-a Pais i DPU-a Ograde",
      "Planiranje ostvarive pozicije za benzinsku postaju",
      "Planiranje pozicija za trgovačke centre",
      "Proširenje i planiranje novih gospodarsko-servisnih zona",
      "Donošenje prostornog plana za Paklinske otoke i osnivanje gradske ustanove za upravljanje Paklinskim otocima",
      "Uspostava jednosmjernih ulica radi smanjenja gužvi i dobivanja dodatnih parkirališnih mjesta",
      "Značajno povećanje ulaganja u obnovu zastarjele i neodržavane gradske infrastrukture (Pjaca, ulice, ceste, parkinzi, kanalizacija i odvodnja)",
      "Izgradnja javnih WC-a i tuševa",
      "Tipizacijska prodajna mjesta za uslužne djelatnosti (izleti, iznajmljivanje brodova i dr.)",
      "Brusje – izgradnja sustava kanalizacije i odvodnje, asfaltiranje puteva",
      "Velo Grablje i Malo Grablje – izgradnja sustava kanalizacije i odvodnje, asfaltiranje putova",
      "Sv. Nedjelja, Jagodna i Bojanić Bad – poticanje završetka županijske ceste (tunel Dubovica – Sv. Nedjelja), kanalizacija i asfaltiranje",
      "Milna – izgradnja sustava odvodnje, uređenje mjesta",
      "Luku Vira organizirati prema potrebama hvarskih ribara i brodara",
      "Efikasnije i ekonomičnije upravljanje gradskim prostorima",
    ],
  },
  {
    title: "3. VITALAN",
    subtitle: "… jer mora biti otporan na razne izazove",
    bullets: [
      "Cijelogodišnja sportska infrastruktura za rekreativce svih dobnih skupina (planiranje i realizacija)",
      "Javni bazen – zatvoren ili pod balonom",
      "Atletska staza",
      "Sportski centar (kuglana, sport bar, stolni tenis, biljar, pikado, padel i sl.)",
      "Sportske radionice za djecu školskog i predškolskog uzrasta",
      "Biciklističko-pješačka staza od Pokonji dol do Milne",
      "Nova i sigurnija dječja igrališta",
    ],
  },
  {
    title: "4. ZABAVAN",
    subtitle: "… jer zabava nije luksuz, već potreba svakog društva; zabava je most među ljudima",
    bullets: [
      "Cjelogodišnji turizam i zabava za sve dobne skupine, s naglaskom na kongresni, znanstveni, zdravstveni, kulturni i sportski turizam izvan sezone",
      "Dati na raspolaganje otvorene i zatvorene javne prostore za koncerte, predstave, ples, filmske večeri, kongrese",
      "Poticaji i financijska podrška festivalima i kulturno-zabavnim manifestacijama regionalnog značaja",
      "Poticati i financijski podržati lokalne bendove, umjetnike, DJ-eve, kazališne skupine i druge",
      "Napraviti kalendar događanja za bolju organizaciju i promociju sadržaja u svrhu informiranja građana da i zimi imaju razloga doživjeti svoj grad",
    ],
  },
  {
    title: "5. ZANIMLJIV",
    subtitle: "… jer FOR nije prvi, ON je jedini",
    bullets: [
      "Uređenje gradskih tvrđava (Španjola, Poljun, Baterija i Veneranda) i stavljanje istih u funkciju kulture i zabave",
      "Povijest pretočiti u sadašnjost prezentacijom osoba i događaja koji su doprinijeli prepoznatljivosti Hvara (grada i otoka) na trgovima, ulicama, zidovima i sl.",
      "Digitalno oživljavanje kulturno-povijesnih znamenitosti kroz implementaciju virtualnih sadržaja",
      "Sadržajno oplemeniti grad: tematski i zabavni parkovi",
      "Replike tradicijskih kuća i radionica, destilerije lavande i ružmarina, uljare s poljima lavande i maslinicima",
      "Aktivnosti i atrakcije za obitelji – vožnje, igre i izleti",
      "Osigurati pozicije za prodaju sezonskih proizvoda, animacijskih elemenata i obiteljski prigodnih proizvoda",
    ],
  },
  {
    title: "6. LIJEP",
    subtitle: "… jer “Ljepota će spasiti svijet”",
    bullets: [
      "Očistiti i ukrasiti ulaze u Grad s fokusom na zelenilo",
      "Osvijetliti Grad i prigradska mjesta",
      "Riješiti problem skupljanja i odvoza otpada",
    ],
  },
  {
    title: "7. POŽELJAN",
    subtitle: "… jer svi žele ići, biti i ostati tamo gdje su dobrodošli",
    bullets: [
      "Afirmativan pristup poduzetništvu uz ukidanje svih nepotrebnih birokratskih ograničenja iz nadležnosti Grada",
      "Obvezne namete u nadležnosti Grada građanima smanjiti na minimum",
      "Promjena uvjeta za zakup javnih površina ugostiteljima radi osiguranja rada tijekom cijele godine",
      "Smanjenje zakupnine i poreza za javne površine za štandove",
      "Novčani poticaji “malim” iznajmljivačima od naplaćenog paušala po krevetu, razmjerno infrastrukturnoj opremljenosti lokacije",
      "Poticati vrhunsku izobrazbu za djelatnike u ugostiteljstvu i turizmu, omogućiti dostupne seminare i cjeloživotno obrazovanje građanima svih dobnih skupina",
      "Transparentan, ekonomičan i efikasan rad gradske uprave",
      "Osigurati prometnu povezanost prigradskih naselja s Gradom",
      "Postupanje prema svim fizičkim i pravnim subjektima jednako",
    ],
  },
];

const Program = () => {
  const [openSections, setOpenSections] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setOpenSections((prev) => [...new Set([...prev, index])]);
    }
  };

  const handleMouseLeave = (index) => {
    if (!isMobile) {
      setOpenSections((prev) => prev.filter((i) => i !== index));
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed py-16 px-4 sm:px-6 lg:px-12 text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-70 p-6 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-400">
          FOR – I LITI, I ZIMI
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((section, index) => {
            const isOpen = openSections.includes(index);
            return (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="bg-white text-black rounded-xl p-6 shadow-xl transition-all duration-300 group relative"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-3 text-blue text-xl font-bold">
                    <span className="text-yellow text-2xl">{icons[index]}</span>
                    {section.title}
                  </div>
                  <div className="text-yellow-600 text-2xl">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
                <p className="italic text-sm text-gray-700 mb-2 mt-1">
                  {section.subtitle}
                </p>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-[2000px] mt-3" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc list-inside text-sm space-y-2 text-gray-800">
                    {section.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-yellow-300 mt-12 text-xl sm:text-2xl italic">
          ...jer BRAVURA JE ŽIVIT OD LAVURA
        </p>
      </div>
    </div>
  );
};

export default Program;
