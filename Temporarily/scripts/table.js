let v = [
  ['sit', 'sat', 'sat', 'сидеть'],
  ['sleep', 'slept', 'slept', 'спать'],
  ['keep', 'kept', 'kept', 'держать, хранить'],
  ['mean', 'meant', 'meant', 'означать, иметь в виду'],
  ['win', 'won', 'won', 'выиграть, одержать победу'],
  ['teach', 'taught', 'taught', 'преподавать'],
  ['think', 'thought', 'thought', 'думать'],
  ['understand', 'understood', 'understood', 'понимать, постигать'],
  ['leave', 'left', 'left', 'уходить(с), оставлять'],
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
  ['build', 'built', 'built', 'строить'],
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
  ['lie', 'lay', 'lain', 'лежать, врать(враньё)'],
  ['read [riːd]', 'read [red]', 'read [red]', 'читать'],
  ['cut', 'cut', 'cut', 'резать(разрез)'],
  ['put', 'put', 'put', 'положить'],
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
  tbody.append(tr)

})


// Преобразование массива в JSON-строку
let jsonData = JSON.stringify(v);
let blob = new Blob([jsonData], {type: 'application/json'});
let url = URL.createObjectURL(blob);
link.href = url;
link.download = 'data.txt';


// sort

table.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      let th = e.target;
      // если ячейка TH, тогда сортировать
      // cellIndex - это номер ячейки th:
      //   0 для первого столбца
      //   1 для второго и т.д.
      sortGrid(th.cellIndex, th.dataset.type);
    };

let counter = 0;

function sortGrid(colNum, type) {
      let rowsArray = Array.from(tbody.rows);

      // console.log(...rowsArray)

      // compare(a, b) сравнивает две строки, нужен для сортировки
      let compare;


      switch (type) {
        case 'number': {
           let value = rowsArray[0].querySelector('td').textContent < rowsArray[1].querySelector('td').textContent
           console.log(value)
           if (value) {
            counter++
           }

           compare = function(rowA, rowB) {
            let value = rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            
            return value;
          };
        }
          break;
        case 'v1': {
          let value = rowsArray[0].querySelector('td:nth-of-type(2)').textContent < rowsArray[1].querySelector('td:nth-of-type(2)').textContent
           console.log(value)
           if (value) {
            counter++
           }
           compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
        }
          case 'v2': {
          let value = rowsArray[0].querySelector('td:nth-of-type(3)').textContent < rowsArray[1].querySelector('td:nth-of-type(3)').textContent
           console.log(value)
           if (value) {
            counter++
           }
           compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
        }
         case 'v3': {
          let value = rowsArray[0].querySelector('td:nth-of-type(4)').textContent < rowsArray[1].querySelector('td:nth-of-type(4)').textContent
           console.log(value)
           if (value) {
            counter++
           }
           compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
        }
      case 'ru': {
          let value = rowsArray[0].querySelector('td:nth-of-type(5)').textContent < rowsArray[1].querySelector('td:nth-of-type(5)').textContent
           console.log(value)
           if (value) {
            counter++
           }
           compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
        }
       
      }

      // сортировка
      rowsArray.sort(compare);
      if (counter > 0) {
        rowsArray.reverse()
        counter = 0
      } 

      tbody.append(...rowsArray);

      let arr = []

      rowsArray.forEach((el) => {
        arr.push(el.innerHTML)
      })

      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('<td>').join('').split('</td>')
        arr[i].shift()
        arr[i].pop()
        arr[i] = arr[i].join(' - ')
      }

      console.log(arr)

      jsonData = JSON.stringify(arr);
      blob = new Blob([jsonData], {type: 'application/json'});
      url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'data.txt';
    }