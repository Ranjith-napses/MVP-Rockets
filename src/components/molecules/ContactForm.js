"use client";
import React, { useState } from "react";
import {
  InputField,
  TextAreaField,
  SelectField,
  PrimaryButton,
} from "../atoms/FormFields";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Product Development",
    "MVP Development",
    "Tech Stack Modedernization",
    "GenAi Product Development",
    "Product Strategy",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !formData.email.includes("@") ||
      (!formData.email.includes(".com") && !formData.email.includes(".in"))
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.service.trim())
      newErrors.service = "Please select a service";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <InputField
        label="First & Last Name"
        name="name"
        placeholder="i.e. John Doe"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="i.e. john@mail.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Phone"
        name="phone"
        placeholder="i.e. 9876543210"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <SelectField
        label="Which service do you need?"
        name="service"
        options={services}
        value={formData.service}
        onChange={handleChange}
        error={errors.service}
      />
      <TextAreaField
        label="Your message"
        name="message"
        placeholder="Tell us what you need..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <PrimaryButton text="Talk to an expert" />
      {submitted && (
        <p className="text-green-600 mt-4">
          Thanks! We’ll get back to you soon.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
