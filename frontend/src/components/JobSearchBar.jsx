import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "../SVG/search_line.svg"

export default function JobSearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="jobs-search-container">
      <form className="jobs-search-form" action="">
        <input type="text" value={searchText} className="search-bar" placeholder="Search for Jobs" />
        <button className="job-search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}
