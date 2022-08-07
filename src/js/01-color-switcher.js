const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

buttonStart.addEventListener('click', () => {
  if (buttonStart) {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  }
  intervalChangeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  if (buttonStop) {
    buttonStop.disabled = true;
    buttonStart.disabled = false;
  }
  clearInterval(intervalChangeColor);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>
