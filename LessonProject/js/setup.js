'use strict';

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsContent = userDialog.querySelector('.setup-similar-list');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardNames = [];
var wizardSurname = [];
var wizardColor = [];
var wizardEyes = [];

var randomNumber = (myArray, bigArray) => {
  var checkNumber = true;
  do {
    end: for (var i = 0; i < 4; i++) {
      myArray[i] = Math.floor(Math.random() * (bigArray.length - 1 - 0 + 1) + 0);

      if (i === 3) {
        checkNumber = true;
        for (var j = 0; j < 4; j++) {
          for (var k = j + 1; k < 4; k++) {
            if (myArray[j] === myArray[k]) {
              checkNumber = false;
              break end;
            }
          }
        }
      }
    }
  } while (checkNumber === false);
};

randomNumber(wizardNames, WIZARD_NAMES);
randomNumber(wizardSurname, WIZARD_SURNAME);
randomNumber(wizardColor, WIZARD_COLOR);
randomNumber(wizardEyes, WIZARD_EYES);

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: WIZARD_NAMES[wizardNames[i]] + ' ' + WIZARD_SURNAME[wizardSurname[i]],
    coatColor: WIZARD_COLOR[wizardColor[i]],
    eyesColor: WIZARD_EYES[wizardEyes[i]],
  };
}

var renderWizard = function (value) {
  var wizardElement = wizardsTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = value.name;
  wizardElement.querySelector('.wizard-coat').style.fill = value.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = value.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
wizardsContent.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ! task 4

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
const userOpen = document.querySelector('.setup-open');
const userClose = userDialog.querySelector('.setup-close');
const userSetup = userDialog.querySelector('.setup-user-name');

userOpen.querySelector('.setup-open-icon').setAttribute('tabindex', '0');
userDialog.setAttribute('tabindex', '0');
userDialog.querySelector('.setup-wizard-form').setAttribute('action', 'https://js.dump.academy/code-and-magick');
userClose.setAttribute('tabindex', '0');
userSetup.setAttribute('tabindex', '0');
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
});
userClose.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE || evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.add('hidden');
  }
});
userDialog.addEventListener(
  'keydown',
  (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      userDialog.classList.add('hidden');
    }
  },
  true
);
userSetup.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    userDialog.classList.remove('hidden');
  }
});

const userCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
const userCoatInput = userDialog.querySelector('input[name="coat-color"]');

const userEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
const userEyesInput = userDialog.querySelector('input[name="eyes-color"]');

const userFireball = userDialog.querySelector('.setup-fireball-wrap');
const userFireballInput = userDialog.querySelector('input[name="fireball-color"]');

const WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

let getRandomColor = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
userCoat.addEventListener('click', () => {
  let newColor = WIZARD_COLOR[getRandomColor(0, WIZARD_COLOR.length - 1)];
  userCoat.style = `fill: ${newColor};`;
  userCoatInput.value = newColor;
});
userEyes.addEventListener('click', () => {
  let newColor = WIZARD_EYES[getRandomColor(0, WIZARD_EYES.length - 1)];
  userEyes.style = `fill: ${newColor};`;
  userEyesInput.value = newColor;
});
userFireball.addEventListener('click', () => {
  let newColor = WIZARD_FIREBALLS[getRandomColor(0, WIZARD_FIREBALLS.length - 1)];
  userFireball.style = `background: ${newColor};`;
  userFireballInput.value = newColor;
});
