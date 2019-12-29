import React from "react";
import "./post.css";
import like from "../../../../../imgs/icons/like24.png";
import comment from "../../../../../imgs/icons/comment24.png";
import back from "../../../../../imgs/icons/back24.png";
import options from "../../../../../imgs/icons/options24.png";
import bookmark from "../../../../../imgs/icons/bookmark24.png";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-top">
          <img src={back} alt="back" onClick={this.props.hidePost} />
        </div>
        <div className="post-container">
          <header>
            <img src="https://picsum.photos/100/100" alt="owner" />
            <p>{this.props.author}</p>
            <img src={options} alt="settings" />
          </header>
          <img className="search-img" src={this.props.url} alt="post" />
          <div className="post-info">
            <span>
            <img src={like} alt="post like" />
            <img src={comment} alt="comment" />
            </span>
            <img src={bookmark} alt="bookmark"/>
          </div>
          <div className="comment">
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <p>/</p>
          <input type="text" placeholder="Add comment"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
