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
        <div className="sidebar">
          <div className="filters">
            <h1>Filter Form Goes Here</h1>
          </div>
          <ListingIndex listings={this.state.listings}/>
        </div>

        <Map listings={this.state.listings}/>
      </div>
    );
  }
  // <div className="map">
  //   <div id="map" className="map-canvas">
  //     <Map id="map" className="map-canvas" listings={this.state.listings}/>
  //   </div>
  // </div>

});

module.exports = ListingSearch;
