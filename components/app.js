class App {
  constructor(upcomingTable, pageHeader, missionInfo, googleMap, weather){
    this.launchData = null;
    this.pastData = null;
    this.site = null;
    this.upcomingTable = upcomingTable;
    this.pageHeader = pageHeader;
    this.missionInfo = missionInfo;
    this.googleMap = googleMap;
    this.weather = weather;

    this.getData = this.getData.bind(this);
    this.handleGetDataError = this.handleGetDataError.bind(this);
    this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    this.launchClicked = this.launchClicked.bind(this);
    this.getPads = this.getPads.bind(this);
    this.handleGetPadsError = this.handleGetPadsError.bind(this);
    this.handleGetPadsSuccess = this.handleGetPadsSuccess.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleGetWeatherError = this.handleGetWeatherError.bind(this);
    this.handleGetWeatherSuccess = this.handleGetWeatherSuccess.bind(this);
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
    this.getPads(data[0].launch_site.site_id);

    // this.weather.updateWeather(this.launchData[0]);
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
    this.getWeather(lat, lon);
    // this.weather.updateWeather(lat, lon);
    // this.googleMap.updateMap(lat, lon);

  }

  getWeather(lat, lon) {
    // var apiKey = "0d5dc97fa06aa4c3b2346c3b831447c6";
    // var url = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=0d5dc97fa06aa4c3b2346c3b831447c6";
    // $.ajax({
    //   "url": url,
    //   "method": "GET",
    //   dataType: "json",
    $.ajax({
      type: "POST",
      url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
      dataType: "json",
      success: this.handleGetWeatherSuccess,
      error: this.handleGetWeatherError
    })
  }
  handleGetWeatherError(error) {
    console.error(error);
  }
  handleGetWeatherSuccess(data) {
    // console.log(data);
    this.weather.updateWeather(data);
    // data.shift();
    // this.launchData = data;
    // this.upcomingTable.updateTable(this.launchData);
    // this.pageHeader.updateNextLaunch(this.launchData[0]);
    // this.missionInfo.updateInfo(this.launchData[0]);
    // this.googleMap.updateMap(this.launchData[1]);
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
