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
    image.dataset.id = photo.id;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(thumbnail);
  });
  container.append(fragment);
  return photoList;
}

container.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    console.log(card.dataset.id)
  }
})
export { render, photoList }


