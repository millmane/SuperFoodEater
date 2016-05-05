var React = require('react');
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions');
var ListingIndex2 = require('./ListingIndex2.jsx');
var FilterForm = require('./FilterForm.jsx');
var Map = require('./Map');

var ListingSearch2 = React.createClass({

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
          {/*<div className="filters collapse">
            <div className="filters-section intro-filter panel-body panel-light">

            </div>
            <h1>Filter Form Goes Here</h1>
          </div>*/}
          <div className="sidebar-header panel-body clearfix panel-bg-medium">
            <h1 className="search-results-header">Explore Local Food Options</h1>
          </div>
          <ListingIndex2 listings={this.state.listings}/>
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

module.exports = ListingSearch2;
