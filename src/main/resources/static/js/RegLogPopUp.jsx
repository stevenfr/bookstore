import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  DropdownItem
} from "reactstrap";
import { Button, Form, FormGroup, Label, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import { render } from "react-dom";

class RegLogPopUp extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Input className="mb-1" placeholder="username" />
          </Row>
          <Row>
            <Input className="mb-1" placeholder="password" />
          </Row>
          <Row>
            <Button
              color="primary"
              size="sm"
              tag={Link}
              to="/login"
              role="button"
            >
              Login
            </Button>
          </Row>
          <Row>
            Register <Link to="/register">here</Link>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegLogPopUp;
