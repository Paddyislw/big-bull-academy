import React from "react";
import Registered from "../../utils/svg/Registered.svg";
import Image from "next/image";
import tryz from "../../mocks/try.svg";
import AccessibleStart from "../../utils/svg/AccessibleStart.svg";
import ExpertKnowledge from "../../utils/svg/ExpertKnowledge.svg";
import Guidance from "../../utils/svg/Guidance.svg";
import RelableProfit from "../../utils/svg/RelableProfit.svg";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="about" className="layout pt-20 pb-24" ref={ref}>
      <p className="text-center font-bold text-lg text-primaryDark">
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
      <div className="flex justify-between mt-16 md:flex-col md:space-y-10">
        <div className="grid grid-cols-2 w-fit gap-8 xl:gap-2 md:mx-auto md:gap-8 sm:gap-2">
          {/* </div> <div className="flex justify-center space-x-10 xl:space-x-5 lg:space-x-2 sm:grid sm:grid-cols-2 sm:space-x-0 sm:justify-items-center sm:gap-6 sm:w-fit sm:mx-auto mb:gap-1"> */}
          {cardDetails.map(({ id, icon, heading, des, className }) => (
            <div
              key={id}
              className={`${
                inView ? className : "notVisible"
              } border w-[300px] p-4 rounded-lg xl:w-[270px] bg-white shadow-xl lg:w-[220px] lg:min-h-[150px] md:w-[300px] md:min-h-[180px] sm:w-fit sm:min-h-[140px] space-y-2 sm:p-2`}
            >
              <Image
                alt=""
                src={icon}
                className="w-16 bg-primaryExtraLight p-4 rounded-xl mb:w-10 lg:w-12 sm:p-3"
              />
              <p className="font-semibold mb:text-sm text-xl lg:text-lg">
                {heading}
              </p>
              <p className="lg:text-sm mb:text-xs">{des}</p>
            </div>
          ))}
        </div>
        <Image
          alt="People illustrations by Storyset"
          src={tryz}
          className={`xl:w-[400px] lg:w-[300px] md:w-[400px] md:mx-auto ${
            inView ? "animate-pop-in-down leafBox-5" : "notVisible"
          }`}
        />
      </div>
    </div>
  );
};

const cardDetails = [
  {
    id: 1,
    heading: "Insightful Guidance",
    des: "Benefit from years of experience to make informed trading decisions.",
    icon: Guidance,
    className: "animate-scale isVisible leafBox-1",
  },
  {
    id: 2,
    heading: "Reliable Profit",
    des: "Achieve consistent profits with our proven strategies and guidance.",
    icon: RelableProfit,
    className: "animate-scale isVisible leafBox-2",
  },
  {
    id: 3,
    heading: "Expert Knowledge",
    des: " Access expert knowledge and stay ahead in the world of trading.",
    icon: ExpertKnowledge,
    className: "animate-scale isVisible leafBox-3",
  },
  {
    id: 4,
    heading: "Accessible Start",
    des: "Begin your trading journey with a low capital requirement ",
    icon: AccessibleStart,
    className: "animate-scale isVisible leafBox-4",
  },
];

export default WhyChooseUs;
