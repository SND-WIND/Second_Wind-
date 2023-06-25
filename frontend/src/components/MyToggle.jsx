import React, { useState } from 'react';
import SettingsForm1 from './SettingsForm1';
import SettingsForm2 from './SettingsForm2';

const MyToggle = () => {
  const [activeForm, setActiveForm] = useState('form1');

  const toggleForm = () => {
    setActiveForm(activeForm === 'form1' ? 'form2' : 'form1');
  };

  return (
    <div>
      <button onClick={toggleForm}>Toggle Form</button>

      {activeForm === 'form1' && <SettingsForm1 />}
      {activeForm === 'form2' && <SettingsForm2 />}
    </div>
  );
};

export default MyToggle;
