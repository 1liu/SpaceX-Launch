const Google_API_KEY = 'AIzaSyDpQNN2KmBojfw85PlkW445vN06bJsXor8';

const UpcomingTable = require('./components/upcoming-table');
const GoogleMap = require('./components/google-map');
const PageHeader = require('./components/page-header');
const MissionInfo = require('./components/mission-info');
const Weather = require('./components/weather');
const App = require('./components/app');

const google_api_url = 'https://maps.googleapis.com/maps/api/js?key=';

// eslint-disable-next-line no-unused-vars
function init() {
  const upcomingTable = new UpcomingTable(document.querySelector('#upcoming-table'));
  const pageHeader = new PageHeader(document.querySelector('header'));
  const missionInfo = new MissionInfo(document.querySelector('.mission-info'));
  const googleMap = new GoogleMap(document.querySelector('.map-canvas'));
  const weather = new Weather(document.querySelector('#weather'));
  const app = new App(upcomingTable, pageHeader, missionInfo, googleMap, weather);

  app.start();

}

module.exports = { init: init };
