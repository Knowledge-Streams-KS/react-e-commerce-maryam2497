import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './userDetailForm.css'
import { Link } from "react-router-dom";
const UserDetailForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (values) => {
    setFormData(values);
    console.log("Form data", formData);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  }
  // const handleSubmit = (values) => {
  //   setFormData(values);
  //   console.log("Form data", formData);
  // };

  const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal code is required"),
    phoneNumber: Yup.string()
      .matches(
        /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
        "Invalid phone number format"
      )
      .required("Phone number is required"),
  });

  return (
    <div>
    <Formik
      initialValues={{
        country: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="user-form">
        <div className="user-form-field">
          <Field as="select" name="country" className="country-dropdown" placeholder="Select Country/Region">
            <option value="">Select Country/Region</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="India">India</option>
          </Field>
          <ErrorMessage name="country" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="firstName" className="user-form-input" placeholder="First Name..." />
          <ErrorMessage name="firstName" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="lastName" className="user-form-input" placeholder="Last Name..." />
          <ErrorMessage name="lastName" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="email" name="email" className="user-form-input" placeholder="Email..." />
          <ErrorMessage name="email" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="address" className="user-form-input" placeholder="Address..." />
          <ErrorMessage name="address" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="city" className="user-form-input" placeholder="City..." />
          <ErrorMessage name="city" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="postalCode" className="user-form-input" placeholder="Postal Code..." />
          <ErrorMessage name="postalCode" component="div" className="user-form-error" />
        </div>
        <div className="user-form-field">
          <Field type="text" name="phoneNumber" className="user-form-input" placeholder="Phone Number..." />
          <ErrorMessage name="phoneNumber" component="div" className="user-form-error" />
        </div>
      
        <button type="submit" disabled={isSubmitting} className="user-submit-button">
          Submit
        </button>
      </Form>
      
      )}
    </Formik>
     {showModal && (
      <div className="user-form-modal">
        <h3>Press Confirm Order Button to confirm your order</h3>
           <Link to="/orderConfirmation" className="user-submit-button">Confirm Order</Link>
    
      </div>
    )}
    </div>
  );
};

export default UserDetailForm;
