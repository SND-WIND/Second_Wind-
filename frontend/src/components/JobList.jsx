import React, { useState, useEffect, useContext } from "react";
import { getAllJobs } from "../adapters/job-adapter";
import Job from "../components/Job";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
        const data = await getAllJobs();
        console.log("all", data);
        setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}
