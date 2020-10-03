import React from "react";
import Styles from "./footer.module.css";
import { Link } from "react-router-dom";

const LinksList = ({ links = [], title }) => {
  return (
    <div className={Styles.linksList}>
      <h3>{title}</h3>
      {links.map((link) => {
        return (
          <Link key={link.label} to={`/${link.to}`} className="navOption">
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default LinksList;
