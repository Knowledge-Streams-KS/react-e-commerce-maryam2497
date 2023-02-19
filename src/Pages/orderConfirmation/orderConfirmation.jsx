import React from "react";
import { Link } from "react-router-dom";
import './orderConfirmation.css'
const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
    <h1>Your Order Has Been Confirmed</h1>
    <button className="home-button">Home</button>
  </div>
  );
};

export default OrderConfirmation;
