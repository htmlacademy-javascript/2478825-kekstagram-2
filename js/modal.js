import { removeEscapeControl, setEscapeControl } from "./escape-control.js";

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const showCountsCommet = bigPicture.querySelector('.social__comment-shown-count');
const totalCountsCommet = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;
let currentCount = 0;
let comments = [];
const COUNT_STEP = 5;
let localComments;

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeBigPicture = () => {
  hideBigPicture();
};

const renderComment = ({ message, name, avatar }) => {
  const newComment = socialComment.cloneNode(true);
  const userpic = newComment.querySelector('.social__picture');
  userpic.src = avatar;
  userpic.alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
}

const renderStatistic = () => {
  showCountsCommet.textContent = currentCount;
}

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  localComments.splice(0, COUNT_STEP).forEach((item) => {
    fragment.append(renderComment(item))
    currentCount++;
  });
  socialComments.append(fragment);

  renderStatistic();
  renderLoader();
}

const renderLoader = () => {
  if (localComments.length) {
    commentsLoader.classList.remove ('hidden');
  } else {
    commentsLoader.classList.add ('hidden');
  }
}

const render = ({ url, likes, comments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  totalCountsCommet.textContent = comments.length;
  socialCaption.textContent = description;
  localComments = [...comments];
  currentCount = 0;
  renderComments();
}

export const open = (photo) => {
  console.log(photo);
  showBigPicture();
  socialComments.innerHTML = '';
  render(photo);
  setEscapeControl(hideBigPicture);
}

bigPictureCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeBigPicture();
  removeEscapeControl();
});

commentsLoader.addEventListener ('click', () => {
  renderComments();
});
