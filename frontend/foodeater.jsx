//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var Search = require('./components/Search');
// var ListingForm = require('./components/ListingForm');
// var ListingShow = require('./components/ListingShow');
var LoginForm = require('./components/LoginForm');
//Mixins
var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header><h1>foodeater!</h1></header>
        <LoginForm/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
