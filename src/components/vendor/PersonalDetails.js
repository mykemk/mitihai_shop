import React from "react";
import Styles from "./vendor-styles.module.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonalDetailsInput from "./PersonalDetailsInput";

const PersonalDetails = () => {
  return (
    <fieldset className={Styles.personalDetails}>
      <h2 className="center primary">
        <PersonAddIcon fontSize="large" />
      </h2>
      <p className="center">We're glad you would like to sell with us</p>
      <p className="center">
        Please help us know you so that we set up your account.
      </p>
      <PersonalDetailsInput />
    </fieldset>
  );
};

export default PersonalDetails;
