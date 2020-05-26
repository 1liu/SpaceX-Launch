class App {
  constructor(upcomingTable, pageHeader, missionInfo, googleMap, weather) {
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

  getData() {
    this.upcomingTable.loading();
    this.missionInfo.removeImg();
    this.tableTitle('Upcoming Launches');
    $.ajax({
      url: '/api/upcoming',
      method: 'GET',
      timeout: 0,
      success: this.handleGetDataSuccess,
      error: this.handleGetDataError
    });
  }

  handleGetDataError(error) {
    console.error(error);
  }

  handleGetDataSuccess(data) {
    this.launchData = data;
    this.upcomingTable.updateTable(this.launchData);
    this.pageHeader.updateNextLaunch(this.launchData[0]);
    this.missionInfo.updateInfo(this.launchData[0]);
    this.getPads(data[0].launch_site.site_id);
  }

  getPastData() {
    this.upcomingTable.loading();
    this.tableTitle('Past Launches');
    $.ajax({
      url: '/api/past',
      method: 'GET',
      success: this.handleGetPastDataSuccess,
      error: this.handleGetPastDataError
    });
  }

  handleGetPastDataError(error) {
    console.error(error);
  }

  handleGetPastDataSuccess(data) {
    this.pastData = data.reverse();
    this.upcomingTable.updateTable(this.pastData);
  }

  getPads(site_id) {
    $.ajax({
      url: '/api/site/',
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify({ site_id: site_id }),
      timeout: 0,
      success: this.handleGetPadsSuccess,
      error: this.handleGetPadsError
    });
  }

  handleGetPadsError(error) {
    console.error(error);
  }

  handleGetPadsSuccess(site) {
    const lat = site.location.latitude;
    const lon = site.location.longitude;
    this.getWeather(lat, lon);
    this.googleMap.updateMap(lat, lon);

  }

  getWeather(lat, lon) {
    $.ajax({
      method: 'POST',
      url: '/api/weather',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify({ lat: lat, lon: lon }),
      success: this.handleGetWeatherSuccess,
      error: this.handleGetWeatherError
    });
  }

  handleGetWeatherError(error) {
    console.log(error);
  }

  handleGetWeatherSuccess(data) {
    this.weather.updateWeather(data);
  }

  launchClicked(data) {
    this.missionInfo.updateInfo(data);
    this.getPads(data.launch_site.site_id);
  }

  tableTitle(title) {
    const tableTitle = document.querySelector('#schedule-title');
    tableTitle.textContent = title;
  }

  start() {
    this.upcomingTable.onLaunchClick(this.launchClicked);
    this.getData();
    this.googleMap.initMap();
    const pastLaunchMode = document.querySelector('#past-launch-mode');
    pastLaunchMode.addEventListener('click', this.getPastData);
    const upcomingLaunchMode = document.querySelector('#upcoming-launch-mode');
    upcomingLaunchMode.addEventListener('click', this.getData);
  }
}

module.exports = App;
