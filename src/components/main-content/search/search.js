import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    return <div className="search-wrapper">
       <header>
           <input type="search" placeholder="Search" maxLength="15" />
       </header>
    </div>;
  }
}

export default Search;
