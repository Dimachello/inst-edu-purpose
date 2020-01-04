import React from "react";
import "./post.css";
import like from "../../../../../imgs/icons/like24.png";
import comment from "../../../../../imgs/icons/comment24.png";
import back from "../../../../../imgs/icons/back24.png";
import options from "../../../../../imgs/icons/options24.png";
import bookmark from "../../../../../imgs/icons/bookmark24.png";
import Comment from "./post-comment";
import { connect } from "react-redux";

class Post extends React.Component {
  constructor(props) {
    super(props);

    const commentsData = this.props.commentItems;

    this.state = {
      isAdd: false,
      comments: commentsData,
      newComment: "",
      like: "#fff",
      likeColor: "",
      comment: "",
      mark: "",
      likesCounter: 1324
    };

    this.showComments = this.showComments.bind(this);
    this.handleCommentShow = this.handleCommentShow.bind(this);
    this.receiveCommentText = this.receiveCommentText.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.changeBgk = this.changeBgk.bind(this);
    this.incLikeCounter = this.incLikeCounter.bind(this);
  }

  showComments() {
    return this.state.comments.map(item => {
      return (
        <Comment
          key={item.id}
          url={item.profilePhotoUrl}
          nick={item.nick}
          phrase={item.phrase}
        />
      );
    });
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleCommentShow() {
    this.setState({ isAdd: true });
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  receiveCommentText(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitComment() {
    const newComment = {
      id: 7,
      profilePhotoUrl: "https://picsum.photos/100/100",
      nick: "dimon",
      phrase: this.state.newComment
    };

    this.setState({
      newComment: "",
      comments: [...this.state.comments, newComment]
    });
  }

  changeBgk(event) {
    this.setState({
      [event.target.name]: "rgb(235, 64, 52)"
    });
  }

  incLikeCounter() {
    if (this.state.like === "#fff") {
    this.setState({
      likesCounter: this.state.likesCounter + 1,
      likeColor: "#fff"
    });
  } else {
    this.setState({
      likesCounter: this.state.likesCounter - 1,
      like: "#fff",
      likeColor: "#000"
    });
  }
  }

  render() {
    const inputComment = (
      <div className="add-comment" id="add-text">
        <input
          type="text"
          className="comment-input"
          value={this.state.newComment}
          name="newComment"
          placeholder="Add comment"
          onChange={this.receiveCommentText}
        />
        <button onClick={this.submitComment}>Send</button>
      </div>
    );
    const addComment = this.state.isAdd ? inputComment : null;
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
            <span
              style={{ backgroundColor: this.state.like }}
              className="likes-container"
            >
              <img
                name="like"
                src={like}
                alt="post like"
                onClickCapture={(event) => {
                  this.changeBgk(event);
                  this.incLikeCounter();
                }}
              />
              <span className="likes-counter" style={{ color: this.state.likeColor }}>{this.state.likesCounter}</span>
            </span>
            <span style={{ backgroundColor: this.state.comment }}>
              <img
                name="comment"
                src={comment}
                alt="comment"
                onClickCapture={event => {
                  this.handleCommentShow();
                  this.changeBgk(event);
                }}
              />
            </span>
            <span style={{ backgroundColor: this.state.mark }}>
              <img
                name="mark"
                src={bookmark}
                alt="bookmark"
                onClick={event => {
                  const exist = (item) => item.url === this.props.url;
                  let check = this.props.savedItems.some(exist)
                  if(!check){
                    this.props.postSaved(this.props.url)
                  } else {
                    return 0;
                  }
                  this.changeBgk(event);
                }
              }
              />
            </span>
          </div>
          <div className="comments">{this.showComments()}</div>
          {addComment}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    commentItems: state.commentItems,
    savedItems: state.savedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postSaved: (url) => {
    //  let check = false;
     
      dispatch({
        type: "POST_SAVED",
        payload: { url: url }
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
