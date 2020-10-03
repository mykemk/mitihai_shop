import React, { useState, useContext } from "react";
import Styles from "./navbar.module.css";
import NavigationLinks from "./NavigationLink";
import { Icon } from "@blueprintjs/core";
import { UserContext } from "contexts/UserContext";

const UserProfile = () => {
  const [actionsShown, SetActionsShown] = useState(false);
  let { user } = useContext(UserContext);

  function toggleShowActions() {
    SetActionsShown(!actionsShown);
  }
  const guestOptions = [
    { label: "Log In", route: "login", iconName: "log-in" },
    {
      label: "Become a Vendor",
      route: "shops/register",
      iconName: "briefcase",
    },
  ];
  const userOptions = [
    { label: "Log Out", route: "logout", iconName: "log-out" },
    {
      label: "Edit Profile",
      route: "shops/update",
      iconName: "briefcase",
    },
  ];
  return (
    <div
      className={`${Styles.listLinks} ${Styles.userProfile}`}
      onMouseEnter={toggleShowActions}
      onMouseLeave={toggleShowActions}>
      <button className={Styles.navOption} onClick={toggleShowActions}>
        <Icon icon="user" iconSize={Icon.SIZE_LARGE} />{" "}
        <span className={Styles.menuIcon}>
          {user.isLoggedIn ? user.name : "My Account"}
        </span>
      </button>
      <div className={actionsShown ? Styles.shown : Styles.hidden}>
        {/* Toggles the clasname to show/hide the menu options */}
        <NavigationLinks
          actions={user.isLoggedIn ? userOptions : guestOptions}
        />
      </div>
    </div>
  );
};

export default UserProfile;
