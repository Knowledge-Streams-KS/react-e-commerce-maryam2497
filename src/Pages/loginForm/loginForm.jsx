import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword   } from "firebase/auth";
import { useLocation } from "react-router-dom";

const LoginForm = () => {
  const auth = getAuth();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const navigate = useNavigate();
  const reDirect= useLocation();
  const location= reDirect.state?.redirectedForm.pathname;
  const SignIn = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('token', user.accessToken);
      alert("User signed in")
      location? navigate(location): navigate('/home')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert("error",errorCode)
      // ..
    });
 
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleSubmit = values => {
    setFormData(values);
    console.log("Form data", formData);
    SignIn(values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email..."  />
          <ErrorMessage name="email" component="div" />
          <br/>
          <Field type="password" name="password" placeholder="Password..."  />
          <ErrorMessage name="password" component="div" />
          <br />
       
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
    
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
