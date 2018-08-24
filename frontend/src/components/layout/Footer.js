import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer text-center text-md-left font-small indigo pt-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 pb-3">
              <h5 className="text-uppercase">Info</h5>
              <p>Some info here.</p>
            </div>

            <div className="col-md-6 pb-3">
              <h5 className="text-uppercase">Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#!">Facebook</Link>
                </li>
                <li>
                  <Link to="#!">LinkedIn</Link>
                </li>
                <li>
                  <Link to="#!">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright py-3 text-center">
          © 2018 Copyright:
          <Link to="/"> McDaniel </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
