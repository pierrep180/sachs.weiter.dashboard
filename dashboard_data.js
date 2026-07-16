/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-16",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:88512, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:5042989, newThisMonth:3612, deltaViewsPct:18.7,
      erreichteKonten:667328, interaktionen:218812,
      newestPost:{typ:"reel",code:"Da0erqvs2rP",likes:2783,comments:10,shares:68},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25441, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:890429, newThisMonth:2841, deltaViewsPct:-6.3,
      erreichteKonten:151119, interaktionen:37205,
      newestPost:{typ:"reel",code:"Da0F_3vifrV",likes:75,comments:3,shares:5},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22770, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1177749, newThisMonth:1670, deltaViewsPct:22.2,
      erreichteKonten:77353, interaktionen:36649,
      newestPost:{typ:"reel",code:"Da0IuxtM5HF",likes:299,comments:0,shares:8},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17187, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1092842, newThisMonth:1413, deltaViewsPct:-10.9,
      erreichteKonten:164091, interaktionen:56480,
      newestPost:{typ:"reel",code:"Da0n5Omq5O7",likes:835,comments:1,shares:12},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
