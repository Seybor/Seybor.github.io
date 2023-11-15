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
