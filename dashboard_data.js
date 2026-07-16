/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-15",
  monthLabel: "Juli 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:88400, _monthStartFollowers:84900, followerGoal:100000,
      viewsMonthly:5042883, newThisMonth:3500, deltaViewsPct:18.7, newestPost:{typ:"reel",code:"Da0erqvs2rP"},
      erreichteKonten:667328, interaktionen:218813,
      splitFollower:55.0, splitNonFollower:45.0,
      contentArt:{reels:77.4, stories:22.6, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"POV: Wenn Dresden 35 Grad hits", aufrufe:291000, saves:1900, likes:null},
        {typ:"Post", beschreibung:"Badeseen in Dresden", aufrufe:253819, saves:5144, likes:null},
        {typ:"Reel", beschreibung:"Kraftklub Konzert Dresden", aufrufe:120000, saves:null, likes:6300}
      ],
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:25400, _monthStartFollowers:22600, followerGoal:35000,
      viewsMonthly:890423, newThisMonth:2800, deltaViewsPct:-6.3, newestPost:{typ:"reel",code:"Da0F_3vifrV"},
      erreichteKonten:151119, interaktionen:41143,
      splitFollower:47.9, splitNonFollower:52.1,
      contentArt:{reels:71.2, stories:28.8, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"MotoGP Sachsenring", aufrufe:67300, saves:null, likes:null},
        {typ:"Reel", beschreibung:"Leipzigs erste Korean Corndogs", aufrufe:59600, saves:null, likes:null},
        {typ:"Post", beschreibung:"Das ist neu in Leipzig", aufrufe:47000, saves:null, likes:null}
      ],
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:22700, _monthStartFollowers:21100, followerGoal:30000,
      viewsMonthly:1177746, newThisMonth:1600, deltaViewsPct:22.2, newestPost:{typ:"reel",code:"Da0IuxtM5HF"},
      erreichteKonten:77353, interaktionen:36649,
      splitFollower:63.0, splitNonFollower:37.0,
      contentArt:{reels:62.8, stories:37.2, beitraege:0.0},
      topContent:[
        {typ:"Post", beschreibung:"Kostenloses Sommerkino in Chemnitz", aufrufe:54600, saves:null, likes:null},
        {typ:"Reel", beschreibung:"Was geht im Juli in Chemnitz", aufrufe:51400, saves:null, likes:null},
        {typ:"Post", beschreibung:"Collab Badeseen in Sachsen", aufrufe:142244, saves:1975, likes:null}
      ],
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:17100, _monthStartFollowers:15774, followerGoal:25000,
      viewsMonthly:1092822, newThisMonth:1326, deltaViewsPct:-10.9, newestPost:{typ:"reel",code:"Da0n5Omq5O7"},
      erreichteKonten:164091, interaktionen:56481,
      splitFollower:43.7, splitNonFollower:56.3,
      contentArt:{reels:86.5, stories:13.6, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"Was geht in Erfurt", aufrufe:98700, saves:null, likes:null},
        {typ:"Reel", beschreibung:"Morning Rave", aufrufe:81400, saves:null, likes:null},
        {typ:"Post", beschreibung:"Neu in Erfurt", aufrufe:54800, saves:null, likes:null}
      ],
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
