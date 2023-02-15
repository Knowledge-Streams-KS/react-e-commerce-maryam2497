import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = (values) => {
    setFormData(values);
    console.log("Form data", formData);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phoneNumber: Yup.string()
      .matches(
        /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
        "Invalid phone number format"
      )
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      passwordConfirmation: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email..." />
          <ErrorMessage name="email" component="div" />
          <br />
          <Field type="text" name="firstName" placeholder="First Name..." />
          <ErrorMessage name="firstName" component="div" />
          <br />
          <Field type="text" name="lastName" placeholder="Last Name..." />
          <ErrorMessage name="lastName" component="div" />
          <br />
          <Field type="text" name="phoneNumber" placeholder="Phone Number..." />
          <ErrorMessage name="phoneNumber" component="div" />
          <br />
          <Field type="password" name="password" placeholder="Password..." />
          <ErrorMessage name="password" component="div" />
          <br />
          <Field
            type="password"
            name="passwordConfirmation"
            placeholder="Comfirm Password..."
          />
          <ErrorMessage name="passwordConfirmation" component="div" />
          <br />
          <Link to="/home">
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
