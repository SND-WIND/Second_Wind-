import React, { useEffect, useContext, useState } from "react";
import LinkButton from './ApplyButton';
//import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";

import JobsPage from "../pages/JobsPage";

export default function Job({ job }) {
  return (
    <div className="job-container">
      <div className="company-pic">
        <img src={job.profile_image} alt="" width="100%" height="100%" />
      </div>

      <div className="job-details">
        <h4 className="job-title">{job.position + " at " + job.name}</h4>

        <div className="job-info">
          <h5>Wage: ${job.salary}/hr</h5>
          <h5>{job.position}</h5>
          <h5>{job.job_type}</h5>
          <h5>{job.location}</h5>
        </div>

        <div className="job-options">
        <LinkButton link={job.link} />
          {/* <button>Apply Now</button> */}
          {/* <button onClick = {handleBookmark}>Bookmark</button> */}
          <button>Bookmark</button>
        </div>

        <p className="job-description">{job.description}</p>
      </div>
    </div>
  );
}
