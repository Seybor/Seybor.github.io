'use strict';

//include name.js

'use strict';



const randomNumberY = (min = 130, max = 630) => {

  return Math.floor(Math.random() * (max - min + 1) + min);

};



const randomNumberX = (min = 100, max = 1000) => {

  return Math.floor(Math.random() * (max - min + 1) + min);

};



const MAP_ARRAY = [

  {

    author: {

      avatar: `img/avatars/user01.png`,

    },

    offer: {

      title: 'Огромный прекрасный дворец',

      address: '{{location.600}}, {{location.350}}',

      price: 900000,

      type: 'palace',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user02.png`,

    },

    offer: {

      title: 'Большая уютная квартира',

      address: '{{location.700}}, {{location.450}}',

      price: 50000,

      type: 'flat',

      rooms: 2,

      guests: 3,

      checkin: '14:00',

      checkout: '12:00',

      features: ['wifi', 'dishwasher', 'parking'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user03.png`,

    },

    offer: {

      title: 'Маленькая неуютная квартира',

      address: '{{location.400}}, {{location.300}}',

      price: 10000,

      type: 'flat',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['wifi', 'dishwasher', 'parking'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user04.png`,

    },

    offer: {

      title: 'Красивый гостевой домик',

      address: '{{location.200}}, {{location.150}}',

      price: 350000,

      type: 'house',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['wifi', 'dishwasher', 'parking'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user05.png`,

    },

    offer: {

      title: 'Маленький ужасный дворец',

      address: '{{location.700}}, {{location.200}}',

      price: 200000,

      type: 'palace',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['wifi', 'dishwasher', 'parking'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user06.png`,

    },

    offer: {

      title: 'Красивый гостевой домик',

      address: '{{location.450}}, {{location.300}}',

      price: 190000,

      type: 'house',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['wifi', 'dishwasher', 'parking'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user07.png`,

    },

    offer: {

      title: 'Уютное бунгало далеко от моря',

      address: '{{location.800}}, {{location.450}}',

      price: 10000,

      type: 'bungalo',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['parking', 'washer', 'elevator'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

  {

    author: {

      avatar: `img/avatars/user08.png`,

    },

    offer: {

      title: 'Неуютное бунгало по колено в воде',

      address: '{{location.250}}, {{location.200}}',

      price: 5000,

      type: 'bungalo',

      rooms: 2,

      guests: 3,

      checkin: '12:00',

      checkout: '14:00',

      features: ['washer', 'elevator', 'conditioner'],

      description: '',

      photos: [

        'http://o0.github.io/assets/images/tokyo/hotel1.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel2.jpg',

        'http://o0.github.io/assets/images/tokyo/hotel3.jpg',

      ],

    },

    location: {

      x: randomNumberX(),

      y: randomNumberY(),

    },

  },

];



document.querySelector('.map').classList.remove('map--faded');



console.log(MAP_ARRAY.length);



MAP_ARRAY.forEach((el) => {

  console.log(el.location);

});


const template = document.querySelector('#template').content.querySelector('.map__card');
const mapContent = document.querySelector('.map__pins');

const renderMap = function (element) {
  let mapElement = template.cloneNode(true);

  mapElement.querySelector('img').src = element.author.avatar;
  mapElement.querySelector('img').style = `left: ${element.location.x}px; top: ${element.location.y}px;`;
  mapElement.querySelector('img').alt = element.offer.title;

  return mapElement.querySelector('img');
};

const renderStart = () => {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < MAP_ARRAY.length; i++) {
    fragment.append(renderMap(MAP_ARRAY[i]));
  }

  mapContent.append(fragment);
};

renderStart();

