import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effect.js';
import { showPopup } from './popup.js';
import { FILE_TYPES, POPUPS, SUBMIT_TEXT } from './constans.js';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.body;
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const uploadFile = uploadForm.querySelector('#upload-file');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');
const uploadPreview = document.querySelector('.img-upload__preview img');
const uploadPreviewEffects = document.querySelectorAll('.effects__preview');


const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const canCloseForm = () => !(document.activeElement === inputHashtags || document.activeElement === inputComment)

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeForm, canCloseForm);
}

const onFileInputChange = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    const url = URL.createObjectURL(file);
    uploadPreview.src = url;
    uploadPreviewEffects.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }else {
    file.reset();
  }

  openForm();
}

uploadFile.addEventListener('change', onFileInputChange);

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscapeControl();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SUBMIT_TEXT.SENDING : SUBMIT_TEXT.IDLE;
};

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
        removeEscapeControl();
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
