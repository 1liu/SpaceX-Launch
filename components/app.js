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
    this.getPastData = this.getPastData.bind(this);
    this.handleGetPastDataError = this.handleGetPastDataError.bind(this);
    this.handleGetPastDataSuccess = this.handleGetPastDataSuccess.bind(this);
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
    console.log(data);
    data.shift();
    this.launchData = data;
    this.upcomingTable.updateTable(this.launchData);
    this.pageHeader.updateNextLaunch(this.launchData[0]);
    this.missionInfo.updateInfo(this.launchData[0]);
    this.getPads(data[0].launch_site.site_id);
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
    console.log("Get past data successfully")
    console.log(data);
    this.pastData = data;
  }

  getPads(site_id){
    $.ajax({
      "url": "https://api.spacexdata.com/v3/launchpads/" + site_id,
      "method": "GET",
      "timeout": 0,
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
    this.getWeather(lat, lon);
    this.googleMap.updateMap(lat, lon);

  }

  getWeather(lat, lon) {
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
    this.weather.updateWeather(data);
  }

  launchClicked(data) {
    console.log("Clicked");
    console.log(data);
    this.missionInfo.updateInfo(data);
    this.getPads(data.launch_site.site_id);
  }

  start(){
    this.upcomingTable.onLaunchClick(this.launchClicked);
    this.getData();
    this.googleMap.initMap();
    var pastLaunchMode = document.querySelector("#past-launch-mode");
    pastLaunchMode.addEventListener("click", this.getPastData);
    var upcomingLaunchMode = document.querySelector("#upcoming-launch-mode");
    upcomingLaunchMode.addEventListener("click", this.getData);
  }
}
