import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getAllJobs, searchJob } from "../adapters/job-adapter";
import JobList from "../components/JobList";
import JobSearchBar from "./JobSearchBar";
import CreateJobModal from "./CreateJobModal";

export default function JobFeed() {
  const { accountType } = useContext(CurrentUserContext);
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      if (searchText) {
        const data = await searchJob(searchText);
        setJobs(data);
      } else {
        const data = await getAllJobs();
        setJobs(data);
      }
    };
    getJobs();
  }, [searchText]);

  return (
    <div className="job-feed">
      <JobSearchBar setSearchText={setSearchText} />
      {accountType === "business" && <CreateJobModal />}
      <JobList jobs={jobs} />
    </div>
  );
}
