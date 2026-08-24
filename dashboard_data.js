/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-24",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90300, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4320721, newThisMonth:5400, deltaViewsPct:1.7,
      erreichteKonten:410603, interaktionen:150892,
      newestPost:{typ:"reel",code:"DcYkNknMtO1",likes:164,comments:8,shares:2},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:26770, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:817309, newThisMonth:4170, deltaViewsPct:-14.0,
      erreichteKonten:134475, interaktionen:27231,
      newestPost:{typ:"reel",code:"DcYiMi2CR9Z",likes:60,comments:0,shares:2},
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
      followers:19514, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1196187, newThisMonth:3740, deltaViewsPct:-2.5,
      erreichteKonten:177866, interaktionen:55449,
      newestPost:{typ:"reel",code:"DcY4tJWoutA",likes:218,comments:0,shares:4},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
