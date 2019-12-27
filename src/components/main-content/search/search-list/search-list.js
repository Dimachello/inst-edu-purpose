import React from "react";
import "./search-list.css";
import SearchListItem from "../search-list-item";
import Spinner from "../../../spinner/spinner";

class SearchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isConsist: false
    };

    this.showItems = this.showItems.bind(this);
  }

  componentDidMount () {
    fetch("https://picsum.photos/v2/list")
        .then(resp => resp.json())
        .then(data => {this.setState({
          items: data,
          isConsist: true
        })})
  } 

  showItems() {
    if(this.state.isConsist){
    return this.state.items.map((item) => {
      return <SearchListItem key={item.id} url={item.download_url} name={item.author}/>;
    });
  } else {
    return (
      []
    )
  }
  }

  render() {
    const list = (<ul className="search-list">{this.showItems()}</ul>);
    const content = !this.state.isConsist ? <Spinner /> : list;

    return content;
  }
}

export default SearchList;
