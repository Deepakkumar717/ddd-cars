import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';  // Ensure the path is correct based on your folder structure

const Profile = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the bike details page with the phone number as state
    navigate('/bikedetails', { state: { phone } });
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
