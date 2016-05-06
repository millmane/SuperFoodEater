
var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserState = require("../../mixins/current_user_state");
var AuthButtons = require ('../nav/AuthButtons.jsx');

var NavBar2 = React.createClass({
mixins: [CurrentUserState],
  getInitialState: function(){
  },

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  render: function () {
    var Link = ReactRouter.Link;

    return (

      <nav className="navbar navbar-default">
        <div ClassName="container-fluid">
          <div ClassName="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">FoodEater</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/#/listings">Listings</a></li>
            </ul>

            <AuthButtons/>

          </div>
        </div>
      </nav>
    );
  }

});

module.exports = NavBar2;
