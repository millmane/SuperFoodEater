var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _currentUser, _authErrors;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN:
      UserStore.login(payload.user);
      break;
    case UserConstants.LOGOUT:
      UserStore.logout();
      break;
    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      break;
    }
    UserStore.__emitChange();
  };

  UserStore.login = function(user){
    _currentUser = user;
    _authErrors = null;
  };

  UserStore.logout = function(){
    _currentUser = undefined;
    _authErrors = null;
  };

  UserStore.setErrors = function(errors){
    _authErrors = errors;
  };

  UserStore.currentUser = function(){
    if (_currentUser) {
      return $.extend({}, _currentUser);
    }
  };

  UserStore.errors = function(){
    if (_authErrors){
      return [].slice.call(_authErrors);
    }
  };

  module.exports = UserStore;
