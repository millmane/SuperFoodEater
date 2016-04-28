var React = require('react');
var ReactRouter = require('react-router');

var Logo = React.createClass({

render: function() {
  var Link = ReactRouter.Link;
 // style={{border:"5px blue solid"}}
  return (
    <div className="logo">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-design"
            src="http://res.cloudinary.com/millmane/image/upload/v1461780849/tooth-toy_wtisoh.jpg"/>
        </Link>
        <h2 className="logo-text">FoodEater</h2>

      </div>
    </div>
  );
}

});

module.exports = Logo;
