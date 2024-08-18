import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap"; // Ensure Reactstrap is installed

const StorePurchaseForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="tel" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="Shipping Address" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="City" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="State" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="ZIP Code" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="select" name="paymentMethod" id="paymentMethod">
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="paypal">PayPal</option>
        </Input>
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="Card Number" />
      </FormGroup>

      <FormGroup className="purchase__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="Card Expiry Date" />
      </FormGroup>
      <FormGroup className="purchase__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="CVV" />
      </FormGroup>

      <FormGroup>
        <Input type="textarea" rows={5} className="textarea" placeholder="Additional Notes" />
      </FormGroup>
      
      <Button type="submit" className="purchase__form-btn">
        Submit Purchase
      </Button>
    </Form>
  );
};

export default StorePurchaseForm;
