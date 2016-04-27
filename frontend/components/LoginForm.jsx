var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

var LoginForm = React.createClass({
	mixins: [CurrentUserState],
	getInitialState: function(){
		return {form: "", username: ""};
	},

	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},

	handleSubmit: function(e){
		e.preventDefault();
		UserActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});

    this.setState({username: "", password: ""});
	},

	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},

	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},

	form: function(){
		if (this.state.currentUser) {
			return;
		}

    //TO REMOVE ERROR, SET VALUE="" ON USERNAME/PASSWORD INPUTS
		return(
			<form onSubmit={this.handleSubmit}>
        <section>
					<label> Username:
						<input type="text" value={this.state.username} onChange={this.handleUsername}/>
					</label>

					<label> Password:
						<input type="password" value={this.state.password} onChange={this.handlePassword}/>
					</label>
				</section>

				<section>
					<label> Login
						<input type="Radio" name="action" value="login" onChange={this.setForm}/>
					</label>

					<label> Sign Up
						<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
					</label>
				</section>

				<input type="submit" value="Submit"/>
        <button type="submit" value="guestLogin" onClick={this.guestLogin}>Guest Login</button>

			</form>
		);
	},

  guestLogin: function(e){
    e.preventDefault();
    UserActions.guestLogin();
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
		return (
			<div id="login-form">
        <h5>LoginForm Render</h5>
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
