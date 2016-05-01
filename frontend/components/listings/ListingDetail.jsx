var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions.js');


var ListingDetail = React.createClass({

  getStateFromStore: function (){
    return (
      {
        listing: ListingStore.findListing(parseInt(this.props.params.listing_id))
      }
    );
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._onChange);
    ListingActions.fetchListing(parseInt(this.props.params.listing_id));
  },

  handleClick: function() {
    var listing_id = this.props.listing.id;
    hashHistory.push("/listings/" + listing_id);
  },

  render: function(){
    var listing = this.state.listing;
    return (
        <div>
          {Object.keys(listing).map(function (el){
            return <h1>{listing[el]}</h1>;
          })}
          hellloooo

        </div>
    );
  }
});

module.exports = ListingDetail;
