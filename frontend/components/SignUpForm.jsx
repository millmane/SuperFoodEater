var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require('react-modal');
var GuestLogin = require ('./GuestLogin.jsx');
var UsernamePasswordForm = require('./UsernamePasswordForm');
var SignUpModalLogin = require('./SignUpModalLogin.jsx');
var GuestLoginLogin = require('./GuestLoginLogin.jsx');


var SignUpForm = React.createClass({
	mixins: [CurrentUserState],

	getInitialState: function(){
		return {form: "", password: "", username: ""};
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

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (<ul>
    {
      this.state.userErrors.map(function(el){
        return (<li key={el + 1}>{el}</li>);
      })
      // Object.keys(this.state.userErrors).map(function(key, i){
      // 	return (<li key={i}>{self.state.userErrors[key]}</li>);
      // })
    }
    </ul>);
  },

	// errors: function(){
	// 	if (!this.state.userErrors){
	// 		return;
	// 	}
	// 	var self = this;
	// 	return (<ul>
	// 	{
	// 		Object.keys(this.state.userErrors).map(function(key, i){
	// 			return (<li key={i}>{self.state.userErrors[key]}</li>);
	// 		})
	// 	}
	// 	</ul>);
	// },

	form: function(){
		if (this.state.currentUser) {
			return;
		}

		return(
			<div className="login-text">
				<h2>Create an Account!</h2>

				<hr className="smaller-hr"></hr>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" id="Username"
							 placeholder="Username" onChange={this.handleUsername}
							 value={this.state.username}>
						</input>
					</div>

					<div class="form-groups">
						<input type="password" className="form-control" id="Password"
							placeholder="Password" onChange={this.handlePassword}
							value={this.state.password}>
						</input>
					</div>

					<hr className="smaller-hr"></hr>

					<button type="submit" className="btn btn-success btn-block btn-login-form-login"
						value="signup" onClick={this.setForm}>
						Sign Up
					</button>
					<hr className="smaller-hr"></hr>
					<label>Don't want to sign in?</label>
					<GuestLoginLogin/>
				</form>
				{this.errors()}

			</div>
		);
	},

	// <div>
	// 	<form onSubmit={this.handleSubmit}>
	// 		<section>
	// 			<label> Username:
	// 				<input type="text" value={this.state.username} onChange={this.handleUsername}/>
	// 			</label>
	// 			<br></br>
	//
	// 			<label> Password:
	// 				<input type="text" value={this.state.password} onChange={this.handlePassword}/>
	// 			</label>
	// 		</section>
	//
	// 		<button type="submit" value="signup" onClick={this.setForm}>Sign Up</button>
	// 		<GuestLogin/>
	// 	</form>
	// 	{this.errors()}
	// </div>

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
				{this.form()}
			</div>
		);
	}
});

module.exports = SignUpForm;
