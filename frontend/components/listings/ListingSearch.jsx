var React = require('react');
var ListingStore = require('../../stores/listing_store.js');
var ListingActions = require('../../actions/listing_actions');
var ListingIndex = require('./ListingIndex.jsx');
var FilterForm = require('./FilterForm.jsx');
var Map = require('./Map');

var ListingSearch = React.createClass({

  getInitialState: function (){
    return {
      listings: ListingStore.allListings(),
      filterParams: FilterParamsStore.params()
    };
  },

  _filtersChanged: function () {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ListingActions.fetchListingsFiltered(newParams);
  },

  componentDidMount: function (){
    this.listingListener = ListingStore.addListener(this._listingsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ListingActions.fetchListingsFiltered(filterParams);
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

});

module.exports = ListingSearch;
