var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var Filters = React.createClass({

  getInitialState: function(){
    return { price: {min: 0, max: 1000} };
  },

  maxPriceChanged: function(e){
    FilterActions.updateMaxPrice(e.target.value);
  },

  minPriceChanged: function (e) {
    FilterActions.updateMinPrice(e.target.value);
  },
  currentMaxPrice: function(){
    return this.props.filterParams.maxPrice;
  },
  currentMinPrice: function(){
    return this.props.filterParams.minPrice;
  },

  updatePrice: function (min, max) {
    FilterActions.updateParams({
      price: {min: min, max: max}
    });
  },

  render: function(){
    return (

      <form className="form-inline">
        <div className="form-group">
          <label for="minPrice" style={{marginRight: "5px"}}>Minimum Price</label>
          <input type="number" className="form-control" id="minPrice" placeholder="0"
            style={{marginRight: "5px"}}
            onChange={this.minPriceChanged}
            defaultValue={this.currentMinPrice()}/>
        </div>
        <div className="form-group">
          <label for="maxPrice" style={{marginRight: "5px"}}>Maximum Price</label>
          <input type="number" className="form-control" id="maxPrice" placeholder="1000"
            onChange={this.maxPriceChanged}
            defaultValue={this.currentMaxPrice()}
            style={{marginRight: "5px"}}/>
        </div>
      </form>

    );
  }
});

module.exports = Filters;

// <div className="form-group">
//   <label>Minimum Price</label>
//
//   <label className="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
//   <div className="input-group">
//     <div className="input-group-addon">$</div>
//     <input type="number" className="form-control" id="exampleInputAmount" placeholder="0"
//       onChange={this.minPriceChanged}
//       value={this.currentMinPrice()}/>
//   </div>
// </div>

// <div>
//
// <label>Minimum Price</label>
// <input type="number" className="form-control" placeholder="0"
//   onChange={this.minPriceChanged}
//   value={this.currentMinPrice()}/>
//  <br/>
// <label>Maximum Price</label>
// <input type="number"
//   onChange={this.maxPriceChanged}
//   value={this.currentMaxPrice()}/>
// </div>
