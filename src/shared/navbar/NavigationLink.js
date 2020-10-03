import React from "react";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { isArray } from "util";
import { Icon } from "@blueprintjs/core";

const NavigationLink = ({ actions = [], option = "", route }) => {
  return (
    <div className={Styles.menuOptions}>
      {//returns an array of links when an array of actions is passed.
      isArray(actions)
        ? actions.map(({ label, route, iconName = "" }) => {
            return (
              <Link className={Styles.navAction} key={label} to={`/${route}`}>
                <Icon icon={iconName} iconSize={Icon.SIZE_STANDARD} />
                {` ${label}`}
              </Link>
            );
          })
        : //When actions are passed in terms of a permisions object, returns links to protected routes.
          actions.create && (
            <Link to={`/${route}s/create`} className={Styles.navAction}>
              {`  Add ${option}`}{" "}
            </Link>
          )}
      {actions.read && (
        <Link className={Styles.navAction} to={`/${route}s`}>
          {`   Manage ${option}`}
        </Link>
      )}
    </div>
  );
};
export default React.memo(NavigationLink);
