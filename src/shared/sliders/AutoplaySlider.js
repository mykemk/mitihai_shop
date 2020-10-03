import React from "react";
import Slider from "react-slick";

const AutoplaySlider = (props) => {
  const settings = {
    className: "slider-variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
export default AutoplaySlider;
