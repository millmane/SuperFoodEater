var React = require('react');

var LandingPageCarousel = React.createClass({

  render: function(){
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1" className=""></li>
              <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img className="first-slide" src="http://res.cloudinary.com/millmane/image/upload/v1461805273/sushi1_kj1omy.jpg" alt="First slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Example headline.</h1>
                    <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="second-slide" src="https://static.pexels.com/photos/3329/food-kitchen-cutting-board-cooking.jpg" alt="Second slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="third-slide" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvJXGvlQiPVSb4xoQZekVmX2n8ihdjgghaMbTctwLx1ZSSIEf2"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>One more for good measure.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    );
  }
});

module.exports = LandingPageCarousel;
