
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
        <li
          onClick={this.handleClick}
          key={listing.id + listing.title}>
          {listing.title}
        </li>
    );
  }
});

module.exports = ListingIndexItem;
