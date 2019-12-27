import React from "react";
import "./warning.css";

class Warning extends React.Component {
  render() {
    return (
    <div className="warning-wrapper">
    <div className="warning-container">
      <h3>Login or password is incorrect</h3>
      <div onClick={this.props.hide}>ok</div>
    </div>
    </div>
    );
  }
}

export default Warning;
