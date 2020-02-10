import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Button, Form, FormGroup, Label, FormText } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <>
        {/* Begin page content */}
        <div className="p-2">
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
        </div>
      </>
    );
  }
}

export default withRouter(Contact);
