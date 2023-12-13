'use strict';

let grid = document.querySelector('.grid');
let spans = grid.querySelectorAll('.span');

const ARR = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
];

let whoFirst = Math.round(Math.random());

console.log(whoFirst);

// if (whoFirst === 1) {
grid.querySelector('.span[data-count="5"]').style.backgroundColor = 'blue';
grid.querySelector('.span[data-count="5"]').style.pointerEvents = 'none';
// }

let matrix = [];
let my = [];
matrix.push('5');

const player = (value) => {
  let find;

  console.log(my);

  if (my[0] == 3 && my[1] == 6 && my[2] == 9) {
    grid.style.pointerEvents = 'none';
    return alert('Победа');
  }

  if (!matrix.includes('5')) {
    find = grid.querySelector('.span[data-count="5"]');

    matrix.push('5');
    find.style.backgroundColor = 'blue';
    find.style.pointerEvents = 'none';
    return;
  }
  if (!matrix.includes('7')) {
    if (my.includes('7')) {
      return alert('Я сломался');
    }

    console.log('7');
    find = grid.querySelector('.span[data-count="7"]');

    matrix.push('7');
    find.style.backgroundColor = 'blue';
    find.style.pointerEvents = 'none';
    return;
  }
  if (!matrix.includes('1')) {
    if (my.includes('1')) {
      return alert('Я сломался');
    }

    console.log('1');
    find = grid.querySelector('.span[data-count="1"]');

    matrix.push('1');
    find.style.backgroundColor = 'blue';
    find.style.pointerEvents = 'none';
    return;
  }
  if (!matrix.includes('4')) {
    if (my.includes('4')) {
      return alert('Я сломался');
    }
    console.log('4');
    find = grid.querySelector('.span[data-count="4"]');

    matrix.push('4');
    find.style.backgroundColor = 'blue';
    find.style.pointerEvents = 'none';

    setTimeout(() => {
      if (matrix[0] == 5 && matrix[1] == 7 && matrix[2] == 1 && matrix[3] == 4) {
        alert('Вы проиграли');
        grid.style.pointerEvents = 'none';
        return;
      }
    }, 50);

    return;
  }
};

spans.forEach((el) => {
  el.addEventListener('click', () => {
    el.style.backgroundColor = 'red';

    setTimeout(() => {
      console.log(el.dataset.count);
      el.style.pointerEvents = 'none';
      my.push(el.dataset.count);
      player(el.dataset.count);
    }, 50);
  });
});
