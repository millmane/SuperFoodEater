var AppDispatcher = require('../dispatcher/dispatcher');

var UserApiUtil = {

  post: function(options){
    $.ajax({
      url: options.url,
      type: "post",
      data: {user: options.user},
      success: options.success,
      error: options.error
    });
  },

  logout: function(success, error){
    $.ajax({
      url: '/api/session',
      method: 'delete',
      success: success,
      error: error
    });
  },

  // fetchCurrentUser: function(success, error){
    fetchCurrentUser: function(success) {
    $.ajax({
      url: '/api/session',
      method: 'get',
      success: function(object){
        if (object.username) {
          success(object);
        }},

        // } else {
        //   error(object);
        // }}
      // error: error
    });
  },

};

module.exports = UserApiUtil;