'use strict';

(function () {
  var SET_OF_AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];

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
  window.suggestions = {
    map: map,
    offer: offer,
  };
})();
