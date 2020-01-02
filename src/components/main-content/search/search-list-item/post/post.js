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
      bookmarkBgk: ""
    };

    this.showComments = this.showComments.bind(this);
    this.handleCommentShow = this.handleCommentShow.bind(this);
    this.receiveCommentText = this.receiveCommentText.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.changeBookmarkBgk = this.changeBookmarkBgk.bind(this);
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

  changeBookmarkBgk () {
    this.setState({
      bookmarkBgk: "rgb(242, 31, 42)"
    })
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
            <span>
            <img src={like} alt="post like"/>
            </span>
            <span>
            <img src={comment} alt="comment" onClick={this.handleCommentShow} />
            </span>
            <span style={{backgroundColor: this.state.bookmarkBgk}}>
            <img
              src={bookmark}
              alt="bookmark"
              onClickCapture={() => {
                this.props.postSaved(this.props.url);
                this.changeBookmarkBgk();
              }}
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
    postSaved: (url) =>
      dispatch({
        type: "POST_SAVED",
        payload: {url: url}
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
