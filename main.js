const Google_API_KEY = "";

const google_api_url = "https://maps.googleapis.com/maps/api/js?key=";
const upcomingTable = new UpcomingTable(document.querySelector("#upcoming-table"));
const pageHeader = new PageHeader(document.querySelector("header"));
const missionInfo = new MissionInfo(document.querySelector(".mission-info"));
const googleMap = new GoogleMap(document.querySelector(".map-canvas"));
const weather = new Weather(document.querySelector("#weather"));
const app = new App(upcomingTable, pageHeader, missionInfo, googleMap, weather);
$.getScript(google_api_url+Google_API_KEY, function () {
  app.start();
});
