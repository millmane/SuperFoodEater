var React = require('react');
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions');
var ListingIndex2 = require('./ListingIndex2.jsx');
var Map = require('./Map');
var FilterParamsStore = require('../../stores/filter_params');
var hashHistory = require('react-router').hashHistory;
var Filters = require('./Filters');

var ListingSearch2 = React.createClass({

  _listingsChanged: function(){
    this.setState({listings: ListingStore.allListings()});
  },

  _filtersChanged: function () {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ListingActions.fetchListingsFiltered(newParams);
  },

  getInitialState: function(){
    return {
      listings: ListingStore.allListings(),
      filterParams: FilterParamsStore.params(),
      clickedLoc: null,
    };
  },

  componentDidMount: function(){
    this.listingListener = ListingStore.addListener(this._listingsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ListingActions.fetchListingsFiltered(filterParams);
  },

  componentWillUnmount: function(){
    this.listingListener.remove();
    this.filterListener.remove();
  },

  render: function (){
    return (
      <div>
        <div className="sidebar">

          <div className="sidebar-header panel-body clearfix panel-bg-medium">
            <h1 className="search-results-header">Explore Local Food Options</h1>
              <Filters filterParams={this.state.filterParams}/>

            <hr className="search-hr"></hr>
          </div>
          <ListingIndex2 listings={this.state.listings}/>
        </div>

        <Map listings={this.state.listings} cname={"map"} cname2={"map-canvas"}/>
      </div>
    );
  }

});

module.exports = ListingSearch2;
