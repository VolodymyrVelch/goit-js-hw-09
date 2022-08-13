// Notiflix
import Notiflix from 'notiflix';

const form = document.querySelector('form');
let firstDelay = 0;
let stepDelay = 0;
let amountVal = 0;
let promiseDelay = firstDelay;

// створюємо функцію проміс
const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, promiseDelay);
  });
};

// додаємо слухач при кліку на сабміт
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  firstDelay = Number(delay.value);
  stepDelay = Number(step.value);
  amountVal = Number(amount.value);

  for (let i = 0; i < amountVal; i++) {
    let position = i + 1;
    promiseDelay += stepDelay;

    // при кліку  викликаємо проміс з кроком заданої затримки доданої до початкової

    createPromise(position, promiseDelay)
      .then(result => {
        console.log(result);
        Notiflix.Notify.success(result);
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(error);
      });
  }
});
