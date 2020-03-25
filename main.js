var upcomingTable = new UpcomingTable(document.querySelector("#upcoming-table"));
var pageHeader = new PageHeader(document.querySelector("header"));
var missionInfo = new MissionInfo(document.querySelector(".mission-info"));
var googleMap = new GoogleMap(document.querySelector(".map-canvas"));
var weather = new Weather(document.querySelector("#weather"));
var app = new App(upcomingTable, pageHeader, missionInfo, googleMap, weather);
app.start();
