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
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
     </div>

    );
  }
});

module.exports = NavBarItem;

// <ul className="nav navbar-nav navbar-right">
//   {this.state.currentUser ? this.loggedInRender() : <li><LoginModal/></li>}
//   {this.state.currentUser ? "" : <li><SignUpModal/></li> }
//   {this.state.currentUser ? "" : <li><GuestLogin/></li> }
// </ul>
