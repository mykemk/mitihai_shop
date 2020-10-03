import React from "react";
import Styles from "./footer.module.css";
import LinksList from "./LinksList";
import SocialContacts from "./SocialContacts";

const Footer = () => {
  const usefullLinks = [
    { label: "Home", to: "home" },
    { label: "Events", to: "home" },
    { label: "Gallery", to: "home" },
    { label: "Contact Us", to: "home" },
    { label: "Faqs", to: "home" },
  ];
  const categories = [
    { label: "Lifestyle", to: "categories/lifestyle" },
    { label: "Fashion", to: "categories/fashion" },
    { label: "Health", to: "categories/health" },
    { label: "Kitchen", to: "categories/kitchen" },
    { label: "Electronics", to: "categories/electronics" },
  ];
  return (
    <div className="footer">
      <section className={Styles.footerSection}>
        <LinksList title="Important Links" links={usefullLinks} />
      </section>
      <section className={Styles.footerSection}>
        <LinksList title="Explore Our Products" links={categories} />
      </section>
      <section className={Styles.footerSection}>
        <h3>Contact Us</h3>
        <p>
          Eu et eu ullamco exercitation. Tempor ipsum esse pariatur deserunt
          laboris deserunt ullamco ad deserunt. Officia velit qui velit commodo
          labore et exercitation adipisicing consequat ea id exercitation aute.
        </p>
        <SocialContacts />
      </section>
    </div>
  );
};

export default React.memo(Footer);
