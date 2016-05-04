
var React = require('react');
var ReactRouter = require('react-router');

var UserStore = require('../../stores/user_store.js');
var Logo = require('../Logo.jsx');
var LoginForm = require ('../LoginForm.jsx');
var SignUpForm = require ('../SignUpForm.jsx');
var CurrentUserState = require("../../mixins/current_user_state");
var NavBarItem = require('../NavBarItem.jsx');
var UserActions = require("../../actions/user_actions");


var NavBar2 = React.createClass({
mixins: [CurrentUserState],
  getInitialState: function(){
    // return {loginStatus: UserStore.loginStatus()};
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
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li>
                <NavBarItem/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = NavBar2;


// <nav className="navbar navbar-default">
//   <div ClassName="container-fluid">
//     <!-- Brand and toggle get grouped for better mobile display -->
//     <div ClassName="navbar-header">
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <a className="navbar-brand" href="#">Brand</a>
//     </div>
//
//     <!-- Collect the nav links, forms, and other content for toggling -->
//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav">
//         <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
//         <li><a href="#">Link</a></li>
//         <li className="dropdown">
//           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
//           <ul class="dropdown-menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">One more separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//       <form class="navbar-form navbar-left" role="search">
//         <div class="form-group">
//           <input type="text" class="form-control" placeholder="Search">
//         </div>
//         <button type="submit" class="btn btn-default">Submit</button>
//       </form>
//       <ul class="nav navbar-nav navbar-right">
//         <li><a href="#">Link</a></li>
//         <li class="dropdown">
//           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
//           <ul class="dropdown-menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div><!-- /.navbar-collapse -->
//   </div><!-- /.container-fluid -->
// </nav>


// <div className="container">
//   <!-- Static navbar -->
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar top-bar"></span>
//           <span className="icon-bar middle-bar"></span>
//           <span className="icon-bar bottom-bar"></span>
//         </button>
//         <a className="navbar-brand" href="#">Project name</a>
//       </div>
//       <div id="navbar" className="navbar-collapse collapse">
//         <ul className="nav navbar-nav">
//           <li className="active"><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//           <li className="dropdown">
//             <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
//             <ul className="dropdown-menu" role="menu">
//               <li><a href="#">Action</a></li>
//               <li><a href="#">Another action</a></li>
//               <li><a href="#">Something else here</a></li>
//               <li className="divider"></li>
//               <li className="dropdown-header">Nav header</li>
//               <li><a href="#">Separated link</a></li>
//               <li><a href="#">One more separated link</a></li>
//             </ul>
//           </li>
//         </ul>
//         <ul className="nav navbar-nav navbar-right">
//           <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
//           <li><a href="../navbar-static-top/">Static top</a></li>
//           <li><a href="../navbar-fixed-top/">Fixed top</a></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
