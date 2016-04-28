var React = require('react');
var UserStore = require('../stores/user_store.js');
var Logo = require('./Logo.jsx');
var LoginForm = require ('./LoginForm.jsx');
var SignUpForm = require ('./SignUpForm.jsx');
var CurrentUserState = require("../mixins/current_user_state");
var NavBarItem = require('./NavBarItem.jsx');
var UserActions = require("../actions/user_actions");


var NavBar = React.createClass({
mixins: [CurrentUserState],
  getInitialState: function(){
    // return {loginStatus: UserStore.loginStatus()};
  },

  // componentDidMount: function(){
  //   userListener = UserStore.addListener(this.changeLoginStatus);
  // },
  //
  // changeLoginStatus: function(){
  //   this.setState({loginStatus: UserStore.loginStatus()});
  // },
  //
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

  render: function () {
    return (
      <nav className="navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Logo/>
          </div>
          <div className="collapse navbar-collapse">
              <NavBarItem/>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = NavBar;
