var React = require('react');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var GuestLogin = require('./GuestLogin.jsx');

var UsernamePasswordForm = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return {form: "", password: "", username: ""};
  },

  setForm: function(e){
    this.setState({form: e.currentTarget.value});
  },

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
    this.setState({username: "", password: ""});
  },

  handleSubmit: function(e){
    e.preventDefault();
    UserActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({username: "", password: ""});
  },

  handleUsername: function(e){
    e.preventDefault();
    this.setState({username: e.currentTarget.value});
  },

  handlePassword: function(e){
    e.preventDefault();
    this.setState({password: e.currentTarget.value});
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <section>
          <label> Username:
            <input type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
          <br></br>

          <label> Password:
            <input type="text" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </section>

        <button type="submit" value="login" onClick={this.setForm}>Log In</button>
        <br></br>
        <button type="submit" value="signup" onClick={this.setForm}>Sign Up</button>
        <GuestLogin/>
      </form>
    );
  }

});

module.exports = UsernamePasswordForm;
