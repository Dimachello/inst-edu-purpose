import React from "react";
import "./spinner.css";

const Spinner = (props) => {
  if (!props.isHidden) {
    return (
    <div className="spinner">
    <div className="loadingio-spinner-ellipsis-0tuhwfclutd">
      <div className="ldio-q4u879y2ss">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>
    )} else {
      return null;
    }
};
export default Spinner;
