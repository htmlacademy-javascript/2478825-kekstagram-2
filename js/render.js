import { open as openModal } from "./modal.js";

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.pictures');
const photoList = [];

const render = (photos) => {
  photoList.length = 0;
  photoList.push(...structuredClone(photos));
  const fragment = document.createDocumentFragment();
  photoList.forEach((photo) => {
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
  return photoList;
}

container.addEventListener('click', (evt) => {
  evt.preventDefault();
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id)
    const photo = photoList.find((item) => item.id === id);
    openModal(photo);
  }
})
export { render, photoList }


