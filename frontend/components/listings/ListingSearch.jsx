var React = require('react');
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions');
var Index = require('./Index.jsx');

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
    return (
      <div>
        <Index listings={this.state.listings}/>
      </div>
    );
  }

});

module.exports = ListingSearch;
