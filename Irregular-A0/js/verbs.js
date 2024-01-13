 'use strict';

  const ARR = [
  {
    en: 'be - was/were - been',
    tr: '[biː] - [wɒz]/[wɜː] - [biːn]',
    ru: 'быть',
  },
  {
    en: 'become - became - become',
    tr: '[bɪˈkʌm] - [bɪˈkeɪm] - [bɪˈkʌm]',
    ru: 'становиться',
  },
  {
    en: 'begin - began - begun',
    tr: '[bɪˈɡɪn] - [bɪˈɡæn] - [bɪˈɡʌn]',
    ru: 'начинать',
  },
  {
    en: 'break - broke - broken',
    tr: '[breɪk] - [brəʊk] - [ˈbrəʊkᵊn]',
    ru: 'ломать(перерыв)',
  },
  {
    en: 'bring - brought - brought',
    tr: '[brɪŋ] - [brɔːt] - [brɔːt]',
    ru: 'приносить',
  },
  {
    en: 'build - built - built',
    tr: '[bɪld] - [bɪlt] - [bɪlt]',
    ru: 'строить',
  },
  {
    en: 'buy - bought - bought',
    tr: '[baɪ] - [bɔːt] - [bɔːt]',
    ru: 'купить',
  },
  {
    en: 'choose - chose - chosen',
    tr: '[ʧuːz] - [ʧəʊz] - [ˈʧəʊzᵊn]',
    ru: 'выбирать',
  },
  {
    en: 'come - came - come',
    tr: '[kʌm] - [keɪm] - [kʌm]',
    ru: 'приходить',
  },
  {
    en: 'cost - cost - cost',
    tr: '[kɒst] - [kɒst] - [kɒst]',
    ru: 'стоить(стоимость)',
  },
  {
    en: 'cut - cut - cut',
    tr: '[kʌt] - [kʌt] - [kʌt]',
    ru: 'резать(разрез)',
  },
  { en: 'do/does - did - done', tr: '[duː] - [dɪd] - [dʌn]', ru: 'делать' },
  {
    en: 'drink - drank - drunk',
    tr: '[drɪŋk] - [dræŋk] - [drʌŋk]',
    ru: 'пить',
  },
  {
    en: 'drive - drove - driven',
    tr: '[draɪv] - [drəʊv] - [ˈdrɪvᵊn]',
    ru: 'водить',
  },
  {
    en: 'eat - ate - eaten',
    tr: '[iːt] - [eɪt] - [ˈiːtᵊn]',
    ru: 'есть, кушать',
  },
  {
    en: 'fall - fell - fallen',
    tr: '[fɔːl] - [fel] - [ˈfɔːlən]',
    ru: 'упасть',
  },
  {
    en: 'feel - felt - felt',
    tr: '[fiːl] - [felt] - [felt]',
    ru: 'чувствовать',
  },
  {
    en: 'find - found - found',
    tr: '[faɪnd] - [faʊnd] - [faʊnd]',
    ru: 'находить',
  },
  {
    en: 'fly - flew - flown',
    tr: '[flaɪ] - [fluː] - [fləʊn]',
    ru: 'летать(муха)',
  },
  {
    en: 'forget - forgot - forgotten',
    tr: '[fəˈɡet] - [fəˈɡɒt] - [fəˈɡɒtᵊn]',
    ru: 'забыть',
  },
  {
    en: 'get - got - got',
    tr: '[ɡet] - [ɡɒt] - [ɡɒt]',
    ru: 'получать, добираться',
  },
  {
    en: 'give - gave - given',
    tr: '[ɡɪv] - [ɡeɪv] - [ˈɡɪvᵊn]',
    ru: 'дать',
  },
  {
    en: 'go - went - gone',
    tr: '[ɡəʊ] - [went] - [ɡɒn]',
    ru: 'идти, ехать',
  },
  {
    en: 'have/has - had - had',
    tr: '[hæv]/[hæz] - [hæd] - [hæd]',
    ru: 'иметь',
  },
  {
    en: 'hear - heard - heard',
    tr: '[hɪə] - [hɜːd] - [hɜːd]',
    ru: 'слышать',
  },
  {
    en: 'keep - kept - kept',
    tr: '[kiːp] - [kept] - [kept]',
    ru: 'держать, хранить',
  },
  {
    en: 'know - knew - known',
    tr: '[nəʊ] - [njuː] - [nəʊn]',
    ru: 'знать',
  },
  {
    en: 'learn - learnt/learned - learnt/learned',
    tr: '[lɜːn] - [lɜːnt]/[lɜːnt] - [lɜːnt]/[lɜːnt]',
    ru: 'учить',
  },
  {
    en: 'leave - left - left',
    tr: '[liːv] - [left] - [left]',
    ru: 'уходить(с), оставлять',
  },
  {
    en: 'lend - lent - lent',
    tr: '[lend] - [lent] - [lent]',
    ru: 'одалживать, давать взаймы',
  },
  {
    en: 'lose - lost - lost',
    tr: '[luːz] - [lɒst] - [lɒst]',
    ru: 'терять, проигрывать',
  },
  {
    en: 'make - made - made',
    tr: '[meɪk] - [meɪd] - [meɪd]',
    ru: 'делать',
  },
  {
    en: 'mean - meant - meant',
    tr: '[miːn] - [ment] - [ment]',
    ru: 'означать, иметь в виду; подлый',
  },
  {
    en: 'meet - met - met',
    tr: '[miːt] - [met] - [met]',
    ru: 'встречать, встречаться',
  },
  {
    en: 'pay - paid - paid',
    tr: '[peɪ] - [peɪd] - [peɪd]',
    ru: 'платить',
  },
  {
    en: 'put - put - put',
    tr: '[pʊt] - [pʊt] - [pʊt]',
    ru: 'положить',
  },
  {
    en: 'read - read - read',
    tr: '[riːd] - [red] - [red]',
    ru: 'читать',
  },
  {
    en: 'ride - rode - ridden',
    tr: '[raɪd] - [rəʊd] - [ˈrɪdᵊn]',
    ru: 'ездить',
  },
  { en: 'run - ran - run', tr: '[rʌn] - [ræn] - [rʌn]', ru: 'бежать' },
  {
    en: 'say - said - said',
    tr: '[seɪ] - [sed] - [sed]',
    ru: 'сказать',
  },
  {
    en: 'see - saw - seen',
    tr: '[siː] - [sɔː] - [siːn]',
    ru: 'видеть',
  },
  {
    en: 'sell - sold - sold',
    tr: '[sel] - [səʊld] - [səʊld]',
    ru: 'продать',
  },
  {
    en: 'send - sent - sent',
    tr: '[send] - [sent] - [sent]',
    ru: 'присылать, посылать, отправлять',
  },
  {
    en: 'show - showed - shown/showed',
    tr: '[ʃəʊ] - [ʃəʊd] - [ʃəʊn]/[ʃəʊd]',
    ru: 'показывать(шоу)',
  },
  { en: 'sing - sang - sung', tr: '[sɪŋ] - [sæŋ] - [sʌŋ]', ru: 'петь' },
  { en: 'sit - sat - sat', tr: '[sɪt] - [sæt] - [sæt]', ru: 'сидеть' },
  {
    en: 'sleep - slept - slept',
    tr: '[sliːp] - [slept] - [slept]',
    ru: 'спать',
  },
  {
    en: 'speak - spoke - spoken',
    tr: '[spiːk] - [spəʊk] - [ˈspəʊkᵊn]',
    ru: 'говорить',
  },
  {
    en: 'spend - spent - spent',
    tr: '[spend] - [spent] - [spent]',
    ru: 'проводить, тратить',
  },
  {
    en: 'stand - stood - stood',
    tr: '[stænd] - [stʊd] - [stʊd]',
    ru: 'встать',
  },
  {
    en: 'swim - swam - swum',
    tr: '[swɪm] - [swæm] - [swʌm]',
    ru: 'плавать',
  },
  {
    en: 'take - took - taken',
    tr: '[teɪk] - [tʊk] - [ˈteɪkᵊn]',
    ru: 'брать, принимать',
  },
  {
    en: 'teach - taught - taught',
    tr: '[tiːʧ] - [tɔːt] - [tɔːt]',
    ru: 'преподавать',
  },
  {
    en: 'tell - told - told',
    tr: '[tel] - [təʊld] - [təʊld]',
    ru: 'рассказывать',
  },
  {
    en: 'think - thought - thought',
    tr: '[θɪŋk] - [θɔːt] - [θɔːt]',
    ru: 'думать',
  },
  {
    en: 'understand - understood - understood',
    tr: '[ˌʌndəˈstænd] - [ˌʌndəˈstʊd] - [ˌʌndəˈstʊd]',
    ru: 'понимать, постигать',
  },
  {
    en: 'wake - woke - woken',
    tr: '[weɪk] - [wəʊk] - [ˈwəʊkᵊn]',
    ru: 'просыпаться',
  },
  {
    en: 'wear - wore - worn',
    tr: '[weə] - [wɔː] - [wɔːn]',
    ru: 'носить(одежду)',
  },
  {
    en: 'win - won - won',
    tr: '[wɪn] - [wʌn] - [wʌn]',
    ru: 'выиграть, одержать победу',
  },
  {
    en: 'write - wrote - written',
    tr: '[raɪt] - [rəʊt] - [ˈrɪtᵊn]',
    ru: 'писать',
  },
];

console.log(ARR.length);

const template = document.querySelector('#template').content.querySelector('.container')
const templateFace = document.querySelector('#template-face').content.querySelector('.front-ru')
const templateBack = document.querySelector('#template-back').content.querySelector('.back__content')

const wrapper = document.querySelector('.wrapper')

const render = (arr, i) => {
  let currentElement = template.cloneNode(true);
  

  for(let j = 0; j < 5; j++) {

  if (!arr[i + j]) {
    break
  }

  let templateFaceElement = templateFace.cloneNode(true);
  let templateBackElement = templateBack.cloneNode(true)

  templateFaceElement.textContent = arr[i + j].ru
  templateFaceElement.id = `wordContent-${i + j}`

  templateBackElement.id = `wordContent-${i + j}`
  templateBackElement.querySelector('.back-en').textContent = arr[i + j].en
  templateBackElement.querySelector('.back-tr').textContent = arr[i + j].tr

  currentElement.querySelector('.front').append(templateFaceElement)
  currentElement.querySelector('.back').append(templateBackElement)
  }

  return currentElement;
};

const renderStart = () => {
  let fr = document.createDocumentFragment()

  let i = 0

do {
  let fragment = document.createDocumentFragment();
  
  fragment.append(render(ARR, i));

  i+= 5

  fr.append(fragment)

} while(i < ARR.length)
  
  
  wrapper.append(fr);
};

renderStart()