import React from "react";
import project from "@/utils/icon/project.png";
import raise from "@/utils/icon/raise.png";
import rating from "@/utils/icon/rating.png";
import timeline from "@/utils/icon/timeline.png";
import Image from "next/image";

const RatingStrip = () => {
  return (
    <div className="layout bg-indigo-100">
      <div className="py-16  flex justify-center space-x-8 mb:grid mb:grid-cols-2 mb:space-x-0 mb:w-fit mb:mx-auto mb:justify-items-center mb:gap-16 xmb:gap-4">
        {stripData.map(({ id, title, heading, icon }, index) => (
          <div key={id} className="flex space-x-8 mb:space-x-0">
            <div className="flex flex-col items-center">
              <Image
                src={icon}
                alt=""
                className="w-12 h-12 object-contain mb-1 lg:w-10 lg:h-10 mb:w-10 mb:h-10 mb:mb-2"
              />
              <p className="font-semibold mb-2 text-sm text-center mb:mb-0 xmb:text-xs">
                {heading}
              </p>
              <p className="text-2xl font-semibold text-indigo-800 text-center lg:text-xl">
                {title}
              </p>
            </div>
            {id !== 4 && (
              <div className="h-full  w-[2px] bg-gray-400 mb:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const stripData = [
  { id: 1, icon: project, heading: "Completed Projects", title: "100 +" },
  { id: 2, icon: raise, heading: "Customer Satisfaction", title: "20 %" },
  { id: 3, icon: rating, heading: "Raised by Clients", title: "$ 10M" },
  { id: 4, icon: timeline, heading: "Year In Business", title: "2 yrs" },
];

export default RatingStrip;
