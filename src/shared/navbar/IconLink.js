import React from "react";
import { Icon } from "@blueprintjs/core";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const IconLink = ({ iconName = "", label, ...props }) => {
  return (
    <Link {...props}>
      <Icon
        icon={iconName}
        className={Styles.menuIcon}
        iconSize={Icon.SIZE_STANDARD}
      />
      {` ${label}`}
    </Link>
  );
};

export default IconLink;
