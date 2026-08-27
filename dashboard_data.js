/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-26",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90379, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4184154, newThisMonth:5479, deltaViewsPct:-1.5,
      erreichteKonten:407231, interaktionen:146028,
      newestPost:{typ:"p",code:"Dcd3IxUjAcx",likes:219,comments:4,shares:3},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:26837, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:812270, newThisMonth:4237, deltaViewsPct:-14.5,
      erreichteKonten:135964, interaktionen:26917,
      newestPost:{typ:"reel",code:"DceEebLC09s",likes:94,comments:5,shares:3},
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
      followers:19638, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1199305, newThisMonth:3864, deltaViewsPct:-2.2,
      erreichteKonten:176000, interaktionen:55418,
      newestPost:{typ:"p",code:"DceBtSgCPrC",likes:220,comments:132,shares:3},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
