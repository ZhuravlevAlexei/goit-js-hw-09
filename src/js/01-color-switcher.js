const bodyMain = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const div = document.createElement('div');
startBtn.before(div);

div.append(startBtn, stopBtn);

div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.gap = '10px';
div.style.height = '500px';
div.style.width = 'auto';
// div.style.backgroundColor = 'gray';

startBtn.style.height = '50px';
startBtn.style.width = '90px';
startBtn.style.textTransform = 'uppercase';
stopBtn.style.height = '50px';
stopBtn.style.width = '90px';
stopBtn.style.textTransform = 'uppercase';

// console.dir(startBtn);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart(evt) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStop(evt) {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

stopBtn.disabled = true;

// console.dir(stopBtn);
