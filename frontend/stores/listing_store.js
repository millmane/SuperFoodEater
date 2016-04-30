var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ListingConstants = require('../constants/listing_constants');

var ListingStore = new Store(AppDispatcher);

var _listings = {};

ListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.FETCHLISTINGS:
      ListingStore.resetListings(payload.listings);
      break;
    case ListingConstants.FETCHLISTING:
      listings.push(payload.listing);
      break;
    }
    ListingStore.__emitChange();
  };

ListingStore.resetListings = function(listings){
  _listings = {};
  Object.keys(listings).map (function (id) {
    _listings[id] = listings[id];
  });
};

ListingStore.allListings = function(){
  var listings_copy = {};
  Object.keys(_listings).map (function (id) {
    listings_copy[id] = _listings[id];
  });
  return listings_copy;
};

module.exports = ListingStore;
