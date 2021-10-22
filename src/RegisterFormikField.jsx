import React from "react";
import { Field } from "formik";
import RegisterFormikErrorMessage from "./RegisterFormikErrorMessage";

const RegisterFormikField = ({ name, type, label }) => {

  return (
    <Field name={name}>
      {(formikField) => {

        return JSON.stringify(type) !== JSON.stringify("select") ? (
          <>
            <label htmlFor={name}  className="d-block">
              {label}
            </label>
            <input
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <RegisterFormikErrorMessage name={name} />
          </>
        ) : (
          <>
            <label htmlFor={name}  className="d-block ">
              {label}
            </label>
            <select id={name}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </>
        );
      }}
    </Field>
  );
};

export default RegisterFormikField;