import Image from "next/image";
import React from "react";
import Group from "../../mocks/Group.png";
import check from "../../utils/svg/check.svg";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { TELEGRAM_LINK } from "@/utils/constant";

const ServiceSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="layout py-24">
      <p className="text-primaryDark font-semibold text-center ">Our Service</p>
      <p className="text-4xl font-semibold text-center">
        We provide the perfect Solution <br /> to your trading growth
      </p>
      <p className="text-center mt-2">
        Choose us for a transformational trading experience, where success knows
        no bounds. With our unmatched <br className="md:hidden" />
        expertise , your financial aspirations find their ultimate path to
        prosperity.
      </p>
      <div
        ref={ref}
        className="flex justify-center items-center md:flex-col md:mt-6"
      >
        <div
          className={`${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          } w-1/2 space-y-6 md:w-fit`}
        >
          {pointsData.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <Image src={check} alt="" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
          <Link href={TELEGRAM_LINK} target="_blank" className="block">
            <button className="bg-primaryLight py-3 px-4 rounded-lg text-lg font-semibold">
              Learn More →
            </button>
          </Link>
        </div>
        <div className={inView ? "animate-scale leafBox-2" : "notVisible"}>
          <Image src={Group} alt="" className="w-[400px] md:w-fit" />
        </div>
      </div>
    </div>
  );
};

const pointsData = [
  "3 - 4 Call Daily in stock Options + Banknifty & Nifty.",
  " Risk & Reward : 1:2/1:4 ++",
  " Accuracy 90 ++ ",
  " I Will Guide U When To Enter & Exit",
  "I Will Guide You When To Hold Position For Big Target 🎯",
  "Min Capital 15K To Start With Us ",
];

export default ServiceSection;
