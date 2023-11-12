'use strict';

const COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_ARRAY = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!',
];

const generatesPhotos = (maxPhoto = 25) => {
  if (maxPhoto < 1) {
    maxPhoto = 1;
  }
  const mainArray = [];
  for (let i = 0; i < maxPhoto; i++) {
    const randomNumber = (min = 15, max = 200) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomComments = (min = 0, max = COMMENTS_ARRAY.length - 1) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomDescrition = (min = 0, max = DESCRIPTION_ARRAY.length - 1) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomCommentsNumber = (min = 2, max = 5) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const obj = {};
    obj.url = i + 1;
    obj.likes = randomNumber();

    obj.comments = [];
    for (let i = 0; i < randomCommentsNumber(); i++) {
      obj.comments.push(COMMENTS_ARRAY[randomComments()]);
    }

    obj.description = DESCRIPTION_ARRAY[randomDescrition()];
    mainArray.push(obj);
  }
  return mainArray;
};

const mainArray = generatesPhotos();

var picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
var picturesContent = document.querySelector('.pictures');

var renderPictures = function (value) {
  var pictureElement = picturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = `photos/${value.url}.jpg`;
  pictureElement.querySelector('.picture__likes').textContent = value.likes;
  pictureElement.querySelector('.picture__comments').textContent = value.comments.length;

  return pictureElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < mainArray.length; i++) {
  fragment.appendChild(renderPictures(mainArray[i]));
}
picturesContent.appendChild(fragment);

// ! 4-5 задания

var gallery = document.querySelector('.big-picture');
// gallery.classList.remove('hidden');

// gallery.querySelector('.big-picture__img img').src = `photos/${mainArray[0].url}.jpg`;
// gallery.querySelector('.likes-count').textContent = mainArray[0].likes;
// gallery.querySelector('.comments-count').textContent = mainArray[0].comments.length;
// gallery.querySelector('.social__caption').textContent = mainArray[0].description;

var socialCommentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
var socialCommentsContent = gallery.querySelector('.social__comments');

const AVATAR__COMMENTS = [];

const getAvatarComments = () => {
  const randomNumber = (min = 2, max = 6) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  for (let i = 0; i < mainArray.length; i++) {
    let obj = {};
    obj.comments = [];
    for (let j = 0; j < mainArray[i].comments.length; j++) {
      obj.comments.push(randomNumber());
    }
    AVATAR__COMMENTS.push(obj.comments);
  }
};

getAvatarComments();

gallery.querySelector('.social__comment-count').classList.add('visually-hidden');
gallery.querySelector('.social__comments-loader').classList.add('visually-hidden');

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

const changeEffectInput = () => {
  let value = effectEnabledSettings[0];

  switch (value) {
    case 'chrome':
      ImgPreview.style.filter = 'grayscale(1)';
      break;
    case 'sepia':
      ImgPreview.style.filter = 'sepia(1)';
      break;
    case 'marvin':
      ImgPreview.style.filter = 'invert(1)';
      break;
    case 'phobos':
      ImgPreview.style.filter = 'blur(5px)';
      break;
    case 'heat':
      ImgPreview.style.filter = 'brightness(3)';
      break;
    default:
      ImgPreview.style.filter = null;
  }
};

let effectEnabledSettings = [];
effectsInputs.forEach(function (radio) {
  radio.addEventListener('change', function () {
    effectEnabledSettings = Array.from(effectsInputs)
      .filter((i) => i.checked)
      .map((i) => i.value);
    effectsInput = effects.querySelector('input:checked');
    changeEffectInput();
  });
});

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

gallery.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    gallery.classList.add('hidden');
  }
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
