
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;

var ListingIndexItem2 = React.createClass({
  handleClick: function() {
    var listing_id = this.props.listing.id;
    hashHistory.push("/listings/" + listing_id);
  },

  _onLoad: function(e) {
    if (e.target.height > e.target.width) {
      e.target.className="listing-img-tall img-fluid pull-xs-left";
    } else {
    e.target.className="listing-img-wide img-fluid pull-xs-left";
    }
  },

  render: function(){
    var listing = this.props.listing;
    var images = listing.images;
    return (
        <div className="col-sml-12 row-space-2 col-md-6"
          onClick={this.handleClick}
          >
          <div className="listing">
            <div className="panel-image listing-img">
              <a className="media-photo media-cover">
                <div className="listing-img-container media-cover text-center">
                  <img className="img-responsive-height" src={images[0].url}/>
                </div>
              </a>
            </div>
            <div className="panel-body panel-card-section">
              <h4>{listing.title}</h4>
            </div>
          </div>
        </div>
    );
  }
});
// {listing.title}
// <div className="image-div">
//   <img src={images[0].url} onLoad={this._onLoad}></img>
// </div>
module.exports = ListingIndexItem2;
