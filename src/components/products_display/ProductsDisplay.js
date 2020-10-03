import React, { useContext, useEffect } from "react";
import ShopSlider from "./ShopSlider";
import ProductsSection from "./ProductsSection";
import FeaturedBrands from "./FeaturedBrands";
import { AppContext } from "app/App";

const ProductsDisplay = () => {
  const { setShowSearchBar } = useContext(AppContext);

  useEffect(() => {
    setShowSearchBar(true);

    return () => {
      setShowSearchBar(false);
    };
  }, [setShowSearchBar]);
  return (
    <>
      <ShopSlider />
      <ProductsSection />
      <FeaturedBrands />
    </>
  );
};

export default React.memo(ProductsDisplay);
