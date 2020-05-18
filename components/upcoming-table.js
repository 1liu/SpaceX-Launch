class UpcomingTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateTable(data){
    var tbody = this.tableElement.querySelector("#upcoming-tbody");
    if (data.length == 0) {
      tbody.innerHTML = "";
    } else {
      tbody.innerHTML = "";
      for (var launch of data) {
        tbody.append(this.renderDataRow(launch,this.launchClicked));
      }
    }
  }
  onLaunchClick(launchClicked){
    this.launchClicked = launchClicked;
  }

  renderDataRow(data, launchClicked){
    var launchRowElement = document.createElement('tr');
    launchRowElement.classList.add("hover-row");
    var launchNum = document.createElement('td');
    launchNum.classList.add("col-2");
    launchNum.textContent = data.flight_number;
    var missionName = document.createElement('td');
    missionName.classList.add("col-10");
    missionName.setAttribute('noWrap', true);
    missionName.textContent = data.mission_name;
    launchRowElement.append(launchNum);
    launchRowElement.append(missionName);
    launchRowElement.addEventListener("click", function(){
      launchClicked(data);
    })
    return launchRowElement;
  }
}
