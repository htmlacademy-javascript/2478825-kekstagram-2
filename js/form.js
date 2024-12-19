import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effect.js';
import { showPopup } from './popup.js';
import { POPUPS, SUBMIT_TEXT } from './constans.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.body;
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const uploadFile = uploadForm.querySelector('#upload-file');
const submitButton = uploadForm.querySelector('.img-upload__submit')

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

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SUBMIT_TEXT.SENDING : SUBMIT_TEXT.IDLE;
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (isValid()) {

    blockSubmitButton();
    sendData(new FormData(uploadForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error()
        }
        closeForm();
        showPopup(POPUPS.SUCCESS);
      })
      .catch(() => {
        showPopup(POPUPS.ERROR);
      })
      .finally(() => {
        blockSubmitButton(false);
      })
  }
};

uploadForm.addEventListener('submit', onFormSubmit);
