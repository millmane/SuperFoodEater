var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var LoginForm = require('./LoginForm.jsx');

// var appElement = document.getElementById('content');
//
// Modal.setAppElement(appElement);

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};



var LoginModal = React.createClass({

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
    return(
      <div>
        <button type="button" className="btn btn-info btn-lg" onClick={this.openModal}>Log In</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}>

			    <LoginForm/>
        </Modal>
      </div>
		);
  }
});

module.exports = LoginModal;
