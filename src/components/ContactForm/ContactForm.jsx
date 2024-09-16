import React from "react";
import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Enter more letters!")
      .max(50, "Too long!")
      .required("Fill in this field!"),
    number: Yup.string()
      .matches(
        /^[0-9+\-()\s]*$/,
        "Only numbers and symbols (+, -, (, )) are allowed!"
      )
      .min(3, "Enter more numbers!")
      .max(50, "Too long!")
      .required("Fill in this field!"),
  });
  const handleSubmit = (values, options) => {
    addContact(values.name, values.number);
    options.resetForm();
  };

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" type="tel" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
