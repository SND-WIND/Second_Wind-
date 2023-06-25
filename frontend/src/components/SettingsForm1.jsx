import React, { useState } from 'react';
import '../index.css'
import '../styles/Settings.css'



const SettingsForm1 = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
  <label>
    Field 1:
    <input
      type="text"
      name="field1"
      id="settings-form-field"
      className="settings-form-class"
      placeholder="Enter Field 1"
      value={formData.field1}
      onChange={handleChange}
    />
  </label>

  <label>
    Field 2:
    <input
      type="text"
      name="field2"
      id="settings-form-field"
      className="settings-form-class"
      placeholder="Enter Field 2"
      value={formData.field2}
      onChange={handleChange}
    />
  </label>

  <label>
    Field 3:
    <input
      type="text"
      name="field3"
      id="settings-form-field"
      className="settings-form-class"
      placeholder="Enter Field 3"
      value={formData.field3}
      onChange={handleChange}
    />
  </label>

  <label>
    Field 4:
    <input
      type="text"
      name="field4"
      id="settings-form-field"
      className="settings-form-class"
      placeholder="Enter Field 4"
      value={formData.field4}
      onChange={handleChange}
    />
  </label>

  <label>
    Field 5:
    <input
      type="text"
      name="field5"
      id="settings-form-field"
      className="settings-form-class"
      placeholder="Enter Field 5"
      value={formData.field5}
      onChange={handleChange}
    />
  </label>

  <button type="submit">Submit</button>
</form>

  );
};

export default SettingsForm1;
