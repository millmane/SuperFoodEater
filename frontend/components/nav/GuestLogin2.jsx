var React = require('react');
var UserActions = require("../../actions/user_actions");
var GuestLogin2 = React.createClass({

  getInitialState: function(){
    return {password: "", username: ""};
  },

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    // this.setState({username: "", password: ""});
  },

  render: function(){


    var styling;
    var liStyling;

    if (this.props.loginform === "true") {
      styling =  "btn btn-login-form btn-outline";
      liStyling = "login-li";
    } else {
      styling =  "btn btn-primary btn-outline";
    }

    return(
      <li className={liStyling}>
        <button type="button" className={styling} value="guestLogin" onClick={this.guestLogin}>
          Guest Login
        </button>
      </li>
    );
  }

});

module.exports = GuestLogin2;
