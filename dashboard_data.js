/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-25",
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
      followers:25600, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:798001, newThisMonth:3000, deltaViewsPct:-16.0,
      erreichteKonten:146712, interaktionen:30767,
      newestPost:{typ:"reel",code:"DbK8l_WMTV2",likes:1,comments:0,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22800, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1241976, newThisMonth:1700, deltaViewsPct:28.8,
      erreichteKonten:156654, interaktionen:36254,
      newestPost:{typ:"p",code:"DbJCzr2jtlT",likes:270,comments:5,shares:1},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17600, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1143399, newThisMonth:1826, deltaViewsPct:-6.8,
      erreichteKonten:172674, interaktionen:56991,
      newestPost:{typ:"p",code:"DbIHrDEiMf3",likes:158,comments:1,shares:4},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
