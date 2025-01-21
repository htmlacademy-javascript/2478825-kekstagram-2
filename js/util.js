import { SHOW_TIME } from "./constans.js";

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

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
