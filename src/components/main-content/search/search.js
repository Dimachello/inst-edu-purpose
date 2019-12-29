import React from "react";
import "./search.css";
import SearchList from "./search-list";
import Dock from "../bottom-dock";

class Search extends React.Component {
  render() {
    return (
    <div className="search-wrapper">
       <header>
           <input type="search" placeholder="Search" maxLength="15" />
       </header>
       <SearchList />
       <Dock />
    </div>
    );
  }
}

export default Search;
