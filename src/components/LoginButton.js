/* eslint-disable */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

import { getShowLoginDialogAction } from '../actions/AuthenticationActions';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.showLoginDialog = this.showLoginDialog.bind(this);
  }
  showLoginDialog() {
    //get the dispatch method from props
    const dispatch = this.props.dispatch;
    //gives back the action object
    dispatch(getShowLoginDialogAction());
  }

  render() {
    return (
      <div>
        <Button variant="light" onClick={this.showLoginDialog}>
          Login
        </Button>
      </div>
    );
  }
}

//connect the login button
export default connect()(LoginButton);
