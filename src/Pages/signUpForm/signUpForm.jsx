import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./signUpForm.css";
import app from "../../firebase";
import { Navigate } from "react-router-dom";
const SignUpForm = () => {
  const auth = getAuth();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const SignUp = (values) => {
createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    alert("Successfully created account")
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
  });
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (values) => {
    setFormData(values);
    console.log("Form data", formData);
    console.log(values)
    SignUp(values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="signup-form">
          <div className="form-field">
          <Field type="email" name="email" placeholder="Email..." />
          <ErrorMessage name="email" component="div" />
          <br />
          </div>
          <div className="form-field">
          <Field  type="password" name="password" placeholder="Password..." />
          <ErrorMessage name="password" component="div" />
          <br /></div>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            Sign Up
          </button>
          <Link to="/loginForm" className="already-user-link">Already a User?</Link>
        </Form>
      )}
    </Formik>
  
  );
};

export default SignUpForm;
