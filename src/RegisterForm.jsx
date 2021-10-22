import React from "react";
import './myForm.css'
import { Formik, Form } from "formik";
import * as yup from "yup";
import RegisterFormikField from "./RegisterFormikField";
import RegisterFormikArray from "./RegisterFormikArray";


const RegisterFormikComponents = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        active: false,
        gender: "",
        hobbies: [],
    };

    const onSubmit = (values) => {
        alert("Registered Successfuly!");
        console.log(JSON.stringify(values, null, 4))

    };
    const validationSchema = yup.object({
        username: yup.string().required("username field is required"),
        email: yup.string().email("Please enter a valid email address").required("Email field is required"),
        password: yup.string().required("Password field is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        confirmPassword: yup.string().required("Password field is required").oneOf([yup.ref("password"), null], "Passwords must match"),
        active: yup.string(),
        gender: yup.string().required("must choose your gender"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {(formik) => {
                return (
                    <Form className="p-5  text-light form-control bg">
                        <div className=" d-block p-5 border-dark rounded form-control">
                            <RegisterFormikField
                                label="Username"
                                name="username"
                                type="text" />
                            <RegisterFormikField
                                label="Email"
                                name="email"
                                type="email" />
                            <RegisterFormikField
                                label="Password"
                                name="password"
                                type="password" />

                            <RegisterFormikField
                                label="ConfirmPassword"
                                name="confirmPassword"
                                type="password" />

                            <RegisterFormikField
                                label="Active"
                                name="active"
                                type="checkbox" />


                            <RegisterFormikField
                                label="Gender"
                                name="gender"
                                type="select" />

                            <RegisterFormikArray name="hobbies" />

                            <button  type="submit" className="d-block bg-dark text-light rounded mx-2 mt-3 border border-white">Register</button>
                        </div>

                         {/* <pre>  {JSON.stringify(formik, null, 4)}</pre> */}
                    </Form>
                );
            }}
        </Formik>
    )
};
export default RegisterFormikComponents;