import { isValid, reset as resetValidation } from './validation.js';
import {reset as resetScale} from './scale.js';
import {reset as resetEffects} from './effect.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.body;
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const uploadFile = uploadForm.querySelector('#upload-file');

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

uploadFile.addEventListener('change', () => {
  openForm();
});

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();

  }
});

const onFormSubmit = (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
};

uploadForm.addEventListener('submit', onFormSubmit);
