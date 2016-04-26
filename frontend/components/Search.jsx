var React = require('react');

var Search = React.createClass({


  getInitialState: function(){
    return {
      listings: {},
      filterParams: {},
      clickedLoc: null,
    };
  },

  render: function(){
    return(
      <div>
        <h5>Search Render</h5>
      </div>
    );
  }
});

module.exports = Search;
