var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var LoginForm2 = require('./LoginForm2.jsx');

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

var LoginModal2 = React.createClass({

  getInitialState: function(){
		return {modalIsOpen: false};
	},

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {

  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return(
      <li>
        <button type="button" className="btn btn-primary btn-outline" onClick={this.openModal}>Log In</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >
          <LoginForm2/>
        </Modal>
      </li>
		);
  }
});

module.exports = LoginModal2;
