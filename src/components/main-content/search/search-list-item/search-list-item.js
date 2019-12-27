import React from "react";
import "./search-list-item.css";
import like from "../../../../imgs/icons/like24.png";
import comment from "../../../../imgs/icons/commnet24.png";

class SearchListItem extends React.Component {
  render() {
    return (
      <li className="search-item">
        <img src={this.props.url} alt="search-item" />
        <p className="author">
            <img src={like} alt="item like" />
            <img src={comment} alt="comment" />
            <span>{this.props.name}</span>
        </p>
      </li>
    );
  }
}

export default SearchListItem;
