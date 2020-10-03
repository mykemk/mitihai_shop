import React, { useState, useContext } from "react";
import Styles from "./shop-locator.module.css";
import ShopCard from "./ShopCard";
import SearchFilter from "shared/filter/SearchFilter";
import SearchResults from "react-filter-search";
import { ShopsContext } from "components/shop_locator/ShopLocator";

const ShopsList = () => {
  const { shops } = useContext(ShopsContext);
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className={Styles.shopsList}>
      <SearchFilter
        onChange={setFilterValue}
        placeholder="Search shop"
        value={filterValue}
      />
      <SearchResults
        data={shops}
        value={filterValue}
        renderResults={(shops) => {
          if (!shops.length)
            return (
              <p className="no-shops">
                Oops, seems we cannot trace any matching shop!
              </p>
            );
          return shops.map((shop) => {
            return <ShopCard key={shop.email} shopDetails={shop} />;
          });
        }}
      />
    </div>
  );
};

export default React.memo(ShopsList);
