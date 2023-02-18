import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SignIn } from "../../utils/services/FireBase";

const LoginForm = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const navigate = useNavigate();
  const reDirect= useLocation();
  const location= reDirect.state?.redirectedForm.pathname;
 
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: ""
  // });


  const handleSubmit = (values) => {
    // setFormData(values);
    // console.log("Form data", formData);
    SignIn(values,navigate,location);
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
      {
        <Form>
          <Field type="email" name="email" placeholder="Email..."  />
          <ErrorMessage name="email" component="div" />
          <br/>
          <Field type="password" name="password" placeholder="Password..."  />
          <ErrorMessage name="password" component="div" />
          <br />
       
          <button type="submit" >
            Submit
          </button>
    
        </Form>
      }
    </Formik>
  );
};

export default LoginForm;
