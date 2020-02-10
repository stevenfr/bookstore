import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class RegisterPage extends Component {
  render() {
    return (
      <Container>
        <h2>Sign Up</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="username"
                name="username"
                id="exampleUsername"
                placeholder="Username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
              <Label for="examplePassword">Repeat Password</Label>
              <Input
                type="repeatPassword"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Col className="mb-3">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Agree our <a href="#">Terms</a>
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary">Sign Up</Button>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default RegisterPage;
