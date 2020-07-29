'use strict';

(function () {
  var mapItems = document.querySelector('.map__pins');
  var ITEM_WIDTH = 40;
  var ITEM_HEIGHT = 44;

  var createItem = function (suggestion) {
    var pin = itemTemplate.cloneNode(true);
    var avatar = pin.querySelector('img');
    var vertical = suggestion.location.y - ITEM_HEIGHT / 2;
    var horizontal = suggestion.location.x - ITEM_WIDTH / 2;
    pin.style.left = horizontal + 'px';
    pin.style.top = vertical + 'px';
    avatar.src = suggestion.author.avatar;
    avatar.alt = window.suggestions.offer.title;

    return pin;
  };

  var itemTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var fragment = document.createDocumentFragment();

  var createSetOfItems = function (mySuggestions) {
    for (var i = 0; i < 5; i++) {
      var item = createItem(mySuggestions[i]);
      fragment.appendChild(item);
    }
  };
  var createPins = function (mySuggestions) {
    createSetOfItems(mySuggestions);
    mapItems.appendChild(fragment);
  };

  window.pins = {
    createPins: createPins
  };
})();
