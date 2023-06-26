import React, { useState,useEffect, useContext } from "react";
import { Button,Dialog,DialogContent,DialogActions,TextField,DialogTitle } from '@mui/material';
import JobsPage from "../pages/JobsPage";


export default function Job({job}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = () => {
    // Perform your apply logic here
    console.log("Name:", name);
    console.log("Email:", email);

    // Close the dialog
    handleClose();
  };



  console.log(job)
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
          <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Apply Now
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Apply for the Job</DialogTitle>
              <DialogContent>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleApply} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <button>Bookmark</button>
        </div>

        <p className="job-description">{job.description}</p>
      </div>
    </div>
  );
};
