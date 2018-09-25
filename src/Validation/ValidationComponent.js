import React, { Component } from "react";

class ValidationComponent extends Component {
  render() {
    const validationStatus =
      this.props.textLength <= 5 ? "Text too short" : "Text long enough";

    return <div>{validationStatus}</div>;
  }
}

export default ValidationComponent;
