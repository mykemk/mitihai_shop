import React from "react";
import Styles from "./vendor-styles.module.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShopDetailsInput from "./ShopDetailsInput";

const ShopDetails = () => {
  return (
    <form className={Styles.personalDetails}>
      <h2 className="center primary">
        <LocalMallIcon fontSize="large" />
      </h2>
      <p className="center">Kudos ! you are One step away</p>
      <p className="center">
        Providing your shop details will help us direct customers to you
      </p>
      <ShopDetailsInput />
    </form>
  );
};

export default ShopDetails;
