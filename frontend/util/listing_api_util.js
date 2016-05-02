var AppDispatcher = require('../dispatcher/dispatcher');
var ListingConstants = require('../constants/listing_constants.js');

var ListingApiUtil = {

  fetchListings: function (){
    $.ajax({
      url: "/api/listings",
      type: "get",
      success: function(listings){
        AppDispatcher.dispatch({
          actionType: ListingConstants.FETCHLISTINGS,
          listings: listings
        });
      },
      error: function(error){
        AppDispatcher.dispatch({
          actionType: ListingConstants.ERROR,
          errors: error.responseJSON.errors
        });
      }
    });
  },

  fetchListing: function (id){
    $.ajax({
      url: "/api/listings/" + id.toString(),
      type: "get",
      success: function(listing){

        AppDispatcher.dispatch({
          actionType: ListingConstants.FETCHLISTING,
          listing: listing
        });
      },
      error: function(error){
        AppDispatcher.dispatch({
          actionType: ListingConstants.ERROR,
          errors: error.responseJSON.errors
        });
      }
    });
  },

  filteredListings: function (filters){
    $.ajax({
      url: "/api/listings/",
      type: "get",
      data: {filters: filters},
      success: function(listings){
        AppDispatcher.dispatch({
          actionType: ListingConstants.FILTEREDLISTINGS,
          listings: listings
        });
      },
      error: function(error){
        AppDispatcher.dispatch({
          actionType: ListingConstants.ERROR,
          errors: error.responseJSON.errors
        });
      }
    });
  }

};

module.exports = ListingApiUtil;
