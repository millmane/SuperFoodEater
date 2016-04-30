
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;

var IndexItem = React.createClass({
  handleClick: function() {
    var listingID = this.props.listing.id;
    hashHistory.push("listings/" + listingID );
  },

  render: function(){
    var listing = this.props.listing;
    return (
        <div
             onClick={this.handleClick}
             key={this.props.key}>
          {listing.description}
          {listing.lat.toString()}
        </div>
    );
  }
});

module.exports = IndexItem;
