'use strict';

const IRREGUlAR_VERBS_A0 = [

  {

    en: 'sit - sat - sat',

    ru: 'сидеть',

    tr: '[sɪt] - [sæt] - [sæt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'sleep - slept - slept',

    ru: 'спать',

    tr: '[sliːp] - [slɛpt] - [slɛpt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'keep - kept - kept',

    ru: 'держать',

    tr: '[kiːp] - [kɛpt] - [kɛpt]',

    ru_meaning: ['хранить'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'mean - meant - meant',

    ru: 'означать',

    tr: '[miːn] - [mɛnt] - [mɛnt]',

    ru_meaning: ['иметь в виду'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'win - won - won',

    ru: 'выиграть',

    tr: '[wɪn] - [wʌn] - [wʌn]',

    ru_meaning: ['одержать победу'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'teach - taught - taught',

    ru: 'преподавать',

    tr: '[tiːʧ] - [tɔːt] - [tɔːt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'think - thought - thought',

    ru: 'думать',

    tr: '[θɪŋk] - [θɔːt] - [θɔːt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'understand - understood - understood',

    ru: 'понимать',

    tr: '[ˌʌndəˈstænd] - [ˌʌndəˈstʊd] - [ˌʌndəˈstʊd]',

    ru_meaning: ['постигать'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },



  {

    en: 'leave - left - left',

    ru: 'уходить(с)',

    tr: '[liːv] - [lɛft] - [lɛft]',

    ru_meaning: ['выходить(из)', 'покидать', 'уезжать', 'оставлять'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'stand - stood - stood',

    ru: 'встать',

    tr: '[stænd] - [stʊd] - [stʊd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'hear - heard - heard',

    ru: 'слышать',

    tr: '[hɪə] - [hɜːd] - [hɜːd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'have/has - had - had',

    ru: 'иметь',

    tr: '[hæv]/[hæz] - [hæd] - [hæd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'do - did - done',

    ru: 'делать',

    tr: '[duː] - [dɪd] - [dʌn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'get - got - got',

    ru: 'получать',

    tr: '[ɡɛt] - [ɡɒt] - [ɡɒt]',

    ru_meaning: ['добираться'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'make - made - made',

    ru: 'делать',

    tr: '[meɪk] - [meɪd] - [meɪd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'can - could - could',

    ru: 'мог',

    tr: '[kæn] - [kʊd] - [kʊd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'say - said - said',

    ru: 'сказать',

    tr: '[seɪ] - [sɛd] - [sɛd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'find - found - found',

    ru: 'находить',

    tr: '[faɪnd] - [faʊnd] - [faʊnd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'tell - told - told',

    ru: 'рассказывать',

    tr: '[tɛl] - [təʊld] - [təʊld]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'show - showed - shown/showed',

    ru: 'показывать(сущ. - шоу)',

    tr: '[ʃəʊ] - [ʃəʊd] - [ʃəʊn]/[ʃəʊd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'feel - felt - felt',

    ru: 'чувствовать(себя)',

    tr: '[fiːl] - [fɛlt] - [fɛlt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'meet - met - met',

    ru: 'встречать',

    tr: '[miːt] - [mɛt] - [mɛt]',

    ru_meaning: ['встречаться'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'bring - brought - brought',

    ru: 'приносить',

    tr: '[brɪŋ] - [brɔːt] - [brɔːt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'buy - bought - bought',

    ru: 'купить',

    tr: '[baɪ] - [bɔːt] - [bɔːt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'spend - spent - spent',

    ru: 'тратить',

    tr: '[spɛnd] - [spɛnt] - [spɛnt]',

    ru_meaning: ['проводить(о времени)'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'learn - learnt / learned - learnt / learned',

    ru: 'учить',

    tr: '[lɜːn] - [lɜːnt] / [lɜːnt] - [lɜːnt] / [lɜːnt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'lose - lost - lost',

    ru: 'проигрывать',

    tr: '[luːz] - [lɒst] - [lɒst]',

    ru_meaning: ['терять'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'send - sent - sent',

    ru: 'присылать',

    tr: '[sɛnd] - [sɛnt] - [sɛnt]',

    ru_meaning: ['посылать', 'отправлять'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'sell - sold - sold',

    ru: 'продать',

    tr: '[sɛl] - [səʊld] - [səʊld]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'lend - lent - lent',

    ru: 'одалживать',

    tr: '[lɛnd] - [lɛnt] - [lɛnt]',

    ru_meaning: ['давать взаймы'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'pay - paid - paid',

    ru: 'платить',

    tr: '[peɪ] - [peɪd] - [peɪd]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'ride - rode - ridden',

    ru: 'ездить',

    tr: '[raɪd] - [rəʊd] - [ˈrɪdᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'drive - drove - driven',

    ru: 'водить',

    tr: '[draɪv] - [drəʊv] - [ˈdrɪvᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'swim - swam - swum',

    ru: 'плавать',

    tr: '[swɪm] - [swæm] - [swʌm]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'forget - forgot - forgotten',

    ru: 'забыть',

    tr: '[fəˈɡɛt] - [fəˈɡɒt] - [fəˈɡɒtᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'give - gave - given',

    ru: 'дать',

    tr: '[ɡɪv] - [ɡeɪv] - [ˈɡɪvᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'break - broke - broken',

    ru: 'ломать',

    tr: '[breɪk] - [brəʊk] - [ˈbrəʊkᵊn]',

    ru_meaning: ['перерыв'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'fly(+to) - flew - flown',

    ru: 'летать',

    tr: '[flaɪ](+[tuː]) - [fluː] - [fləʊn]',

    ru_meaning: ['муха'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'wake - woke - woken',

    ru: 'просыпаться',

    tr: '[weɪk] - [wəʊk] - [ˈwəʊkᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'take - took - taken',

    ru: 'брать',

    tr: '[teɪk] - [tʊk] - [ˈteɪkᵊn]',

    ru_meaning: ['принимать'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'begin - began - begun',

    ru: 'начинать',

    tr: '[bɪˈɡɪn] - [bɪˈɡæn] - [bɪˈɡʌn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'drink - drank - drunk',

    ru: 'пить',

    tr: '[drɪŋk] - [dræŋk] - [drʌŋk]',

    ru_meaning: ['напиток'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'write - wrote - written',

    ru: 'писать',

    tr: '[raɪt] - [rəʊt] - [ˈrɪtᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'fall - fell - fallen',

    ru: 'упасть',

    tr: '[fɔːl] - [fɛl] - [ˈfɔːlən]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'know - knew - known',

    ru: 'знать',

    tr: '[nəʊ] - [njuː] - [nəʊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'go - went - gone',

    ru: 'идти, ехать',

    tr: '[ɡəʊ] - [wɛnt] - [ɡɒn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'be - was/were - been',

    ru: 'быть',

    tr: '[biː] - [wɒz]/[wɜː] - [biːn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'see - saw - seen',

    ru: 'видеть',

    tr: '[siː] - [sɔː] - [siːn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'speak - spoke - spoken',

    ru: 'говорить',

    tr: '[spiːk] - [spəʊk] - [ˈspəʊkᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'choose - chose - chosen',

    ru: 'выбирать',

    tr: '[ʧuːz] - [ʧəʊz] - [ˈʧəʊzᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'eat - ate - eaten',

    ru: 'есть, кушать',

    tr: '[iːt] - [eɪt] - [ˈiːtᵊn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'wear - wore - worn',

    ru: 'носить',

    tr: '[weə] - [wɔː] - [wɔːn]',

    ru_meaning: ['одежду'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'sing - sang - sung',

    ru: 'петь',

    tr: '[sɪŋ] - [sæŋ] - [sʌŋ]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'read - read - read',

    ru: 'читать',

    tr: '[riːd] - [red] - [red]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'cut - cut - cut',

    ru: 'резать',

    tr: '[kʌt] - [kʌt] - [kʌt]',

    ru_meaning: ['разрез'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'put - put - put',

    ru: 'положить',

    tr: '[pʊt] - [pʊt] - [pʊt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'build - built - built',

    ru: 'строить',

    tr: '[bɪld] - [bɪlt] - [bɪlt]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'cost - cost - cost',

    ru: 'стоить',

    tr: '[kɒst] - [kɒst] - [kɒst]',

    ru_meaning: ['стоимость'],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'run - ran - run',

    ru: 'бежать',

    tr: '[rʌn] - [ræn] - [rʌn]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'come - came - come',

    ru: 'приходить',

    tr: '[kʌm] - [keɪm] - [kʌm]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

  {

    en: 'become - became - become',

    ru: 'становиться, делаться',

    tr: '[bɪˈkʌm] - [bɪˈkeɪm] - [bɪˈkʌm]',

    ru_meaning: [''],



    ex: [

      {

        ex_en: '',

        ex_ru: '',

        ex_tr: '',

      },

    ],



    phrasal_verbs: [''],

  },

];



console.log(IRREGUlAR_VERBS_A0.length);


const REGUlAR_VERBS_A0 = [
  {
    en: 'like',
    ru: 'нравится',
    tr: '[laɪk]',
    ru_meaning: ['нравиться', 'любить'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'use',
    ru: 'использовать',
    tr: '[juz] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'use up',
        ph_ru: 'использовать, израсходовать, истратить, исписывать, истощать',
      },
    ],
  },
  {
    en: 'look',
    ru: 'смотреть',
    tr: '[lʊk] ',
    ru_meaning: ['выглядеть'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'look about',
        ph_ru: 'осматриваться, оглянуться вокруг, ориентироваться, оглядываться по сторонам',
      },
      {
        ph_en: 'look ahead',
        ph_ru: 'смотреть вперед, думать о будущем',
      },
      {
        ph_en: 'look around',
        ph_ru: 'осмотреться, озираться, оглядываться кругом',
      },
      {
        ph_en: 'look away',
        ph_ru: 'отводить взгляд, смотреть',
      },
      {
        ph_en: 'look back',
        ph_ru: 'оглядываться, оглядываться на прошлое, вспоминать прошлое',
      },
      {
        ph_en: 'look down',
        ph_ru: 'смотреть свысока, смотреть сверху вниз, презирать, падать',
      },
      {
        ph_en: 'look forward',
        ph_ru: 'предвкушать, ожидать, ждать, ожидать',
      },
      {
        ph_en: 'look in',
        ph_ru: 'заглянуть, навещать, смотреть телепередачу',
      },
      {
        ph_en: 'look into something',
        ph_ru: 'изучать',
      },
      {
        ph_en: 'look on',
        ph_ru: 'смотреть, считать, наблюдать, смотреть как на, считать за',
      },
      {
        ph_en: 'look out',
        ph_ru: 'высматривать, выглядывать, быть настороже, подыскивать, иметь вид, выходить на',
      },
      {
        ph_en: 'look over',
        ph_ru: 'просматривать, осматривать, перебирать, проглядеть, не заметить, простить',
      },
      {
        ph_en: 'look round',
        ph_ru: 'озираться, оглядываться кругом, взвесить все',
      },
      {
        ph_en: 'look through',
        ph_ru: 'просматривать, смотреть в, перелистать, видеть насквозь',
      },
      {
        ph_en: 'look up',
        ph_ru: 'искать, смотреть вверх, поднимать глаза, улучшаться, навещать, повышаться',
      },
    ],
  },
  {
    en: 'want',
    ru: 'хотеть',
    tr: '[wɑnt] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'want in',
        ph_ru: 'проситься в помещение, хотеть войти',
      },
      {
        ph_en: 'want out',
        ph_ru: 'хотеть выйти',
      },
    ],
  },
  {
    en: 'try',
    ru: 'пробовать',
    tr: '[traɪ] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'try back',
        ph_ru: 'заметив ошибку, начать сначала',
      },
      {
        ph_en: 'try on',
        ph_ru: 'примерять, примеряться, пробовать',
      },
      {
        ph_en: 'try out',
        ph_ru: 'испытывать, опробовать, пробовать, проверять, пытаться сделать',
      },
      {
        ph_en: 'try over',
        ph_ru: 'пробовать, испытывать повторно, испытывать',
      },
      {
        ph_en: 'try up',
        ph_ru: 'стругать, пригонять',
      },
    ],
  },
  {
    en: 'ask',
    ru: 'спросить',
    tr: '[æsk] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'ask around',
        ph_ru: 'расспрашивать тут и там',
      },
      {
        ph_en: 'ask out',
        ph_ru: 'проситься выйти, приглашать, подавать в отставку, подавать заявление об уходе',
      },
    ],
  },
  {
    en: 'play',
    ru: 'играть',
    tr: '[pleɪ] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'play about',
        ph_ru: 'флиртовать, заводить любовную интрижку, приводить в беспорядок, забавляться',
      },
      {
        ph_en: 'play along',
        ph_ru: 'подыгрывать, поддакивать',
      },
      {
        ph_en: 'play around',
        ph_ru: 'манипулировать, подтасовывать, заводить любовную интрижку',
      },
      {
        ph_en: 'play back',
        ph_ru: 'воспроизводить, отыгрывать назад',
      },
      {
        ph_en: 'play down',
        ph_ru: 'преуменьшать, умалять, льстить, заигрывать, снижать требования, снисходить',
      },
      {
        ph_en: 'play in',
        ph_ru: 'войти в игру, сопровождать музыкой, войти в курс дела, вжиться',
      },
      {
        ph_en: 'play off',
        ph_ru: 'натравливать, разыгрывать',
      },
      {
        ph_en: 'play on',
        ph_ru: 'играть',
      },
      {
        ph_en: 'play out',
        ph_ru: 'доиграть до конца, закончить, сопровождать музыкой, травить, разматывать',
      },
      {
        ph_en: 'play up',
        ph_ru: 'капризничать, разыгрывать, приставать, вести себя мужественно, рекламировать',
      },
      {
        ph_en: 'play upon',
        ph_ru: 'играть',
      },
    ],
  },
  {
    en: 'include',
    ru: 'включать(в себя)',
    tr: '[ɪnˈklud] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'seem',
    ru: 'казаться',
    tr: '[sim] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'follow',
    ru: 'следовать',
    tr: '[ˈfɑloʊ] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'follow about',
        ph_ru: 'ходить по пятам',
      },
      {
        ph_en: 'follow on',
        ph_ru: 'продолжать преследовать, продолжать следовать',
      },
      {
        ph_en: 'follow out',
        ph_ru: 'выполнять до конца, осуществлять',
      },
      {
        ph_en: 'follow through',
        ph_ru: 'доводить до конца, завершать',
      },
      {
        ph_en: 'follow up',
        ph_ru: 'развивать, доводить до конца, преследовать упорно, вытекать, завершать',
      },
    ],
  },
  {
    en: 'move(+to) ',
    ru: 'двигаться',
    tr: '[muv] ',
    ru_meaning: ['переезжать'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'move about',
        ph_ru: 'переезжать, переходить, переносить с места на место',
      },
      {
        ph_en: 'move around',
        ph_ru: 'перемещаться, передвигаться',
      },
      {
        ph_en: 'move away',
        ph_ru: 'отойти, удаляться, удалять, отдаляться, отодвигаться, отодвигать, уезжать',
      },
      {
        ph_en: 'move back',
        ph_ru: 'пятиться, отступать, подавать назад, идти задним ходом, табанить',
      },
      {
        ph_en: 'move down',
        ph_ru: 'спускать, опускать',
      },
      {
        ph_en: 'move in',
        ph_ru: 'въезжать, вдвигать, вводить',
      },
      {
        ph_en: 'move off',
        ph_ru: 'отъезжать, отодвигать, отчаливать, уезжать',
      },
      {
        ph_en: 'move on',
        ph_ru: 'идти дальше, проходить дальше, продвинуть',
      },
      {
        ph_en: 'move out',
        ph_ru: 'съезжать, выдвинуть, выдвинуться, выезжать, выселить, выселять, выдвигать, выводить',
      },
      {
        ph_en: 'move over',
        ph_ru: 'отодвигаться, отстраниться',
      },
      {
        ph_en: 'move up',
        ph_ru: 'придвигаться, придвигать',
      },
    ],
  },
  {
    en: 'believe',
    ru: 'верить',
    tr: '[bɪˈliv] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'happen',
    ru: 'случаться, происходить',
    tr: '[ˈhæpən] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'happen along',
        ph_ru: 'случайно зайти',
      },
      {
        ph_en: 'happen in',
        ph_ru: 'случайно зайти',
      },
      {
        ph_en: 'happen on',
        ph_ru: 'случайно встретить, натолкнуться',
      },
    ],
  },
  {
    en: 'continue',
    ru: 'продолжить',
    tr: '[kənˈtɪnju] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'stay',
    ru: 'оставаться',
    tr: '[steɪ] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'stay away',
        ph_ru: 'не приходить, не являться',
      },
      {
        ph_en: 'stay down',
        ph_ru: 'удерживаться в желудке, оставаться в шахте, оставаться на второй год',
      },
      {
        ph_en: 'stay in',
        ph_ru: 'оставаться дома, не выходить',
      },
      {
        ph_en: 'stay on',
        ph_ru: 'оставаться, задерживаться',
      },
      {
        ph_en: 'stay out',
        ph_ru: 'отсутствовать, не возвращаться домой, пересидеть',
      },
      {
        ph_en: 'stay up',
        ph_ru: 'не ложиться спать',
      },
    ],
  },
  {
    en: 'remember',
    ru: 'помнить',
    tr: '[rɪˈmɛmbər] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'decide',
    ru: 'решать(что о сделать)',
    tr: '[ˌdɪˈsaɪd] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'decide on',
        ph_ru: 'выбирать',
      },
    ],
  },
  {
    en: 'solve',
    ru: 'решать(какую о проблему)',
    tr: '[sɑlv] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },

  {
    en: 'receive',
    ru: 'получать',
    tr: '[rəˈsiv] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'wait',
    ru: 'ждать',
    tr: '[weɪt] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'wait on',
        ph_ru: 'прислуживать, наносить визит, являться результатом, являться к кому-л.',
      },
      {
        ph_en: 'wait up',
        ph_ru: 'дожидаться, не ложиться спать',
      },
    ],
  },
  {
    en: 'agree',
    ru: 'соглашаться',
    tr: '[əˈɡri] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'explain',
    ru: 'объяснять',
    tr: '[ɪkˈspleɪn] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'explain away',
        ph_ru: 'оправдываться, отговариваться',
      },
    ],
  },
  {
    en: 'improve',
    ru: 'улучшать',
    tr: '[ɪmˈpruv] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'improve on',
        ph_ru: 'изменить к лучшему, улучшить, изменять к лучшему',
      },
      {
        ph_en: 'improve upon',
        ph_ru: 'улучшать, усовершенствовать',
      },
    ],
  },
  {
    en: 'kill',
    ru: 'убить',
    tr: '[kɪl] ',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'kill off',
        ph_ru: 'уничтожать, избавиться',
      },
      {
        ph_en: 'kill out',
        ph_ru: 'искоренять, уничтожать',
      },
    ],
  },
  {
    en: 'save',
    ru: 'сохранить',
    tr: '[seɪv] ',
    ru_meaning: ['спасти'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'save up',
        ph_ru: 'копить, делать сбережения, поднакапливать',
      },
    ],
  },
  {
    en: 'listen(+to)',
    ru: 'слушать',
    tr: '[ˈlɪsən]',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'listen in',
        ph_ru: 'слушать радио, слушать радиопередачу, подслушивать разговор по телефону',
      },
      {
        ph_en: 'listen out',
        ph_ru: 'прислушиваться',
      },
    ],
  },
  {
    en: 'arrive(+in)',
    ru: 'прибывать',
    tr: '[əˈraɪv]',
    ru_meaning: [],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'prepare',
    ru: 'готовиться',
    tr: '[priˈpɛr] ',
    ru_meaning: ['подготовить'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'discuss',
    ru: 'обсуждать',
    tr: '[dɪˈskʌs] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'achieve',
    ru: 'достигать',
    tr: '[əˈʧiv] ',
    ru_meaning: ['добиваться'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'marry',
    ru: 'жениться, выходить за муж',
    tr: '[ˈmɛri] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'marry off',
        ph_ru: 'женить, переженить, выдавать замуж',
      },
    ],
  },
  {
    en: 'earn',
    ru: 'зарабатывать',
    tr: '[ɜrn] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'prefer',
    ru: 'предпочитать',
    tr: '[prəˈfɜr] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'dance',
    ru: 'танцевать',
    tr: '[dæns] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'recommend',
    ru: 'рекомендовать',
    tr: '[ˌrɛkəˈmɛnd] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'refuse',
    ru: 'отказываться',
    tr: '[rɪˈfjuz] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'wash',
    ru: 'мыть',
    tr: '[wɑʃ] ',
    ru_meaning: [
      {
        ph_en: 'wash away',
        ph_ru: 'смыть, смывать, вымывать, сносить, очищать, обелять',
      },
      {
        ph_en: 'wash down',
        ph_ru: 'запивать, вымыть, смыть, сносить, окатывать водой',
      },
      {
        ph_en: 'wash off',
        ph_ru: 'смыть, смывать, смываться',
      },
      {
        ph_en: 'wash out',
        ph_ru: 'размывать, вымыть, мыть, отстирывать, разрушать, помешать проведению, изматывать',
      },
      {
        ph_en: 'wash over',
        ph_ru: 'переливаться через край',
      },
      {
        ph_en: 'wash up',
        ph_ru: 'мыть посуду, умываться',
      },
    ],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'celebrate',
    ru: 'отмечать, праздновать',
    tr: '[ˈsɛləˌbreɪt] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'communicate',
    ru: 'общаться',
    tr: '[kəmˈjunəˌkeɪt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'motivate',
    ru: 'мотивировать',
    tr: '[ˈmoʊtəˌveɪt] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'discover',
    ru: 'обнаружить',
    tr: '[dɪˈskʌvər] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'ignore',
    ru: 'игнорировать',
    tr: '[ɪɡˈnɔr] ',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'depend(+on)',
    ru: 'зависеть',
    tr: '[dɪˈpɛnd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'join',
    ru: 'присоединяться',
    tr: '[ʤɔɪn]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [
      {
        ph_en: 'join up',
        ph_ru: 'объединять, объединяться, вступать в армию, пристраиваться',
      },
    ],
  },
  {
    en: 'live',
    ru: 'жить',
    tr: '[lɪv]/[laɪv]',
    ru_meaning: ['живой'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'open',
    ru: 'открыть',
    tr: '[ˈoʊpən]',
    ru_meaning: ['открытый, открыто'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'work',
    ru: 'работать',
    tr: '[wɜrk]',
    ru_meaning: ['работа'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'need',
    ru: 'нуждаться',
    tr: '[nid]',
    ru_meaning: ['потребность'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'call',
    ru: 'звонить',
    tr: '[kɔl]',
    ru_meaning: ['звонок'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'change',
    ru: 'менять',
    tr: '[ʧeɪnʤ]',
    ru_meaning: ['изменение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'help ',
    ru: 'помогать',
    tr: '[hɛlp]',
    ru_meaning: ['помощь'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'start ',
    ru: 'начать',
    tr: '[stɑrt]',
    ru_meaning: ['начало'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'talk ',
    ru: 'говорить',
    tr: '[tɔk]',
    ru_meaning: ['разговор'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'interest ',
    ru: 'интересовать',
    tr: '[ˈɪntrəst]',
    ru_meaning: ['интерес'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'study ',
    ru: 'изучать',
    tr: '[ˈstʌdi]',
    ru_meaning: ['исследовать', 'заниматься', 'исследование', 'изучение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'turn',
    ru: 'поворачивать',
    tr: '[tɜrn]',
    ru_meaning: ['поворот'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'love',
    ru: 'любить',
    tr: '[lʌv]',
    ru_meaning: ['любовь'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'offer',
    ru: 'предлагать',
    tr: '[ˈɔfər]',
    ru_meaning: ['предложение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'hope',
    ru: 'надеяться',
    tr: '[hoʊp]',
    ru_meaning: ['надежда'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'support',
    ru: 'поддеживать',
    tr: '[səˈpɔrt]',
    ru_meaning: ['поддержка'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'train',
    ru: 'тренироваться',
    tr: '[treɪn]',
    ru_meaning: ['поезд'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'control',
    ru: 'контролировать',
    tr: '[kənˈtroʊl]',
    ru_meaning: ['управлять', 'контроль', 'управление'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'watch',
    ru: 'смотреть',
    tr: '[wɑʧ]',
    ru_meaning: ['наблюдать', 'наручные часы'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'visit',
    ru: 'посетить',
    tr: '[ˈvɪzət]',
    ru_meaning: ['навестить', 'визит', 'посещение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'return',
    ru: 'вернуться',
    tr: '[rɪˈtɜrn]',
    ru_meaning: ['возврат'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'walk',
    ru: 'гулять',
    tr: '[wɔk]',
    ru_meaning: ['прогулка'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'stop',
    ru: 'остановить',
    tr: '[stɑp]',
    ru_meaning: ['перестать', 'остановка'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'share',
    ru: 'делиться',
    tr: '[ʃɛr]',
    ru_meaning: ['доля'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'answer',
    ru: 'ответить',
    tr: '[ˈænsər]',
    ru_meaning: ['ответ'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'sound',
    ru: 'звучать',
    tr: '[saʊnd]',
    ru_meaning: ['звук'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'pass',
    ru: 'сдавать',
    tr: '[pæs]',
    ru_meaning: ['пройти', 'пас'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'produce',
    ru: 'производить',
    tr: '[ˈproʊdus]',
    ru_meaning: ['продукция'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'die',
    ru: 'умирать',
    tr: '[daɪ]',
    ru_meaning: ['смерть'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'practice',
    ru: 'практиковать',
    tr: '[ˈpræktəs]',
    ru_meaning: ['практика'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'sign',
    ru: 'подписывать',
    tr: '[saɪn]',
    ru_meaning: ['знак'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'travel',
    ru: 'путешествовать',
    tr: '[ˈtrævəl]',
    ru_meaning: ['путешествие'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'check',
    ru: 'проверять',
    tr: '[ʧɛk]',
    ru_meaning: ['проверка'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'finish',
    ru: 'закончить',
    tr: '[ˈfɪnɪʃ]',
    ru_meaning: ['финиш'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'compare',
    ru: 'сравнивать',
    tr: '[kəmˈpɛr]',
    ru_meaning: ['сравнение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'laugh',
    ru: 'смеяться',
    tr: '[læf]',
    ru_meaning: ['смех'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'worry',
    ru: 'беспокоиться',
    tr: '[ˈwɜri]',
    ru_meaning: ['волноваться', 'волнение', 'беспокойство'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'fail',
    ru: 'завалить',
    tr: '[feɪl]',
    ru_meaning: ['провалить', 'потерпеть неудачу', 'неудача', 'провал', 'сбой'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'aim',
    ru: 'целиться',
    tr: '[eɪm]',
    ru_meaning: ['цель'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'invite(+to)',
    ru: 'приглашать',
    tr: '[ɪnˈvaɪt]',
    ru_meaning: ['приглашение'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'correct',
    ru: 'исправлять',
    tr: '[kəˈrɛkt]',
    ru_meaning: ['правильный', 'корректный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'cook',
    ru: 'готовить',
    tr: '[kʊk]',
    ru_meaning: ['повар'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'cry',
    ru: 'плакать, кричать',
    tr: '[kraɪ]',
    ru_meaning: ['плач', 'крик'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'smoke',
    ru: 'курить',
    tr: '[smoʊk]',
    ru_meaning: ['дым'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'jump',
    ru: 'прыгать',
    tr: '[ʤʌmp]',
    ru_meaning: ['прыжок'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'hate',
    ru: 'ненавидеть',
    tr: '[heɪt]',
    ru_meaning: ['ненависть'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'graduate',
    ru: 'заканчивать',
    tr: '[ˈɡræʤuɪt]',
    ru_meaning: ['выпускник'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'kiss',
    ru: 'целовать',
    tr: '[kɪs]',
    ru_meaning: ['поцелуй'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'download',
    ru: 'скачать',
    tr: '[ˈdaʊnˌloʊd]',
    ru_meaning: ['скачивание'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'promise',
    ru: 'обещать',
    tr: '[ˈprɑməs]',
    ru_meaning: ['обещание'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'sentence',
    ru: 'приговорить',
    tr: '[ˈsɛntəns]',
    ru_meaning: ['предложение(в тексте)'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'smile(+at)',
    ru: 'улыбаться',
    tr: '[smaɪl]',
    ru_meaning: ['улыбка'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'surprise',
    ru: 'удивлять',
    tr: '[sərˈpraɪz]',
    ru_meaning: ['сюрприз'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'copy',
    ru: 'копировать',
    tr: '[ˈkɑpi]',
    ru_meaning: ['копия'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'close',
    ru: 'закрыть',
    tr: '[kloʊs]',
    ru_meaning: ['близкий'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'rent',
    ru: 'арендовать',
    tr: '[rɛnt]',
    ru_meaning: ['аренда'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
  {
    en: 'test',
    ru: 'тестировать',
    tr: '[tɛst]',
    ru_meaning: ['проверять', 'испытывать', 'испытание', 'тест', 'проверка', 'контрольная работа'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],

    phrasal_verbs: [''],
  },
];

console.log(REGUlAR_VERBS_A0.length);

const WORDS_A0 = [
  {
    en: 'should',
    ru: 'должен',
    tr: '[ʃʊd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'which',
    ru: 'который, какой',
    tr: '[wɪʧ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'some',
    ru: 'некоторые',
    tr: '[sʌm]',
    ru_meaning: ['несколько', 'немного'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'because',
    ru: 'потому что',
    tr: '[bɪˈkɒz]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'such',
    ru: 'такой',
    tr: '[sʌʧ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'each',
    ru: 'каждый',
    tr: '[iːʧ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'less',
    ru: 'меньше',
    tr: '[les]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'once',
    ru: 'однажды',
    tr: '[wʌns]',
    ru_meaning: ['один раз'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'enough',
    ru: 'достаточно',
    tr: '[ɪˈnʌf]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'several',
    ru: 'несколько',
    tr: '[ˈsevrəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'letter',
    ru: 'письмо',
    tr: '[ˈletə] ',
    ru_meaning: ['буква'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'subject',
    ru: 'тема',
    tr: '[ˈsʌbʤɪkt]',
    ru_meaning: ['предмет'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'near',
    ru: 'рядом (с)',
    tr: '[nɪə]',
    ru_meaning: ['близко(с)', 'около'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'opportunity',
    ru: 'возможность',
    tr: '[ˌɒpəˈʧuːnəti]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'single',
    ru: 'холост',
    tr: '[ˈsɪŋɡl]',
    ru_meaning: ['одиночный', 'единичный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'society',
    ru: 'общество',
    tr: '[səˈsaɪəti]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'wrong',
    ru: 'неправильный',
    tr: '[rɒŋ]',
    ru_meaning: ['неверный', 'ложный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'poor',
    ru: 'бедный',
    tr: '[pɔː]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'article',
    ru: 'статья',
    tr: '[ˈɑːtɪkl]',
    ru_meaning: ['артикль'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'modern',
    ru: 'современный',
    tr: '[ˈmɒdn]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'village',
    ru: 'деревня',
    tr: '[ˈvɪlɪʤ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'application',
    ru: 'приложение',
    tr: '[ˌæplɪˈkeɪʃn]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'exercise',
    ru: 'упражнение',
    tr: '[ˈɛksəsaɪz]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'useful',
    ru: 'полезный',
    tr: '[ˈjuːsfl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'tonight',
    ru: 'сегодня вечером',
    tr: '[təˈnaɪt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pound',
    ru: 'фунт',
    tr: '[paʊnd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'suddenly',
    ru: 'вдруг, внезапно',
    tr: '[ˈsʌdənli]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'advice',
    ru: 'совет ',
    tr: '[ædˈvaɪs]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'wonderful',
    ru: 'прекрасный',
    tr: '[ˈwʌndərfəl]',
    ru_meaning: ['замечательный', 'удивительный', 'чудесный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'absolutely',
    ru: 'абсолютно',
    tr: '[ˌæbsəˈlutli]',
    ru_meaning: ['совершенно', 'совсем', 'полностью'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pleasure',
    ru: 'удовольствие',
    tr: '[ˈpleʒər]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'forest',
    ru: 'лес',
    tr: '[ˈfɔrəst]',
    ru_meaning: ['лесной'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'abroad',
    ru: 'за границей',
    tr: '[əˈbrɔd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'upset',
    ru: 'расстроенный',
    tr: '[əpˈset]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'singer',
    ru: 'певец',
    tr: '[ˈsɪŋər]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'alright',
    ru: 'в порядке',
    tr: '[ˌɔlˈraɪt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'fluently',
    ru: 'свободно, бегло',
    tr: '[ˈfluəntli]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pet',
    ru: 'домашнее животное',
    tr: '[pet]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'miracle',
    ru: 'чудо',
    tr: '[ˈmɪrəkəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'toy',
    ru: 'игрушка',
    tr: '[tɔɪ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'hardworking',
    ru: 'трудолюбивый',
    tr: '[ˈhɑrˌdwɜrkɪŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'unhappy',
    ru: 'несчатный',
    tr: '[ənˈhæpi]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'worse',
    ru: 'хуже',
    tr: '[wɜrs]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'worst',
    ru: 'наихудший',
    tr: '[wɜrst]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'fat',
    ru: 'толстый',
    tr: '[fæt]',
    ru_meaning: ['жирный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'nowadays',
    ru: 'в наши дни',
    tr: '[ˈnaʊəˌdeɪz]',
    ru_meaning: ['в наше время'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'casual',
    ru: 'повседневный',
    tr: '[ˈkæʒəwəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'informal',
    ru: 'неформальный',
    tr: '[ɪnˈfɔrməl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'against',
    ru: 'против',
    tr: '[əˈɡenst]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: `Let's`,
    ru: 'давай',
    tr: '[lets]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'goods',
    ru: 'товар(-ы)',
    tr: '[ɡʊdz]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'listening',
    ru: 'аудирование',
    tr: '[ˈlɪsənɪŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'speaking',
    ru: 'разговорная речь',
    tr: '[ˈspikɪŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'sandwich',
    ru: 'бутерброд',
    tr: '[ˈsændwɪʧ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'gym',
    ru: 'тренажёрный зал',
    tr: '[ʤɪm]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'surname',
    ru: 'фамилия',
    tr: '[ˈsɜrˌneɪm]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'camel',
    ru: 'верблюд',
    tr: '[ˈkæməl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'championship',
    ru: 'чемпионат',
    tr: '[ˈʧæmpiənˌʃɪp]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'competition',
    ru: 'соревнование',
    tr: '[ˌkɑmpəˈtɪʃən]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'bridge',
    ru: 'мост',
    tr: '[brɪʤ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'wallet',
    ru: 'бумажник',
    tr: '[ˈwɔlət]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'bag',
    ru: 'сумка',
    tr: '[bæɡ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'lawyer',
    ru: 'юрист, адвокат',
    tr: '[ˈlɔjər]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'law',
    ru: 'закон',
    tr: '[lɔ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'desk',
    ru: 'письменный стол',
    tr: '[desk]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'studies',
    ru: 'учёба',
    tr: '[ˈstʌdiz]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'ill',
    ru: 'больной',
    tr: '[ɪl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'special',
    ru: 'особый, специальный',
    tr: '[ˈspeʃəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'away',
    ru: 'прочь',
    tr: '[əˈweɪ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'worst',
    ru: 'наихудший',
    tr: '[wɜrst]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'floor',
    ru: 'этаж, пол',
    tr: '[flɔr]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'tree',
    ru: 'дерево',
    tr: '[tri]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'foreign',
    ru: 'иностранный',
    tr: '[ˈfɔrən]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'only',
    ru: 'только, лишь',
    tr: '[ˈoʊnli]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pocket',
    ru: 'карман',
    tr: '[ˈpɑkət]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'corner',
    ru: 'угол',
    tr: '[ˈkɔrnər]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'incorrect',
    ru: 'неправильный',
    tr: '[ɪnkəˈrekt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'behind',
    ru: 'позади, за',
    tr: '[bɪˈhaɪnd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'yard',
    ru: 'двор',
    tr: '[jɑrd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'unusual',
    ru: 'необычный',
    tr: '[ənˈjuʒˌuəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'motivating',
    ru: 'мотивирующий',
    tr: '[ˈmoʊtəˌveɪtɪŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'fence',
    ru: 'забор',
    tr: '[fens]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'homemade',
    ru: 'домашний',
    tr: '[ˈhoʊmˈmeɪd]',
    ru_meaning: ['домашнего изготовления'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'sooner',
    ru: 'скорее',
    tr: '[ˈsunər]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'meeting',
    ru: 'встреча',
    tr: '[ˈmitɪŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'by',
    ru: 'по, у, к, мимо, на, при, от',
    tr: '[baɪ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'topic',
    ru: 'тема',
    tr: '[ˈtɑpɪk]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'a bit',
    ru: 'немного',
    tr: '[ə] [bɪt]',
    ru_meaning: ['бит'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'ground',
    ru: 'земля(под ногами)',
    tr: '[ɡraʊnd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pie',
    ru: 'пирог',
    tr: '[paɪ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'parcel',
    ru: 'посылка',
    tr: '[ˈpɑrsəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'kindness',
    ru: 'доброта',
    tr: '[ˈkaɪndnəs]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'bill',
    ru: 'счёт',
    tr: '[bɪl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'chance',
    ru: 'шанс',
    tr: '[ʧæns]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'accident',
    ru: 'происшествие',
    tr: '[ˈæksədənt]',
    ru_meaning: ['авария', 'несчастный случай'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'criminal',
    ru: 'преступник',
    tr: '[ˈkrɪmənəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'view',
    ru: 'вид, зрение',
    tr: '[vju]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'donkey',
    ru: 'осёл',
    tr: '[ˈdɑŋki]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'knowledge',
    ru: 'знания',
    tr: '[ˈnɑləʤ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'circus',
    ru: 'цирк',
    tr: '[ˈsɜrkəs]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'mostly(mainly)',
    ru: 'в основном',
    tr: '[ˈmoʊstli]([ˈmeɪnli])',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'speech',
    ru: 'речь',
    tr: '[spiʧ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'between',
    ru: 'между',
    tr: '[bɪˈtwin]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'just',
    ru: 'просто',
    tr: '[ʤʌst]',
    ru_meaning: ['лишь', 'только(что)', 'справедливый'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'pair',
    ru: 'пара(в англ. единственное число)',
    tr: '[per]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'homework',
    ru: 'домашнее задание',
    tr: '[ˈhoʊmˌwɜrk]',
    ru_meaning: ['домашняя работа'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'decision',
    ru: 'решение(чего-то)',
    tr: '[dɪˈsɪʒən]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'solution',
    ru: 'решение(какой-то проблемы)',
    tr: '[səˈluʃən]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'delicious',
    ru: 'очень вкусный',
    tr: '[dɪˈlɪʃəs]',
    ru_meaning: ['восхитительный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'tasty',
    ru: 'вкусный',
    tr: '[ˈteɪsti]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'terrible',
    ru: 'ужасный',
    tr: '[ˈterəbəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'song',
    ru: 'песня',
    tr: '[sɔŋ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'sad',
    ru: 'грустный',
    tr: '[sæd]',
    ru_meaning: ['печальный'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'immediate',
    ru: 'немедленный',
    tr: '[ɪˈmidiət]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'slow',
    ru: 'медленный',
    tr: '[sloʊ]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'urgent',
    ru: 'срочный',
    tr: '[ˈɜrʤənt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'intensive',
    ru: 'интенсивный',
    tr: '[ɪnˈtensɪv]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'intense',
    ru: 'интенсивно',
    tr: '[ɪnˈtens]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'careful',
    ru: 'осторожный',
    tr: '[ˈkerfəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'confidence',
    ru: 'уверенность',
    tr: '[ˈkɑnfədəns]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'sure',
    ru: 'уверенный',
    tr: '[ʃʊr]',
    ru_meaning: ['конечно', 'безусловно'],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'lonely',
    ru: 'одинокий',
    tr: '[ˈloʊnli]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'convenient',
    ru: 'удобный',
    tr: '[kənˈvinjənt]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'early',
    ru: 'ранний, рано',
    tr: '[ˈɜrli]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'fashionable',
    ru: 'модный',
    tr: '[ˈfæʃənəbəl]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'loud',
    ru: 'громкий',
    tr: '[laʊd]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'necessary',
    ru: 'необходимый, необходимо',
    tr: '[ˈnesəˌseri]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'choice',
    ru: 'выбор',
    tr: '[ʧɔɪs]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'cheap',
    ru: 'дешёвый',
    tr: '[ʧip]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'success',
    ru: 'успех',
    tr: '[səkˈses]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
  {
    en: 'quiet',
    ru: 'тихий',
    tr: '[ˈkwaɪət]',
    ru_meaning: [''],

    ex: [
      {
        ex_en: '',
        ex_ru: '',
        ex_tr: '',
      },
    ],
  },
];

console.log(WORDS_A0.length);


let searchInput = document.querySelector('.search__input');

let searchBtn = document.querySelector('.search__btn');



let template = document.querySelector('#template');

let ptemplatePhrasesItem = template.querySelector('.phrases__item');

let ptemplatePhrasesItemEn = template.querySelector('.phrases__example-en');

let ptemplatePhrasesItemRu = template.querySelector('.phrases__example-ru');



let phrasalVerbItem = template.querySelector('.phrasal-verb__item');

let phrasalVerbItemEn = template.querySelector('.phrasal-verb__example-en');

let phrasalVerbItemRu = template.querySelector('.phrasal-verb__example-ru');



let offersItem = template.querySelector('.offers__item');

let offersItemEn = template.querySelector('.offers__item__example-en');

let offersItemRu = template.querySelector('.offers__item__example-ru');



let content = document.querySelector('.content');



let result = content.querySelector('.result');

let resultEn = result.querySelector('.result__en');

let resultTr = result.querySelector('.result__tr');

let resultRu = result.querySelector('.result__ru');



let additionally = content.querySelector('.additionally');

let additionallyWords = additionally.querySelector('.additionally__words');



let phrases = content.querySelector('.phrases');

let phrasesList = phrases.querySelector('.phrases__list ');



let offers = content.querySelector('.offers');

let offersList = offers.querySelector('.offers__list');



let phrasalVerb = content.querySelector('.phrasal-verb');

let phrasalVerbList = phrasalVerb.querySelector('.phrasal-verb__list');


searchBtn.addEventListener('click', () => {
  searchInput = document.querySelector('.search__input');
  let value = searchInput.value;
  value = value.toLowerCase();

  let word = WORDS_A0.find((currentValue) => {
    if (currentValue.en === value || currentValue.ru === value) {
      return currentValue;
    }
  });

  console.log(word);
});


//include name.js
