import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

class Contact extends Component {
  render() {
    return (
      /*       <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">Place sticky footer content here.</div>
      </footer> */
      <footer className="page-footer font-small bg-dark text-white pt-2 mt-auto">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>Here yousssoter content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Projekte</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Standort</a>
                </li>
                <li>
                  <a href="#!">Karriere</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Social</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="text-muted" href="https://www.instagram.com/#">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="https://www.facebook.com/#">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="https://www.xing.com/#">
                    <FontAwesomeIcon icon={["fab", "xing-square"]} size="2x" />
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="https://www.twitter.com/#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright bg-dark text-white text-center py-2 pt-2">
          © 2020 Copyright:
          <a href="https://somethinghere"> abc abc</a>
        </div>
      </footer>
    );
  }
}

export default Contact;
