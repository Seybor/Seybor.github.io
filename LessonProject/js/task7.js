'use strict';

const DEBOUNCE_INTERVAL = 400;
let timeoutID;
let counter = 0;

userCoat.addEventListener('click', () => {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(window.allRender, DEBOUNCE_INTERVAL);
});
userEyes.addEventListener('click', () => {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(window.allRender, DEBOUNCE_INTERVAL);
});
