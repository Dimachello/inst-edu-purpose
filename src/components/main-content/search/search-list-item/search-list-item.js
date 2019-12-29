import React from "react";
import "./search-list-item.css";

class SearchListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
      <li className="search-item">
        <img className="search-img" 
        src={this.props.url} 
        alt="search-item" 
        onClick={() => this.props.showPost(this.props.url,this.props.author)}
      />
      </li>
      </React.Fragment>
    );
  }
}

export default SearchListItem;
