
setInterval(currentTime, 1);
function currentTime() {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var minute = date.getMinutes();
  var s = date.getSeconds();
  if (m < 10) {
    m = '0' + m;
  }
  if (d < 10) {
    d = '0' + d;
  }
  if (h < 10) {
    h = '0' + h;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (s < 10) {
    s = '0' + s;
  }
  var uy = date.getUTCFullYear();
  var um = date.getUTCMonth() + 1;
  var ud = date.getUTCDate();
  var uh = date.getUTCHours();
  var uminute = date.getUTCMinutes();
  var us = date.getUTCSeconds();
  if (um < 10) {
    um = '0' + um;
  }
  if (ud < 10) {
    ud = '0' + ud;
  }
  if (uh < 10) {
    uh = '0' + uh;
  }
  if (uminute < 10) {
    uminute = '0' + uminute;
  }
  if (us < 10) {
    us = '0' + us;
  }
  document.getElementById('local-time').innerHTML = y + '-' + m + '-' + d + '   ' + h + ':' + minute + ':' + s;
  document.getElementById('utc-time').innerHTML = uy + '-' + um + '-' + ud + '   ' + uh + ':' + uminute + ':' + us;
}
