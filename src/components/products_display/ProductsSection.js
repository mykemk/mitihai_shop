import React, { useContext, useEffect } from "react";
import products from "test_data/products.json";
import BrandsGrid from "./BrandsGrid";
import SearchResults from "react-filter-search";
import { AppContext } from "app/App";
import { useParams } from "react-router-dom";
import NoResultsFallBack from "shared/filter/NoResultsFallBack";

const ProductsSection = () => {
  const { filterValue, changeFilterValue } = useContext(AppContext);
  const { category } = useParams();
  useEffect(() => {
    changeFilterValue(category || "");
    return () => {
      changeFilterValue("");
    };
  }, [category, changeFilterValue]);
  return (
    <div className="products-container">
      <SearchResults
        data={products}
        value={filterValue}
        renderResults={(products) => {
          if (products.length === 0) {
            return (
              <NoResultsFallBack
                searchValue={filterValue}
                fallbackAction={changeFilterValue}
              />
            );
          }
          return products.map((category, index) => (
            <BrandsGrid
              name={category.name}
              products={category.products}
              key={`${category.name}${index}`}
            />
          ));
        }}
      />
    </div>
  );
};

export default React.memo(ProductsSection);
