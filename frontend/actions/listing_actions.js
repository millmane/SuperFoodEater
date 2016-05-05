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

  receiveAll: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.FETCHLISTINGS,
      listings: listings
    });
  },

  fetchListingsFiltered: function(filters){
    
    ListingApiUtil.fetchListingsFiltered(filters, this.receiveAll);
  }
};

module.exports = ListingActions;
