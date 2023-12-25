let v = [
  ['sit', 'sat', 'sat', 'сидеть'],
  ['sleep', 'slept', 'slept', 'спать'],
  ['keep', 'kept', 'kept', 'держать, хранить'],
  ['mean', 'meant', 'meant', 'означать, иметь в виду'],
  ['win', 'won', 'won', 'выиграть, одержать победу'],
  ['teach', 'taught', 'taught', 'преподавать'],
  ['think', 'thought', 'thought', 'думать'],
  ['understand', 'understood', 'understood', 'понимать, постигать'],
  ['leave', 'left', 'left', 'уходить(с), выходить(из), покидать, уезжать, оставлять'],
  ['stand', 'stood', 'stood', 'встать'],
  ['hear', 'heard', 'heard', 'слышать'],
  ['have/has', 'had', 'had', 'иметь'],
  ['do', 'did', 'done', 'делать'],
  ['get', 'got', 'got', 'получать, добираться'],
  ['make', 'made', 'made', 'делать'],
  ['can', 'could', 'could', 'мог'],
  ['say', 'said', 'said', 'сказать'],
  ['find', 'found', 'found', 'находить'],
  ['tell', 'told', 'told', 'рассказывать'],
  ['show', 'showed', 'shown/showed', 'показывать(шоу)'],
  ['feel', 'felt', 'felt', 'чувствовать'],
  ['meet', 'met', 'met', 'встречать, встречаться'],
  ['bring', 'brought', 'brought', 'приносить'],
  ['buy', 'bought', 'bought', 'купить'],
  ['spend', 'spent', 'spent', 'проводить, тратить'],
  ['learn', 'learnt/learned', 'learnt/learned', 'учить'],
  ['lose', 'lost', 'lost', 'терять, проигрывать'],
  ['send', 'sent', 'sent', 'присылать, посылать, отправлять'],
  ['sell', 'sold', 'sold', 'продать'],
  ['lend', 'lent', 'lent', 'одалживать, давать взаймы'],
  ['pay', 'paid', 'paid', 'платить'],
  ['ride', 'rode', 'ridden', 'ездить'],
  ['drive', 'drove', 'driven', 'водить'],
  ['swim', 'swam', 'swum', 'плавать'],
  ['forget', 'forgot', 'forgotten', 'забыть'],
  ['give', 'gave', 'given', 'дать'],
  ['break', 'broke', 'broken', 'ломать(перерыв)'],
  ['fly', 'flew', 'flown', 'летать(муха)'],
  ['wake', 'woke', 'woken', 'просыпаться'],
  ['take', 'took', 'taken', 'брать, принимать'],
  ['begin', 'began', 'begun', 'начинать'],
  ['drink', 'drank', 'drunk', 'пить'],
  ['write', 'wrote', 'written', 'писать'],
  ['fall', 'fell', 'fallen', 'упасть'],
  ['know', 'knew', 'known', 'знать'],
  ['go', 'went', 'gone', 'идти, ехать'],
  ['be', 'was/were', 'been', 'быть'],
  ['see', 'saw', 'seen', 'видеть'],
  ['speak', 'spoke', 'spoken', 'говорить'],
  ['choose', 'chose', 'chosen', 'выбирать'],
  ['eat', 'ate', 'eaten', 'есть, кушать'],
  ['wear', 'wore', 'worn', 'носить(одежду)'],
  ['sing', 'sang', 'sung', 'петь'],
  ['read [riːd]', 'read [red]', 'read [red]', 'читать'],
  ['cut', 'cut', 'cut', 'резать(разрез)'],
  ['put', 'put', 'put', 'положить'],
  ['build', 'built', 'built', 'строить'],
  ['cost', 'cost', 'cost', 'стоить(стоимость)'],
  ['run', 'ran', 'run', 'бежать'],
  ['come', 'came', 'come', 'приходить'],
  ['become', 'became', 'become', 'становиться'],
];

v.forEach((el, id) => {
  const tr = document.createElement("tr");
  
  for (let i = 0; i < 5; i++) {
    let td = document.createElement("td");
    if (i === 0) {
      td.textContent = id + 1
    } else {
      td.textContent = el[i - 1]
    }
    
    tr.append(td)
  }
  table.append(tr)
  // p.textContent = `${id + 1}) ${el[0]} - ${el[1]} - ${el[2]} - ${el[3]}`;
  
})
