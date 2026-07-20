/* ============================================================
   sachs.weiter – Highlights-Kalender (Monats-Slide)
   Wird einmal im Monat vom Task 'sachsweiter-highlights-slide' erzeugt.
   Getrennt von dashboard_data.js, damit der tägliche Feed unberührt bleibt.
   Kategorien: konzert (Creme) · fest (Teal) · food (Aprikose) · umland (Salbei)
   ============================================================ */
window.SW_HIGHLIGHTS = {
  month: 8, year: 2026, monthLabel: "August 2026",
  updated: "2026-07-20",
  source: "Highlights_August_2026_Dresden.md",
  events: [
    { title:"Pirnaer Hofnacht", date:"2026-08-01", time:"18–01 Uhr", place:"Altstadt-Höfe, Pirna", price:"Eintritt frei", category:"umland" },
    { title:"Kaisermania – Roland Kaiser", dates:["2026-08-01","2026-08-07","2026-08-08"], time:"20 Uhr", place:"Filmnächte am Elbufer", price:"ausverkauft", category:"konzert", soldOut:true, note:"Auftakt 31.7." },
    { title:"Nick Cave & The Bad Seeds", date:"2026-08-02", time:"20 Uhr", place:"Filmnächte am Elbufer", price:"Ticket", category:"konzert" },
    { title:"Japan-Festival & Kreativmarkt", start:"2026-08-01", end:"2026-08-02", time:"ab 9 Uhr", place:"Haus der Presse, Dresden", price:"Eintritt frei", category:"fest" },
    { title:"Historik Mobil – Dampflok", start:"2026-08-07", end:"2026-08-09", time:"", place:"Zittauer Gebirge", price:"Zuschlag 12 €", category:"umland" },
    { title:"Moby – Open Air", date:"2026-08-11", time:"20 Uhr", place:"Filmnächte am Elbufer", price:"Ticket", category:"konzert" },
    { title:"CANALETTO – Dresdner Stadtfest", start:"2026-08-14", end:"2026-08-16", time:"", place:"Altstadt & Elbufer", price:"Eintritt frei", category:"fest", note:"Feuerwerk So" },
    { title:"Dresdner Nachtlauf", date:"2026-08-14", time:"ab 18:30 Uhr", place:"Innenstadt → Blaues Wunder", price:"Startgebühr", category:"fest" },
    { title:"Moritzburg Festival – Musical Picnic", date:"2026-08-16", time:"11 Uhr", place:"Schlosspark Proschwitz", price:"ab 29 €", category:"umland" },
    { title:"Wincent Weiss – Open Air", date:"2026-08-21", time:"19 Uhr", place:"Filmnächte am Elbufer", price:"ausverkauft", category:"konzert", soldOut:true },
    { title:"Kamenzer Forstfest", start:"2026-08-21", end:"2026-08-27", time:"", place:"Kamenz", price:"Eintritt frei", category:"umland", note:"Feuerwerk Mi 26." },
    { title:"Clueso – Open Air", date:"2026-08-22", time:"19:30 Uhr", place:"Filmnächte am Elbufer", price:"Ticket", category:"konzert" },
    { title:"The Saxonz – Breakdance", date:"2026-08-22", time:"19 Uhr", place:"Felsenbühne Rathen", price:"ab 31 €", category:"umland" },
    { title:"Görlitzer Altstadtfest & Jakuby", start:"2026-08-28", end:"2026-08-30", time:"", place:"Görlitz", price:"Eintritt frei", category:"umland" },
    { title:"Hecht#Tag – Stadtteilfest", date:"2026-08-29", time:"11–23 Uhr", place:"Hechtviertel, Dresden", price:"Eintritt frei", category:"fest" },
    { title:"Die Toten Hosen", date:"2026-08-29", time:"ab 16:30 Uhr", place:"Ostragehege, Dresden", price:"ausverkauft", category:"konzert", soldOut:true }
  ],
  recurring: [
    { title:"Filmnächte am Elbufer – Open-Air-Kino", when:"täglich bis 30. Aug", place:"Königsufer", price:"ab ca. 9 €", category:"konzert", scope:"monat" },
    { title:"Palais Sommer – Yoga, Kunst & Konzerte", when:"täglich bis 30. Aug", place:"Alaunpark", price:"Eintritt frei", category:"konzert", scope:"monat" },
    { title:"Wackerbarth Weinsommer", when:"jedes Wochenende", place:"Radebeul", price:"Eintritt frei", category:"umland", scope:"wochenende" },
    { title:"Elbeflohmarkt", when:"jeden Samstag", place:"Albertbrücke", price:"Eintritt frei", category:"fest", scope:"wochenende" },
    { title:"Felix Rooftop – Aperol-Sundowner", when:"jeden Sonntag", place:"Zwinger / Postplatz", price:"Eintritt frei", category:"food", scope:"wochenende" }
  ]
};
