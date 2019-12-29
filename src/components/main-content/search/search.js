import React from "react";
import "./search.css";
import SearchList from "./search-list";
import Dock from "../bottom-dock";

class Search extends React.Component {
  render() {
    return (
    <div className="search-wrapper">
       <SearchList />
       <Dock />
    </div>
    );
  }
}

export default Search;
