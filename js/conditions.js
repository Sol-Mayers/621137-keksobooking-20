'use strict';

(function () {
  var disableFieldsets = function () {
    document.querySelectorAll('fieldset').forEach(function (element) {
      element.setAttribute('disabled', 'disabled');
    });
  };
  disableFieldsets();

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adress = document.querySelector('#address');

  var mainAdress = function () {
    adress.value = 'X:' + (parseInt(mainPin.style.left, 10) + 156 / 2) + ' Y:' + (parseInt(mainPin.style.top, 10) + 156 / 2);
  };
  mainAdress();

  mainPin.addEventListener('mousedown', function (touch) {
    if (touch.which === 1) {
      window.suggestions.map.classList.remove('map--faded');
      window.load(onSuccess, onError);
      //window.pins.createSetOfItems(window.pins.setOfSuggestions);
      //window.pins.mapItems.appendChild(window.pins.fragment);
      var activeAdress = function () {
        adress.value = 'X:' + (parseInt(mainPin.style.left, 10) + 156 / 2) + ' Y:' + (parseInt(mainPin.style.top, 10) + (156 / 2) + 47);
      };
      var enableFieldsets = function () {
        document.querySelectorAll('fieldset').forEach(function (element) {
          element.removeAttribute('disabled', 'disabled');
        });
      };
      enableFieldsets();
      activeAdress();
      adForm.classList.remove('ad-form--disabled');
    }
  });

  mainPin.addEventListener('keydown', function (keyTouch) {
    if (keyTouch.keyCode === 13) {
      window.suggestions.map.classList.remove('map--faded');
      window.load(onSuccess, onError);
      //window.pins.createSetOfItems(window.pins.setOfSuggestions);
      //window.pins.mapItems.appendChild(window.pins.fragment);
      var enableFieldsets = function () {
        document.querySelectorAll('fieldset').forEach(function (element) {
          element.removeAttribute('disabled', 'disabled');
        });
      };
      enableFieldsets();
      adForm.classList.remove('ad-form--disabled');
    }
  });
})();
