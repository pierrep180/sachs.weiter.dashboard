/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-08-13",
  monthLabel: "August 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:89800, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:3803682, newThisMonth:4900, deltaViewsPct:-10.5,
      erreichteKonten:415139, interaktionen:150353,
      newestPost:{typ:"p",code:"Db9D8RvjB65",likes:550,comments:4,shares:5},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25900, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:677442, newThisMonth:3300, deltaViewsPct:-28.7,
      erreichteKonten:92920, interaktionen:23865,
      newestPost:{typ:"reel",code:"Db9FgP3CtuD",likes:324,comments:2,shares:3},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23300, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1105988, newThisMonth:2200, deltaViewsPct:14.7,
      erreichteKonten:177972, interaktionen:26135,
      newestPost:{typ:"reel",code:"Db8uuG0hMgB",likes:233,comments:0,shares:7},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:18800, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1035454, newThisMonth:3026, deltaViewsPct:-15.6,
      erreichteKonten:157466, interaktionen:49025,
      newestPost:{typ:"p",code:"Db3RuwLCPnn",likes:435,comments:10,shares:8},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
