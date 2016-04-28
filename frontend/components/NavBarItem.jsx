var React = require('react');
var CurrentUserState = require("../mixins/current_user_state");
var SignUpForm = require ('./SignUpForm.jsx');
var UserActions = require("../actions/user_actions");
var LoginForm = require ('./LoginForm.jsx');
var GuestLogin = require ('./GuestLogin.jsx');
var LoginModal = require('./LoginModal.jsx');
var SignUpModal = require('./SignUpModal.jsx');

var NavBarItem = React.createClass({
  mixins: [CurrentUserState],

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  loggedInRender: function(){
    return (
      <div>
        <h2>Hi, {this.state.currentUser.username}!</h2>
        <button
          type="submit" value="logout" onClick={this.logout}>
          Log Out
        </button>
      </div>
    );
  },

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    this.setState({username: "", password: ""});
  },

  render: function() {
    return (
      <div className="nav-bar-item">
        {this.state.currentUser ? this.loggedInRender() : <LoginModal/>}
        {this.state.currentUser ? <div></div> : <SignUpModal/> }
        {this.state.currentUser ? <div></div> : <GuestLogin/> }
      </div>
    );
  }
});

module.exports = NavBarItem;
