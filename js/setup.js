'use strict';
(function () {

  var WIZARDS_COUNT = 4;

  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var WIZARD_COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

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

  var wizardNames = window.shuffle(WIZARD_NAMES);
  var wizardSurnames = window.shuffle(WIZARD_SURNAMES);
  var wizardCoatColor = window.shuffle(WIZARD_COAT_COLOR);
  var wizardEyesColor = window.shuffle(WIZARD_EYES_COLOR);
  var wizardFireballColor = window.shuffle(WIZARD_FIREBALL_COLOR);

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardSetup = document.querySelector('.setup-player');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardFireball = wizardSetup.querySelector('.setup-fireball-wrap');

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
    wizardFireball.style.background = wizardFireballColor[window.getRandomNumber(0, WIZARD_FIREBALL_COLOR.length - 1)];
  };

  var getCoatColor = function () {
    wizardCoat.style.fill = wizardCoatColor[window.getRandomNumber(0, WIZARD_COAT_COLOR.length - 1)];
  };

  var getEyesColor = function () {
    wizardEyes.style.fill = wizardEyesColor[window.getRandomNumber(0, WIZARD_EYES_COLOR.length - 1)];
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

  wizardFireball.addEventListener('click', function () {
    getFireballColor();
  });

  wizardCoat.addEventListener('click', function () {
    getCoatColor();
  });

  wizardEyes.addEventListener('click', function () {
    getEyesColor();
  });

})();
