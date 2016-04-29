var React = require('react');
var CurrentUserState = require("../mixins/current_user_state");
var SignUpForm = require ('./SignUpForm.jsx');
var UserActions = require("../actions/user_actions");
var LoginForm = require ('./LoginForm.jsx');
var GuestLogin = require ('./GuestLogin.jsx');
var LoginModal = require('./LoginModal.jsx');
var SignUpModal = require('./SignUpModal.jsx');
var SearchBar = require('./SearchBar.jsx');


var NavBarItem = React.createClass({
  mixins: [CurrentUserState],

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  loggedInRender: function(){
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
          </button>
        </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll">
                  <button type="button" value="logout" onClick={this.logout}
                    className="btn btn-primary btn-outline">
                    Log Out
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  },

  loggedOutRender: function(){
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <LoginModal/>
        </li>
        <li>
          <SignUpModal/>
        </li>
        <li>
          <GuestLogin/>
        </li>
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

module.exports = NavBarItem;
