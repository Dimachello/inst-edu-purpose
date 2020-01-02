import React from "react";
import "./search-list.css";
import SearchHeader from "./search-header";
import SearchListItem from "../search-list-item";
import Spinner from "../../../spinner/spinner";
import Post from "../search-list-item/post/post";

class SearchList extends React.Component {

  ulScrollPosition = React.createRef(null);

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isConsist: false,
      isClicked: false,
      postUrl: "",
      postAuthor: "",
      position: ""
    };
    
    this.handleScrollPositionValue = this.handleScrollPositionValue.bind(this);
    this.showItems = this.showItems.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.hidePost = this.hidePost.bind(this);
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          items: data,
          isConsist: true
        });
      });
  }

  handleScrollPositionValue () {
    const ulScrollPositionValue = this.ulScrollPosition.current.scrollTop;
    this.setState({
      position: ulScrollPositionValue
    });
  }

  handlePost(url, author) {
    this.setState({
      isClicked: !this.state.isClicked,
      postUrl: url,
      postAuthor: author
    });
  }

  hidePost() {
    this.setState({
      isClicked: !this.state.isClicked
    },
    () => {this.ulScrollPosition.current.scrollTop = this.state.position}
    );
  }

  showItems() {
    if (this.state.isConsist) {
      return this.state.items.map(item => {
        return (
          <SearchListItem
            key={item.id}
            url={item.download_url}
            author={item.author}
            showPost={this.handlePost}
          />
        );
      });
    } else {
      return [];
    }
  }

  render() {
    const list = (
      <React.Fragment>
        <SearchHeader />
        <ul 
        ref={this.ulScrollPosition}
        className="search-list"
        onScroll={this.handleScrollPositionValue}
        >{this.showItems()}</ul>
      </React.Fragment>
    );
    const content = this.state.isClicked ? (
      <Post
        hidePost={this.hidePost}
        url={this.state.postUrl}
        author={this.state.postAuthor}
      />
    ) : (
      list
    );

    return (
      <React.Fragment>
        <Spinner isHidden={this.state.isConsist} />
        {content}
      </React.Fragment>
    );
  }
}

export default SearchList;
