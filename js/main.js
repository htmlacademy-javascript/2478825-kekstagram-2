import { render } from './render-thumbnail.js';
import './form.js';
import { getData } from './api.js';
import { settingFilter } from './filter.js';
import { showErrorMessage } from './util.js';

getData()
  .then((data) => {
    render(data);
    settingFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });


