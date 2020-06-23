//'use strict';

var setOfAvatars = [01, 02, 03, 04, 05, 06, 07, 08];

var getAvatar = function () {
  var author = setOfAvatars[Math.floor(Math.random() * setOfAvatars.length)];
  var avatar = 'img/avatars/user' + author + '.png';
  return avatar;
};

var map = document.querySelector('.map');

var getRandomX = function (min, max) {
  min = Math.ceil(0);
  max = Math.floor(map.style.width + 1);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomY = function (min, max) {
  min = Math.ceil(130);
  max = Math.floor(630);
  return Math.floor(Math.random() * (max - min)) + min;
};

var locationOfBuilding = {
  x: getRandomX(),
  y: getRandomY(),
};

var typeOfBuilding = ["palace", "flat", "house", "bungalo"];

var checkinTime = ["12:00", "13:00", "14:00"];

var checkoutTime = ["12:00", "13:00", "14:00"];

var featuresOfBuilding = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

var photosOfBuilding = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
  ];

var offer = function () {
  var showOffer = {
    avatar: getAvatar(),
    title: "Двухэтажный дом",
    address: [locationOfBuilding.x, locationOfBuilding.y],
    price: 500,
    type: typeOfBuilding[Math.floor(Math.random() * typeOfBuilding.length)],
    rooms: 5,
    guests: 10,
    checkin: checkinTime[Math.floor(Math.random() * checkinTime.length)],
    checkout: checkoutTime[Math.floor(Math.random() * checkoutTime.length)],
    features: featuresOfBuilding[Math.floor(Math.random() * featuresOfBuilding.length)],
    description: "Двухэтажный дом из красного кирпича с большой верандой и бассейном",
    photos: photosOfBuilding[Math.floor(Math.random() * photosOfBuilding.length)],
    location: locationOfBuilding,
  };
  return showOffer;
};

var mapItems = document.querySelector('.map__pins');
var itemWidth = 40;
var itemHeight = 44;
var suggestionNumber = 8;
var setOfSuggestions = [];

var createItem = function (suggestion) {
  var pin = itemTemplate.cloneNode(true);
  var avatar = pin.querySelector('img');
  var vertical = suggestion.location.y - itemHeight / 2;
  var horizontal = suggestion.location.x - itemWidth / 2;
  pin.style.left = horizontal + 'px';
  pin.style.top = vertical + 'px';
  avatar.src = suggestion.author.avatar;
  avatar.alt = suggestion.offer.title;

  return pin;
};

setOfSuggestions = offer(suggestionNumber);

var itemTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var fragment = document.createDocumentFragment();

var createSetOfItems = function (mySuggestions) {
  for (var i = 0; i < mySuggestions.length; i++) {
    fragment.appendChild(createItem(mySuggestions[i]));
  }
};

createSetOfItems(setOfSuggestions);

mapItems.appendChild(fragment);
