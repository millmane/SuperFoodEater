var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var UserStore = require('../../stores/user_store.js');

var UserDetail = React.createClass({

  // mixins: [CurrentUserState],
  getInitialState: function () {
    return {user: ""};
    // var userId = parseInt(this.props.params.listing_id);
    // var user = UserStore.currentUser();
    // return { user: user };
  },

  render: function () {
    return (
      <div>
        hi
        hi
        hi
        hi

      </div>
    );
  }

});

module.exports = UserDetail;
