import {getPhoto} from './data';
import {getDescriptionPhoto} from './data';


const pictureTemplate = document.querySelector('#picture')
.content
.querySelector ('.picture');
const container = document.querySelector('.pictures');


getDescriptionPhoto.forEach = ((getPhoto) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

image.src = getPhoto.url;
image.alt = getPhoto.description;

thumbnail.querySelector('.picture__likes').textContent = getPhoto.likes;
thumbnail.querySelector('.picture__comments').textContent = getPhoto.comments;

container.appendChild(thumbnail);
});




// <template id="picture">
//     <a href="#" class="picture">
//       <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//       <p class="picture__info">
//         <span class="picture__comments"></span>
//         <span class="picture__likes"></span>
//       </p>
//     </a>
//   </template>



// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments


