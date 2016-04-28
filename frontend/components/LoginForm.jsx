	var React = require("react");
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require('react-modal');
var GuestLogin = require ('./GuestLogin.jsx');
var UsernamePasswordForm = require('./UsernamePasswordForm');
var SignUpModal = require('./SignUpModal.jsx');


var LoginForm = React.createClass({
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

	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
        <button type="submit" value="logout" onClick={this.logout}>Log Out</button>
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
			this.state.userErrors.map(function(el){
				return (<li key={el + 1}>{el}</li>);
			})
			// Object.keys(this.state.userErrors).map(function(key, i){
			// 	return (<li key={i}>{self.state.userErrors[key]}</li>);
			// })
		}
		</ul>);
	},

	form: function(){
		if (this.state.currentUser) {
			return;
		}

    var customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

		return(
      <div className="nav-bar-item">
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
					<SignUpModal/>
					<GuestLogin/>
				</form>
        {this.errors()}

      </div>
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
    		{this.greeting()}
    		{this.form()}
    	</div>
    );
		// return (
		// 	<div id="login-form">
    //     <h5>LoginForm Render</h5>
		// 		{this.greeting()}
		// 		{this.errors()}
		// 		{this.form()}
		// 	</div>
		// );
	}
});

module.exports = LoginForm;