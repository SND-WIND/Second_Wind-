import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "../SVG/search_line.svg"

export default function JobSearchBar() {
  const [searchText, setSearchText] = useState("");

  const changeHandler = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText)
    // const [data, error] = await createJob(values);
    // console.log(data);
  }

  return (
    <div className="jobs-search-container">
      <form className="jobs-search-form" onSubmit={handleSubmit} action="">
        <input type="text" className="search-bar" onChange={changeHandler}placeholder="Search for Jobs" />
        <button className="job-search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}
