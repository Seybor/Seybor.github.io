'use strict';

// ! task 4
const ENTER_KEYCODE = 13;
const ESC_KEYCODE = 27;

const editingForm = document.querySelector('.img-upload__overlay');
editingForm.setAttribute('tabindex', '0');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = editingForm.querySelector('#upload-cancel');
let ImgPreview = editingForm.querySelector('.img-upload__preview img');

const formHashtag = editingForm.querySelector('.text__hashtags');
const formDescription = editingForm.querySelector('.text__description');

formHashtag.setAttribute('tabindex', '0');
formDescription.setAttribute('tabindex', '0');

const effectsPreview = editingForm.querySelectorAll('.effects__preview');

const uploadFileChangeHandler = (evt) => {
  editingForm.classList.remove('hidden');

  console.log(evt.target.files[0].name);

  let path = evt.target.files[0].name;

  ImgPreview.src = `photos/${path}`;

  effectsPreview.forEach((el) => {
    el.style = `background-image: url(photos/${path})`;
  });

  editingForm.focus();
};

uploadFile.addEventListener('change', uploadFileChangeHandler);

editingForm.addEventListener(
  'keydown',
  (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      editingForm.classList.add('hidden');
      uploadFile.value = null;
    }
  },
  false
);

uploadCancel.addEventListener('click', () => {
  editingForm.classList.add('hidden');
  uploadFile.value = null;
});

formHashtag.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});
formDescription.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

const scale = editingForm.querySelector('.scale');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');

const effects = editingForm.querySelector('.effects');
let effectsList = effects.querySelector('.effects__list');

let effectsInput = effects.querySelector('input:checked');

scaleSmaller.addEventListener('click', () => {
  let step = scaleValue.value;
  step = step.slice(0, -1);
  if (step > 25) {
    step = step - 25;
  } else {
    step = 25;
  }
  scaleValue.value = `${step}%`;
  ImgPreview.style.transform = `scale(0.${step})`;
});

scaleBigger.addEventListener('click', () => {
  let step = scaleValue.value;
  step = step.slice(0, -1);
  if (step < 75) {
    step = step - -25;
    ImgPreview.style.transform = `scale(0.${step})`;
  } else {
    step = 100;
    ImgPreview.style.transform = `scale(1)`;
  }
  scaleValue.value = `${step}%`;
});

const effectsInputs = effects.querySelectorAll('input[name="effect"]');

// const changeEffectInput = () => {
//   let value = effectEnabledSettings[0];

//   switch (value) {
//     case 'chrome':
//       ImgPreview.style.filter = 'grayscale(1)';
//       break;
//     case 'sepia':
//       ImgPreview.style.filter = 'sepia(1)';
//       break;
//     case 'marvin':
//       ImgPreview.style.filter = 'invert(1)';
//       break;
//     case 'phobos':
//       ImgPreview.style.filter = 'blur(5px)';
//       break;
//     case 'heat':
//       ImgPreview.style.filter = 'brightness(3)';
//       break;
//     default:
//       ImgPreview.style.filter = null;
//   }
// };

// let effectEnabledSettings = [];
// effectsInputs.forEach(function (radio) {
//   radio.addEventListener('change', function () {
//     effectEnabledSettings = Array.from(effectsInputs)
//       .filter((i) => i.checked)
//       .map((i) => i.value);
//     effectsInput = effects.querySelector('input:checked');
//     changeEffectInput();
//   });
// });

const pictures = document.querySelectorAll('.picture__img');
gallery.setAttribute('tabindex', '0');
const galleryPhoto = gallery.querySelector('.big-picture__img > img');
const galleryCancel = gallery.querySelector('#picture-cancel');

let picturesChoose;

var renderComments = function (value, index, insertIndex) {
  var socialCommentsElement = socialCommentsTemplate.cloneNode(true);

  socialCommentsElement.querySelector(
    '.social__picture'
  ).src = `img/avatar-${AVATAR__COMMENTS[index][insertIndex]}.svg`;
  socialCommentsElement.querySelector('.social__text').textContent = value;

  return socialCommentsElement;
};

pictures.forEach((el, id) => {
  el.addEventListener('click', () => {
    picturesChoose = el.src;
    console.log(picturesChoose);
    gallery.classList.remove('hidden');
    gallery.focus();
    galleryPhoto.src = picturesChoose;

    socialCommentsContent.textContent = '';

    var Commentsfragment = document.createDocumentFragment();
    for (let i = 0; i < mainArray[id].comments.length; i++) {
      Commentsfragment.appendChild(renderComments(mainArray[id].comments[i], id, i));
    }
    socialCommentsContent.appendChild(Commentsfragment);

    gallery.querySelector('.social__caption').textContent = mainArray[id].description;
    gallery.querySelector('.likes-count').textContent = mainArray[id].likes;
    gallery.querySelector('.comments-count').textContent = mainArray[id].comments.length;
  });
});

const galleryPreview = gallery.querySelector('.big-picture__preview');

gallery.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    gallery.classList.add('hidden');
  }
});

gallery.addEventListener('click', () => {
  gallery.classList.add('hidden');
});

galleryPreview.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

galleryCancel.addEventListener('click', () => {
  gallery.classList.add('hidden');
});

const mainForm = document.querySelector('#upload-select-image');
const uploadSubmit = editingForm.querySelector('.img-upload__submit');

uploadSubmit.addEventListener('click', () => {
  formHashtag.setCustomValidity('');
  let check = formHashtag.value.split(' ');
  let newCheck = formHashtag.value.split(' ');

  newCheck.forEach((el, index) => {
    newCheck[index] = el.toLowerCase();
  });
  console.log(check);
  console.log(newCheck);

  const duplicates = newCheck.filter((item, index) => newCheck.indexOf(item) !== index);

  console.log(duplicates.length);

  if (duplicates.length !== 0) {
    return formHashtag.setCustomValidity('Теги не должны повторяться');
  }

  if (check.length === 1 && check[0] === '') {
    return console.log('успешно');
  }
  if (check.length > 5) {
    return formHashtag.setCustomValidity('Не больше пяти хэш-тегов');
  }

  check.forEach((el) => {
    if (el[0] !== '#') {
      return formHashtag.setCustomValidity('Все хеш-теги должны начинаться с символа "#"');
    }
    if (el.length === 1) {
      return formHashtag.setCustomValidity('Введите название');
    }
    if (el.length > 20) {
      return formHashtag.setCustomValidity('Длина не должна быть больше 20 символов(включая решётку)');
    }
    for (let i = 0; i < el.length; i++) {
      if (el[i] - el[i] === 0) {
        console.log(el[i]);
        return formHashtag.setCustomValidity('Без цифр');
      }
    }
  });
});
