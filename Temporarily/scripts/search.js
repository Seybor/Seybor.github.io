'use strict';

'use strick';

const WORDS__ARRAY = [
  {
    en: 'which',
    ru: 'который, какой',
  },
  {
    en: 'some',
    ru: 'некоторые, несколько, немного',
  },
  {
    en: 'because',
    ru: 'потому что',
  },
  {
    en: 'such',
    ru: 'такой',
  },
  {
    en: 'each',
    ru: 'каждый',
  },
  {
    en: 'less',
    ru: 'меньше',
  },
  {
    en: 'once',
    ru: 'однажды, один раз',
  },
  {
    en: 'enough',
    ru: 'достаточно',
  },
  {
    en: 'sure',
    ru: 'уверенный',
  },
  {
    en: 'several',
    ru: 'несколько',
  },
  {
    en: 'letter',
    ru: 'письмо',
  },
  {
    en: 'subject',
    ru: 'тема, предмет',
  },
  {
    en: 'near',
    ru: 'рядом (с), близко(с), около',
  },
  {
    en: 'difficult',
    ru: 'сложно, трудно, сложный, трудный',
  },
  {
    en: 'opportunity',
    ru: 'возможность',
  },
  {
    en: 'single',
    ru: 'холост, одиночный, единичный',
  },
  {
    en: 'society',
    ru: 'общество',
  },
  {
    en: 'wrong',
    ru: 'неправильный, неверный, ложный',
  },
  {
    en: 'poor',
    ru: ' бедный',
  },
  {
    en: 'article',
    ru: 'статья, артикль',
  },
  {
    en: 'necessary',
    ru: 'необходимый, необходимо',
  },
  {
    en: 'modern',
    ru: 'современный',
  },
  {
    en: 'village',
    ru: 'деревня',
  },
  {
    en: 'successful',
    ru: 'успешный',
  },
  {
    en: 'app(application)',
    ru: 'приложение',
  },
  {
    en: 'exercise',
    ru: 'упражнение',
  },
  {
    en: 'useful',
    ru: 'полезный',
  },
  {
    en: 'afternoon',
    ru: 'днём',
  },
  {
    en: 'pound',
    ru: 'фунт',
  },
  {
    en: 'suddenly',
    ru: 'вдруг, внезапно',
  },
  {
    en: 'advice',
    ru: 'совет',
  },
  {
    en: 'wonderful',
    ru: 'прекрасный, замечательный, удивительный, чудесный',
  },
  {
    en: 'absolutely',
    ru: 'абсолютно, совершенно, совсем, полностью',
  },
  {
    en: 'pleasure',
    ru: 'удовольствие',
  },
  {
    en: 'tonigth',
    ru: 'сегодня вечером ',
  },
  {
    en: 'forest',
    ru: 'лес, лесной',
  },
  {
    en: 'careful',
    ru: 'осторожный ',
  },
  {
    en: 'sad',
    ru: 'грустный, печальный',
  },
  {
    en: 'abroad',
    ru: 'за границей',
  },
  {
    en: 'upset',
    ru: 'расстроенный',
  },
  {
    en: 'singer',
    ru: 'певец',
  },
  {
    en: 'alright(all right)',
    ru: 'в порядке ',
  },
  {
    en: 'correctly',
    ru: 'правильно, корректно',
  },
  {
    en: 'fluently',
    ru: 'свободно, бегло',
  },
  {
    en: 'pet',
    ru: 'домашнее животное',
  },
  {
    en: 'miracle',
    ru: 'чудо',
  },
  {
    en: 'toy',
    ru: 'игрушка',
  },
  {
    en: 'hard-working(hardworking)',
    ru: 'трудолюбивый ',
  },
  {
    en: 'unhappy',
    ru: 'несчатный',
  },
  {
    en: 'trousers',
    ru: 'брюки',
  },
  {
    en: 'worse',
    ru: 'хуже',
  },
  {
    en: 'fat',
    ru: 'толстый, жирный',
  },
  {
    en: 'nowadays',
    ru: 'в наши дни, в наше время',
  },
  {
    en: 'casual',
    ru: 'повседневный',
  },
  {
    en: 'informal',
    ru: 'неформальный',
  },
];

console.log('WORDS__ARRAY ' + WORDS__ARRAY.length);

let input = document.querySelector('.input');

let find = document.querySelector('.find');
let result = document.querySelector('.result');
let similar = document.querySelector('.similar');

input.addEventListener('input', () => {
  let value = input.value;

  if (value === '') {
    similar.textContent = '';
    return;
  }

  result.textContent = 'итог';

  let word = WORDS__ARRAY.find((currentValue) => {
    if (currentValue.en === value || currentValue.ru === value) {
      return currentValue;
    }
  });
  let similarStr = WORDS__ARRAY.filter((item) => item.en.includes(value) || item.ru.includes(value));
  console.log(similarStr);

  similar.textContent = 'совпадений не найдено';
  if (similarStr.length > 0) {
    let counter = 0;
    similar.textContent = '';
    do {
      let liElement = document.createElement('li');
      liElement.textContent = `${similarStr[counter].en} - ${similarStr[counter].ru}`;
      similar.append(liElement);
      counter++;
    } while (counter < similarStr.length && counter < 3);
  }

  if (word) {
    result.textContent = `${word.en} - ${word.ru}`;
  }
});
