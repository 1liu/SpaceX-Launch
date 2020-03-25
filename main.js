var upcomingTable = new UpcomingTable(document.querySelector("#upcoming-table"));
var pageHeader = new PageHeader(document.querySelector("header"));
var googleMap = new GoogleMap(document.querySelector(".map-canvas"));
var app = new App(upcomingTable, pageHeader, googleMap);
app.start();
