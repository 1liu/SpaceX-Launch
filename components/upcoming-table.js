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
        tbody.append(this.renderDataRow(launch));
      }
    }
  }
  onLaunchClick(launchClicked){
    this.launchClicked = launchClicked;
  }

  renderDataRow(data, launchClicked){
    var launchRowElement = document.createElement('tr');
    var launchNum = document.createElement('td');
    launchNum.textContent = data.flight_number;
    var missionName = document.createElement('td');
    missionName = data.mission_name;
    launchRowElement.append(launchNum);
    launchRowElement.append(missionName);
    launchRowElement.addEventListener("click", function(){
      console.log("Hi Clicked")
      launchClicked(data);
    })
    return launchRowElement;
  }
}
