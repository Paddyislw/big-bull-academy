import React from "react";
import project from "@/utils/icon/project.png";
import raise from "@/utils/icon/raise.png";
import rating from "@/utils/icon/rating.png";
import timeline from "@/utils/icon/timeline.png";
import Image from "next/image";

const RatingStrip = () => {
  return (
    <div className="layout bg-primaryLight">
      <div className="py-20  flex justify-center space-x-12 md:grid  md:grid-cols-2 md:space-x-0 md:w-fit md:mx-auto md:justify-items-center md:gap-16 xmb:gap-4">
        {stripData.map(({ id, title, heading, icon }, index) => (
          <div key={id} className="flex space-x-12 mb:space-x-0">
            <div className="flex flex-col items-center">
              <Image
                src={icon}
                alt=""
                className="w-16 h-16 object-contain mb-1 lg:w-10 lg:h-10 mb:w-10 mb:h-10 mb:mb-2"
              />
              <p className="font-semibold mb-2 text-xl text-center mb:mb-0 xmb:text-xs">
                {heading}
              </p>
              <p className="text-3xl font-semibold text-primaryDark text-center lg:text-xl">
                {title}
              </p>
            </div>
            {id !== 4 && (
              <div className="h-full  w-[2px] bg-gray-400 md:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const stripData = [
  { id: 1, icon: project, heading: "Total students", title: "20K +" },
  { id: 2, icon: raise, heading: "Customer Satisfaction", title: "100 %" },
  { id: 3, icon: rating, heading: "Minimum Capital Req.", title: "₹ 15k" },
  { id: 4, icon: timeline, heading: "Year In Business", title: "8 yrs" },
];

export default RatingStrip;
