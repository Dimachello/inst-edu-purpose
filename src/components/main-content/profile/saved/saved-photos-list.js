import React from "react";

function getPhotos (list) {
  const items = list.map((item, idx) => {
      return (
      <li key={idx}>
          <img src={item.url} alt="saved item"/>
      </li>
      )
  }) 

  return (items);
}

function SavedPhotoList (props) {
  return (
    <div className="saved-photo-wrapper">
      <p>Saved photos visable only for you</p>
      <ul className="saved-photo-list">{getPhotos(props.savedItems)}</ul>
    </div>
  );
};

export default SavedPhotoList;
