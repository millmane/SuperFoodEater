var React = require('react');
var ListingIndexItem = require('./ListingIndexItem');

var ListingIndex = React.createClass({
  render: function(){

    var listings = this.props.listings;
    var listingKeys = Object.keys(listings);
    return (
      <div>
        <h1>Listing Index</h1>
        <div className="listings-container">
          <div className="row">
            {
              listingKeys.map(function(key){
                return (<ListingIndexItem
                  listing={listings[key]}
                  key={listings[key].id + key}
                  />);
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListingIndex;
