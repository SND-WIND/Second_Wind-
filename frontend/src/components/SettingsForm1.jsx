import React from 'react'
import '../styles/Settings.css'

const SettingsForm1 = () => {
  return (
    <div className="settings-form-1">
        <form action="">
        <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </form>
    </div>
  )
}

export default SettingsForm1