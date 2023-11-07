'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
