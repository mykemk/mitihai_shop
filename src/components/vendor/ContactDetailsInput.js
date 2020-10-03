import React from "react";
import { Linkinput, Phonenumber } from "shared/form-components";

const ContactDetailsInput = () => {
  return (
    <>
      <h3 className="section-title">Contact Details</h3>
      <Phonenumber
        label="Whatsapp Number"
        placeholder="+254123456789"
        name="whatsapp"
      />
      <Linkinput
        label="Facebook account"
        placeholder="https://www.facebook.com/my.account"
        name="facebook"
      />
      <Linkinput
        label="Twitter account"
        placeholder="https://www.twitter.com/my.account"
        name="twitter"
      />
      <Linkinput
        label="Instagram account"
        placeholder="https://www.instagram.com/my.account"
        name="instagram"
      />
    </>
  );
};

export default ContactDetailsInput;
