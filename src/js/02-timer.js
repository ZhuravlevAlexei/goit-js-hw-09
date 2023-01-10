import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

let intervalID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    const selDate = selectedDates[0].getTime();
    const curDate = new Date().getTime();
    if (selDate <= curDate) {
      startBtn.disabled = true;
      //   window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function startInterval(futureTime) {
  intervalID = setInterval(() => {
    let currentTime = new Date();
    let currentGap = convertMs(futureTime.getTime() - currentTime);
    let { days, hours, minutes, seconds } = currentGap;
    dataDays.textContent = addLeadingZero(days.toString());
    dataHours.textContent = addLeadingZero(hours.toString());
    dataMinutes.textContent = addLeadingZero(minutes.toString());
    dataSeconds.textContent = addLeadingZero(seconds.toString());
    if (days + hours + minutes + seconds === 0) {
      clearInterval(intervalID);
    }
  }, 1000);
}

function onStart(evt) {
  startBtn.disabled = true;
  startInterval(new Date(inputPicker.value));
}

const inputPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStart);

//document.body.style.cursor = 'none';
const div = document.querySelector('.timer');
// console.log(div);
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'baseline';
div.style.gap = '10px';

let techArr = document.querySelectorAll('.field');
techArr.forEach(function (elm, idx) {
  elm.style.display = 'flex';
  elm.style.flexDirection = 'column';
  elm.style.alignItems = 'center';
  elm.style.justifyContent = 'baseline';
});

techArr = document.querySelectorAll('.value');
techArr.forEach(function (elm, idx) {
  elm.style.fontSize = '50px';
});

techArr = document.querySelectorAll('.label');
techArr.forEach(function (elm, idx) {
  elm.style.textTransform = 'uppercase';
  elm.style.fontWeight = '500';
});

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

flatpickr(inputPicker, options);

startBtn.disabled = true;

// console.log(flatpickr);
