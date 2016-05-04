var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var SignUpForm2 = require('./SignUpForm2.jsx');

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var SignUpModal2 = React.createClass({

  getInitialState: function(){
		return {modalIsOpen: false};
	},

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var styling;
    var liStyling;

    if (this.props.loginform === "true") {
      styling =  "btn btn-login-form btn-outline";
      liStyling = "login-li";
    } else {
      styling =  "btn btn-primary btn-outline";
    }

    return(
      <li className={liStyling}>
        <button type="button" className={styling} onClick={this.openModal}>Sign Up</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

			    <SignUpForm2/>
        </Modal>
      </li>
		);
  }
});

module.exports = SignUpModal2;
