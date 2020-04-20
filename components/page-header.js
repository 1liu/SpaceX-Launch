class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateNextLaunch(nextLaunch) {
    var launchTime = this.headerElement.querySelector("#next-launch-time");
    var nextLaunchDate = nextLaunch.launch_date_local.slice(0,10);
    launchTime.textContent = nextLaunchDate;
    var localLaunchTime = nextLaunch.launch_date_local;
    var countDownEl = this.headerElement.querySelector("#count-down");

    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();

    var ly = Number(localLaunchTime.slice(0, 4));
    var lm = Number(localLaunchTime.slice(5, 7));
    var ld = Number(localLaunchTime.slice(8, 10));
    countDownEl.textContent = (ly-y)*365+(lm-m)*30+(ld-d);
  }

}
