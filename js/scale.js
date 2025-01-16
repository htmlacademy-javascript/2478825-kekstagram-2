import { FACTOR, SCALE_VALUE_DEFAULT, SCALE_VALUE_MAX, SCALE_VALUE_MIN, SCALE_VALUE_STEP } from './constans';

const scaleValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

let currentScale = SCALE_VALUE_DEFAULT;

const render = () => {
  scaleValue.value = `${currentScale}%`;
  imageUploadPreview.style.transform = `scale(${currentScale * FACTOR})`;
};

const onScaleSmallerClick = () => {
  currentScale = currentScale > SCALE_VALUE_MIN ? currentScale - SCALE_VALUE_STEP : SCALE_VALUE_MIN;
  render();
};

const onScaleBiggerClick = () => {
  currentScale = currentScale < SCALE_VALUE_MAX ? currentScale + SCALE_VALUE_STEP : SCALE_VALUE_MAX;
  render();
};

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);

export const reset = () => {
  currentScale = SCALE_VALUE_DEFAULT;
  render();
};
reset();

