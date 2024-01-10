let v = [
  { en: 'accept', tr: '[əkˈsept]', ru: 'принимать' },
  { en: 'adapt', tr: '[əˈdæpt]', ru: 'адаптироваться' },
  { en: 'add', tr: '[æd]', ru: 'добавлять' },
  { en: 'appreciate', tr: '[əˈpriːʃieɪt]', ru: 'ценить' },
  { en: 'attend', tr: '[əˈtend]', ru: 'посещать' },
  { en: 'attract', tr: '[əˈtrækt]', ru: 'привлекать' },
  { en: 'behave', tr: '[bɪˈheɪv]', ru: 'вести себя' },
  { en: 'belong(to)', tr: '[bɪˈlɒŋ]([tuː])', ru: 'принадлежать' },
  { en: 'breathe', tr: '[briːð]', ru: 'дышать' },
  { en: 'broaden', tr: '[ˈbrɔːdᵊn]', ru: 'расширять, расширяться' },
  { en: 'care', tr: '[keə]', ru: 'заботиться(забота)' },
  { en: 'carry', tr: '[ˈkæri]', ru: 'нести(переноска)' },
  { en: 'clean', tr: '[kliːn]', ru: 'чистить(чистый)' },
  { en: 'complain', tr: '[kəmˈpleɪn]', ru: 'жаловаться' },
  { en: 'complete', tr: '[kəmˈpliːt]', ru: 'завершать(полный)' },
  { en: 'confirm', tr: '[kənˈfɜːm]', ru: 'подтверждать' },
  { en: 'consider', tr: '[kənˈsɪdə]', ru: 'рассматривать, считать(в смысле иметь мнение)' },
  { en: 'contact', tr: '[ˈkɒntækt]', ru: 'связываться(контакт)' },
  { en: 'count', tr: '[kaʊnt]', ru: 'считать(счёт)' },
  { en: 'deliver', tr: '[dɪˈlɪvə]', ru: 'доставлять' },
  { en: 'develop', tr: '[dɪˈveləp]', ru: 'развивать' },
  { en: 'divide', tr: '[dɪˈvaɪd]', ru: 'делить' },
  { en: 'divorce', tr: '[dɪˈvɔːs]', ru: 'разводиться(развод)' },
  { en: 'dream', tr: '[driːm]', ru: 'мечтать(мечта)' },
  { en: 'enjoy', tr: '[ɪnˈʤɔɪ]', ru: 'наслаждаться, обожать' },
  { en: 'exist', tr: '[ɪɡˈzɪst]', ru: 'существовать' },
  { en: 'expect', tr: '[ɪkˈspekt]', ru: 'ожидать' },
  { en: 'experience', tr: '[ɪkˈspɪəriəns]', ru: 'испытывать(опыт)' },
  { en: 'express', tr: '[ɪkˈspres]', ru: 'выражать, высказывать(экспресс)' },
  { en: 'fill', tr: '[fɪl]', ru: 'заполнять(заполнение)' },
  { en: 'frighten', tr: '[ˈfraɪtᵊn]', ru: 'пугать' },
  { en: 'guarantee', tr: '[ˌɡærᵊnˈtiː]', ru: 'гарантировать(гарантия)' },
  { en: 'guess', tr: '[ɡes]', ru: 'предполагать(предположение)' },
  { en: 'imagine', tr: '[ɪˈmæʤɪn]', ru: 'вообразить, представить' },
  { en: 'increase', tr: '[ˈɪnkriːs]', ru: 'увеличить(увеличение)' },
  { en: 'inform', tr: '[ɪnˈfɔːm]', ru: 'информировать, сообщить' },
  { en: 'inspire', tr: '[ɪnˈspaɪə]', ru: 'вдохновлять, внушать' },
  { en: 'interrupt', tr: '[ˌɪntəˈrʌpt]', ru: 'прерывать, перебивать' },
  { en: 'invest', tr: '[ɪnˈvest]', ru: 'инвестировать, вкладывать' },
  { en: 'jogging', tr: '[ˈʤɒɡɪŋ]', ru: 'бегать трусцой(или просто бег, но прогулочный, не быстрый)' },
  { en: 'matter', tr: '[ˈmætə]', ru: 'иметь значение(материя)' },
  { en: 'miss', tr: '[mɪs]', ru: 'скучать, пропускать(неудача)' },
  { en: 'overpay', tr: '[ˌəʊvəˈpeɪ]', ru: 'переплачивать' },
  { en: 'own', tr: '[əʊn]', ru: 'иметь, владеть, принадлежать(собственный)' },
  { en: 'participate', tr: '[pɑːˈtɪsɪpeɪt]', ru: 'участвовать' },
  { en: 'provide', tr: '[prəˈvaɪd]', ru: 'предоставлять, обеспечивать' },
  { en: 'reach', tr: '[riːʧ]', ru: 'достигать, связаться(досягаемость)' },
  { en: 'react', tr: '[riˈækt]', ru: 'реагировать' },
  { en: 'realize', tr: '[ˈrɪəlaɪz]', ru: 'осознавать, реализовать' },
  { en: 'record', tr: '[ˈrekɔːd]', ru: 'записывать(запись, рекорд)' },
  { en: 'reduce', tr: '[rɪˈdjuːs]', ru: 'сократить, уменьшить' },
  { en: 'repeat', tr: '[rɪˈpiːt]', ru: 'повторять(повторение)' },
  { en: 'resolve', tr: '[rɪˈzɒlv]', ru: 'разрешить' },
  { en: 'respect', tr: '[rɪˈspekt]', ru: 'уважать(уважение)' },
  { en: 'risk', tr: '[rɪsk]', ru: 'рисковать(риск)' },
  { en: 'sense', tr: '[sens]', ru: 'чувствовать(чувство)' },
  { en: 'shock', tr: '[ʃɒk]', ru: 'шокировать(шок)' },
  { en: 'smell', tr: '[smel]', ru: 'пахнуть(запах)' },
  { en: 'spoil', tr: '[spɔːɪl]', ru: 'портить' },
  { en: 'suffer', tr: '[ˈsʌfə]', ru: 'страдать' },
  { en: 'suit', tr: '[suːt]', ru: 'подходить(костюм)' },
  { en: 'suppose', tr: '[səˈpəʊz]', ru: 'предполагать(предположение)' },
  { en: 'taste', tr: '[teɪst]', ru: 'пробовать(вкус)' },
  { en: 'thank', tr: '[θæŋk]', ru: 'благодарить(благодарность)' },
  { en: 'touch', tr: '[tʌʧ]', ru: 'касаться(прикосновение)' },
  { en: 'voice', tr: '[vɔɪs]', ru: 'озвучивать(голос)' },
  { en: 'warm', tr: '[wɔːm]', ru: 'согреть(тёплый, тепло)' },
  { en: 'waste', tr: '[weɪst]', ru: 'тратить, тратить впустую(трата ,отходы)' },
  { en: 'weigh', tr: '[weɪ]', ru: 'взвешивать, весить' },
  { en: 'wish', tr: '[wɪʃ]', ru: 'желать(желание)' },
];

v.forEach((el, id) => {
  const tr = document.createElement("tr");
  
  for (let i = 0; i < 4; i++) {
    let td = document.createElement("td");
    if (i === 0) {
      td.textContent = id + 1
    } else if (i === 1) {
      td.textContent = el.en
    } else if (i === 2) {
      td.textContent = el.tr
    } else if (i === 3) {
      td.textContent = el.ru
    }
    
    tr.append(td)
  }
  tbody.append(tr)

})