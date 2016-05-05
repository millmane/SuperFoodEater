var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;
var FilterActions = require('../../actions/filter_actions');
var ListingActions = require('../../actions/listing_actions');


var ListingStore = require('../../stores/listing_store');
// var MarkerStore = require('../../stores/marker_store');


function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, //San Francisco
  zoom: 13
};

var Map = React.createClass({

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.eachListing(this.createMarkerFromListing);
  },
  eachListing: function(callback){
    var listings = this.props.listings;
    var keys = Object.keys(listings);
    keys.forEach(function(key){
      callback(listings[key]);
    });
  },

  componentDidUpdate: function () {
    this._onChange();
  },
  _onChange: function(){
    var listingsToAdd = [];
    var markersToRemove = [];
    //Collect markers to remove
    this.markers.forEach(function(marker){
      if (!this.props.listings.hasOwnProperty(marker.listingId)){
        markersToRemove.push(marker);
      }
    }.bind(this));
    //Collect listings to add
    var currentListingIds = this.markers.map(function(marker){
      return marker.listingId;
    });
    this.eachListing(function(listing){
      if (!currentListingIds.includes(listing.id)){
        listingsToAdd.push(listing);
      }
    });
    //Do the adding / removing
    listingsToAdd.forEach(this.createMarkerFromListing);
    markersToRemove.forEach(this.removeMarker);
  },
  _handleClick: function(coords){
    // hashHistory.push({
    //   pathname: "listings/new",
    //   query: coords
    // });
  },
  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      bounds = {
        northEast: northEast,
        southWest: southWest
      };
      FilterActions.updateBounds(bounds);
      // ListingActions.fetchListingsFiltered(bounds);
    });
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleClick(coords);
    });
  },
  createMarkerFromListing: function (listing) {
    var pos = new google.maps.LatLng(listing.lat, listing.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id
    });
    marker.addListener('click', function () {
      hashHistory.push("listings/" + listing.id );
    });
    this.markers.push(marker);
  },
  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].listingId === marker.listingId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  render: function(){
    return (
      <div className={this.props.cname}>
        <div id="map" className={this.props.cname2} ref="map">
        </div>
      </div>
    );
  }
});

module.exports = Map;
