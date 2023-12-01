'use strict';

const trash = document.querySelector('.trash');

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

let value = [];

function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData('text');
  value.push(data);
  console.log(value);

  e.currentTarget.append(document.getElementById(data));

  document.getElementById(data).draggable = false;
}
