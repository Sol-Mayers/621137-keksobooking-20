'use strict';

var SET_OF_AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
var ONE_ROOM = '1';
var TWO_ROOMS = '2';
var THREE_ROOMS = '3';
var HUNDRED_ROOMS = '100';

var getAvatar = function () {
  var author = SET_OF_AVATARS[Math.floor(Math.random() * SET_OF_AVATARS.length)];
  var avatar = 'img/avatars/user' + author + '.png';
  return avatar;
};

var map = document.querySelector('.map');

var getRandomX = function (min, max) {
  min = 0;
  max = Math.floor(map.clientWidth + 1);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomY = function (min, max) {
  min = Math.ceil(130);
  max = Math.floor(630);
  return Math.floor(Math.random() * (max - min)) + min;
};

var TYPE_OF_BUILDING = ['palace', 'flat', 'house', 'bungalo'];

var CHECKIN_TIME = ['12:00', '13:00', '14:00'];

var CHECKOUT_TIME = ['12:00', '13:00', '14:00'];

var FEATURES_OF_BUILDING = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var PHOTOS_OF_BUILDING = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var offer = function (count) {
  var array = [];
  for (var i = 0; i < count; i++) {
    var locationOfBuilding = {
      x: getRandomX(),
      y: getRandomY(),
    };
    var showOffer = {
      author: {
        avatar: getAvatar(),
      },
      offer: {
        title: 'Двухэтажный дом',
        address: [locationOfBuilding.x, locationOfBuilding.y],
        price: 500,
        type: TYPE_OF_BUILDING[Math.floor(Math.random() * TYPE_OF_BUILDING.length)],
        rooms: 5,
        guests: 10,
        checkin: CHECKIN_TIME[Math.floor(Math.random() * CHECKIN_TIME.length)],
        checkout: CHECKOUT_TIME[Math.floor(Math.random() * CHECKOUT_TIME.length)],
        features: FEATURES_OF_BUILDING[Math.floor(Math.random() * FEATURES_OF_BUILDING.length)],
        description: 'Двухэтажный дом из красного кирпича с большой верандой и бассейном',
        photos: PHOTOS_OF_BUILDING[Math.floor(Math.random() * PHOTOS_OF_BUILDING.length)],
      },
      location: locationOfBuilding,
    };

    array.push(showOffer);
  }
  return array;
};

var mapItems = document.querySelector('.map__pins');
var ITEM_WIDTH = 40;
var ITEM_HEIGHT = 44;
var SUGGESTION_NUMBER = 8;

var createItem = function (suggestion) {
  var pin = itemTemplate.cloneNode(true);
  var avatar = pin.querySelector('img');
  var vertical = suggestion.location.y - ITEM_HEIGHT / 2;
  var horizontal = suggestion.location.x - ITEM_WIDTH / 2;
  pin.style.left = horizontal + 'px';
  pin.style.top = vertical + 'px';
  avatar.src = suggestion.author.avatar;
  avatar.alt = suggestion.offer.title;

  return pin;
};

var setOfSuggestions = offer(SUGGESTION_NUMBER);

var itemTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var fragment = document.createDocumentFragment();

var createSetOfItems = function (mySuggestions) {
  for (var i = 0; i < mySuggestions.length; i++) {
    var item = createItem(mySuggestions[i]);
    fragment.appendChild(item);
  }
};

var disableFieldsets = function () {
  document.querySelectorAll('fieldset').forEach(function (element) {
    element.setAttribute('disabled', 'disabled');
  });
};
disableFieldsets();
/*
var disableFieldsets = function () {
  [...document.getElementsByTagName('fieldset')].forEach(i => i.setAttribute('disabled', 'disabled'));
}

disableFieldsets();
*/
var mainPin = document.querySelector('.map__pin--main');
var adForm = document.querySelector('.ad-form');
var adress = document.querySelector('#address');

var mainAdress = function () {
  adress.value = 'X:' + parseInt(mainPin.style.left, 10) + ' Y:' + parseInt(mainPin.style.top, 10);
// проработать правильное отображение координат за вычетом размеров метки!!!
};
mainAdress();

mainPin.addEventListener('mousedown', function (touch) {
  if (touch.which === 1) {
    map.classList.remove('map--faded');
    createSetOfItems(setOfSuggestions);
    mapItems.appendChild(fragment);
    var enableFieldsets = function () {
      document.querySelectorAll('fieldset').forEach(function (element) {
        element.removeAttribute('disabled', 'disabled');
      });
    };
    enableFieldsets();
    adForm.classList.remove('ad-form--disabled');
  }
});

mainPin.addEventListener('keydown', function (keyTouch) {
  if (keyTouch.keyCode === 13) {
    map.classList.remove('map--faded');
    createSetOfItems(setOfSuggestions);
    mapItems.appendChild(fragment);
    var enableFieldsets = function () {
      document.querySelectorAll('fieldset').forEach(function (element) {
        element.removeAttribute('disabled', 'disabled');
      });
    };
    enableFieldsets();
    adForm.classList.remove('ad-form--disabled');
  }
});

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
// Проблема с циклом выше. Почему не получается?

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
