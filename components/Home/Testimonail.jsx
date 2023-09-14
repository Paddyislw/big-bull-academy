"use client";
import React from "react";
import test1 from "../../mocks/testimonial/test1.jpg";
import test2 from "../../mocks/testimonial/test2.jpg";
import test3 from "../../mocks/testimonial/test3.jpg";
import test4 from "../../mocks/testimonial/test4.jpg";
import test5 from "../../mocks/testimonial/test5.jpg";
import test6 from "../../mocks/testimonial/test6.jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonail = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1554,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden bg-primaryExtraLight py-20">
      <div className="layout">
        <p className="text-5xl font-semibold text-center mb-2 lg:text-4xl sm:text-3xl">
          Adored by Our Customers 💟
        </p>
        <p className="text-lg font-semibold text-center mb-10 sm:text-base">
          Find Out Why Traders Trust Our Telegram Group for Trading Insights
        </p>
      </div>

      <div className="bg-primaryExtraLight">
        <Slider {...settings}>
          {imgData.map(({ id, image }) => (
            <div key={id}>
              <Image alt="" src={image}  className="w-[300px] h-[580px]" priority={true}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const imgData = [
  { id: 1, image: test1 },
  { id: 2, image: test2 },
  { id: 3, image: test3 },
  { id: 4, image: test4 },
  { id: 5, image: test5 },
  { id: 6, image: test6 },
];

export default Testimonail;
