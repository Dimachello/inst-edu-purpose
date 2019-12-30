import React from "react";
import "./post-comment.css";
import commentLike from "../../../../../../imgs/icons/comment-like16.png";

class PostComment extends React.Component {
  render() {
    return (
      <ul className="comment">
        <li>
          <img src={this.props.url} alt="user" />
        </li>
        <li>{this.props.nick}</li>
        <li>{this.props.phrase}</li>
        <li><img src={commentLike} alt="like"/></li>
      </ul>
    );
  }
}

export default PostComment;
