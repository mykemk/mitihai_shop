import React, { useContext } from "react";
import "./header.css";
import SearchFilter from "shared/filter/SearchFilter";
import MenuIcon from "@material-ui/icons/Menu";
import { AppContext } from "app/App";

function Header({ clickHandler, isNavBarShown, newStyles }) {
  const { showSearchBar, changeFilterValue } = useContext(AppContext);

  return (
    <>
      <div className="header" style={isNavBarShown ? null : newStyles}>
        <span className="menu-icon">
          <MenuIcon fontSize="large" onClick={clickHandler} />
        </span>
        {showSearchBar && (
          <div className="header-search">
            <SearchFilter
              showButton={true}
              placeholder="Search Product/category"
              searchHandler={changeFilterValue}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default React.memo(Header);
