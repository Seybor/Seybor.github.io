'use strict';

let grid = document.querySelector('.grid');
let template = document.querySelector('#template').content.querySelector('.col');
let button = document.querySelector('.button');

button.addEventListener('click', () => {
  let input = document.querySelector('.input');

  if (input.value.length === 0) {
    return alert('Поле не должно быть пустым');
  }

  grid.textContent = '';

  render(input.value);
});
