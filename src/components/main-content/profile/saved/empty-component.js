import React from 'react';
import flag from "../../../../imgs/icons/bookmark64.png";

const EmptyComponent = () => {
    return (
        <div className="saved-wrapper">
        <div className="saved-empty-container">
          <div className="round-border">
            <img src={flag} alt="saved" />
          </div>
          <p className="saved-title">Save</p>
          <p className="saved-paragraph">
            Save your photo and video that you whant to watch again. Nobody
            recieve notification about that and saved objects can be watched
            only by you
          </p>
        </div>
      </div>
    )
}

export default EmptyComponent;