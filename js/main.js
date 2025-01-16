import { render } from './render-thumbnail.js';
import './form.js';
import { getData } from './api.js';
import { configFilter } from './filter.js';
import { showErrorMessage } from './util.js';

getData()
  .then((data) => {
    render(data);
    configFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });


