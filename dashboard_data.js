/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-09-01",
  monthLabel: "September 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90777, _monthStartFollowers:90777, followerGoal:100000,
      viewsMonthly:4053286, newThisMonth:0, deltaViewsPct:0,
      erreichteKonten:387477, interaktionen:138180,
      newestPost:{typ:"reel",code:"DctmQGFslkP",likes:600,comments:30,shares:0},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:27347, _monthStartFollowers:27347, followerGoal:35000,
      viewsMonthly:847304, newThisMonth:0, deltaViewsPct:0,
      erreichteKonten:144816, interaktionen:29346,
      newestPost:{typ:"p",code:"DctG7euAiF4",likes:643,comments:3,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23837, _monthStartFollowers:23837, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:0, deltaViewsPct:0,
      erreichteKonten:174927, interaktionen:26500,
      newestPost:{typ:"p",code:"DctrmSwDv8G",likes:250,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:19958, _monthStartFollowers:19958, followerGoal:25000,
      viewsMonthly:1218006, newThisMonth:0, deltaViewsPct:0,
      erreichteKonten:179658, interaktionen:57315,
      newestPost:{typ:"p",code:"Dcts1aICEbf",likes:521,comments:1,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
