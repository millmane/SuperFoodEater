var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions.js');
var ListingDetailCarousel = require('./ListingDetailCarousel.jsx');
var ListingApi = require('../../util/listing_api_util');
var FilterParamsStore = require('../../stores/filter_params');
var Map = require('./Map');

var ListingDetail2 = React.createClass({

  getInitialState: function () {
    var listingId = parseInt(this.props.params.listing_id);
    var listing = ListingStore.findListing(listingId);
    return { listing: listing };
  },

  componentDidMount: function () {
    var listingId = parseInt(this.props.params.listing_id);

    this.listingListener = ListingStore.addListener(this._onChange);

    var params = FilterParamsStore.params();
    ListingActions.fetchListingsFiltered(params);
  },

  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  _onChange: function () {
    var listingId = parseInt(this.props.params.listing_id);
    var listing = ListingStore.findListing(listingId);
    this.setState({ listing: listing });
  },

  render: function(){
    var listings = {};
    var listing = this.state.listing;
    listings[parseInt(this.props.params.listing_id)] = this.state.listing;
    if (typeof listing !== 'undefined'){
      return (
          <div className="detail-div">
            <div className="detail-img-div">
              <img className="detail-img" src={listing.images[0].url}/>
            </div>
            <hr className="detail-hr"></hr>

            <h1 className="detail-title">{listing.title}</h1>
            <hr className="detail-hr"></hr>

            <div className="detail-inner-div">
              <ul className="detail-ul">
                <li>
                  <h3>Description: </h3><p>{listing.description}</p>
                </li>
                <li>
                  <h3>Price: ${listing.price}</h3>
                </li>
              </ul>
              <Map listings={listings} cname={"map-detail"} cname2={"map-canvas-detail"}/>
            </div>
          </div>
      );
    } else {
      return <div>listing didnt load yet</div>;
    }
  }
});

module.exports = ListingDetail2;
