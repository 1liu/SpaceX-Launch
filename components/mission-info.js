class MissionInfo {
  constructor(missionElement) {
    this.missionElement = missionElement;
  }

  updateInfo(data) {
    var tbody = this.missionElement.querySelector("tbody");
    tbody.innerHTML = "";

    var missionRowEl = document.createElement('tr');
    var missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Flight Number:  " + data.flight_number;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Mission Name:  " + data.mission_name;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Launch Time(UTC):  " + data.launch_date_utc;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Launch Site:  " + data.launch_site.site_name_long + "(" + data.launch_site.site_name + ")";
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Rocket:  " + data.rocket.rocket_name;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Payload:  " + data.rocket.second_stage.payloads[0].payload_id;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Customer:  " + data.rocket.second_stage.payloads[0].customers[0];
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Payload Type:  " + data.rocket.second_stage.payloads[0].payload_type;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Payload Mass(kg):  " + data.rocket.second_stage.payloads[0].payload_mass_kg;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.textContent = "Orbit:  " + data.rocket.second_stage.payloads[0].orbit;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
  }
}
