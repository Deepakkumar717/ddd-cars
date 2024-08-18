import React from 'react';
import '../styles/register.css';  // Ensure the path is correct based on your folder structure

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            pattern="[A-Za-z\s]{1,50}" // Allows only letters and spaces, up to 50 characters
            title="Please enter a valid name (letters and spaces only)"
          />
        </div>
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
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Basic email validation pattern
            title="Please enter a valid email address"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            placeholder="Enter your address"
            required
            maxLength="200" // Limits the address to 200 characters
          ></textarea>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
