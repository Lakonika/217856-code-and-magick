'use strict';

(function () {

  window.fireballSize = 22;
  window.wizardSpeed = 3;
  var wizardWidth = 70;

  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };

  window.getWizardHeight = function () {
    return 1.337 * wizardWidth;
  };

  window.getWizardX = function (width) {
    return width / 2 - wizardWidth / 2;
  };

  window.getWizardY = function (height) {
    return height / 3;
  };

})();
