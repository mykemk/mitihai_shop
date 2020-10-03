import React from "react";
import Styles from "./filters-styles.module.css";
import { Button } from "@material-ui/core";

const NoResultsFallBack = ({ searchValue, fallbackAction }) => {
  return (
    <div className={Styles.searchFallback}>
      <p className="center">
        Oops! we could not find results for "{searchValue}"
      </p>
      <p className="center"> - Check your spelling for typing errors</p>
      <p className="center"> - Try more general searches like 'Watch'</p>
      <p className="center"> - Try searching with short and simple keywords</p>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => fallbackAction("")}>
        Back Home
      </Button>
    </div>
  );
};

export default NoResultsFallBack;
