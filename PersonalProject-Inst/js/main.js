'use strict';

// ! fetch
const Urls = {
  GET: 'https://22.javascript.pages.academy/kekstagram/data',
  POST: 'https://22.javascript.pages.academy/kekstagram',
};

const request = (onSuccess, onError, method, data) => {
  fetch(Urls[method], {
    method: method,
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      onSuccess(response);
    })
    .catch(() => {
      onError();
    });
};

// ! effects

/* global noUiSlider:readonly */

const DEFAULT_EFFECT_LEVEL = 100;

const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

const effectRadioGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview > img');
const effectLevelValue = document.querySelector('.effect-level__value');

effectLevel.classList.add('visually-hidden');

let lastClass = '';

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${parseInt(effectLevelValue.value, 10) * 3 * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    return `brightness(${parseInt(effectLevelValue.value, 10) * 3 * 0.01})`;
  },
};

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (lastClass !== '') {
      uploadPreviewImg.classList.remove(lastClass);
    }
    effectLevelSlider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    uploadPreviewImg.classList.add(currentClass);
    uploadPreviewImg.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
};

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = Math.round(effectLevelSlider.noUiSlider.get());

  uploadPreviewImg.style.filter = effects[lastClass.replace('effects__preview--', '')]();
});

const setDefaultLevel = () => {
  effectLevelSlider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
  effectLevelValue.value = DEFAULT_EFFECT_LEVEL;
  effectLevel.classList.add('visually-hidden');
  uploadPreviewImg.style.filter = null;
  if (lastClass) {
    uploadPreviewImg.classList.remove(lastClass);
  }
};

// ! util

// ESCAPE
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const checkEsc = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
};

// перемешиваем массив
const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// таймаут запроса
const DEBOUNCE_INTERVAL = 500;

const debounce = (cb) => {
  let lastTimeout = null;

  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};

// ! big-photo

const COMMENTS_LOAD_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const scrollOff = document.querySelector('body');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

let commentsLoaded = [];

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let commentsCount = COMMENTS_LOAD_STEP;

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  scrollOff.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
  document.removeEventListener('keydown', onBigPictureEscKeyDown);
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
};

// функция вывода комментариев

const renderComment = (comment) => {
  const commentSimilar = commentTemplate.cloneNode(true);

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

const renderComments = (comments) => {
  const onCommentsLoaderClick = () => {
    renderComments(comments);
  };

  commentsCount = comments.length < COMMENTS_LOAD_STEP ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  commentList.innerHTML = '';

  commentCount.textContent = `${commentsLoaded.length} из ${comments.length} комментариев`;

  let commentsListFragment = document.createDocumentFragment();

  commentsLoaded.forEach((comment) => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);

  if (comments.length > COMMENTS_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, { once: true });
  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENTS_LOAD_STEP;
};

const onBigPictureEscKeyDown = (evt) => {
  if (checkEsc(evt)) {
    onBigPictureCloseClick();
  }
};

// функция вывода большой картинки/поста
const show = (picture) => {
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
  scrollOff.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onBigPictureEscKeyDown);

  renderComments(picture.comments.slice());
};

// ! add-preview

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderPhoto = (picture) => {
  const photoPreview = pictureTemplate.cloneNode(true);

  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;

  photoPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(picture);
  });

  return photoPreview;
};

const renderPhotos = (photos) => {
  let picturesListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesListFragment.appendChild(renderPhoto(photo));
  });

  picturesList.appendChild(picturesListFragment);
};

// ! alert

const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();
const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const removeEscapeAlert = (evt, className) => {
  if (checkEsc(evt)) {
    removeAllert(className);
  }
};

const onErrorEscKeydown = (evt) => {
  removeEscapeAlert(evt, '.error');
  document.removeEventListener('keydown', onErrorEscKeydown);
};

const onSuccessEscKeydown = (evt) => {
  removeEscapeAlert(evt, '.success');
  document.removeEventListener('keydown', onSuccessEscKeydown);
};

const removeAllert = (type) => {
  document.querySelector(type).remove();
};

const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');

  errorElement.querySelector('.error').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('error__inner')) {
      document.removeEventListener('keydown', onErrorEscKeydown);
      removeAllert('.error');
    }
  });

  errorButton.addEventListener('click', () => {
    removeAllert('.error');
  });

  document.addEventListener('keydown', onErrorEscKeydown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
};

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;

  successElement.querySelector('.success').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('success__inner')) {
      document.removeEventListener('keydown', onSuccessEscKeydown);
      removeAllert('.success');
    }
  });

  document.addEventListener('keydown', onSuccessEscKeydown);

  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
};

// ! editor

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('#upload-cancel');

// открываем окно фильтров после загрузки файла
uploadInput.addEventListener('change', () => {
  resetSettings();
  uploadModal.classList.remove('hidden');
  scrollOff.classList.add('modal-open');
  document.addEventListener('keydown', onEditorFormEscapeKeydown);
});

// закрытие окна
const closeModal = () => {
  uploadModal.classList.add('hidden');
  scrollOff.classList.remove('modal-open');
  inputHashtag.style.border = 'none';
  uploadInput.value = '';
  uploadForm.reset();
  setDefaultLevel();
  document.removeEventListener('keydown', onEditorFormEscapeKeydown);
};

uploadModalClose.addEventListener('click', () => {
  closeModal();
});

const onEditorFormEscapeKeydown = (evt) => {
  if (checkEsc(evt)) {
    closeModal();
  }
};

// зум картинки
const buttonPlus = uploadModal.querySelector('.scale__control--bigger');
const buttonMinus = uploadModal.querySelector('.scale__control--smaller');
const scaleValue = uploadModal.querySelector('.scale__control--value');
const imagePreview = uploadModal.querySelector('.img-upload__preview > img');
let inputHashtag = uploadModal.querySelector('.text__hashtags');

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  scaleValue.value = '100%';
};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

// Отправляем фотку
const uploadForm = document.querySelector('.img-upload__form');

const onSuccess1 = () => {
  showSuccess('Ура!');
  closeModal();
};

const onError1 = () => {
  showError('ЧТо-то пошло не так', 'Загрузить другой файл');
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  request(onSuccess1, onError1, 'POST', new FormData(evt.target));
});

// ! validation

let MAX_SYMBOLS = 20;
let MAX_HASHTAGS = 5;
let MAX_COMMENTLENGTH = 140;

let inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');
  let inputCommentText = inputComment.value;

  if (inputCommentText.length > MAX_COMMENTLENGTH) {
    inputComment.setCustomValidity('Максимум 140 символов');
  }
});

inputHashtag.addEventListener('input', () => {
  inputHashtag.setCustomValidity('');
  inputHashtag.style.border = 'none';

  let inputText = inputHashtag.value.toLowerCase().trim();

  if (!inputText) {
    return;
  }

  let inputArray = inputText.split(/\s+/);

  if (inputArray.length === 0) {
    return;
  }

  const isStartNotHashtag = inputArray.some((item) => {
    return item[0] !== '#';
  });
  if (isStartNotHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
  }

  const isOnlyLatticeHashtag = inputArray.some((item) => {
    return item === '#';
  });
  if (isOnlyLatticeHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег не может состоять только из решетки');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги разделяются пробелами');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });
  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться');
  }

  const isLongHashtag = inputArray.some((item) => {
    return item.length > MAX_SYMBOLS;
  });
  if (isLongHashtag) {
    inputHashtag.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решетку');
  }
  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимум 5 хэш-тегов');
  }

  if (!inputHashtag.checkValidity()) {
    inputHashtag.style.border = '2px solid red';
  } else {
    inputHashtag.style.border = 'none';
  }
});

const onEscapeDown = (evt) => {
  if (checkEsc(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', onEscapeDown);
inputComment.addEventListener('keydown', onEscapeDown);

// ! main

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const filter = document.querySelector('.img-filters');
let photos = [];

const removeActiveClass = () => {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach((element) => {
      element.remove();
    });
  }
};

const filters = {
  'filter-default': () => {
    renderPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
  },
  'filter-random': () => {
    renderPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));
  },
  'filter-discussed': () => {
    renderPhotos(
      photos.slice().sort((a, b) => {
        return b.comments.length - a.comments.length;
      })
    );
  },
};

const onSuccess2 = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice();
  renderPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
};

const onError2 = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
};

request(onSuccess2, onError2, 'GET');

const onFilterClick = debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
});

filter.addEventListener('click', onFilterClick);
