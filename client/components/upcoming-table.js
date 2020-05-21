class UpcomingTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateTable(data) {
    const tbody = this.tableElement.querySelector('#upcoming-tbody');
    if (data.length === 0) {
      tbody.innerHTML = '';
    } else {
      tbody.innerHTML = '';
      for (const launch of data) {
        tbody.append(this.renderDataRow(launch, this.launchClicked));
      }
    }
  }

  loading() {
    const tbody = this.tableElement.querySelector('#upcoming-tbody');
    tbody.innerHTML = 'Loading';

  }

  onLaunchClick(launchClicked) {
    this.launchClicked = launchClicked;
  }

  renderDataRow(data, launchClicked) {
    const launchRowElement = document.createElement('tr');
    launchRowElement.classList.add('hover-row');
    const launchNum = document.createElement('td');
    launchNum.classList.add('col-3');
    launchNum.textContent = data.flight_number;
    const missionName = document.createElement('td');
    missionName.classList.add('col-9');
    missionName.setAttribute('noWrap', true);
    missionName.textContent = data.mission_name;
    launchRowElement.append(launchNum);
    launchRowElement.append(missionName);
    launchRowElement.addEventListener('click', function () {
      launchClicked(data);
    });
    return launchRowElement;
  }
}

module.exports = UpcomingTable;
