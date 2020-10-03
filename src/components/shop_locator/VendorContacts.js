import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const VendorContacts = ({ contacts = {} }) => {
  return (
    <div className="social-icons">
      {contacts.whatsapp && <WhatsAppIcon fontSize="large" />}
      {contacts.facebook && <FacebookIcon fontSize="large" />}
      {contacts.twitter && <TwitterIcon fontSize="large" />}
      {contacts.instagram && <InstagramIcon fontSize="large" />}
    </div>
  );
};

export default React.memo(VendorContacts);
