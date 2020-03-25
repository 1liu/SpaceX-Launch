class App {
  constructor(upcomingTable, pageHeader, missionInfo, googleMap){
    this.launchData = null;
    this.pastData = null;
    this.site = null;
    this.upcomingTable = upcomingTable;
    this.pageHeader = pageHeader;
    this.missionInfo = missionInfo;
    this.googleMap = googleMap;

    this.getData = this.getData.bind(this);
    this.handleGetDataError = this.handleGetDataError.bind(this);
    this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    this.launchClicked = this.launchClicked.bind(this);
    this.getPads = this.getPads.bind(this);
    this.handleGetPadsError = this.handleGetPadsError.bind(this);
    this.handleGetPadsSuccess = this.handleGetPadsSuccess.bind(this);
  }

  getData(){
    $.ajax({
      "url": "https://api.spacexdata.com/v3/launches/upcoming",
      "method": "GET",
      "timeout": 0,
      success: this.handleGetDataSuccess,
      error: this.handleGetDataError
    })
  }
  handleGetDataError(error) {
    console.error(error);
  }
  handleGetDataSuccess(data) {
    // console.log(data);
    data.shift();
    this.launchData = data;
    this.upcomingTable.updateTable(this.launchData);
    this.pageHeader.updateNextLaunch(this.launchData[0]);
    this.missionInfo.updateInfo(this.launchData[0]);
    // this.googleMap.updateMap(this.launchData[1]);
  }

  getPastData() {
    $.ajax({
      "url": "https://api.spacexdata.com/v3/launches/past",
      "method": "GET",
      "timeout": 0,
      success: this.handleGetPastDataSuccess,
      error: this.handleGetPastDataError
    })
  }
  handleGetPastDataError(error) {
    console.error(error);
  }
  handleGetPastDataSuccess(data) {
    console.log(data);
    // data.shift();
    this.pastData = data;
    // this.upcomingTable.updateTable(this.pastData);
    // this.pageHeader.updateNextLaunch(this.pastData[0]);
    // this.missionInfo.updateInfo(this.pastData[0]);
    // this.googleMap.updateMap(this.launchData[1]);
  }

  getPads(site_id){
    // var form = new FormData();
    $.ajax({
      "url": "https://api.spacexdata.com/v3/launchpads/" + site_id,
      "method": "GET",
      "timeout": 0,
      // "processData": false,
      // "mimeType": "multipart/form-data",
      // "contentType": false,
      // "data": form,
      success: this.handleGetPadsSuccess,
      error: this.handleGetPadsError
    })
  }
  handleGetPadsError(error){
    console.error(error);
  }
  handleGetPadsSuccess(site){
    console.log(site);
    var lat = site.location.latitude;
    var lon = site.location.longitude;
    console.log("lat", lat);
    console.log("lon", lon);
    // this.googleMap.updateMap(lat, lon);

  }
  launchClicked(data) {
    console.log("Clicked");
    console.log(data);
    this.missionInfo.updateInfo(data);
    this.getPads(data.launch_site.site_id);
    // this.googleMap.updateMap(data);
  }

  start(){
    this.upcomingTable.onLaunchClick(this.launchClicked);
    this.getData();
    this.googleMap.initMap()
  }
}
