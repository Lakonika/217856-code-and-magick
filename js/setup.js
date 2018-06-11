'use strict';

var WIZARDS_COUNT = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardNames = shuffle(WIZARD_NAMES);
var wizardSurnames = shuffle(WIZARD_SURNAMES);
var wizardCoatColor = shuffle(WIZARD_COAT_COLOR);
var wizardEyesColor = shuffle(WIZARD_EYES_COLOR);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardCoat = document.querySelector('.wizard-coat');

var wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  var newWizard = makeNewWizard();
  wizards.push(newWizard);
}

function getCoatColor() {
  wizardCoat.style.fill = wizardCoatColor.splice(getRandomNumber(0, WIZARD_COAT_COLOR.length));
}

function getEyesColor() {
  wizardEyes.style.fill = wizardEyesColor.splice(getRandomNumber(0, WIZARD_EYES_COLOR.length));
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function makeNewWizard() {
  var newMag = {};
  newMag.name = wizardNames[i] + ' ' + wizardSurnames[i];
  newMag.coatColor = wizardCoatColor[i];
  newMag.eyesColor = wizardEyesColor[i];

  return newMag;
}

var fragment = document.createDocumentFragment();
for (i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
