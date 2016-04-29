var AppDispatcher = require('../dispatcher/dispatcher');

var ListingApiUtil = {

  fetchListings: function (){
    $.ajax({
      url: "/api/listings",
      type: "get",
      success: function(){
        AppDispatcher.dispatch({
          actionType: ListingConstants.FETCHLISTINGS,
          listing: listing
        });
      },
      error: function(){
        AppDispatcher.dispatch({
          actionType: ListingConstants.ERROR,
          errors: error.responseJSON.errors
        });
      }
    });
  }

};
