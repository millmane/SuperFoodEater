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
    case UserConstants.LOGIN:
      UserStore.logout();
      break;
    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      break;
    }
    UserStore.__emitChange();
  };

  UserStore.login = function(user){
    _current_user = user;
    _errors = null;
  };

  UserStore.logout = function(){
    _currentUser = null;
    _errors = null;
  };

  UserStore.setErrors = function(errors){
    _errors = errors;
  };

  UserStore.currentUser = function(){
    if (_current_user) {
      return $.extend({}, _currentUser);
    }
  };

  UserStore.errors = function(){
    if (_errors){
      return [].slice.call(_errors);
    }
  };

  module.exports = UserStore;
