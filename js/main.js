import { render } from './render-thumbnail.js';
import './form.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';
import { showErrorMessage } from './util.js';

getData()
  .then((data) => {
    render(data);
    initFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });


