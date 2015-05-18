var time = document.querySelector("#time");
var clock = document.querySelector("#clock");
var hexColor = document.querySelector("#hexColor");

var timer = window.setInterval(function getTime() {
  var date_time = new Date();
  var hours = date_time.getHours();
  var minute = date_time.getMinutes();
  var seconds = date_time.getSeconds();

  if (hours <= 9) {
    hours = '0' + hours;
  }

  if (minute <= 9) {
    minute = '0' + minute;
  }

  if (seconds <= 9) {
    seconds = '0' + seconds;
  }

  var color = '#' + hours + minute + seconds;
  clock.style.backgroundColor = color;
  hexColor.innerHTML = color;


  if (hours === 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = '0' + (hours - 12);
  }

  var currentTime = hours + ':' + minute + ':' + seconds;
  time.innerHTML = currentTime;

  return currentTime;
}, 1000);
