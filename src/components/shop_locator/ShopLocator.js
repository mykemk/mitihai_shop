import React, { useState } from "react";
import ShopsList from "./ShopsList";
import Map from "./Map";
import shops from "test_data/shops.json";

export const ShopsContext = React.createContext(null);
const ShopsProvider = ShopsContext.Provider;

const ShopLocator = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: -1.175091,
    lng: 36.968285,
  });

  return (
    <div className="page-container">
      <ShopsProvider value={{ markerPosition, setMarkerPosition, shops }}>
        <ShopsList />
        <Map />
      </ShopsProvider>
    </div>
  );
};

export default React.memo(ShopLocator);
