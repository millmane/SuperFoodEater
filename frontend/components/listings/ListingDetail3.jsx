var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions.js');
var ListingApi = require('../../util/listing_api_util');
var FilterParamsStore = require('../../stores/filter_params');
var Map = require('./Map');

var ListingDetail3 = React.createClass({

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
        <div>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div id="main">
    <div className="row">
        <div className="col-lg-12">
          <h1 className="search-results-header" style={{textAlign: "center"}}>Food Details</h1>
        </div>
    </div>

    <div className="row row-centered">
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <header className="panel-title">
                        <div className="text-center">
                            <h3>{listing.title} - ${listing.price}</h3>
                        </div>
                    </header>
                </div>
                <div className="panel-body">
                    <div className="text-center">
                        <img className="detail-img-circle" src={listing.images[0].url}/>
                        <br></br>
                        <br></br>
                        <p>{listing.description}</p>
                        <hr></hr>
                        <h3>Location</h3>
                        <hr></hr>
                        <Map listings={listings} cname={"map-detail2"} cname2={"map-canvas-detail2"}/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

        </div>
      );
    } else {
      return <div>listing didnt load yet</div>;
    }
  }
});

module.exports = ListingDetail3;
