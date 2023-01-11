import Notiflix from 'notiflix';

function createPromise(position, delay) {
  // console.log(' ' + position + ' ' + delay);
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(position, delay);
      } else {
        // Reject
        reject(position, delay);
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  for (let idx = 0; idx < amount.value; idx += 1) {
    setTimeout(() => {
      let curDelay = Number(delay.value) + Number(step.value * idx);
      // console.log(curDelay);
      createPromise(idx, curDelay);
    }, step.value);
  }
}

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
// console.log(form);
