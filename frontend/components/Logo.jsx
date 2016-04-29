var React = require('react');
var ReactRouter = require('react-router');

var Logo = React.createClass({

render: function() {
  var Link = ReactRouter.Link;
 // style={{border:"5px blue solid"}}
  return (
        <Link to="/" className="page-scroll">
          <img alt="" className="navbar-brand"
            src="http://res.cloudinary.com/millmane/image/upload/v1461780849/tooth-toy_wtisoh.jpg"/>
        </Link>
  );
}

});

module.exports = Logo;
