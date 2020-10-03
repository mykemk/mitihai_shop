import React from "react";
import Styles from "./footer.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const SocialContacts = () => {
  return (
    <div className={Styles.socialIcons}>
      <Link to="/facebook">
        <FacebookIcon fontSize="large" />
      </Link>
      <Link to="/twitter">
        <TwitterIcon fontSize="large" />
      </Link>
      <Link to="/instagram">
        <InstagramIcon fontSize="large" />
      </Link>
      <Link to="/linkedin">
        <LinkedInIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default SocialContacts;
