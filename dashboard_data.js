/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-10",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89698, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:3778563, newThisMonth:4798, deltaViewsPct:-11.1,
      erreichteKonten:446749, interaktionen:155526,
      newestPost:{typ:"p",code:"DbvgPefjM48",likes:1589,comments:4,shares:10},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25921, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:696118, newThisMonth:3321, deltaViewsPct:-26.8,
      erreichteKonten:94111, interaktionen:25754,
      newestPost:{typ:"reel",code:"Db0jlRVi5kf",likes:169,comments:19,shares:5},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23274, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1105988, newThisMonth:2174, deltaViewsPct:14.7,
      erreichteKonten:177972, interaktionen:26135,
      newestPost:{typ:"p",code:"Db00XtPDkW5",likes:153,comments:0,shares:1},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:18734, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1035454, newThisMonth:2960, deltaViewsPct:-15.6,
      erreichteKonten:157466, interaktionen:49025,
      newestPost:{typ:"reel",code:"Db0nXR_oNiX",likes:1112,comments:14,shares:12},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
