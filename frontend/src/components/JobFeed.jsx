import React, { useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import JobList from "../components/JobList";
import JobSearchBar from "./JobSearchBar";
import CreateJobModal from "./CreateJobModal";

export default function JobFeed() {
  const { accountType } = useContext(CurrentUserContext);

  useEffect(() => {
    const getJobs = async () => {
      
    }
  }, []);

  return (
    <div className="job-feed">
      <JobSearchBar />
      {accountType === "business" && <CreateJobModal />}
      <JobList />
    </div>
  );
}
