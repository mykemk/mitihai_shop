import React from "react";
import { Grid, Divider } from "@material-ui/core";
import BrandCard from "./BrandCard";

const BrandsGrid = ({ name = "", products = [] }) => {
  return (
    <div className="products-grid">
      <Divider />
      <h2 className="centreTitle">{name}</h2>
      <Divider />
      <Grid
        container
        direction="row"
        justify="flex-start"
        spacing={2}
        align-items="stretch">
        {products.map((product, index) => (
          <BrandCard product={product} key={`${product.name}${index}`} />
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(BrandsGrid);
