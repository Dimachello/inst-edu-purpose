import React from "react";
import "./search-list-item.css";
import Post from "./post";

class SearchListItem extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isClicked: false
    }

    this.hidePost = this.hidePost.bind(this);
  }

  hidePost () {
    this.setState({isClicked: false});
  }

  render() {
    

    const post = this.state.isClicked ? <Post src={this.props.url} hide={this.hidePost}/> : null;

    return (
      <React.Fragment>
      <li className="search-item">
        <img className="search-img" src={this.props.url} alt="search-item" onClick={() => {this.setState({isClicked: true}); this.props.hideItems()}}/>
      </li>
      {post}
      </React.Fragment>
    );
  }
}

export default SearchListItem;
