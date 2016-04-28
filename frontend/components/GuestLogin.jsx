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
      <button type="button" className="btn btn-info btn-lg" value="guestLogin" onClick={this.guestLogin}>
        Guest Login
      </button>
    );
  }

});

module.exports = GuestLogin;
