import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/product-item.css";  // Ensure you have appropriate styling

const Product = ({ product }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    quantity: 1,
  });

  const handleBuyClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
    console.log('Form submitted:', { ...formData, productId: product.id });
    // Reset the form
    setFormData({ name: '', phoneNumber: '', quantity: 1 });
    setShowForm(false);
  };

  return (
    <div className="product-item">
      <img src={product.imgUrl} alt={product.productName} className="w-100" />
      <h3>{product.productName}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ₹{product.price}</p>

      {!showForm ? (
        <button className="w-50 product-item-btn product-btn-buy" onClick={handleBuyClick}>
          Buy
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="buy-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
          <button type="submit" className="submit-btn">Purchase</button>
        </form>
      )}

      <button className="w-50 product-item-btn product-btn-details">
        <Link to={`/store/${product.id}`}>Details</Link>
      </button>
    </div>
  );
};

export default Product;
