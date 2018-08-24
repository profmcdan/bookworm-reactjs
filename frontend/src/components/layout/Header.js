import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { withRouter } from "react-router-dom";

class Header extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <a href="/" className="nav-link" onClick={this.onLogout.bind(this)}>
          <img
            src={user.avatar}
            alt={user.name}
            title={user.name}
            className="rounded-circle"
            style={{ width: "25px", marginRight: "5px" }}
          />
          Logout
        </a>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </li>
      </ul>
    );

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark indigo">
          <div className="container">
            <Link to="/" className="navbar-brand">
              BW
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Features
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </div>
                </li>
              </ul>

              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Header));
