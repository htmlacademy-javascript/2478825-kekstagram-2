import { POPUPS } from './constans.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  [POPUPS.SUCCESS]: successTemplate,
  [POPUPS.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);
  body.append(newPopup);
  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
      removeEscapeControl();
    }
  });
  setEscapeControl(() => {
    newPopup.remove();
  });
};
