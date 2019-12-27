import React from "react";
import "./search.css";
import SearchList from "./search-list";

class Search extends React.Component {
  render() {
    return (
    <div className="search-wrapper">
       <header>
           <input type="search" placeholder="Search" maxLength="15" />
       </header>
       <SearchList />
    </div>
    );
  }
}

export default Search;
