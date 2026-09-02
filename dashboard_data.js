/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   Manuell aufgefrischt 2026-09-02 (Audit-Fix: Monatswerte standen auf 0).
   ============================================================ */
window.SW_DATA = {
  updated: "2026-09-02",
  monthLabel: "September 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:90800, _monthStartFollowers:90777, followerGoal:100000,
      viewsMonthly:4053286, newThisMonth:23, deltaViewsPct:null, newestPost:{typ:"reel",code:"DcwLvERMNnX",likes:178,comments:3,shares:2},
      erreichteKonten:387477, interaktionen:138180,
      splitFollower:65.4, splitNonFollower:34.6,
      contentArt:{reels:71.8, stories:28.3, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"Konzert/Bühne, Dresdner Stadtfest", aufrufe:188000, saves:null, likes:null},
        {typ:"Post", beschreibung:"8 Neueröffnungen in Dresden (noch gibt's sie nicht)", aufrufe:173000, saves:null, likes:null},
        {typ:"Post", beschreibung:"Ihr plant euer Stadtfest-Wochenende? Diese Hinweise musst ihr kennen", aufrufe:151000, saves:null, likes:null}
      ],
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:27460, _monthStartFollowers:27347, followerGoal:35000,
      viewsMonthly:847304, newThisMonth:113, deltaViewsPct:null, newestPost:{typ:"p",code:"DcvjziNAnnN",likes:282,comments:5,shares:6},
      erreichteKonten:144816, interaktionen:29346,
      splitFollower:51.7, splitNonFollower:48.3,
      contentArt:{reels:80.7, stories:19.2, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"Kirchbruch Beucha – 25 Minuten von Leipzig", aufrufe:77300, saves:null, likes:null},
        {typ:"Beitrag", beschreibung:"Euer Party-Festival am See", aufrufe:null, saves:null, likes:null},
        {typ:"Beitrag", beschreibung:"Sonnenfinsternis 2026 – Unsere Tipps für Leipzig", aufrufe:42000, saves:null, likes:null}
      ],
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:23916, _monthStartFollowers:23837, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:79, deltaViewsPct:null, newestPost:{typ:"p",code:"DcwCqN0jqQG",likes:274,comments:1,shares:1},
      erreichteKonten:174927, interaktionen:26500,
      splitFollower:64.5, splitNonFollower:35.5,
      contentArt:{reels:43.9, stories:22.2, beitraege:33.9},
      topContent:[
        {typ:"Post", beschreibung:"Liebeserklärung-Banner („Du bist mehr als mein Crush\")", aufrufe:163000, saves:null, likes:null},
        {typ:"Reel", beschreibung:"Der August in Chemnitz wird krass!", aufrufe:53500, saves:null, likes:null},
        {typ:"Post", beschreibung:"Körperwelten der Tiere in Chemnitz", aufrufe:48000, saves:null, likes:null}
      ],
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:20157, _monthStartFollowers:19958, followerGoal:25000,
      viewsMonthly:1218006, newThisMonth:199, deltaViewsPct:null, newestPost:{typ:"p",code:"Dcts1aICEbf",likes:1294,comments:6,shares:15},
      erreichteKonten:179658, interaktionen:57315,
      splitFollower:43.7, splitNonFollower:56.3,
      contentArt:{reels:88.4, stories:11.6, beitraege:0.0},
      topContent:[
        {typ:"Reel", beschreibung:"Lahore Dhaba – Neu in Erfurt", aufrufe:90900, saves:null, likes:null},
        {typ:"Beitrag", beschreibung:"Weltreise durch Erfurt – Teil 1", aufrufe:64700, saves:null, likes:null},
        {typ:"Reel", beschreibung:"Cafethek – Frühstück mit Blick auf den Dom", aufrufe:61800, saves:null, likes:null}
      ],
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
