import React from "react";
import { Shorttext, Phonenumber, Email } from "shared/form-components";

const PersonalDetailsInput = () => {
  return (
    <>
      <h3 className="section-title">Personal Details</h3>
      <Shorttext name="name" label="Your name" />
      <Phonenumber name="phoneNumber" label="Phone Number" />
      <Email name="email" label="Email Address" />
    </>
  );
};

export default PersonalDetailsInput;
