"use client";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/global/Navbar";
import React, { useEffect, useState } from "react";
import img7 from "../mocks/7.jpg";
import img8 from "../utils/72.png";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceSection from "@/components/Home/ServiceSection";
import RatingStrip from "@/components/Home/RatingStrip";
import FAQSection from "@/components/Home/FAQSection";
import Footer from "@/global/Footer";
import Testimonail from "@/components/Home/Testimonail";
import Link from "next/link";
import img9 from "../utils/images/9.webp";
import Popover from "@/components/Popover";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2500);
  }, []);
  //console.log(img1,'img')
  return (
    <div className="bg-gray-100">
      {/* <div className="h-10 bg-indigo-700 flex items-center justify-center text-white">SEBI REGISTERD</div> */}
      <div
        className="text-white relative  w-full h-full sm:h-auto "
        style={{
          backgroundImage: `url(${img9.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <HeroSection />
        <div className="bg-black opacity-60 absolute top-0 z-0  w-full h-full sm:h-full "></div>
      </div>
      <WhyChooseUs />
      <RatingStrip />
      <ServiceSection />
      <Testimonail />
      <FAQSection />
      <Footer />
      <Popover showModal={false} setShowModal={setShowModal}/>
    </div>
  );
};

export default Home;
