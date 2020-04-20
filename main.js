var Google_API_KEY = "AIzaSyDpQNN2KmBojfw85PlkW445vN06bJsXor8";

var google_api_url = "https://maps.googleapis.com/maps/api/js?key=";
var upcomingTable = new UpcomingTable(document.querySelector("#upcoming-table"));
var pageHeader = new PageHeader(document.querySelector("header"));
var missionInfo = new MissionInfo(document.querySelector(".mission-info"));
var googleMap = new GoogleMap(document.querySelector(".map-canvas"));
var weather = new Weather(document.querySelector("#weather"));
var app = new App(upcomingTable, pageHeader, missionInfo, googleMap, weather);
$.getScript(google_api_url+Google_API_KEY, function () {
  app.start();
});
