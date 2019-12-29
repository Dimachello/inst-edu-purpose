import React from "react";
import "./search-list.css";
import SearchListItem from "../search-list-item";
import Spinner from "../../../spinner/spinner";

class SearchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isConsist: false,
      isVisible: true
    };

    this.showItems = this.showItems.bind(this);
    this.hideItems = this.hideItems.bind(this);
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

  showItems() {
    if (this.state.isConsist) {
      return this.state.items.map(item => {
        return (
            <SearchListItem
              key={item.id}
              url={item.download_url}
              name={item.author}
              hideItems={this.hideItems}
            />
        );
      });
    } else {
      return [];
    }
  }

  hideItems () {
    // this.setState({isVisible: false})
    console.log("hidden");
  }

  render() {
    const list = <ul className="search-list">{this.showItems()}</ul>;
    const content = !this.state.isConsist ? <Spinner /> : list;

    return content;
  }
}

export default SearchList;
