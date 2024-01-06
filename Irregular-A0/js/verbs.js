 'use strict';

 const ARR = [
  { en: 'sit - sat - sat', tr: '[sɪt] - [sæt] - [sæt]', ru: 'сидеть' },
  {
    en: 'sleep - slept - slept',
    tr: '[sliːp] - [slept] - [slept]',
    ru: 'спать',
  },
  {
    en: 'keep - kept - kept',
    tr: '[kiːp] - [kept] - [kept]',
    ru: 'держать, хранить',
  },
  {
    en: 'mean - meant - meant',
    tr: '[miːn] - [ment] - [ment]',
    ru: 'означать, иметь в виду; подлый',
  },
  {
    en: 'win - won - won',
    tr: '[wɪn] - [wʌn] - [wʌn]',
    ru: 'выиграть, одержать победу',
  },
  {
    en: 'teach - taught - taught',
    tr: '[tiːʧ] - [tɔːt] - [tɔːt]',
    ru: 'преподавать',
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
    en: 'leave - left - left',
    tr: '[liːv] - [left] - [left]',
    ru: 'уходить(с), оставлять',
  },
  {
    en: 'stand - stood - stood',
    tr: '[stænd] - [stʊd] - [stʊd]',
    ru: 'встать',
  },
  {
    en: 'hear - heard - heard',
    tr: '[hɪə] - [hɜːd] - [hɜːd]',
    ru: 'слышать',
  },
  {
    en: 'have/has - had - had',
    tr: '[hæv]/[hæz] - [hæd] - [hæd]',
    ru: 'иметь',
  },
  { en: 'do - did - done', tr: '[duː] - [dɪd] - [dʌn]', ru: 'делать' },
  {
    en: 'get - got - got',
    tr: '[ɡet] - [ɡɒt] - [ɡɒt]',
    ru: 'получать, добираться',
  },
  {
    en: 'make - made - made',
    tr: '[meɪk] - [meɪd] - [meɪd]',
    ru: 'делать',
  },
  { en: 'can - could - could', tr: '[kæn] - [kʊd] - [kʊd]', ru: 'мог' },
  {
    en: 'say - said - said',
    tr: '[seɪ] - [sed] - [sed]',
    ru: 'сказать',
  },
  {
    en: 'find - found - found',
    tr: '[faɪnd] - [faʊnd] - [faʊnd]',
    ru: 'находить',
  },
  {
    en: 'tell - told - told',
    tr: '[tel] - [təʊld] - [təʊld]',
    ru: 'рассказывать',
  },
  {
    en: 'show - showed - shown/showed',
    tr: '[ʃəʊ] - [ʃəʊd] - [ʃəʊn]/[ʃəʊd]',
    ru: 'показывать(шоу)',
  },
  {
    en: 'feel - felt - felt',
    tr: '[fiːl] - [felt] - [felt]',
    ru: 'чувствовать',
  },
  {
    en: 'meet - met - met',
    tr: '[miːt] - [met] - [met]',
    ru: 'встречать, встречаться',
  },
  {
    en: 'bring - brought - brought',
    tr: '[brɪŋ] - [brɔːt] - [brɔːt]',
    ru: 'приносить',
  },
  {
    en: 'buy - bought - bought',
    tr: '[baɪ] - [bɔːt] - [bɔːt]',
    ru: 'купить',
  },
  {
    en: 'spend - spent - spent',
    tr: '[spend] - [spent] - [spent]',
    ru: 'проводить, тратить',
  },
  {
    en: 'learn - learnt/learned - learnt/learned',
    tr: '[lɜːn] - [lɜːnt]/[lɜːnt] - [lɜːnt]/[lɜːnt]',
    ru: 'учить',
  },
  {
    en: 'lose - lost - lost',
    tr: '[luːz] - [lɒst] - [lɒst]',
    ru: 'терять, проигрывать',
  },
  {
    en: 'send - sent - sent',
    tr: '[send] - [sent] - [sent]',
    ru: 'присылать, посылать, отправлять',
  },
  {
    en: 'sell - sold - sold',
    tr: '[sel] - [səʊld] - [səʊld]',
    ru: 'продать',
  },
  {
    en: 'lend - lent - lent',
    tr: '[lend] - [lent] - [lent]',
    ru: 'одалживать, давать взаймы',
  },
  {
    en: 'pay - paid - paid',
    tr: '[peɪ] - [peɪd] - [peɪd]',
    ru: 'платить',
  },
  {
    en: 'build - built - built',
    tr: '[bɪld] - [bɪlt] - [bɪlt]',
    ru: 'строить',
  },
  {
    en: 'ride - rode - ridden',
    tr: '[raɪd] - [rəʊd] - [ˈrɪdᵊn]',
    ru: 'ездить',
  },
  {
    en: 'drive - drove - driven',
    tr: '[draɪv] - [drəʊv] - [ˈdrɪvᵊn]',
    ru: 'водить',
  },
  {
    en: 'swim - swam - swum',
    tr: '[swɪm] - [swæm] - [swʌm]',
    ru: 'плавать',
  },
  {
    en: 'forget - forgot - forgotten',
    tr: '[fəˈɡet] - [fəˈɡɒt] - [fəˈɡɒtᵊn]',
    ru: 'забыть',
  },
  {
    en: 'give - gave - given',
    tr: '[ɡɪv] - [ɡeɪv] - [ˈɡɪvᵊn]',
    ru: 'дать',
  },
  {
    en: 'break - broke - broken',
    tr: '[breɪk] - [brəʊk] - [ˈbrəʊkᵊn]',
    ru: 'ломать(перерыв)',
  },
  {
    en: 'fly - flew - flown',
    tr: '[flaɪ] - [fluː] - [fləʊn]',
    ru: 'летать(муха)',
  },
  {
    en: 'wake - woke - woken',
    tr: '[weɪk] - [wəʊk] - [ˈwəʊkᵊn]',
    ru: 'просыпаться',
  },
  {
    en: 'take - took - taken',
    tr: '[teɪk] - [tʊk] - [ˈteɪkᵊn]',
    ru: 'брать, принимать',
  },
  {
    en: 'begin - began - begun',
    tr: '[bɪˈɡɪn] - [bɪˈɡæn] - [bɪˈɡʌn]',
    ru: 'начинать',
  },
  {
    en: 'drink - drank - drunk',
    tr: '[drɪŋk] - [dræŋk] - [drʌŋk]',
    ru: 'пить',
  },
  {
    en: 'write - wrote - written',
    tr: '[raɪt] - [rəʊt] - [ˈrɪtᵊn]',
    ru: 'писать',
  },
  {
    en: 'fall - fell - fallen',
    tr: '[fɔːl] - [fel] - [ˈfɔːlən]',
    ru: 'упасть',
  },
  {
    en: 'know - knew - known',
    tr: '[nəʊ] - [njuː] - [nəʊn]',
    ru: 'знать',
  },
  {
    en: 'go - went - gone',
    tr: '[ɡəʊ] - [went] - [ɡɒn]',
    ru: 'идти, ехать',
  },
  {
    en: 'be - was/were - been',
    tr: '[biː] - [wɒz]/[wɜː] - [biːn]',
    ru: 'быть',
  },
  {
    en: 'see - saw - seen',
    tr: '[siː] - [sɔː] - [siːn]',
    ru: 'видеть',
  },
  {
    en: 'speak - spoke - spoken',
    tr: '[spiːk] - [spəʊk] - [ˈspəʊkᵊn]',
    ru: 'говорить',
  },
  {
    en: 'choose - chose - chosen',
    tr: '[ʧuːz] - [ʧəʊz] - [ˈʧəʊzᵊn]',
    ru: 'выбирать',
  },
  {
    en: 'eat - ate - eaten',
    tr: '[iːt] - [eɪt] - [ˈiːtᵊn]',
    ru: 'есть, кушать',
  },
  {
    en: 'wear - wore - worn',
    tr: '[weə] - [wɔː] - [wɔːn]',
    ru: 'носить(одежду)',
  },
  { en: 'sing - sang - sung', tr: '[sɪŋ] - [sæŋ] - [sʌŋ]', ru: 'петь' },
  {
    en: 'lie - lay - lain',
    tr: '[laɪ] - [leɪ] - [leɪn]',
    ru: 'лежать, врать(враньё)',
  },
  {
    en: 'read - read - read',
    tr: '[riːd] - [red] - [red]',
    ru: 'читать',
  },
  {
    en: 'cut - cut - cut',
    tr: '[kʌt] - [kʌt] - [kʌt]',
    ru: 'резать(разрез)',
  },
  {
    en: 'put - put - put',
    tr: '[pʊt] - [pʊt] - [pʊt]',
    ru: 'положить',
  },
  {
    en: 'cost - cost - cost',
    tr: '[kɒst] - [kɒst] - [kɒst]',
    ru: 'стоить(стоимость)',
  },
  { en: 'run - ran - run', tr: '[rʌn] - [ræn] - [rʌn]', ru: 'бежать' },
  {
    en: 'come - came - come',
    tr: '[kʌm] - [keɪm] - [kʌm]',
    ru: 'приходить',
  },
  {
    en: 'become - became - become',
    tr: '[bɪˈkʌm] - [bɪˈkeɪm] - [bɪˈkʌm]',
    ru: 'становиться',
  },
];

console.log(ARR.length);

const template = document.querySelector('#template').content.querySelector('.container')
const wrapper = document.querySelector('.wrapper')

const render = (element) => {
  let currentElement = template.cloneNode(true);

  currentElement.querySelector('#wordRu').textContent = element.ru
  currentElement.querySelector('#wordEn').textContent = element.en
  currentElement.querySelector('#wordTr').textContent = element.tr
 

  return currentElement;
};

const renderStart = () => {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < ARR.length; i++) {
    fragment.append(render(ARR[i]));
  }

  wrapper.append(fragment);
};

renderStart()