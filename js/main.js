// import {getDescriptionPhoto} from './data.js';
import {render} from './render-thumbnail.js';
import './form.js';
import { showErrorMessage } from './util.js';
import { getData } from './api.js';

// const data = getDescriptionPhoto();

//  render(data);


getData()
.then((data)=>{
render(data)
})
.catch(()=>{
  showErrorMessage()
})


