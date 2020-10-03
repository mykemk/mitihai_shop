import React from "react";
import Styles from "./vendor-styles.module.css";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactDetailsInput from "./ContactDetailsInput";

const ContactDetails = () => {
  return (
    <fieldset className={Styles.personalDetails}>
      <h2 className="center primary">
        <ContactPhoneIcon fontSize="large" />
      </h2>
      <p className="center">Great! The last step!</p>
      <p className="center">
        Help customers get in touch with you by providing your contact details
      </p>
      <ContactDetailsInput />
    </fieldset>
  );
};

export default ContactDetails;
