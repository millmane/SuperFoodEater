var React = require('react');
var ListingIndexItem2 = require('./ListingIndexItem2');

var ListingIndex2 = React.createClass({
  render: function(){

    var listings = this.props.listings;
    var listingKeys = Object.keys(listings);
    return (
      <div className="search-results">
        <div className="outer-listings-container row-space-2">
          <div className="listings-container">
            <div className="row">
              {
                listingKeys.map(function(key){

                  return (<ListingIndexItem2
                    listing={listings[key]}
                    key={listings[key].id}
                    />);
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListingIndex2;
