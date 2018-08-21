import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "./../../actions/auth";
class LoginPage extends Component {
  submit = data => {
    console.log(data);
    // make async request here later and redirect
    this.props.login(data).then(() => this.props.history.pus("/"));
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  login: PropTypes.func.isRequired
};

const mapStateToProps = {};
export default connect()(null, { login }, LoginPage);
