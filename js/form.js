const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const body = document.body;
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const textHashtags = uploadForm.querySelector('.text__hashtags');
const textComment = uploadForm.querySelector('.text__description');

const showForm = () => {
  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  })
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

export const openForm = () => {
  showForm();
}

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
});

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
})

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'

});

pristine.addValidator (textHashtags, (value) => {
  const hashtags = /^#[a-za-яё0-9]{1,19}$/i.test(value);
  return hashtags;
}, 'Хэштэг содержит неверные символы');

pristine.addValidator (textComment, (value) => {
  const currentComment = value.length <= 140; value.toLowerCase().trim();
  if (textComment.length === 0) {
    return true;
  }
  return currentComment;
}, 'Ошибка здесь');






