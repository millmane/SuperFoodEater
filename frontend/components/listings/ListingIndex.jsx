var React = require('react');
var ListingIndexItem = require('./ListingIndexItem');

var ListingIndex = React.createClass({
  render: function(){

    var listings = this.props.listings;
    var listingKeys = Object.keys(listings);

    return (
      <ul>
        <h1>Listing Index</h1>
        {
          listingKeys.map(function(key){
            return (<ListingIndexItem
              listing={listings[key]}
              key={listings[key].id + key}
              />);
          })
        }
      </ul>
    );
  }
});

module.exports = ListingIndex;
