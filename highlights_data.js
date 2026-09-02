/* ============================================================
   sachs.weiter – Highlights-Kalender (Monats-Slide)
   Wird einmal im Monat vom Task 'sachsweiter-highlights-slide' erzeugt.
   Getrennt von dashboard_data.js, damit der tägliche Feed unberührt bleibt.
   Kategorien: konzert (Creme) · fest (Teal) · food (Aprikose) · umland (Salbei)
   ============================================================ */
window.SW_HIGHLIGHTS = {
  month: 9, year: 2026, monthLabel: "September 2026",
  updated: "2026-09-02",
  source: "Dresden News Radar (Notion)",
  events: [
    { title:"Cocktailnacht im Barockviertel", date:"2026-09-03", time:"18–22 Uhr", place:"Barockviertel", price:"Eintritt frei", category:"food" },
    { title:"Dresdner Taschenlampenkonzert", date:"2026-09-05", time:"", place:"Junge Garde", price:"Ticket", category:"konzert" },
    { title:"Kraftwerk Mitte Fest", date:"2026-09-05", time:"ab 11 Uhr", place:"Kraftwerk Mitte", price:"Eintritt frei", category:"konzert", note:"15. Geburtstag" },
    { title:"Keramikmarkt am Goldenen Reiter", start:"2026-09-05", end:"2026-09-06", time:"", place:"Goldener Reiter", price:"Eintritt frei", category:"fest" },
    { title:"Queerfilmfestival", start:"2026-09-10", end:"2026-09-16", time:"", place:"Zentralkino & Thalia", price:"ab 7,50 €", category:"fest" },
    { title:"Bespoked – Handmade-Bike-Messe", start:"2026-09-11", end:"2026-09-13", time:"", place:"Flughafen Dresden", price:"Ticket", category:"fest" },
    { title:"Federweißerfest Schloss Wackerbarth", start:"2026-09-12", end:"2026-09-13", time:"", place:"Radebeul", price:"Ticket", category:"umland" },
    { title:"Hundebadetage Naturbad Mockritz", start:"2026-09-12", end:"2026-09-13", time:"", place:"Naturbad Mockritz", price:"3 € / Hund", category:"umland" },
    { title:"Scheune-Wiedereröffnung", start:"2026-09-18", end:"2026-09-20", time:"", place:"Scheune, Neustadt", price:"Sa gratis", category:"konzert", note:"nach Sanierung" },
    { title:"Herbst- & Weinfest Radebeul", start:"2026-09-18", end:"2026-09-20", time:"", place:"Altkötzschenbroda", price:"Eintritt frei", category:"umland" },
    { title:"Correggio im Zwinger", date:"2026-09-19", time:"", place:"Gemäldegalerie Alte Meister", price:"Ticket", category:"fest", note:"bis 10. Jan" },
    { title:"Pichmännel-Oktoberfest", date:"2026-09-24", time:"", place:"Ostragehege", price:"Ticket", category:"konzert", note:"bis 10. Okt" },
    { title:"Neustadt Art Festival", start:"2026-09-25", end:"2026-09-27", time:"", place:"Äußere Neustadt", price:"Eintritt frei", category:"fest" },
    { title:"art & style – Kunst & Design", start:"2026-09-26", end:"2026-09-27", time:"", place:"Messe Dresden", price:"Ticket", category:"fest" },
    { title:"Läderach Chocolaterie", date:"2026-09-30", time:"", place:"Altmarkt-Galerie", price:"Neu", category:"food", note:"Neueröffnung" }
  ],
  recurring: [
    { title:"Kürbishausen – 50.000 Kürbisse", when:"täglich bis 15. Nov", place:"Oskarshausen", price:"Eintritt", category:"umland", scope:"monat" },
    { title:"Dresdner Herbstmarkt", when:"11. Sep – 4. Okt", place:"Altmarkt", price:"Eintritt frei", category:"fest", scope:"monat" },
    { title:"Elbeflohmarkt", when:"jeden Samstag", place:"Albertbrücke", price:"Eintritt frei", category:"fest", scope:"wochenende" }
  ]
};
