import React, { useEffect, useContext } from "react";
import JobList from "../components/JobList";
import JobSearchBar from "./JobSearchBar";
import CreateJobModal from "./CreateJobModal";

export default function JobFeed() {
  return (
  <div className="job-feed">
    <JobSearchBar />
    <CreateJobModal />
    <JobList />
  </div>
  );
}
