var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ListingConstants = require('../constants/listing_constants');

var ListingStore = new Store(AppDispatcher);

var _listings

ListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.FETCHLISTINGS,
      ListingStore.resetListings();
      break;
    }
    ListingStore.__emitChange();
  };

ListingStore.resetListings = function(){

}

  module.exports = ListingStore
