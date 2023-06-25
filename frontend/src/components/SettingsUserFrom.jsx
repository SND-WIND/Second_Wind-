import React, { useState } from "react";

const SettingsUserForm = () => {
  const [formData, setFormData] = useState({
    "fullName": "",
    "location": "",
    "sex": "",
    "age": "",
    "status": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-forms">
        <h2>User Info</h2>
      <label className="form-label">
        Full Name
        <input
          type="text"
          name="Full Name"
          className="settings-form-class"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Location
        <input
          type="text"
          name="Location"
          className="settings-form-class"
          placeholder="City, State"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Sex
        <input
          type="text"
          name="Sex"
          className="settings-form-class"
          placeholder="Male, Female or Others"
          value={formData.sex}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Age
        <input
          type="text"
          name="Age"
          className="settings-form-class"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Status
        <input
          type="text"
          name="Status"
          className="settings-form-class"
          placeholder="Formerly Incarcerated"
          value={formData.status}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SettingsUserForm;
