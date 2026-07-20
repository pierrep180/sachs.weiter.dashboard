/* ============================================================
   sachs.weiter – Newsradar-Slide (Dresden)
   Quelle: Notion-DB "Dresden News Radar" (werktags per Task befüllt).
   Nur Aktuelles/Kommendes & gerade neu Eröffnetes – nichts Vergangenes.
   Erste 3 Items = Top-3-Hero, restliche = Ticker "Außerdem auf dem Radar".
   Säulen-Farben: Food&Drinks (Aprikose) · Events&Nightlife (Creme) ·
   City Lifestyle & Hidden Gems (Teal) · Wochenendtipps (Salbei)
   ============================================================ */
window.SW_NEWSRADAR = {
  city: "Dresden",
  updated: "2026-07-20",
  source: "Dresden News Radar (Notion)",
  items: [
    { rank:1, title:"Floras Garten", art:"Neueröffnung", saeule:"Food & Drinks", when:"Neu eröffnet", score:90,
      teaser:"Neuer Biergarten am Palaisteich im Großen Garten – Sommer-Sehnsuchtsort direkt am Wasser." },
    { rank:2, title:"Filmnächte am Elbufer", art:"Open-Air", saeule:"Events & Nightlife", when:"bis 30. Aug", score:88,
      teaser:"Deutschlands größtes Open-Air-Kino & Konzerte vor der Altstadtsilhouette." },
    { rank:3, title:"ElbaVista-Terrassen", art:"Neueröffnung", saeule:"Food & Drinks", when:"Neu · Semperoper", score:88,
      teaser:"Neue Sommer-Lounge am Italienischen Dörfchen – freier Eintritt & Sundowner mit Elbblick." },
    { rank:4, title:"Riesenrad Wheel of Vision", art:"Attraktion", saeule:"City Lifestyle & Hidden Gems", when:"bis 16. Aug", score:86,
      teaser:"55 m über dem Postplatz – Blick auf Zwinger, Schloss & Frauenkirche." },
    { rank:5, title:"Dresdner Schlössernacht", art:"Event", saeule:"Events & Nightlife", when:"25. Juli", score:85,
      teaser:"Lichterzauber & großes Feuerwerk an den drei Elbschlössern." },
    { rank:6, title:"Kaisermania", art:"Event", saeule:"Events & Nightlife", when:"31. Juli–8. Aug", score:85, soldOut:true,
      teaser:"Roland Kaiser vorm Elbufer – vier Abende, in einer Stunde ausverkauft." },
    { rank:7, title:"Cutie Candles", art:"Neueröffnung", saeule:"City Lifestyle & Hidden Gems", when:"Neu · Hauptstraße", score:84,
      teaser:"Kerzen wie Cocktails & Törtchen – neuer SoMe-Spot zum Selbermachen." },
    { rank:8, title:"Pokémon: Strahlender Tag", art:"Event", saeule:"Wochenendtipps", when:"1.–2. Aug", score:83,
      teaser:"Europas erstes Pokémon-Festival – ausgerechnet in Dresden, gratis." }
  ]
};
