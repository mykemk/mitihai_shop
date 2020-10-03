import React from "react";
import Styles from "./vendor-styles.module.css";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const SignUpSuccessMsg = () => {
  return (
    <fieldset className={Styles.successMsg}>
      <h2 className="center with-top-margin primary">
        <ContactPhoneIcon fontSize="large" />
      </h2>
      <p className="center">Congratulations! You're done!</p>
      <p className="center">
        You have successfully registered as a vendor. <br /> A vendor ID and a
        password have been sent to your email address. We will be reaching out
        to you through your phone number to guide you on on the next steps.
        <p className="center with-top-margin">
          Please make sure you login <b>within 7 days</b> to activate your
          account
        </p>
      </p>
      <p className="center">Happy Selling!</p>
    </fieldset>
  );
};

export default SignUpSuccessMsg;
