import React from "react";

const ServiceSection = () => {
  return (
    <div className="layout py-20">
      <p className="text-indigo-800 font-semibold">Our Service</p>
      <div className="flex">
        <div className="w-1/2 space-y-3">
          <p className="text-3xl font-semibold">
            We provide the perfect Solution <br /> to your business growth
          </p>
          <p className="font-semibold">The best quality stock for you market</p>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            architecto dolore doloribus quia nostrum aliquam accusamus id quis,
            porro maiores rem quidem quo repudiandae esse et est. Facilis,
            debitis vero!
          </p>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            architecto dolore doloribus quia nostrum aliquam accusamus id quis,
            porro maiores rem quidem quo repudiandae esse et est. Facilis,
            debitis vero!
          </p>
          <button className="bg-indigo-200 py-2 px-4 rounded-lg">Learn More</button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default ServiceSection;
