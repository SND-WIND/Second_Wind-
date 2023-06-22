import React from 'react'
import '../index.css'
import '../styles/Settings.css'
import Horizantal from "../components/Horizantal";

const SettingsForm1 = () => {
  return (
    <div className="settings-form-1">
  <form>
    <h2>Form 1</h2>
    <label htmlFor="input1">Input 1:</label>
    <input type="text" id="input1" name="input1" /><br />
    
    <label htmlFor="input2">Input 2:</label>
    <input type="text" id="input2" name="input2" /><br />
    
    <label htmlFor="input3">Input 3:</label>
    <input type="text" id="input3" name="input3" /><br />
    
    <label htmlFor="input4">Input 4:</label>
    <input type="text" id="input4" name="input4" /><br />
    
    <label htmlFor="input5">Input 5:</label>
    <input type="text" id="input5" name="input5" /><br />
    
    {/* Add more input fields for Form 2 if needed  */}
  </form>
  <Horizantal color="pink" />
  <form>
    <h2>Form 2</h2>
    <label htmlFor="input6">Input 6:</label>
    <input type="text" id="input6" name="input6" /><br />
    
    <label htmlFor="input7">Input 7:</label>
    <input type="text" id="input7" name="input7" /><br />
    
    <label htmlFor="input8">Input 8:</label>
    <input type="text" id="input8" name="input8" /><br />
    
    <label htmlFor="input9">Input 9:</label>
    <input type="text" id="input9" name="input9" /><br />
    
    <label htmlFor="input10">Input 10:</label>
    <input type="text" id="input10" name="input10" /><br />
    
     {/* Add more input fields for Form 2 if needed  */}
  </form>

    </div>
  )
}

export default SettingsForm1