const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export { getRandomInteger };
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;
const SHOW_TIME = 5000;

export const showErrorMessage = () => {
  const newDataError = dataErrorTemplate.cloneNode(true);
  body.append(newDataError);
  setTimeout(() => {
    newDataError.remove();
  }, SHOW_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
