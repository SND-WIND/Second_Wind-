import React, { useState, useEffect, useContext } from "react";
import { searchJob } from "../adapters/job-adapter";
import SearchIcon from "../SVG/search_line.svg";

export default function JobSearchBar() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = async (e) => {
    const position = e.target.value;
    console.log(position);
    const data = await searchJob({ position });
    console.log(data);
  };

  return (
    <div className="jobs-search-container">
      <form className="jobs-search-form" action="">
        <input
          type="text"
          className="search-bar"
          onChange={changeHandler}
          placeholder="Search for Jobs"
        />
        <button className="job-search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
