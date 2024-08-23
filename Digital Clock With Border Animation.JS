let hourTxt = document.querySelector(".hour");
let minTxt = document.querySelector(".min");
let secTxt = document.querySelector(".sec");
let ampmTxt = document.querySelector(".ampm");

setInterval(() => {
  let date = new Date();

  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  let label;
  label = hour < 12 ? "AM" : "PM";

  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;

  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  hourTxt.innerText = hour;
  minTxt.innerText = mins;
  secTxt.innerText = sec;

  ampmTxt.innerText = label;
}, 1000);