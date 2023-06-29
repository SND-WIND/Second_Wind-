import React from "react";
import Job from "../components/Job";

export default function JobList({ jobs }) {
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}
