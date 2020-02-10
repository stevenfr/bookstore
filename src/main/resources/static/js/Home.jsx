import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookList from "./BookList.jsx";
import SlideUserPanel from "./SlideUserPanel.jsx";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    return (
      <>
        {/* Begin page content */}
        <main role="main" className="flex-shrink-0">
          <div>
            <Container>
              <Row>
                <Col>
                  <BookList />
                </Col>
                <Col>
                  <SlideUserPanel />
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
