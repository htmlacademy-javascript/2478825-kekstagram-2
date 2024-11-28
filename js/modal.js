const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const showCountsCommet = bigPicture.querySelector('.social__comment-shown-count');
const totalCountsCommet = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count')
const commentsLoader = bigPicture.querySelector('.comments-loader')
const body = document.body;
let currentCount = 0;
let comments = [];
const COUNT_STEP = 5;

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

const renderComments = (data) => {
  const fragment = document.createDocumentFragment()
  data.forEach((item) => {
  fragment.append(renderComment(item))
  });
  socialComments.append(fragment);
}

const render = ({ url, likes, comments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  showCountsCommet.textContent = 5;
  totalCountsCommet.textContent = comments.length;
  socialCaption.textContent = description;
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  renderComments(comments);
}

export const open = (photo) => {
  console.log(photo);
  showBigPicture();
  socialComments.innerHTML = '';
  render(photo);
}

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
})

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
});

const renderNextComments = () => {
  const fragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
const renderedCommentsLength =  renderedComments.length + currentCount;

renderedComments.forEach (() => {
  if (renderedCommentsLength >= comments.length) {
    commentsLoader.classList.add ('hidden');
    }
})
}

