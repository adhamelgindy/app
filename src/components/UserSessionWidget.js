/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import * as authenticationActions from '../actions/AuthenticationActions';

const mapStateToProps = state => {
  return state;
};

class UserSessionWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow(e) {
    e.preventDefault();
    //to rerun the render method and save changes
    //better than setting a local state is sending the action to redux aand getting back the info
    //this.setState({ show: true });
    const { showLoginDialogAction } = this.props;
    showLoginDialogAction();
  }

  handleClose() {
    //better than setting a local state is sending the action to redux aand getting back the info
    //this.setState({ show: false });
    const { hideLoginDialogAction } = this.props;
    hideLoginDialogAction();
  }

  render() {
    var showDialog = this.props.showLoginDialog;
    if (showDialog === undefined) showDialog = false;

    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Show Modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header onClick={this.handleClose} closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

//connects action with dispatch method
const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      showLoginDialogAction: authenticationActions.getShowLoginDialogAction,
      hideLoginDialogAction: authenticationActions.getHideLoginDialogAction,
    },
    dispatch
  );

const ConnectedUserSessionWidget = connect(
  mapStateToProps,
  mapDispatchtoProps
)(UserSessionWidget);

export default ConnectedUserSessionWidget;
