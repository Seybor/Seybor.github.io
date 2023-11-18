'use strict';

// ! task 4

const ENTER_KEYCODE = 13;
const ESC_KEYCODE = 27;
const userOpen = document.querySelector('.setup-open');
const userClose = userDialog.querySelector('.setup-close');
const userSetup = userDialog.querySelector('.setup-user-name');

userOpen.querySelector('.setup-open-icon').setAttribute('tabindex', '0');
userDialog.setAttribute('tabindex', '0');
userDialog
  .querySelector('.setup-wizard-form')
  .setAttribute('action', 'https://24.javascript.pages.academy/code-and-magick');
userClose.setAttribute('tabindex', '0');
userSetup.setAttribute('minlength', '2');
userSetup.setAttribute('maxlength', '25');

userOpen.addEventListener('click', () => {
  userDialog.classList.remove('hidden');
  userDialog.focus();
});
userOpen.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.remove('hidden');
    userDialog.focus();
  }
});

userClose.addEventListener('click', () => {
  userDialog.classList.add('hidden');

  setupDialogElement.style = '';
});
userClose.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE || evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.add('hidden');

    setupDialogElement.style = '';
  }
});
userDialog.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    userDialog.classList.add('hidden');

    setupDialogElement.style = '';
  }
});
userSetup.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
    console.log('userSetup');
  }
});

const userCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
const userCoatInput = userDialog.querySelector('input[name="coat-color"]');

const userEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
const userEyesInput = userDialog.querySelector('input[name="eyes-color"]');

const userFireball = userDialog.querySelector('.setup-fireball-wrap');
const userFireballInput = userDialog.querySelector('input[name="fireball-color"]');

const WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

userCoat.addEventListener('click', () => {
  let newColor;
  let arrLenght = WIZARD_COLOR.findIndex((currentValue) => currentValue == userCoatInput.value);
  if (arrLenght < WIZARD_COLOR.length - 1) {
    arrLenght = arrLenght + 1;
  } else {
    arrLenght = 0;
  }
  newColor = WIZARD_COLOR[arrLenght];
  userCoat.style = `fill: ${newColor};`;
  userCoatInput.value = newColor;
});
userEyes.addEventListener('click', () => {
  let newColor;
  let arrLenght = WIZARD_EYES.findIndex((currentValue) => currentValue == userEyesInput.value);
  if (arrLenght < WIZARD_EYES.length - 1) {
    arrLenght = arrLenght + 1;
  } else {
    arrLenght = 0;
  }
  newColor = WIZARD_EYES[arrLenght];
  userEyes.style = `fill: ${newColor};`;
  userEyesInput.value = newColor;
});
userFireball.addEventListener('click', () => {
  let newColor;
  let arrLenght = WIZARD_FIREBALLS.findIndex((currentValue) => currentValue == userFireballInput.value);
  if (arrLenght < WIZARD_FIREBALLS.length - 1) {
    arrLenght = arrLenght + 1;
  } else {
    arrLenght = 0;
  }
  newColor = WIZARD_FIREBALLS[arrLenght];
  userFireball.style = `background: ${newColor};`;
  userFireballInput.value = newColor;
});
