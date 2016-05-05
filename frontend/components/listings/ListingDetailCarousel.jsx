var React = require('react');

var ListingDetailCarousel = React.createClass({
  render: function(){
    var listing = this.props.listing;
    debugger
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1" className=""></li>
              <li data-target="#myCarousel" data-slide-to="2" className=""></li>
              <li data-target="#myCarousel" data-slide-to="3" className=""></li>
              <li data-target="#myCarousel" data-slide-to="4" className=""></li>

            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img className="first-slide" src={listing.images[0].url} alt="First slide"/>
              </div>
              <div className="item">
                <img className="second-slide" src="https://static.pexels.com/photos/3329/food-kitchen-cutting-board-cooking.jpg" alt="Second slide"/>
              </div>
              <div className="item">
                <img className="third-slide" src="https://images.unsplash.com/photo-1458938354258-3e66eb36eb7b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=da364b5db010d60dd526c386501ce5fc"/>
              </div>
              <div className="item">
                <img className="fourth-slide" src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8ee9b87b2f8a42dd7d1d61e928343c28"/>
              </div>
              <div className="item">
                <img className="fifth-slide" src="https://images.unsplash.com/photo-1455128587117-d569fb07d25a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"/>
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

module.exports = ListingDetailCarousel;
