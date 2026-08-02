/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-28",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89100, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4761167, newThisMonth:4200, deltaViewsPct:12.0,
      erreichteKonten:676990, interaktionen:201940,
      newestPost:{typ:"reel",code:"DbQxPnYKE2X",likes:908,comments:43,shares:16},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25716, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:765791, newThisMonth:3116, deltaViewsPct:-19.4,
      erreichteKonten:137590, interaktionen:28394,
      newestPost:{typ:"p",code:"DbTFlBfgtT8",likes:24,comments:3,shares:3},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22921, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1264106, newThisMonth:1821, deltaViewsPct:31.1,
      erreichteKonten:169521, interaktionen:34194,
      newestPost:{typ:"p",code:"DbQxPFZDs-u",likes:248,comments:6,shares:3},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17784, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1063445, newThisMonth:2010, deltaViewsPct:-13.3,
      erreichteKonten:160862, interaktionen:48462,
      newestPost:{typ:"reel",code:"DbTWtmwIZkJ",likes:152,comments:14,shares:8},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
