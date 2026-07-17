/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-17",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:88670, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:5334429, newThisMonth:3770, deltaViewsPct:25.5,
      erreichteKonten:706267, interaktionen:234491,
      newestPost:{typ:"reel",code:"Da2-U2nMLmH",likes:672,comments:9,shares:10},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25495, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:895811, newThisMonth:2895, deltaViewsPct:-5.8,
      erreichteKonten:151393, interaktionen:37489,
      newestPost:{typ:"p",code:"Da2o6xMArjU",likes:156,comments:0,shares:1},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22786, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1188884, newThisMonth:1686, deltaViewsPct:23.3,
      erreichteKonten:77778, interaktionen:37432,
      newestPost:{typ:"p",code:"Da20QEKDLrC",likes:213,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17283, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1108329, newThisMonth:1509, deltaViewsPct:-9.6,
      erreichteKonten:168465, interaktionen:55311,
      newestPost:{typ:"p",code:"Da2KZrICEiz",likes:177,comments:0,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
