import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import { Link } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "relative",
    bottom: "0",
    display: () => {
      return window.screen.width < 600 ? "block" : "none";
    },
  },
});

export function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <Link to="/home">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/shops">
        <BottomNavigationAction label="Shops" icon={<LocalMallIcon />} />
      </Link>
      <Link to="/gallery">
        <BottomNavigationAction label="Gallery" icon={<PermMediaIcon />} />
      </Link>
      <Link to="/help">
        <BottomNavigationAction label="Help" icon={<HelpOutlineIcon />} />
      </Link>
    </BottomNavigation>
  );
}
