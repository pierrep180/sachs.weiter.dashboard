/* ============================================================
   sachs.weiter – Dashboard-Daten
   Followers werden jeden Morgen automatisch aktualisiert (Browser -> GitHub).
   viewsMonthly, followerGoal, goals2026 und goals werden manuell gepflegt.
   _monthStartFollowers = Followerstand zu Monatsbeginn (Basis für "+diesen Monat").
   ============================================================ */
window.SW_DATA = {
  updated: "2026-07-15",
  monthLabel: "Juli 2026",

  // Jahresziele 2026 – Follower-Gesamtziel
  goals: {
    followersTotal: 200000,
    viewsMonthly: 10000000
  },

  cities: [
    { key:"dresden",  name:"Dresden",  followers:88400, _monthStartFollowers:84900, followerGoal:100000, viewsMonthly:3668000, newThisMonth:3500,
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"] },
    { key:"leipzig",  name:"Leipzig",  followers:25400, _monthStartFollowers:22600, followerGoal:40000,  viewsMonthly:1367000, newThisMonth:2800,
      goals2026:["40.000 Follower","Teamlead Leipzig etablieren","Eigene Stadt-Aktion"] },
    { key:"chemnitz", name:"Chemnitz", followers:22700, _monthStartFollowers:21100, followerGoal:35000,  viewsMonthly:1184000, newThisMonth:1600,
      goals2026:["35.000 Follower","Vollzeitstelle besetzen","Eigene Stadt-Aktion"] },
    { key:"erfurt",   name:"Erfurt",   followers:17100, _monthStartFollowers:15774, followerGoal:25000,  viewsMonthly:1170000, newThisMonth:1326,
      goals2026:["25.000 Follower","Reichweite weiter ausbauen","Eigene Stadt-Aktion"] }
  ]
};
