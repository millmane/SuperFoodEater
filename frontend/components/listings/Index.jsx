var React = require('react');
var IndexItem = require('./IndexItem');

var Index = React.createClass({
  render: function(){
    var listings = this.props.listings;
    var listingKeys = Object.keys(listings);
    return (
      <div>
        <h1>Index</h1>
        {
          listingKeys.map(function(key){
            return (<IndexItem
              listing={listings[key]}
              key={key} />);
          })
        }
      </div>
    );
  }
});

module.exports = Index;
