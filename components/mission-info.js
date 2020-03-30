class MissionInfo {
  constructor(missionElement) {
    this.missionElement = missionElement;
    this.data = null;
  }

  updateInfo(data) {
    this.data = data;
    var tbody = this.missionElement.querySelector("tbody");
    tbody.innerHTML = "";
    this.missionElement.querySelector("#mission-photo-id").innerHTML = "";
    this.missionElement.querySelector(".misission-photo-title").classList.add("d-none");
    var missionRowEl = document.createElement('tr');
    var missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Flight Number:  </span>" + data.flight_number;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Mission Name:  </span>" + data.mission_name;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Launch Time(UTC):  </span>" + data.launch_date_utc;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Launch Time(Local):  </span>" + data.launch_date_local;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Launch Site:  </span>" + data.launch_site.site_name_long + "(" + data.launch_site.site_name + ")";
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Rocket:  </span>" + data.rocket.rocket_name;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Payload:  </span>" + data.rocket.second_stage.payloads[0].payload_id;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Customer:  </span>" + data.rocket.second_stage.payloads[0].customers[0];
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Payload Type:  </span>" + data.rocket.second_stage.payloads[0].payload_type;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    if ((data.rocket.second_stage.payloads[0].payload_mass_kg)!=null){
      missionInfoTd.innerHTML = "<span>Payload Mass(kg):  </span>" + data.rocket.second_stage.payloads[0].payload_mass_kg;
    }else{
      missionInfoTd.innerHTML = "<span>Payload Mass(kg): </span>Not Available"
    }
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    missionRowEl = document.createElement('tr');
    missionInfoTd = document.createElement('td');
    missionInfoTd.innerHTML = "<span>Orbit:  </span>" + data.rocket.second_stage.payloads[0].orbit;
    missionRowEl.append(missionInfoTd);
    tbody.append(missionRowEl);
    if (this.data.links.flickr_images.length != 0){
      var img = this.missionElement.querySelector("#mission-photo-id");
      img.setAttribute("src", this.data.links.flickr_images[0]);
      var parentEl = img.parentElement;
      var src = this.data.links.video_link;
      var a = $("<a/>").attr("href", src);
      $(parentEl).wrap(a);
      this.missionElement.querySelector(".misission-photo-title").classList.remove("d-none");
    }


  }
}
