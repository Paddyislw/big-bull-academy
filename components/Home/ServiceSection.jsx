import Image from "next/image";
import React from "react";
import Group from "../../mocks/Group.png";

const ServiceSection = () => {
  return (
    <div className="layout py-24">
      <p className="text-primaryDark font-semibold text-center ">Our Service</p>
      <p className="text-4xl font-semibold text-center">
        We provide the perfect Solution <br /> to your business growth
      </p>
      <p className="text-center mt-2">
        hoose us for a transformational trading experience, where success knows
        no bounds. With our unmatched <br className="md:hidden"/>
        expertise , your financial aspirations find their ultimate path to
        prosperity.
      </p>
      <div className="flex justify-center items-center md:flex-col md:mt-6">
        <div className="w-1/2 space-y-6 md:w-fit">
          {pointsData.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <p>t</p>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
          {/* <div className="flex items-center space-x-2">
            <p className="text-sm bg-indigo-200 py-1 px-[8px] rounded-full font-semibold">
              ✔️
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm bg-indigo-200 py-1 px-[8px] rounded-full font-semibold">
              ✓
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm bg-indigo-200 py-1 px-[8px] rounded-full font-semibold">
              ✓
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm bg-indigo-200 py-1 px-[8px] rounded-full font-semibold">
              ✓
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm bg-indigo-200 py-1 px-[8px] rounded-full font-semibold">
              ✓
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div> */}
          <button className="bg-primaryLight py-3 px-4 rounded-lg text-lg font-semibold">
            Learn More →
          </button>
        </div>
        <div className="">
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
