import React, { useState, useEffect, useContext } from "react";
import { createJob } from "../adapters/job-adapter";
import CurrentUserContext from "../contexts/current-user-context";


const CreateJobModal = () => {
  const { currentUser } = useContext(CurrentUserContext);
  // const [postText, setPostText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //   const { id } = useParams();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    const [data, error] = await createJob(values);
    console.log(data);
  };

  return (
    <div>
      <button id="create-a-job-btn" onClick={handleOpenModal}>
        Create a Job <img src="" alt="" width="15px" />
      </button>
      {isOpen && (
        <div className="job-modal" onClick={handleCloseModal}>
          <div className="job-modal-content" onClick={handleModalClick}>
            <h2>Create a Job</h2>
            <form className="job-modal-form" onSubmit={handleSubmit}>
              <div className="job-modal-form-inputs">
                <div className="job-modal-form-left">
                  <label htmlFor="">
                    Job Title
                    <input
                      name="position"
                      className="create-job-input"
                      type="text"
                    />
                  </label>

                  <label htmlFor="">
                    Job Salary
                    <input
                      name="salary"
                      className="create-job-input"
                      type="text"
                    />
                  </label>

                  <label htmlFor="">
                    Location
                    <input
                      name="location"
                      className="create-job-input"
                      type="text"
                    />
                  </label>

                  <label htmlFor="">
                    Job Type
                    <input
                      name="job_type"
                      className="create-job-input"
                      type="text"
                    />
                  </label>
                </div>
                <div className="job-modal-form-right">
                  <label htmlFor="">
                    Link to application
                    <input
                      name="link"
                      className="create-job-input"
                      type="text"
                    />
                  </label>

                  <label htmlFor="">
                    Job Description{" "}
                    <textarea
                      name="description"
                      // value={postText}
                      className="job-description-input"
                      placeholder="Enter your job description here..."
                    ></textarea>
                  </label>
                </div>
              </div>
              <button id="create-job-btn" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateJobModal;
