import React from 'react';
import '../styles/profile.css';  // Ensure the path is correct based on your folder structure

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            pattern="[0-9]{10}" // Only allows exactly 10 digits
            title="Please enter a 10-digit phone number"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
