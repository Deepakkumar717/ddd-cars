import React, { useState } from 'react';
import '../styles/book-service.css'; // Ensure you have appropriate styling

const BookService = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    bikeModel: '',
    bikeNumber: '',
    kilometers: '',
    issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="book-service">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}" // Assumes a 10-digit phone number
              title="Please enter a valid 10-digit phone number"
              placeholder="Enter your phone number"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Bike Model:
            <input
              type="text"
              name="bikeModel"
              value={formData.bikeModel}
              onChange={handleChange}
              required
              placeholder="Enter bike model"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Bike Number:
            <input
              type="text"
              name="bikeNumber"
              value={formData.bikeNumber}
              onChange={handleChange}
              required
              pattern="[A-Z0-9]{1,15}" // Adjust as needed for bike number format
              title="Please enter a valid bike number (letters and numbers only)"
              placeholder="Enter bike number"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Kilometers:
            <input
              type="number"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleChange}
              required
              min="0"
              step="0.1" // Allows for fractional kilometers
              placeholder="Enter kilometers"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Issue:
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              placeholder="Describe the issue"
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookService;
