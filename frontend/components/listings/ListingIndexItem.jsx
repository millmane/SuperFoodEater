
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;

var ListingIndexItem = React.createClass({
  handleClick: function() {
    var listing_id = this.props.listing.id;
    hashHistory.push("/listings/" + listing_id);
  },

  render: function(){
    var listing = this.props.listing;
    return (
        <div
          onClick={this.handleClick}
          key={this.props.key}>
          {listing.title}
        </div>
    );
  }
});

module.exports = ListingIndexItem;
