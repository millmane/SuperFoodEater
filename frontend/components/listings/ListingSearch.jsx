var React = require('react');
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions');
var ListingIndex = require('./ListingIndex.jsx');
var FilterForm = require('./FilterForm.jsx');
var Map = require('./Map');

var ListingSearch = React.createClass({

  getInitialState: function (){
    return {
      listings: ListingStore.allListings()
    };
  },

  componentDidMount: function (){
    this.listingListener = ListingStore.addListener(this._listingsChanged);
    ListingActions.fetchListings();
  },

  componentWillUnmount: function(){
    this.listingListener.remove();
  },

  _listingsChanged: function (){
    this.setState({listings: ListingStore.allListings()});
  },

  render: function (){
    var bootstrap_enabled = (typeof $().modal == 'function');
    return (
      <div>
        <h1>im the map</h1>
          <Map listings={this.state.listings}/>
        <ListingIndex listings={this.state.listings}/>

      </div>
    );
  }

});

module.exports = ListingSearch;
