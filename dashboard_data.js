/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-27",
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
      followers:25700, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:794958, newThisMonth:3100, deltaViewsPct:-16.4,
      erreichteKonten:141675, interaktionen:29267,
      newestPost:{typ:"p",code:"DbNs98VAoF-",likes:230,comments:10,shares:2},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22900, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1263889, newThisMonth:1800, deltaViewsPct:31.1,
      erreichteKonten:169521, interaktionen:34188,
      newestPost:{typ:"p",code:"DbQxPFZDs-u",likes:207,comments:5,shares:3},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17700, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1085676, newThisMonth:1926, deltaViewsPct:-11.5,
      erreichteKonten:163585, interaktionen:51189,
      newestPost:{typ:"p",code:"DbQxM6CCBBL",likes:268,comments:4,shares:2},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
