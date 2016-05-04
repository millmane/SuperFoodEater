var React = require('react');
var ReactRouter = require('react-router');

var UserStore = require('../stores/user_store.js');
var Logo = require('./Logo.jsx');
var LoginForm = require ('./LoginForm.jsx');
var SignUpForm = require ('./SignUpForm.jsx');
var CurrentUserState = require("../mixins/current_user_state");
var NavBarItem = require('./NavBarItem.jsx');
var UserActions = require("../actions/user_actions");


var NavBar = React.createClass({
mixins: [CurrentUserState],
  getInitialState: function(){
    // return {loginStatus: UserStore.loginStatus()};
  },

  // componentDidMount: function(){
  //   userListener = UserStore.addListener(this.changeLoginStatus);
  // },
  //
  // changeLoginStatus: function(){
  //   this.setState({loginStatus: UserStore.loginStatus()});
  // },
  //
  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  // loggedInRender: function(){
  //   return (
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  //           <span className="sr-only">Toggle navigation</span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //         </button>
  //         <a className="navbar-brand page-scroll">FoodEater</a>
  //       </div>
  //       <NavBarItem/>
  //     </div>
  //   );
  // },
  //
  // loggedOutRender: function(){
  //   return (
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  //           <span className="sr-only">Toggle navigation</span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //         </button>
  //         <a className="navbar-brand page-scroll">FoodEater</a>
  //       </div>
  //       <NavBarItem/>
  //     </div>
  //   );
  // },
  // <a className="navbar-brand page-scroll">
  //   FoodEater
  // </a>
  render: function () {
    var Link = ReactRouter.Link;

    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link to="/" className="logo page-scroll">
              FoodEater
            </Link>
            <Link to="/listings" className="page-scroll">
              Listings
            </Link>

          </div>
          <NavBarItem/>
        </div>
      </nav>
    );
  }

});

module.exports = NavBar;
