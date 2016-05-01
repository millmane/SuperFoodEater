var React = require('react');
var ListingIndexItem = require('./ListingIndexItem');

var ListingIndex = React.createClass({
  render: function(){
    var listings = this.props.listings;
    var listingKeys = Object.keys(listings);

    return (
      <div>
        <h1>Listing Index</h1>
        {
          listingKeys.map(function(key){
            return (<ListingIndexItem
              listing={listings[key]}
              key={key} />);
          })
        }
      </div>
    );
  }
});

module.exports = ListingIndex;
