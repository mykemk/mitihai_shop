import React, { useContext } from "react";
import NavOption from "./NavigationOption";
import Grid from "@material-ui/core/Grid";
import { Icon } from "@blueprintjs/core";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import IconLink from "./IconLink";
import UserProfile from "./UserProfile";
import { AppContext } from "app/App";
import SearchFilter from "shared/filter/SearchFilter";

function Navbar({ toggleNavbar }) {
  const categories = [
    { label: "Lifestyle", route: "categories/lifestyle" },
    { label: "Fashion", route: "categories/fashion" },
    { label: "Health", route: "categories/health" },
    { label: "Kitchen", route: "categories/kitchen" },
    { label: "Electronics", route: "categories/electronics" },
  ];
  const { showSearchBar, changeFilterValue } = useContext(AppContext);
  return (
    <Grid container className={Styles.sidenav}>
      {/* Logo holder goes here with icon to hide navbar*/}

      <div className={Styles.logoHolder}>
        <Link to="/home">
          <h3 className={Styles.logo}>MITIHAI</h3>
        </Link>
        <span className={Styles.sidebarCloser} onClick={toggleNavbar}>
          <Icon icon="chevron-left" iconSize={Icon.SIZE_LARGE} />
        </span>
      </div>
      <div className={Styles.linksWrapper}>
        <IconLink
          className={Styles.navOption}
          iconName="dashboard"
          to="/home"
          label="Home"
        />
        <NavOption
          iconName="data-lineage"
          option="Categories"
          route=""
          actions={categories}
        />
        <IconLink
          className={Styles.navOption}
          iconName="calendar"
          to="/events"
          label="Events"
        />
        <IconLink
          className={Styles.navOption}
          iconName="media"
          to="/gallery"
          label="Gallery"
        />
        <IconLink
          className={Styles.navOption}
          iconName="phone"
          to="/contact"
          label="Contact Us"
        />
        <IconLink
          className={Styles.navOption}
          iconName="help"
          to="/faqs"
          label="FAQs"
        />
        {showSearchBar && (
          <div className={Styles.searchBar}>
            <SearchFilter
              showButton={true}
              placeholder="Search Product/category"
              searchHandler={changeFilterValue}
            />
          </div>
        )}
        <UserProfile />
      </div>
    </Grid>
  );
}

export default React.memo(Navbar);
