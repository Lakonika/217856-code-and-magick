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

var WIZARD_FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var shuffle = function (array) {
  for (i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

var wizardNames = shuffle(WIZARD_NAMES);
var wizardSurnames = shuffle(WIZARD_SURNAMES);
var wizardCoatColor = shuffle(WIZARD_COAT_COLOR);
var wizardEyesColor = shuffle(WIZARD_EYES_COLOR);
var wizardFireballColor = shuffle(WIZARD_FIREBALL_COLOR);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var makeNewWizard = function () {
  var newMag = {};
  newMag.name = wizardNames[i] + ' ' + wizardSurnames[i];
  newMag.coatColor = wizardCoatColor[i];
  newMag.eyesColor = wizardEyesColor[i];
  newMag.eyesColor = wizardFireballColor[i];

  return newMag;
};

var wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  var newWizard = makeNewWizard();
  wizards.push(newWizard);
}

var getFireballColor = function () {
  wizardFireball.style.background = wizardFireballColor.splice(getRandomNumber(0, WIZARD_FIREBALL_COLOR.length));
};

var getCoatColor = function () {
  wizardCoat.style.fill = wizardCoatColor.splice(getRandomNumber(0, WIZARD_COAT_COLOR.length));
};

var getEyesColor = function () {
  wizardEyes.style.fill = wizardEyesColor.splice(getRandomNumber(0, WIZARD_EYES_COLOR.length));
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupSubmit = setup.querySelector('.setup-submit');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardFireball.addEventListener('click', function () {
  getFireballColor();
});

wizardCoat.addEventListener('click', function () {
  getCoatColor();
});

wizardEyes.addEventListener('click', function () {
  getEyesColor();
});
