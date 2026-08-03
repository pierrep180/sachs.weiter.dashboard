/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-03",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89449, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4284389, newThisMonth:4549, deltaViewsPct:0.8,
      erreichteKonten:581327, interaktionen:176951,
      newestPost:{typ:"p",code:"Dbkh9CUDGRe",likes:98,comments:1,shares:0},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25766, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:681014, newThisMonth:3166, deltaViewsPct:-28.4,
      erreichteKonten:119204, interaktionen:24319,
      newestPost:{typ:"p",code:"DbiwquNgrkr",likes:118,comments:2,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23163, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1105988, newThisMonth:2063, deltaViewsPct:14.7,
      erreichteKonten:177972, interaktionen:26135,
      newestPost:{typ:"p",code:"Dbir6ZHjC5J",likes:225,comments:1,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:18253, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1035454, newThisMonth:2479, deltaViewsPct:-15.6,
      erreichteKonten:157466, interaktionen:49025,
      newestPost:{typ:"p",code:"Dbir9FDiJp1",likes:124,comments:2,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
