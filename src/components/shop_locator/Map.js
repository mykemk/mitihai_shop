import React, { useContext, useState } from "react";
import Styles from "./shop-locator.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { ShopsContext } from "components/shop_locator/ShopLocator";
import shopIcon from "assets/images/shop_icon.png";

const Map = () => {
  const containerStyle = {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
  };

  const center = { lat: -1.175091, lng: 36.968285 };
  const [selectedShop, setSelectedShop] = useState(null);
  const { markerPosition, shops } = useContext(ShopsContext);

  return (
    <div className={Styles.mapContainer}>
      <LoadScript googleMapsApiKey="AIzaSyC2L4hzVtEj95MSNTi9PCE-nnKu7ma_bh0">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          <Marker position={markerPosition} />

          {shops.map((shop) => {
            return (
              <Marker
                position={shop.position}
                icon={{
                  url: shopIcon,
                }}
                onClick={() => setSelectedShop(shop)}
              />
            );
          })}

          {selectedShop && (
            <InfoWindow
              position={selectedShop.position}
              onCloseClick={() => setSelectedShop(null)}>
              <div>
                <h3>{selectedShop.name}</h3>
                <h4>{selectedShop.location}</h4>
                <h4>{selectedShop.phoneNumber}</h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(Map);
