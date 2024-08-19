import React, { useState } from 'react';
import '../styles/login.css';  // Ensure the path is correct based on your folder structure
import { validateUser } from '../styles/user';  // Import the function from user.js

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the user data
    const isValid = validateUser(phone, password);

    if (isValid) {
      alert("Login Successful!");
    } else {
      alert("Invalid phone number or password.");
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
