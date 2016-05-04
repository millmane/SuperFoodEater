var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var SignUpForm = require ('../SignUpForm.jsx');
var UserActions = require("../../actions/user_actions");
var LoginForm = require ('../LoginForm.jsx');
var GuestLogin2 = require ('./GuestLogin2.jsx');
var LoginModal2 = require('./LoginModal2.jsx');
var SignUpModal2 = require('./SignUpModal2.jsx');
var SearchBar = require('../SearchBar.jsx');


var AuthButtons = React.createClass({
  mixins: [CurrentUserState],

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  loggedInRender: function(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <button type="button" value="logout" onClick={this.logout}
          className="btn btn-primary btn-outline">
          Log Out
        </button>
      </ul>
    );
  },

  loggedOutRender: function(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <LoginModal2/>
        <SignUpModal2/>
        <GuestLogin2/>
      </ul>

    );
  },


  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    this.setState({username: "", password: ""});
  },

  render: function() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        {this.state.currentUser ? this.loggedInRender() : this.loggedOutRender()}
      </div>
    );
  }
});

module.exports = AuthButtons;
