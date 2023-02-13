import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  const handleSubmit = (values) => {
    setFormData(values);
    console.log("Form data", formData);
  };

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
        <Form>
          <Field as="select" name="country" placeholder="Select Country/Region">
            <option value="">Select Country/Region</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="India">India</option>
          </Field>
          <ErrorMessage name="country" component="div" />
          <br />
          <Field type="text" name="firstName" placeholder="First Name..." />
          <ErrorMessage name="firstName" component="div" />
          <br />
          <Field type="text" name="lastName" placeholder="Last Name..." />
          <ErrorMessage name="lastName" component="div" />
          <br />
          <Field type="email" name="email" placeholder="Email..." />
          <ErrorMessage name="email" component="div" />
          <br />
          <Field type="text" name="address" placeholder="Address..." />
          <ErrorMessage name="address" component="div" />
          <br />
          <Field type="text" name="city" placeholder="City..." />
          <ErrorMessage name="city" component="div" />
          <br />
          <Field type="text" name="postalCode" placeholder="Postal Code..." />
          <ErrorMessage name="postalCode" component="div" />
          <br />
          <Field type="text" name="phoneNumber" placeholder="Phone Number..." />
          <ErrorMessage name="phoneNumber" component="div" />
          <br />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default UserDetailForm;
