class App {
  constructor(upcomingTable, pageHeader, googleMap){
    this.launchData = null;
    this.upcomingTable = upcomingTable;
    this.pageHeader = pageHeader;
    this.googleMap = googleMap;

    this.getData = this.getData.bind(this);
    this.handleGetDataError = this.handleGetDataError.bind(this);
    this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    this.launchClicked = this.launchClicked.bind(this);
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
    console.log(data);
    this.launchData = data;
    this.upcomingTable.updateTable(this.launchData);
    this.pageHeader.updateNextLaunch(this.launchData[1]);
    this.googleMap.updateMap(this.launchData[1]);
  }
  getPads(site_id){
    var form = new FormData();
    $.ajax({
      "url": "https://api.spacexdata.com/v3/launchpads/" + site_id,
      "method": "GET",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form,
      success: this.handleGetPadsSuccess,
      error: this.handleGetPadsError
    })
  }
  handleGetPadsError(error){
    console.error(error);
  }
  handleGetPadsSuccess(site){
    console.log(site);
  }
  launchClicked(data) {
    console.log("Clicked");
    console.log(data);
  }

  start(){
    this.getData();
    this.upcomingTable.onLaunchClick(this.launchClicked);
    // this.googleMap.initMap()
  }
}
