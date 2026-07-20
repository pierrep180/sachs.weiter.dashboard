/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-20",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:88839, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:5065051, newThisMonth:3939, deltaViewsPct:19.2,
      erreichteKonten:716328, interaktionen:217881,
      newestPost:{typ:"reel",code:"Da-pFtaMR8q",likes:643,comments:6,shares:10},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25596, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:909272, newThisMonth:2996, deltaViewsPct:-4.3,
      erreichteKonten:154650, interaktionen:38134,
      newestPost:{typ:"reel",code:"Da_F3YEii-D",likes:110,comments:1,shares:4},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22829, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1187295, newThisMonth:1729, deltaViewsPct:23.2,
      erreichteKonten:78127, interaktionen:37636,
      newestPost:{typ:"p",code:"Da-vu-wDPzB",likes:146,comments:0,shares:1},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17374, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1090807, newThisMonth:1600, deltaViewsPct:-11.1,
      erreichteKonten:167885, interaktionen:54380,
      newestPost:{typ:"reel",code:"Da-ozISIS8Q",likes:360,comments:5,shares:2},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
