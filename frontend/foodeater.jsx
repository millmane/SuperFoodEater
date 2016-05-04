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
var NavBar2 = require('./components/nav/NavBar2.jsx');

var Logo = require('./components/Logo.jsx');
var SearchBar = require('./components/SearchBar');
var LoginForm = require('./components/LoginForm');
var ListingSearch2 = require('./components/listings/ListingSearch2.jsx');
var ListingIndexItem = require('./components/listings/ListingIndexItem');
var ListingDetail = require('./components/listings/ListingDetail.jsx');
var LandingPage = require('./components/landing_page/LandingPage.jsx');

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

 // className="landing-background"
 // <NavBar/>
 // <LandingPage/>
//       <NavBar/>

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

//LandingPage - background image, searchbar component
//ListingSearch - Have Navbar from IndexRoute, Filter, Index, Map
//ListingDetail - Have Navbar from IndexRoute, ImageGalleryThing, Details
var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="listings" component={ListingSearch2}/>
      <Route path="listings/:listing_id" component={ListingDetail}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var appElement = document.getElementById('content');
  Modal.setAppElement(appElement);
  var root = appElement;
  ReactDOM.render(Router, root);
});
