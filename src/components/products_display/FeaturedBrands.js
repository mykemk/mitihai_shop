import React from "react";
import AutoplaySlider from "shared/sliders/AutoplaySlider";
import ProductCard from "./ProductCard";
import { Divider } from "@material-ui/core";
import image from "assets/images/lifestyle1.jpg";
import topProducts from "test_data/topProducts.json";

const FeaturedBrands = () => {
  return (
    <div className="products-grid ">
      <Divider />
      <h2 className="centreTitle">Featured Brands</h2>
      <Divider />
      <AutoplaySlider>
        {topProducts.map((product, index) => {
          return (
            <ProductCard
              key={`${product.name}${index}`}
              brandName={product.name}
              image={image}
            />
          );
        })}
      </AutoplaySlider>
    </div>
  );
};

export default React.memo(FeaturedBrands);
