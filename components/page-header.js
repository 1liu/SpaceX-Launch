class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateNextLaunch(nextLaunch) {
    const launchTime = this.headerElement.querySelector("#next-launch-time");
    const nextLaunchDate = nextLaunch.launch_date_local.slice(0,10);
    launchTime.textContent = nextLaunchDate;
    const localLaunchTime = nextLaunch.launch_date_local;
    const countDownEl = this.headerElement.querySelector("#count-down");

    countDownEl.textContent = parseInt((new Date(localLaunchTime).getTime() - new Date().getTime())/(24*3600*1000));

  }

}
