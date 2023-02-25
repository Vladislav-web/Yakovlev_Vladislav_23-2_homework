const countContainer = document.getElementById("countdown-number");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clock = document.getElementById('clock')
let remainingTime = 60;
let timer;
let isStopped = true;

const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
    clock.classList.remove('clock-go')
  }
};

startButton.onclick = startTimer;
stopButton.onclick = stopTimer;

const renderTime = () => {
  remainingTime -= 1;
  clock.classList.add('clock-go')
  countContainer.innerHTML = remainingTime;
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    clock.classList.remove('clock-go')
  }
};
