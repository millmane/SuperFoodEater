var UserConstants = require('../constants/user_constants.js');
var UserApiUtil = require('../util/user_api_util.js');
var UserStore = require('../stores/user_store.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserActions = {

  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
  },

  login: function(user){
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  logout: function(){
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  },

  // create: function(user){
  //   UserApiUtil.create(UserActions.createUser, UserActions.handleError);
  // },
  //
  // destroy: function (user){
  //   UserApiUtil.destroy(UserActions.destroyUser, UserActions.handleError);
  // },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser: function (){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT,
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }


};

module.exports = UserActions;
