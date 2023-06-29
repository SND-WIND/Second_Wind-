import React from "react";
import SearchIcon from "../SVG/search_line.svg";

export default function JobSearchBar({ setSearchText }) {
  const changeHandler = async (e) => setSearchText(e.target.value);

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
