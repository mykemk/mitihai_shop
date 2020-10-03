import React from "react";
import Slider from "react-slick";

const SingleItemSlider = (props) => {
  const settings = {
    className: "slider-variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,
    cssEase: "ease-out",
  };
  let slides = props.children || [];
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => {
        return <div key={index}>{slide}</div>;
      })}
    </Slider>
  );
};
export default SingleItemSlider;
