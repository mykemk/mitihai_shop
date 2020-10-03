import React from "react";
import Styles from "./vendor-styles.module.css";
import { Button } from "@material-ui/core";

const VendorUpdateButton = () => {
  return (
    <div className={`${Styles.navButtons} right`}>
      <Button variant="contained" size="small" color="primary">
        Update
      </Button>
    </div>
  );
};

export default VendorUpdateButton;
