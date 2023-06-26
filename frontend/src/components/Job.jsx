import React, { useState } from "react";
import { Button,Dialog,DialogContent,DialogActions,TextField,DialogTitle } from '@mui/material';



export default function Job() {
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


  return (
    <div className="job-container">
      <div className="company-pic">
        <img
          src="https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png"
          alt=""
          width="100%"
          height="100%"
        />
      </div>

      <div className="job-details">
        <h4 className="job-title">Software Engineering Intern</h4>

        <div className="job-info">
          <h5>Wage: $16/hour</h5>
          <h5>Position: Back End</h5>
          <h5>Job Type: Part Time</h5>
          <h5>Location: New York, NY</h5>
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

        <p className="job-description">
          From making valuable connections between people and businesses to
          building premium services that deliver high-value experiences, the
          monetization organization at Meta empowers people and businesses to
          succeed in the global economy. As Meta focuses on building the next
          evolution of social experiences, the monetization team plays a
          crucial role in shaping the communication pathways and financial
          tools that all sized businesses, especially small to medium ones,
          need to thrive in the new digital economic environment. And we
          achieve that from end-to-end product and technology innovation.As a
          Software Engineer on the monetization team at Meta, you can help
          build cutting-edge full-stack technologies that will transform the
          way people and businesses connect and communicate. You’ll help
          develop industry-leading solutions that power next-generation,
          large-scale platforms and AI services to help connect billions of
          people around the world.
        </p>
      </div>
    </div>
  );
};
