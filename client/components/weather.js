class Weather {
  constructor(weatherEl) {
    this.weatherEl = weatherEl;
  }

  updateWeather(data) {
    console.log('test weather');
    const iconId = data.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/wn/' + iconId + '@2x.png';

    const weatherIcon = this.weatherEl.querySelector('#weather-icon');
    weatherIcon.setAttribute('src', iconUrl);
    const tbody = this.weatherEl.querySelector('tbody');
    tbody.innerHTML = '';
    let weatherRowEl = document.createElement('tr');
    let weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>City Name:  </span>' + data.name;
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Cloud:  </span>' + data.weather[0].description;
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Temperature:  </span>' + data.main.temp + 'C';
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Pressure:  </span>' + data.main.pressure + ' millibars';
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Humidity:  </span>' + data.main.humidity + '%';
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    if (data.visibility > 16000) {
      weatherTd.innerHTML = '<span>Visibility: </span>>16000m';
    } else {
      weatherTd.innerHTML = '<span>Visibility:  </span>' + data.visibility + 'm';
    }
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Wind Speed:  </span>' + data.wind.speed + 'm/s';
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
    weatherRowEl = document.createElement('tr');
    weatherTd = document.createElement('td');
    weatherTd.innerHTML = '<span>Wind Direction:  </span>' + data.wind.deg + 'deg';
    weatherRowEl.append(weatherTd);
    tbody.append(weatherRowEl);
  }
}

module.exports = Weather;
