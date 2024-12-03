import {getDescriptionPhoto} from './data.js';
import {render, photoList} from './render.js';
import { openForm } from './form.js';

const data = getDescriptionPhoto();


render(data);

openForm();

