import React from "react";
import Registered from "../../utils/svg/Registered.svg";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="layout pt-20 pb-24">
      <p className="text-center font-bold text-lg text-indigo-500">
        Why Choose Us?
      </p>
      <p className="text-center text-4xl font-semibold mb-4">
        Our Best Features For You
      </p>
      <p className="text-center mb-8">
        Choose us for a transformational trading experience, where success knows
        no bounds. With our unmatched <br /> expertise , your financial
        aspirations find their ultimate path to prosperity.
      </p>
      <div className="flex justify-center space-x-10 xl:space-x-5 lg:space-x-2 sm:grid sm:grid-cols-2 sm:space-x-0 sm:justify-items-center sm:gap-6 sm:w-fit sm:mx-auto mb:gap-1">
        {cardDetails.map(({ id, icon, heading, des }) => (
          <div
            key={id}
            className="border w-[300px] p-4 rounded-lg bg-white shadow-xl space-y-2 lg:px-2 py-3 sm:w-[270px] mb:w-fit"
          >
            <Image
              alt=""
              src={Registered}
              className="w-12 bg-gray-300 p-3 rounded-xl mb:w-10"
            />
            <p className="font-semibold mb:text-sm">{heading}</p>
            <p className="lg:text-sm mb:text-xs">{des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardDetails = [
  {
    id: 1,
    heading: "Insightful Guidance",
    des: "Benefit from years of experience to make informed trading decisions.",
    icon: "",
  },
  {
    id: 2,
    heading: "Reliable Profit",
    des: "Achieve consistent profits with our proven strategies and guidance.",
    icon: "",
  },
  {
    id: 3,
    heading: "Expert Knowledge",
    des: " Access expert knowledge and stay ahead in the world of trading.",
    icon: "",
  },
  {
    id: 4,
    heading: "Accessible Start",
    des: "Begin your trading journey with a low capital requirement ",
    icon: "",
  },
];

export default WhyChooseUs;
