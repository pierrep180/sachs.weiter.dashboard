/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-19",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90091, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4084301, newThisMonth:5191, deltaViewsPct:-3.9,
      erreichteKonten:391151, interaktionen:145542,
      newestPost:{typ:"p",code:"DcL0Gs7jFTj",likes:258,comments:1,shares:2},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:26515, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:802689, newThisMonth:3915, deltaViewsPct:-15.6,
      erreichteKonten:127807, interaktionen:26930,
      newestPost:{typ:"reel",code:"DcLk2ygCpWD",likes:48,comments:0,shares:2},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23411, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:2311, deltaViewsPct:16.9,
      erreichteKonten:174927, interaktionen:26500,
      newestPost:{typ:"p",code:"DcG16vhjJ_y",likes:152,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:19313, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1200553, newThisMonth:3539, deltaViewsPct:-2.1,
      erreichteKonten:184668, interaktionen:56394,
      newestPost:{typ:"p",code:"DcL5VQkiK4X",likes:394,comments:3,shares:2},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
