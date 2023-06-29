import React, { useEffect, useContext, useState } from "react";
import LinkButton from "./ApplyButton";
import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";

export default function Job({ job }) {
  const [bookmarkId, setBookmarkId] = useState(job.bookmark_id);

  const handleBookmark = async (e) => {
    if (bookmarkId) {
      const data = await deleteBookmark({ bookmark_id: bookmarkId });
      setBookmarkId(null);
    } else {
      const data = await createBookmark({ post_id: job.id, post_type: false });
      setBookmarkId(data.id);
    }
  };
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
          <button onClick={handleBookmark}>Bookmark</button>
        </div>

        <p className="job-description">{job.description}</p>
      </div>
    </div>
  );
}
