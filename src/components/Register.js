import React from 'react';
import '../styles/register.css';  // Ensure the path is correct based on your folder structure
import { saveUserData } from '../styles/user';  // Import the function from user.js

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      email: formData.get('email'),
      address: formData.get('address'),
    };

    // Save user data
    saveUserData(userData);

    // Display the popup message
    alert("Registration Successful!");

    // Optionally, you can also reset the form here if needed
    e.target.reset();
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
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
            name="phone"
            placeholder="Enter your phone number"
            required
            pattern="[0-9]{10}" // Only allows exactly 10 digits
            title="Please enter a 10-digit phone number"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            required
            minLength="8" // Minimum 8 characters
            title="Password must be at least 8 characters long"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            minLength="8" // Minimum 8 characters
            title="Password must be at least 8 characters long"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Basic email validation pattern
            title="Please enter a valid email address"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
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
