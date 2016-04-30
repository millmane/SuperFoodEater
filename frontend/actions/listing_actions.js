var ListingConstants = require('../constants/listing_constants.js');
var ListingApiUtil = require('../util/listing_api_util.js');
var ListingStore = require('../stores/listing_store.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var ListingActions = {

  fetchListings: function(){
    ListingApiUtil.fetchListings();
  },

  fetchListing: function(id){
    ListingApiUtil.fetchListing(id);
  },

};

module.exports = ListingActions;
