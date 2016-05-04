var React = require('react');

var FilterForm = React.createClass({
  render: function(){
    var bootstrap_enabled = (typeof $().modal == 'function');

    return (
      <div class="container">
        <div class="row">
            <div class='col-sm-6'>
                <div class="form-group">
                    <div class='input-group date' id='datetimepicker1'>
                        <input type='text' class="form-control" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>
            {
                $(function () {
                    $('#datetimepicker1').datetimepicker();
                })
            }
        </div>
      </div>
    );
  }
});

module.exports = FilterForm;
