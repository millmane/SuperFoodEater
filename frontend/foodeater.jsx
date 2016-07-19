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
var NavBar2 = require('./components/nav/NavBar2.jsx');
var ListingSearch2 = require('./components/listings/ListingSearch2.jsx');
var ListingDetail2 = require('./components/listings/ListingDetail2.jsx');
var LandingPage = require('./components/landing_page/LandingPage.jsx');
var UserDetail = require('./components/users/UserDetail.jsx');

//Mixins
var CurrentUserState = require('./mixins/current_user_state');

var UserApiUtil = require('./util/user_api_util.js');
var UserStore = require('./stores/user_store.js');
var UserActions = require('./actions/user_actions.js');

if (typeof UserStore.currentUser() === 'undefined') {
  UserActions.fetchCurrentUser();
}

var App = React.createClass({

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <div>
        <NavBar2/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="listings" component={ListingSearch2}/>
      <Route path="listings/:listing_id" component={ListingDetail2}/>
      <Route path="user" component={UserDetail}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var appElement = document.getElementById('content');
  Modal.setAppElement(appElement);
  var root = appElement;
  ReactDOM.render(Router, root);
});
