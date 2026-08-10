/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-09",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89686, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:3893807, newThisMonth:4786, deltaViewsPct:-8.4,
      erreichteKonten:453970, interaktionen:159232,
      newestPost:{typ:"p",code:"DbvgPefjM48",likes:1515,comments:4,shares:10},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25910, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:687668, newThisMonth:3310, deltaViewsPct:-27.7,
      erreichteKonten:118740, interaktionen:24065,
      newestPost:{typ:"reel",code:"Db0jlRVi5kf",likes:59,comments:8,shares:3},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23272, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1105988, newThisMonth:2172, deltaViewsPct:14.7,
      erreichteKonten:177972, interaktionen:26135,
      newestPost:{typ:"p",code:"DbvquouDqoD",likes:290,comments:8,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:18660, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1035454, newThisMonth:2886, deltaViewsPct:-15.6,
      erreichteKonten:157466, interaktionen:49025,
      newestPost:{typ:"reel",code:"Db0nXR_oNiX",likes:191,comments:1,shares:2},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
