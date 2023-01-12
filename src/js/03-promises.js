import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const corrData = { position: position, delay: delay };
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(corrData);
      } else {
        // Reject
        reject(corrData);
      }
    }, delay);
  });

  return promise;
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  const nAmount = Number(amount.value);
  const nStep = Number(step.value);
  let curDelay = Number(delay.value);

  for (let idx = 1; idx <= nAmount; idx += 1) {
    createPromise(idx, curDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    curDelay += nStep;
  }

  form.reset();
}

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
// console.log(form);
