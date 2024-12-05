const MAX_SYMBOL = 140;
const MAX_HASHTAGS = 5;
const MAX_LENGTH = 20;
const uploadForm = document.querySelector('.img-upload__form');
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const isHashtagsValid = (value) => {
  const inputArray = inputHashtags.split('');

  const rules = [
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хештег не может состоять только из одной решётки'
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя указывать больше ${MAX_HASHTAGS} хештегов`
    },
    {
      check: inputArray.some((item) => item.length > MAX_LENGTH),
      error: `Максимальная длина одного хэштега ${MAX_LENGTH} символов, включая решётку`
    },
    {
      check: inputArray.some((item) => item = /^#[a-za-яё0-9]{1,19}$/i.test(inputText)),
      error: 'Хэштэг содержит неверные символы'
    }
  ];
};

const validateHashtag = (rule) => {
  const isValid = rule.check;
  if (isValid) {
    errorMessage = rule.error;
  }
  return (isValid)
};

pristine.addValidator(
  inputHashtags,
  validateHashtag,
  error
);

pristine.addValidator(
  inputComment,
  (value) => {
    const inputComment = value.length <= MAX_SYMBOL;
    value.toLowerCase().trim();
    if (value.length === 0) {
      return true;
    }
    return inputComment;
  }, 'Превышено максимальное количество знаков');

const onFormSubmit = (evt) => {
  evt.preventDefault();
  uploadForm.submit;
}
uploadForm.addEventListener('submit', onFormSubmit);
