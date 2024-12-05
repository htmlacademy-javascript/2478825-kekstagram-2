import './validation.js';

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
  uploadFile.value = '';
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