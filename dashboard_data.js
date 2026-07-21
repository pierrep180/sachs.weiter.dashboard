/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-21",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:88858, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:5065131, newThisMonth:3958, deltaViewsPct:19.2,
      erreichteKonten:716328, interaktionen:217877,
      newestPost:{typ:"p",code:"DbBWSSxjTjL",likes:590,comments:4,shares:3},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25598, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:909310, newThisMonth:2998, deltaViewsPct:-4.3,
      erreichteKonten:154650, interaktionen:38134,
      newestPost:{typ:"p",code:"DbBEMcyAvVD",likes:60,comments:0,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22836, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1187326, newThisMonth:1736, deltaViewsPct:23.2,
      erreichteKonten:78127, interaktionen:37635,
      newestPost:{typ:"p",code:"DbBAe1iMRea",likes:1337,comments:24,shares:15},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17422, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1090828, newThisMonth:1648, deltaViewsPct:-11.1,
      erreichteKonten:167885, interaktionen:54380,
      newestPost:{typ:"reel",code:"DbBequroXsC",likes:534,comments:7,shares:5},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
