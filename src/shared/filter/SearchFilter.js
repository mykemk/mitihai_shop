import React, { useState } from "react";
import Styles from "./filters-styles.module.css";
import { Button } from "@material-ui/core";

const SearchFilter = ({
  onChange = null,
  searchHandler,
  showButton = true,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={Styles.searchFilter}>
      <form
        style={!showButton ? { width: "100%" } : {}}
        onSubmit={(event) => {
          event.preventDefault();
          searchHandler(searchValue);
        }}>
        <input
          type="text"
          onChange={
            onChange
              ? (event) => onChange(event.target.value || "")
              : (event) => setSearchValue(event.target.value)
          }
          autoFocus
          {...props}
        />
        {showButton && (
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="secondary">
            <span className="search-text">Search</span>
          </Button>
        )}
      </form>
    </div>
  );
};

export default React.memo(SearchFilter);
