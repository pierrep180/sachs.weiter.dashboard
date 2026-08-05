/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-05",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89508, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:4118283, newThisMonth:4608, deltaViewsPct:-3.1,
      erreichteKonten:508203, interaktionen:170368,
      newestPost:{typ:"p",code:"Dbn_cJrjCjy",likes:261,comments:7,shares:7},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25780, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:687668, newThisMonth:3180, deltaViewsPct:-27.7,
      erreichteKonten:118740, interaktionen:24065,
      newestPost:{typ:"p",code:"DboAJXZgntK",likes:70,comments:0,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23227, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1105988, newThisMonth:2127, deltaViewsPct:14.7,
      erreichteKonten:177972, interaktionen:26135,
      newestPost:{typ:"p",code:"Dbn_2M9jA3-",likes:160,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:18383, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1035454, newThisMonth:2609, deltaViewsPct:-15.6,
      erreichteKonten:157466, interaktionen:49025,
      newestPost:{typ:"reel",code:"Dbn1iVzoDMw",likes:604,comments:11,shares:15},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
