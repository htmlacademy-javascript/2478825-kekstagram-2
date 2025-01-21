export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
const EFFECTS_STYLES = {
  NONE: '',
  GRAYSCALE: 'grayscale',
  SEPIA: 'sepia',
  INVERT: 'invert',
  BLUR: 'blur',
  BRIGHTNESS: 'brightness'
};

const UNITS = {
  PX: 'px',
  NONE: '',
  PS: '%'
};

export const EffectsSetting = {
  [EFFECTS.NONE]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.NONE,
    units: UNITS.NONE
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.GRAYSCALE,
    units: UNITS.NONE
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.SEPIA,
    units: UNITS.NONE
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.INVERT,
    units: UNITS.PS
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BLUR,
    units: UNITS.PX
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BRIGHTNESS,
    units: UNITS.NONE
  },
};

export const DEFAULT_EFFECT = EFFECTS.NONE;

export const MAX_SYMBOL = 140;
export const SPACE = /\s+/g;
export const HASHTAG_FORMULA = /^#[a-za-яё0-9]{1,19}$/;
export const MAX_HASHTAGS = 5;

export const SCALE_VALUE_MIN = 25;
export const SCALE_VALUE_MAX = 100;
export const SCALE_VALUE_STEP = 25;
export const SCALE_VALUE_DEFAULT = SCALE_VALUE_MAX;
export const FACTOR = 0.01;

export const POPUPS = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const SUBMIT_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const COUNT_PHOTO = 10;

export const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

export const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};


export const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

export const COUNT_STEP = 5;

export const SHOW_TIME = 5000;
