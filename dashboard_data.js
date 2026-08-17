/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-17",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90041, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4023636, newThisMonth:5141, deltaViewsPct:-5.3,
      erreichteKonten:380618, interaktionen:145238,
      newestPost:{typ:"reel",code:"DcHSR6XMl7B",likes:3277,comments:56,shares:84},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:26322, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:775794, newThisMonth:3722, deltaViewsPct:-18.4,
      erreichteKonten:120227, interaktionen:26119,
      newestPost:{typ:"reel",code:"DcGNC5vCN3r",likes:1151,comments:26,shares:21},
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
      followers:19088, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1185126, newThisMonth:3314, deltaViewsPct:-3.4,
      erreichteKonten:182684, interaktionen:55903,
      newestPost:{typ:"reel",code:"DcG0yjuIyS-",likes:124,comments:1,shares:2},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
