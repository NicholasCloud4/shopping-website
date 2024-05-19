"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    { id: 0, img: "/shopping1.jpg" },
    { id: 1, img: "/shopping2.jpg" },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
