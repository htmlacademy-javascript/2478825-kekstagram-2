import { ACTIVE_BUTTON_CLASS, COUNT_PHOTO, FILTER } from "./constans.js";
import { render } from "./render-thumbnail.js";
import { debounce} from "./util.js";

const picturesFilter = document.querySelector('.img-filters');

let currentFilter = FILTER.default;
let photos = [];

const debounceRender = debounce(render);

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

function applyFilter() {
  let filteredPictures = [];
  if (currentFilter === FILTER.default) {
    filteredPictures = photos;
  } else if (currentFilter === FILTER.random) {
    filteredPictures = photos.sort(() => 0.5 - Math.random()).slice(0, COUNT_PHOTO);
  } else if (currentFilter === FILTER.discussed) {
    filteredPictures = photos.sort((a, b) => b.comments.length - a.comments.length);
  }
  debounceRender(filteredPictures);
}

function configFilter() {
  picturesFilter.classList.remove('img-filters--inactive');
  picturesFilter.addEventListener('click', onFilterChange)
}

export { configFilter };
