// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Notiflix
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button');
const daysContent = document.querySelector('[data-days]');
const hoursContent = document.querySelector('[data-hours]');
const minutesContent = document.querySelector('[data-minutes]');
const secondsContent = document.querySelector('[data-seconds]');
startBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const choosenTime = selectedDates[0].getTime();
    if (choosenTime > Date.now()) {
      startBtn.disabled = false;

      startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        let timerId = null;
        timerId = setInterval(() => {
          const cuerentTime = Date.now();
          const deltaTime = choosenTime - cuerentTime;
          const { days, hours, minutes, seconds } = convertMs(deltaTime);

          daysContent.textContent = `${days}`;
          hoursContent.textContent = `${hours}`;
          minutesContent.textContent = `${minutes}`;
          secondsContent.textContent = `${seconds}`;

          if (deltaTime <= 0) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    } else {
      Notiflix.Notify.failure('Please choose date in future');
    }
  },
});

// функція приймає число приводить до строки  і додає спереді 0 якщо число менше 2х знаків
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
