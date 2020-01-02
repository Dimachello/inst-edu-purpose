import React from 'react';
// import flag from "../../../../imgs/icons/bookmark64.png";

const EmptyComponent = (props) => {
    return (
        <div className="empty-wrapper">
        <div className="empty-container">
          <div className="round-border">
            <img src={props.src} alt="tool" />
          </div>
    <p className="empty-title">{props.title}</p>
          <p className="empty-paragraph">
            {props.text}
          </p>
        </div>
      </div>
    )
}

export default EmptyComponent;