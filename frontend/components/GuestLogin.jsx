var React = require('react');
var UserActions = require("../actions/user_actions");


var GuestLogin = React.createClass({

  getInitialState: function(){
    return {password: "", username: ""};
  },

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    // this.setState({username: "", password: ""});
  },

  render: function(){
    return(
      <a className="page-scroll">
        <button type="button" className="btn btn-primary btn-outline" value="guestLogin" onClick={this.guestLogin}>
          Guest Login
        </button>
      </a>
    );
  }

});

module.exports = GuestLogin;
