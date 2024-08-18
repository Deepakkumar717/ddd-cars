import React from 'react';
import '../styles/login.css';  // Ensure the path is correct based on your folder structure

const Login = () => {
  return (
    <div className='login-container'>
      <form>
        <h2>Login Page</h2>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
