import React from "react";
import SingleItemSlider from "shared/sliders/SingleItemSlider";
import WelcomeSlide from "shared/sliders/WelcomeSlide";
import image1 from "assets/images/product-showcase/market1.jpg";
import image3 from "assets/images/product-showcase/market3.jpg";
import image4 from "assets/images/product-showcase/market4.jpg";
import image5 from "assets/images/product-showcase/market5.jpg";
import sliderInfo from "test_data/sliderInfo.json";

const ShopSlider = () => {
  let slideImages = [image1, image3, image4, image5];
  return (
    <div className="shop-slider-container">
      <div className="shop-slider">
        <SingleItemSlider>
        {
          sliderInfo.map((slide, index) =>{
            return  <WelcomeSlide key={`${slide.label}${index}`} label={slide.label} image={slideImages[index]} />
          }) 
        }        
        </SingleItemSlider>
      </div>
    </div>
  );
};

export default React.memo(ShopSlider);
