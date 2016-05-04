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
          <div className="filters collapse">
            <div className="filters-section intro-filter panel-body panel-light">
              <h1>remove me</h1>

              <div className="row">
                <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label">
                  <label>Dates</label>
                </div>

                <form className="col-lg-9 trip-form">
                  <div className="row row-condensed">
                    <div className="col-md-4 col-sm-6 row-space-1-sm">
                      <label for="map-search-checkin" className="screen-reader-only">
                        Check In
                      </label>
                      <input name="checkin" id="map-search-checkin" type="text" autocomplete="off" className="checkin tour-target ui-datepicker-target" placeholder="Check In"/>
                    </div>

                    <div className="col-md-4 col-sm-6 row-space-1-sm">
                      <label for="map-search-checkout" className="screen-reader-only">
                        Check Out
                      </label>
                      <input name="checkout" id="map-search-checkout" type="text" autocomplete="off" className="checkout tour-target ui-datepicker-target" placeholder="Check Out"/>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="select select-block">
                        <label for="guest-select" className="screen-reader-only">
                          Number of guests
                        </label>
                        <select name="guests" className="guest-select" id="guest-select" data-prefill="0">
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7 Guests</option>
                          <option value="8">8 Guests</option>
                          <option value="9">9 Guests</option>
                          <option value="10">10 Guests</option>
                          <option value="11">11 Guests</option>
                          <option value="12">12 Guests</option>
                          <option value="13">13 Guests</option>
                          <option value="14">14 Guests</option>
                          <option value="15">15 Guests</option>
                          <option value="16">16+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <h1>remove me</h1>



        <h1>remove also</h1>
        <div className="filters-section room-type-group intro-filter panel-body panel-light" data-name="room_types">
    <div className="row">
      <div className="col-lg-2 col-md-12 text-center-sm text-center-md filter-label">
        <label>
          Room Type
          <i className="icon icon-question hide-sm hide-md" id="room-type-tooltip"></i>
        </label>


      </div>

      <div className="col-lg-9">
        <div id="room-options" className="row row-condensed
          room-type__buttons">
              <div className="col-middle-alt col-md-4 col-sm-12 room-type__section">
                <label className="checkbox facet-checkbox facet-checkbox--room-type
                  room-type__button-label">
                  <div className="facet-checkbox__input-col room-type__button">
                    <input type="checkbox" name="room-type" value="Entire home/apt" className="room-type__input hide-md hide-sm"/>
                    <div className="show-md room-type__button">
                      <div className="text-center">
                        <div className="room-type__icon-button media-round">
                          <i className="icon icon-home icon-size-2 needsclick room-type__icon"></i>
                        </div>
                        <div className="room-type__label">
                            <span><strong>Entire place</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="show-sm room-type__button row">
                      <div className="col-sm-10">
                        <div className="va-middle room-type__label">
                            <span><strong>Entire place</strong></span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="text-center">
                          <div className="room-type__icon-button media-round">
                            <i className="icon icon-home icon-size-2 needsclick room-type__icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="facet-checkbox__label-col room-type__button hide-md hide-sm">
                      <span>Entire place</span>
                  </div>
                </label>
              </div>
              <div className="col-middle-alt col-md-4 col-sm-12 room-type__section">
                <label className="checkbox facet-checkbox facet-checkbox--room-type
                  room-type__button-label">
                  <div className="facet-checkbox__input-col room-type__button">
                    <input type="checkbox" name="room-type" value="Private room" className="room-type__input hide-md hide-sm"/>
                    <div className="show-md room-type__button">
                      <div className="text-center">
                        <div className="room-type__icon-button media-round">
                          <i className="icon icon-private-room icon-size-2 needsclick room-type__icon"></i>
                        </div>
                        <div className="room-type__label">
                            <span><strong>Private room</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="show-sm room-type__button row">
                      <div className="col-sm-10">
                        <div className="va-middle room-type__label">
                            <span><strong>Private room</strong></span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="text-center">
                          <div className="room-type__icon-button media-round">
                            <i className="icon icon-private-room icon-size-2 needsclick room-type__icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="facet-checkbox__label-col room-type__button hide-md hide-sm">
                      <span>Private room</span>
                  </div>
                </label>
              </div>
              <div className="col-middle-alt col-md-4 col-sm-12 room-type__section">
                <label className="checkbox facet-checkbox facet-checkbox--room-type
                  room-type__button-label">
                  <div className="facet-checkbox__input-col room-type__button">
                    <input type="checkbox" name="room-type" value="Shared room" className="room-type__input hide-md hide-sm"/>
                    <div className="show-md room-type__button">
                      <div className="text-center">
                        <div className="room-type__icon-button media-round">
                          <i className="icon icon-shared-room icon-size-2 needsclick room-type__icon"></i>
                        </div>
                        <div className="room-type__label">
                            <span><strong>Shared room</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="show-sm room-type__button row">
                      <div className="col-sm-10">
                        <div className="va-middle room-type__label">
                            <span><strong>Shared room</strong></span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="text-center">
                          <div className="room-type__icon-button media-round">
                            <i className="icon icon-shared-room icon-size-2 needsclick room-type__icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="facet-checkbox__label-col room-type__button hide-md hide-sm">
                      <span>Shared room</span>
                  </div>
                </label>
              </div>
        </div>
      </div>
    </div>
  </div>
        <h1>remove also</h1>

        <h1>definitely remove this</h1>
          <div className="filters-section intro-filter panel-body panel-light">
            <div className="row">
              <div className="col-lg-2 col-md-12 text-center-sm text-center-md filter-label">
                <label>Price Range</label>
              </div>
              <div className="col-lg-9 col-md-12">
                <div>
                  Price Slider Here
                </div>
              </div>
            </div>
          </div>
        <h1>definitely remove this</h1>
            </div>
            <h1>Filter Form Goes Here</h1>
          </div>
          <div className="sidebar-header panel-body clearfix panel-bg-medium">
            <h1>header!!!</h1>
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
