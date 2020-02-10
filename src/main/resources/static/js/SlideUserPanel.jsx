import React, { Component } from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

class SlideUserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <div style={{ marginTop: "32px" }}>
          <button onClick={() => this.setState({ isPaneOpenLeft: true })}>
            Click me to open right pane with 20% width!
          </button>
        </div>
        <SlidingPane
          closeIcon={<div>Some div containing custom close icon.</div>}
          isOpen={this.state.isPaneOpenLeft}
          title="Hey, it is optional pane title.  I can be React component too."
          from="right"
          width="200px"
          onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
        >
          <div>And I am pane content on left.</div>
        </SlidingPane>
      </div>
    );
  }
}

export default SlideUserPanel;
