var React = require('react');
var LandingPageBottom = require('./LandingPageBottom');
var LandingPageCarousel = require('./LandingPageCarousel');

var LandingPage = React.createClass({

  render: function(){
    return(
      <div className="landing-div">
          <LandingPageCarousel/>
      <div className="container marketing">
        <div className="row">
          <div className="landing-marketing col-lg-4">
            <img className="img-circle" src="http://i.imgur.com/VH9zxjl.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Breakfast</h2>
            <p>Pancakes, waffles, eggs benedict.  Get the day started right with your go to breakfast item.</p>
            <p><a className="btn btn-default" href="#/listings" role="button">Find Breakfast</a></p>
          </div>
          <div className="landing-marketing col-lg-4">
            <img className="img-circle" src="https://images.unsplash.com/photo-1459432904503-d74cd0aa0a88?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ade124498d5d9de800f2ff807222af32" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Dinner</h2>
            <p>Don't feel like cooking tonight? Find a filling dinner and go to sleep feeling full.</p>
            <p><a className="btn btn-default" href="#/listings" role="button">Find Dinner</a></p>
          </div>
          <div className="landing-marketing col-lg-4">
            <img className="img-circle" src="http://i.imgur.com/lajGJuw.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Dessert</h2>
            <p>Destroy that sweet tooth. Look for your favorite dessert or be adventorous and try something new! </p>
            <p><a className="btn btn-default" href="#/listings" role="button">Find Dessert</a></p>
          </div>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = LandingPage;
