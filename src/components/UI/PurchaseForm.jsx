import React from "react";
import "../../styles/purchase-form.css";
import { Form, FormGroup } from "reactstrap";

const PurchaseForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Shipping Address" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="City" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="State" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="ZIP Code" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <select name="paymentMethod" id="paymentMethod">
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Card Number" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Card Expiry Date" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="CVV" />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Additional Notes"
        ></textarea>
      </FormGroup>
      
      <button type="submit" className="purchase__form-btn">
        Submit Purchase
      </button>
    </Form>
  );
};

export default PurchaseForm;
