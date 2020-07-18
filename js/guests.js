'use strict';

(function () {
  var ONE_ROOM = '1';
  var TWO_ROOMS = '2';
  var THREE_ROOMS = '3';
  var HUNDRED_ROOMS = '100';
  var roomsNumber = document.querySelector('#room_number');
  var guestsNumber = document.querySelector('#capacity');
  var guestNumber3 = guestsNumber.options[0];
  var guestNumber2 = guestsNumber.options[1];
  var guestNumber1 = guestsNumber.options[2];
  var guestNumber0 = guestsNumber.options[3];

  guestNumber3.setAttribute('disabled', 'disabled');
  guestNumber2.setAttribute('disabled', 'disabled');
  guestNumber0.setAttribute('disabled', 'disabled');
  var beginingShow = [guestNumber3, guestNumber2, guestNumber0];

  for (var i = 0; i < beginingShow.length; i++) {
    beginingShow[i].setAttribute('disabled', 'disabled');
  }

  roomsNumber.addEventListener('change', function () {
    switch (roomsNumber.value) {
      case ONE_ROOM:
        guestNumber3.setAttribute('disabled', 'disabled');
        guestNumber2.setAttribute('disabled', 'disabled');
        guestNumber1.removeAttribute('disabled');
        guestNumber0.setAttribute('disabled', 'disabled');
        break;
      case TWO_ROOMS:
        guestNumber3.setAttribute('disabled', 'disabled');
        guestNumber0.setAttribute('disabled', 'disabled');
        guestNumber2.removeAttribute('disabled');
        guestNumber1.removeAttribute('disabled');
        break;
      case THREE_ROOMS:
        guestNumber3.removeAttribute('disabled');
        guestNumber0.setAttribute('disabled', 'disabled');
        guestNumber2.removeAttribute('disabled');
        guestNumber1.removeAttribute('disabled');
        break;
      case HUNDRED_ROOMS:
        guestNumber3.setAttribute('disabled', 'disabled');
        guestNumber0.removeAttribute('disabled');
        guestNumber1.setAttribute('disabled', 'disabled');
        guestNumber2.setAttribute('disabled', 'disabled');
        break;
    }
  });

  var onInputCheckRoom = function () {
    roomsNumber.setCustomValidity('');
    switch (roomsNumber.value) {
      case ONE_ROOM:
        if (guestsNumber.value !== guestNumber1.value) {
          roomsNumber.setCustomValidity('Неверное количество комнат');
        }
        break;
      case TWO_ROOMS:
        if (guestsNumber.value !== guestNumber1.value && guestsNumber.value !== guestNumber2.value) {
          roomsNumber.setCustomValidity('Неверное количество комнат');
        }
        break;
      case THREE_ROOMS:
        if (guestsNumber.value !== guestNumber1.value && guestsNumber.value !== guestNumber2.value && guestsNumber.value !== guestNumber3.value) {
          roomsNumber.setCustomValidity('Неверное количество комнат');
        }
        break;
      case HUNDRED_ROOMS:
        if (guestsNumber.value !== guestNumber0.value) {
          roomsNumber.setCustomValidity('Неверное количество комнат');
        }
        break;
    }
  };

  roomsNumber.addEventListener('input', onInputCheckRoom);
  guestsNumber.addEventListener('input', onInputCheckRoom);
})();
