/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-29",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90607, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4053286, newThisMonth:5707, deltaViewsPct:-4.6,
      erreichteKonten:387477, interaktionen:138180,
      newestPost:{typ:"reel",code:"DcliSRTMYdA",likes:228,comments:5,shares:0},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:27053, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:847304, newThisMonth:4453, deltaViewsPct:-10.9,
      erreichteKonten:144816, interaktionen:29346,
      newestPost:{typ:"reel",code:"DclXRmFCdRj",likes:784,comments:19,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23652, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:2552, deltaViewsPct:16.9,
      erreichteKonten:174927, interaktionen:26500,
      newestPost:{typ:"reel",code:"Dclva9OgcZy",likes:156,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:19833, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1218006, newThisMonth:4059, deltaViewsPct:-0.7,
      erreichteKonten:179658, interaktionen:57315,
      newestPost:{typ:"reel",code:"Dclopq0K_fY",likes:207,comments:7,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
