'use strict';

const userDialog = document.querySelector('.setup');
const userSubmit = userDialog.querySelector('.setup-submit');
userSubmit.setAttribute('type', 'submit');
const userForm = userDialog.querySelector('.setup-wizard-form');

const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const wizardsContent = userDialog.querySelector('.setup-similar-list');

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

const wizardNames = [];
const wizardSurname = [];
const wizardColor = [];
const wizardEyes = [];

// const randomNumber = (myArray, bigArray) => {
//   let checkNumber = true;
//   do {
//     end: for (let i = 0; i < 4; i++) {
//       myArray[i] = Math.floor(Math.random() * (bigArray.length - 1 - 0 + 1) + 0);

//       if (i === 3) {
//         checkNumber = true;
//         for (let j = 0; j < 4; j++) {
//           for (let k = j + 1; k < 4; k++) {
//             if (myArray[j] === myArray[k]) {
//               checkNumber = false;
//               break end;
//             }
//           }
//         }
//       }
//     }
//   } while (checkNumber === false);
// };

// randomNumber(wizardNames, WIZARD_NAMES);
// randomNumber(wizardSurname, WIZARD_SURNAME);
// randomNumber(wizardColor, WIZARD_COLOR);
// randomNumber(wizardEyes, WIZARD_EYES);

// const wizards = [];

// for (let i = 0; i < 4; i++) {
//   wizards[i] = {
//     name: WIZARD_NAMES[wizardNames[i]] + ' ' + WIZARD_SURNAME[wizardSurname[i]],
//     coatColor: WIZARD_COLOR[wizardColor[i]],
//     eyesColor: WIZARD_EYES[wizardEyes[i]],
//   };
// }

// const renderWizard = function (value) {
//   let wizardElement = wizardsTemplate.cloneNode(true);

//   wizardElement.querySelector('.setup-similar-label').textContent = value.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = value.coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = value.eyesColor;

//   return wizardElement;
// };

// const fragment = document.createDocumentFragment();
// for (let i = 0; i < wizards.length; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }
// wizardsContent.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
