/* ============================================================
   sachs.weiter – Dashboard-Daten
   Diese Datei wird jeden Morgen automatisch aktualisiert (Follower).
   Zahlen und Ziele lassen sich hier jederzeit von Hand ändern.
   Startwerte: an die offiziellen Juni-2026-Gesamtzahlen angeglichen
   (151.340 Follower / 7,39 Mio. Aufrufe), pro Standort proportional.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-15",
  monthLabel: "Juli 2026",

  // Jahresziele 2026 – VORSCHLAGSWERTE, bitte anpassen
  goals: {
    followersTotal: 200000,   // großes Team-Ziel: 200k Follower gesamt
    viewsMonthly: 10000000    // 10 Mio. Aufrufe / Monat
  },

  cities: [
    { key:"dresden",  name:"Dresden",  followers:89740, followerGoal:100000, viewsMonthly:3668000, newThisMonth:3500,
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"] },
    { key:"leipzig",  name:"Leipzig",  followers:24800, followerGoal:40000,  viewsMonthly:1367000, newThisMonth:2800,
      goals2026:["40.000 Follower","Teamlead Leipzig etablieren","Eigene Stadt-Aktion"] },
    { key:"chemnitz", name:"Chemnitz", followers:22600, followerGoal:35000,  viewsMonthly:1184000, newThisMonth:1600,
      goals2026:["35.000 Follower","Vollzeitstelle besetzen","Eigene Stadt-Aktion"] },
    { key:"erfurt",   name:"Erfurt",   followers:14200, followerGoal:25000,  viewsMonthly:1170000, newThisMonth:1326,
      goals2026:["25.000 Follower","Reichweite weiter ausbauen","Eigene Stadt-Aktion"] }
  ]
};
