//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Modal = require('react-modal');

//Components
var NavBar = require('./components/NavBar.jsx');
var Logo = require('./components/Logo.jsx');
var Search = require('./components/Search');
var LoginForm = require('./components/LoginForm');
// var UsernamePasswordForm = require('./components/UsernamePasswordForm');
var LandingBackground = require('./components/LandingBackground');
// var ListingForm = require('./components/ListingForm');
// var ListingShow = require('./components/ListingShow');
//Mixins
var CurrentUserState = require('./mixins/current_user_state');
// <LoginModal/>

// Modal.setAppElement( document.getElementById('content'));

var UserApiUtil = require('./util/user_api_util.js');
var UserStore = require('./stores/user_store.js');
var UserActions = require('./actions/user_actions.js');

if (typeof UserStore.currentUser() === 'undefined') {
  UserActions.fetchCurrentUser();
}

var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar/>
        <div className="landing-background"></div>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var appElement = document.getElementById('content');
  Modal.setAppElement(appElement);
  var root = appElement;
  ReactDOM.render(Router, root);
});
