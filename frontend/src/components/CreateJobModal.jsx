import React, { useState, useEffect } from "react";

const CreateJobModal = () => {
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
  
  return (
    <div>
      <button onClick={handleOpenModal}>
        Create a Job <img src="" alt="" width="15px" />
      </button>
      {isOpen && (
        <div className="job-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <h2>Create a Job</h2>
            <form className="job-modal-form">
              <div className="job-modal-form-left">
                <label htmlFor="">Job Title</label>
                <input type="text" />
                <label htmlFor="">Job Salary</label>
                <input type="text" />
                <label htmlFor="">Location</label>
                <input type="text" />
                <label htmlFor="">Job Type</label>
                <input type="text" />
              </div>
              <div className="job-modal-form-right">
                <label htmlFor="">Website</label>
                <input type="text" />
                <label htmlFor="">Link to application</label>
                <input type="text" />
                <textarea
                  name="description"
                  // value={postText}
                  placeholder="Enter your job description here..."
                ></textarea>
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateJobModal;
