"use client";

import "./contactMeForm.css";

import { useState } from "react";

export default function ContactMeForm() {
  // Stores the current values of all form fields
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // For each field: is it valid? + a message (error or success)
  const [formValidation, setFormValidation] = useState({
    name: { isValid: false, msg: "" },
    email: { isValid: false, msg: "" },
    message: { isValid: false, msg: "" },
  });

  // Form submit status: loading, success, and a global status message
  const [formStatus, setFormStatus] = useState({
    isLoading: false,
    isSuccess: false,
    msg: "",
  });

  // Submit button only becomes enabled when all fields are valid
  const isFormValid =
    formValidation.name.isValid &&
    formValidation.email.isValid &&
    formValidation.message.isValid;


  // Handle typing in any input/textarea
  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    // Update the field value
    setFormValues({ ...formValues, [inputName]: inputValue });

    // Reset validation state for that field (remove old error/success)
    setFormValidation({ ...formValidation, [inputName]: { isValid: false, msg: "" } });
    
    // Clear global form status when user starts editing again
    setFormStatus({ isLoading: false, isSuccess: false, msg: "" });
  }

  function nameValidation() {
    let defaultValid = true;

    if (formValues.name.length != 0) {
      const validationName = /^[a-zA-Z][\w\s]{1,24}$/;
      const nameValue = formValues.name;

      // If the input does NOT match the regex pattern
      // Show message prompting the user invalid username (invalid name)
      if (!validationName.test(nameValue)) {
        setFormValidation({
          ...formValidation,
          name: {
            isValid: false,
            msg: "Username from 2 to 25 characters and must start with a letter, followed by letters, numbers, spaces or underscores.",
          },
        });

        defaultValid = false;
      }

    } else {
      // If the input field is empty
      // Show message prompting the user to fill it (invalid name)
      setFormValidation({
        ...formValidation,
        name: { isValid: false, msg: "Fill this field" },
      });

      defaultValid = false;
    }

    // If the value passes all checks (valid name)
    // Show message prompting the user with success message
    if (defaultValid) {
      setFormValidation({
        ...formValidation,
        name: { isValid: true, msg: "Valid Username" },
      });
    }
  }


  function emailValidation() {
    let defaultValid = true;

    if (formValues.email.length != 0) {
      const validationEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValue = formValues.email;

      // If the input does NOT match the regex pattern
      // Show message prompting the user invalid email (invalid email)
      if (!validationEmail.test(emailValue)) {
        setFormValidation({
          ...formValidation,
          email: {
            isValid: false,
            msg: "Invalid email format (user@example.com)"
          },
        });

        defaultValid = false;
      }

    } else {
      // If the input field is empty
      // Show message prompting the user to fill it (invalid email)
      setFormValidation({
        ...formValidation,
        email: {
          isValid: false,
          msg: "Fill this field"
        },
      });

      defaultValid = false;
    }

    // If the value passes all checks (valid email)
    // Show message prompting the user with success message
    if (defaultValid) {
      setFormValidation({
        ...formValidation,
        email: {
          isValid: true,
          msg: "Valid Email"
        },
      });
    }
  }


  function messageValidation() {
    let defaultValid = true;

    if (formValues.message.length != 0) {
      const validationMessage = /^[\s\S]{2,1200}$/;
      const messageValue = formValues.message;

      // If the input does NOT match the regex pattern
      // Show message prompting the user invalid message (invalid message)
      if (!validationMessage.test(messageValue)) {
        setFormValidation({
          ...formValidation,
          message: {
            isValid: false,
            msg: "Message must be between 2 and 1200 characters"
          }
        });
        defaultValid = false;
      }
    } else {
      // If the input field is empty
      // Show message prompting the user to fill it (invalid message)
      setFormValidation({
        ...formValidation,
        message: { isValid: false, msg: "Fill this field" }
      });
      defaultValid = false;
    }

    // If the value passes all checks (valid message)
    // Show message prompting the user with success message
    if (defaultValid) {
      setFormValidation({
        ...formValidation,
        message: { isValid: true, msg: "Valid Message" }
      });
    }
  }


  async function handleSubmit(e) {
    e.preventDefault();

    // Only submit if form is valid
    if (isFormValid) {
      // set loading and disable all the form while it
      setFormStatus({ isLoading: true, isSuccess: false, msg: "Loading" });

      const FORM_ENDPOINT = "https://formspree.io/f/mqarykvo";

      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("message", formValues.message);

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
        const data = await res.json();

        // If Formspree returns an error
        if (!res.ok) {
          const firstError = data?.errors?.[0]?.message || "Request failed. Please try again";
          throw new Error(firstError);
        }

        // Success
        setFormStatus({ isLoading: false, isSuccess: true, msg: "Sent Successfully." });
        
        // Reset form values
        setFormValues({ name: "", email: "", message: "", })
        
        // Reset validation state
        setFormValidation({
          name: { isValid: false, msg: "" },
          email: { isValid: false, msg: "" },
          message: { isValid: false, msg: "" },
        })
      } catch (err) {
        // Show error message if request fails
        setFormStatus({ isLoading: false, isSuccess: false, msg: err.message || "Something went wrong. Please try again in a moment." });
        console.error(err);
      }
    }
  }


  return (
    <form className="contactMe-form" onSubmit={handleSubmit}>
      {/* Fieldset allows you to disable all fields while loading */}
      <fieldset
        className={`contactMe-form-fieldset ${formStatus.isLoading ? "loading-form-fieldset" : ""}`}
        disabled={formStatus.isLoading}
      >
        {/* Name Field */}
        <div className="contactMe-field-box">
          <label className="contactMe-field-name" htmlFor="name">Name</label>
          <input
            className="contactMe-field"
            id="name"
            type="text"
            placeholder="Your Name..."
            value={formValues.name}
            name="name"
            onChange={handleChange}
            onBlur={nameValidation}
          />
          <p className={`contactMe-field-msg ${formValidation.name.isValid ? "" : "invalid-field-msg"}`} >
            {formValidation.name.msg}
          </p>
        </div>

        {/* Email Field */}
        <div className="contactMe-field-box">
          <label className="contactMe-field-name" htmlFor="email">Email</label>
          <input
            className="contactMe-field"
            id="email"
            type="email"
            placeholder="Your Email..."
            value={formValues.email}
            name="email"
            onChange={handleChange}
            onBlur={emailValidation}
          />
          <p className={`contactMe-field-msg ${formValidation.email.isValid ? "" : "invalid-field-msg"}`}>
            {formValidation.email.msg}
          </p>
        </div>

        {/* message field */}
        <div className="contactMe-field-box">
          <label className="contactMe-field-name" htmlFor="message">Message</label>
          <textarea
            className="contactMe-field textarea"
            id="message"
            placeholder="Your Message..."
            value={formValues.message}
            name="message"
            onChange={handleChange}
            onBlur={messageValidation}
          />
          <p className={`contactMe-field-msg ${formValidation.message.isValid ? "" : "invalid-field-msg"}`}>
            {formValidation.message.msg}
          </p>
        </div>

        {/* Submit button (enabled only if all fields are valid) */}
        <input
          className={`contactMe-submit-btn ${isFormValid ? "" : "invalid-form-btn"}`}
          disabled={!isFormValid}
          type="submit"
          value="Send"
        />

        {/* Global form status: loading / success / error */}
        <p className={`contactMe-status-msg ${formStatus.isLoading ? "loading-form-msg" : ""} ${formStatus.isSuccess ? "success-form-msg" : ""}`}>
          {formStatus.msg}
        </p>
      </fieldset>
    </form>
  );
}