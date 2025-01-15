import { HASHTAG_FORMULA, MAX_HASHTAGS, MAX_SYMBOL, SPACE } from './constans.js';
const uploadForm = document.querySelector('.img-upload__form');
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const createHashtags = (value) => value
  .toLowerCase()
  .replaceAll(SPACE, ' ')
  .trim().split(' ')
  .filter((item) => item !== '');

const checkDescription = (value) => value.length <= MAX_SYMBOL;

const checkHashtags = (value) => {
  if(!value.length) {
    return true;
  }
  const hashTags = createHashtags(value);
  return hashTags.every((hashtag) => HASHTAG_FORMULA.test(hashtag));
};

const checkHashtagsCount = (value) => {
  if(!value.length) {
    return true;
  }
  const hashTags = createHashtags(value);
  return hashTags.length <= MAX_HASHTAGS;
};

const checkUniqueHashtags = (value) => {
  if(!value.length) {
    return true;
  }
  const hashTags = createHashtags(value);
  const uniques = [...new Set(hashTags)];
  return hashTags.length === uniques.length;
};

pristine.addValidator(
  inputHashtags,
  checkHashtags,
  'Хэштэг содержит неверные символы'
);

pristine.addValidator(
  inputHashtags,
  checkHashtagsCount,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  inputHashtags,
  checkUniqueHashtags,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  inputComment,
  checkDescription,
  `Максимальная длина - ${MAX_SYMBOL} символов`
);

export const isValid = () => pristine.validate();
export const reset = () => pristine.reset();
