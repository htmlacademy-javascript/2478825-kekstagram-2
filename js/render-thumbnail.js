import { open as openModal } from './modal.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.pictures');
let pictures;

const clear = () => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
};

const render = (photos) => {
  clear();
  pictures = [...photos];
  const fragment = document.createDocumentFragment();
  pictures.forEach((photo) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    thumbnail.dataset.id = photo.id;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(thumbnail);
  });

  container.append(fragment);
  return pictures;
};

container.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = pictures.find((item) => item.id === id);
    openModal(photo);
  }
});
export { render, pictures };


