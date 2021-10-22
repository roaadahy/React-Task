import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import './myForm.css'


const LoginForm = () => {
    const initialValues = {
      email: "",
      password: "",
      rememberMe: false,
    };
    const onSubmit = (values) => {alert("Logged in successfully!"); console.log(JSON.stringify(values, null, 4))};
    const validationSchema = yup.object({
        email: yup.string().email("Please enter a valid email address").required("Email is required"),
        password: yup.string().required("Password field is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    });
  
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
    return (
      <form onSubmit={formik.handleSubmit} className="p-5  text-light form-control bg">
        <div className=" d-block p-5 border-dark rounded form-control">
          <label htmlFor="email" className="d-block ">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div  className="text-danger">{formik.errors.email}</div>
          )}
  
          <label htmlFor="password"  className="d-block ">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div  className="text-danger">{formik.errors.password}</div>
          )}
  
          <label htmlFor="rememberMe" className="d-block ">
            remember me
          </label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            defaultChecked={formik.values.rememberMe}
            {...formik.getFieldProps("rememberMe")}
          />
  
          <button type="submit" className="d-block bg-dark text-light rounded mx-2 mt-3 border border-white">Login</button>
        </div>
      </form>
    );
  };
  export default LoginForm;