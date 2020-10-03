import React, { useState } from "react";
import Styles from "./navbar.module.css";
import NavigationLinks from "./NavigationLink";
import { Icon } from "@blueprintjs/core";

const NavigationOption = ({ option, iconName, ...props }) => {
  const [actionsShown, SetActionsShown] = useState(false);

  // Shows or hides the links for the menu option
  function toggleShowActions() {
    SetActionsShown(!actionsShown);
  }

  return (
    <div className={Styles.listLinks} onMouseEnter={toggleShowActions}>
      <button className={Styles.navOption} onClick={toggleShowActions}>
        <Icon
          icon={iconName}
          className={Styles.menuIcon}
          iconSize={Icon.SIZE_STANDARD}
        />
        {` ${option}`}
        {/* Icon to allow user to display a list of menu options */}
        <span className={Styles.menuOptionsToggle}>
          <Icon //Changes the icon displayed based on whether the actions are shown
            icon={actionsShown ? "chevron-up" : "chevron-down"}
            iconSize={Icon.SIZE_STANDARD}
          />
        </span>
      </button>
      <div className={actionsShown ? Styles.shown : Styles.hidden}>
        {/* Toggles the clasname to show/hide the menu options */}
        <NavigationLinks option={option} {...props} />
      </div>
    </div>
  );
};

export default NavigationOption;
