const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.pictures');

const render = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');

    image.src = photo.url;
    image.alt = photo.description;

    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(thumbnail);
  });
  container.append(fragment);
}

export { render }



