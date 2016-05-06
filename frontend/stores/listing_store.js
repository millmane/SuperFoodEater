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
      ListingStore.setListing(payload.listing);
      break;
    }
    ListingStore.__emitChange();
  };

ListingStore.resetListings = function(listings){
  _listings = {};
  Object.keys(listings).map (function (idx) {
    _listings[listings[idx].id] = listings[idx];
  });
};

ListingStore.setListing = function(listing){
  _listings[listing.id] = listing;
};

ListingStore.allListings = function(){
  var listings_copy = {};
  Object.keys(_listings).map (function (id) {
    listings_copy[id] = _listings[id];
  });
  return listings_copy;
};

ListingStore.findListing = function(id){
  return _listings[id];
  // return Object.assign({}, _listings[id]);
};

module.exports = ListingStore;
