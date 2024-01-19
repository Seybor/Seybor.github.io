const IRREGULAR_VERBS = [
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
    en: 'break* - broke - broken',
    tr: '[breɪk] - [brəʊk] - [ˈbrəʊkᵊn]',
    ru: 'ломать',
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
    ru: 'стоить',
  },
  {
    en: 'cut - cut - cut',
    tr: '[kʌt] - [kʌt] - [kʌt]',
    ru: 'резать',
  },
  { en: 'do/does - did - done', tr: '[duː] - [dɪd] - [dʌn]', ru: 'делать [в значении выполнять]' },
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
    en: 'fly* - flew - flown',
    tr: '[flaɪ] - [fluː] - [fləʊn]',
    ru: 'летать',
  },
  {
    en: 'forget - forgot - forgotten',
    tr: '[fəˈɡet] - [fəˈɡɒt] - [fəˈɡɒtᵊn]',
    ru: 'забыть',
  },
  {
    en: 'get - got - got',
    tr: '[ɡet] - [ɡɒt] - [ɡɒt]',
    ru: 'получать; добираться',
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
    en: 'leave - left* - left',
    tr: '[liːv] - [left] - [left]',
    ru: 'уходить [с], выходить [из], покидать; уезжать [из]; оставлять; ',
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
    ru: 'делать [в значении создавать что-то заново]',
  },
  {
    en: 'mean* - meant - meant',
    tr: '[miːn] - [ment] - [ment]',
    ru: 'означать, иметь в виду',
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
    en: 'show* - showed - shown/showed',
    tr: '[ʃəʊ] - [ʃəʊd] - [ʃəʊn]/[ʃəʊd]',
    ru: 'показывать',
  },
  { en: 'sing - sang - sung', tr: '[sɪŋ] - [sæŋ] - [sʌŋ]', ru: 'петь' },
  { en: 'sit - sat - sat', tr: '[sɪt] - [sæt] - [sæt]', ru: 'сидеть [+ down если слово само по себе]' },
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
    ru: 'проводить [время], тратить [деньги]',
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
    ru: 'носить [на себе одежду]',
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
  {
    en: 'grow - grew - grown',
    tr: '[ɡrəʊ] - [ɡruː] - [ɡrəʊn]',
    ru: 'расти',
  },
  {
    en: 'draw - drew - drawn',
    tr: '[drɔː] - [druː] - [drɔːn]',
    ru: 'рисовать',
  },
  {
    en: 'hang - hung - hung',
    tr: '[hæŋ] - [hʌŋ] - [hʌŋ]',
    ru: 'висеть, вешать',
  },
  {
    en: 'lead - led - led',
    tr: '[liːd] - [lɛd] - [lɛd]',
    ru: 'вести, возглавлять, лидировать',
  },
  {
    en: 'let - let - let',
    tr: '[lɛt] - [lɛt] - [lɛt]',
    ru: 'позволять',
  },
  {
    en: 'blow - blew - blown',
    tr: '[bləʊ] - [bluː] - [bləʊn]',
    ru: 'дуть',
  },
  {
    en: 'catch - caught - caught',
    tr: '[kæʧ] - [kɔːt] - [kɔːt]',
    ru: 'поймать',
  },
  {
    en: 'hide - hid - hidden',
    tr: '[haɪd] - [hɪd] - [ˈhɪdᵊn]',
    ru: 'прятать',
  },
  {
    en: 'hit - hit - hit',
    tr: '[hɪt] - [hɪt] - [hɪt]',
    ru: 'ударить ',
  },
  {
    en: 'overcome - overcame - overcome',
    tr: '[ˌəʊvəˈkʌm] - [ˌəʊvəˈkeɪm] - [ˌəʊvəˈkʌm]',
    ru: 'преодолеть',
  },
  {
    en: 'forgive - forgave - forgiven',
    tr: '[fəˈɡɪv] - [fəˈɡeɪv] - [fəˈɡɪvᵊn]',
    ru: 'прощать',
  },
  {
    en: 'beat - beat - beaten',
    tr: '[biːt] - [biːt] - [ˈbiːtᵊn]',
    ru: 'бить',
  },
  {
    en: 'throw*  - threw - thrown',
    tr: '[θrəʊ]* - [θruː] - [θrəʊn]',
    ru: 'бросать',
  },
  {
    en: 'rise* - rose - risen',
    tr: '[raɪz]* - [rəʊz] - [ˈrɪzᵊn]',
    ru: 'поднимать',
  },
  {
    en: 'ring* - rang - rung',
    tr: '[rɪŋ]* - [ræŋ] - [rʌŋ]',
    ru: 'звонить',
  },
  {
    en: 'feed* - fed - fed',
    tr: '[fiːd]* - [fɛd] - [fɛd]',
    ru: 'кормить',
  },
  {
    en: 'fit - fitted/fit - fitted/fit',
    tr: '[fɪt] - [ˈfɪtɪd]/[fɪt] - [ˈfɪtɪd]/[fɪt]',
    ru: 'подходить [по размеру]',
  },
  {
    en: 'steal* - stole - stolen',
    tr: '[stiːl]* - [stəʊl] - [ˈstəʊlᵊn]',
    ru: 'украсть',
  },
  {
    en: 'deal* - dealt - dealt',
    tr: '[diːl]* - [dɛlt] - [dɛlt]',
    ru: 'иметь дело',
  },
  {
    en: 'fight* - fought - fought',
    tr: '[faɪt]* - [fɔːt] - [fɔːt]',
    ru: 'бороться',
  },
  {
    en: 'hurt* - hurt - hurt',
    tr: '[hɜːt]* - [hɜːt] - [hɜːt]',
    ru: 'ранить, повредит',
  },
  {
    en: 'set* - set - set',
    tr: '[sɛt]* - [sɛt] - [sɛt]',
    ru: 'устанавливать',
  },
  {
    en: 'withdraw - withdrew - withdrawn',
    tr: '[wɪðˈdrɔː] - [wɪðˈdruː] - [wɪðˈdrɔːn]',
    ru: 'изымать, отзывать, снимать [например деньги со счёта]',
  },
];

console.log(IRREGULAR_VERBS.length);
