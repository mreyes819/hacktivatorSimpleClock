// ***ES6 class pattern***

// class Clock {
//   constructor() {
//     this.callbacks = [];
//     setInterval(this.tick.bind(this), 1000);
//   }
//   addTickCallback(cb) {
//     this.callbacks.push(cb);
//   }
//   tick() {
//     let now = new Date(); // local time
//     this.callbacks.forEach(cb => cb(now));
//   }
// }

// class ClockUI extends Clock {
//   constructor() {
//     super();
//     this.addTickCallback(this.renderTime.bind(this));
//   }
//   renderTime(now) {
//     let hour = now.getHours();
//     let min = now.getMinutes();
//     let sec = now.getSeconds();
//     if (hour < 10) { hour = '0'+hour}
//     if (min < 10) { min = '0'+min}
//     if (sec < 10) { sec = '0'+sec}

//     document.querySelector('.hour').innerHTML = hour;
//     document.querySelector('.minutes').innerHTML = min;
//     document.querySelector('.seconds').innerHTML =  sec;
//   }
// }

// let clockUI = new ClockUI();

// *** Pseudoclassical Style ***
var Clock = function() {
  this.time;
  this.callbacks = [];
  setInterval(this.startIntervalOnCallbacks.bind(this), 1000)
}

Clock.prototype.addTickCallback = function(cb) {
  this.callbacks.push(cb);
}

Clock.prototype.startIntervalOnCallbacks = function() {
  this.time = new Date();
  this.callbacks.forEach(cb => cb(this.time));
}



var ClockUI = function() {
  var clock = new Clock;
  clock.addTickCallback(this.renderTime)
}

ClockUI.prototype.renderTime = function(now) {
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  if (hour < 10) { hour = '0'+hour}
  if (min < 10) { min = '0'+min}
  if (sec < 10) { sec = '0'+sec}
  document.querySelector('.hour').innerHTML = hour;
  document.querySelector('.minutes').innerHTML = min;
  document.querySelector('.seconds').innerHTML =  sec;
}

var clockUI = new ClockUI;

