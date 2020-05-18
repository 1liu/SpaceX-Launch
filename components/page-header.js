class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateNextLaunch(nextLaunch) {
    console.log(nextLaunch);
    const launchTime = this.headerElement.querySelector("#next-launch-time");
    const nextLaunchDate = nextLaunch.launch_date_local.slice(0,10);
    launchTime.textContent = nextLaunchDate;
    const localLaunchTime = nextLaunch.launch_date_local;
    const countDownEl = this.headerElement.querySelector("#count-down");

    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    const ly = Number(localLaunchTime.slice(0, 4));
    const lm = Number(localLaunchTime.slice(5, 7));
    const ld = Number(localLaunchTime.slice(8, 10));
    countDownEl.textContent = (ly-y)*365+(lm-m)*30+(ld-d);
  }

}
