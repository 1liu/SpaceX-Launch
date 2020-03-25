class Weather {
  constructor(weatherEl) {
    this.weatherEl = weatherEl;
  }

  updateWeather(data) {
    console.log("Weather", data);
    var iconId = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/wn/"+iconId+"@2x.png";

    var weatherIcon = this.weatherEl.querySelector("#weather-icon");
    weatherIcon.setAttribute("src", iconUrl);
    var tbody = this.weatherEl.querySelector("tbody");
    tbody.innerHTML = "";
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "City Name:  " + data.name;
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Cloud:  " + data.weather[0].description;
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Temperature:  " + data.main.temp + "C";
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Pressure:  " + data.main.pressure + " millibars";
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Humidity:  " + data.main.humidity + "%";
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    if (data.visibility > 16000) {
      weatherTd.textContent = "Visibility: >16000m";
    } else {
      weatherTd.textContent = "Visibility:  " + data.visibility + "m";
    }
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Wind Speed:  " + data.wind.speed + "m/s";
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    var weatherRowEl = document.createElement('tr');
    var weatherTd = document.createElement('td');
    weatherTd.textContent = "Wind Direction:  " + data.wind.deg + "deg";
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
  }
}
