var React = require('react');

var LandingBackground = React.createClass({

  render: function(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <img className="landing-background"
          src="http://res.cloudinary.com/millmane/image/upload/v1461805273/sushi1_kj1omy.jpg"/>
      </div>
  );
  }
});

module.exports = LandingBackground;
