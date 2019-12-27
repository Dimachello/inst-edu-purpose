import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Error = ({ loginCheck }) => {
  return (
    <div className="error-container">
      <div className="error">
        <h1>404</h1>
        <h3>Something went wrong</h3>
        <Link className="link" to="/daily" onClick={() => loginCheck()}>
          back to main
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginCheck: () => dispatch({ type: "LOGIN_CONFIRMED" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
