import React from 'react';
import { useLocation } from 'react-router-dom';

const BikeDetails = () => {
  const { state } = useLocation();
  const { phone } = state || {}; // Get the phone number from the state

  // Sample bike details (in a real application, fetch these details based on the phone or other criteria)
  const bikeDetails = [
    { id: 1, model: 'Shoei', price: '₹3,500', quantity: '2' },
    { id: 2, model: 'KTM RC390', price: '385000', quantity: '1' },
    { id: 3, model: 'Dainese', price: '3,600', quantity: '1' },
  ];

  return (
    <div className="bike-details-container">
      <h2>Bike Details</h2>
      <p>Phone Number: {phone}</p>
      <h3>Available Bikes</h3>
      <ul>
        {bikeDetails.map(bike => (
          <li key={bike.id}>
            <strong>Model:</strong> {bike.model} <br />
            <strong>Price:</strong> {bike.price} <br />
            <strong>quantity:</strong> {bike.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BikeDetails;
