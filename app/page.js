"use client";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/global/Navbar";
import React, { useEffect, useState } from "react";
import img7 from "../mocks/7.jpg";
import img8 from '../utils/72.png'
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceSection from "@/components/Home/ServiceSection";
import RatingStrip from "@/components/Home/RatingStrip";
import FAQSection from "@/components/Home/FAQSection";
import Footer from "@/global/Footer";
import Testimonail from "@/components/Home/Testimonail";
import Link from "next/link";

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
        className="text-white relative  w-full h-[750px] sm:h-[800px] xmb:h-[850px]"
        style={{
          backgroundImage: `url(${img7.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <HeroSection />
        <div className="bg-yellow-900 opacity-80 absolute top-0 z-0  w-full h-[750px] sm:h-[800px] xmb:h-[850px]"></div>
      </div>
      <WhyChooseUs />
      <RatingStrip />
      <ServiceSection />
      <Testimonail />
      <FAQSection />
      <Footer />

      {
        <div
          className={`h-screen w-full z-[99999] fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className={`w-[370px] bg-gray-200 border relative p-4 rounded-xl ease-in-out transition-all duration-1000   ${
              showModal ? "scale-100" : "scale-50"
            }`}
          >
            <div
              className="absolute top-0 right-0 pr-2 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              ✖
            </div>
            <p className="text-center text-2xl font-semibold">
              Join Our Telegram Group
            </p>
            <p className="text-lg font-semibold mt-4">
              Join Our Telegram Group for:
            </p>
            <div className="flex justify-between items-end">
              <div className="space-y-2 text-sm text-gray-700 mt-2 font-semibold">
                <p>✅ 3-4 Daily Calls</p>
                <p>✅ Risk & Reward: 1:2/1:4 ++</p>
                <p>✅ Accuracy 90++</p>
                <p>✅ Expert Guidance</p>
                <p>✅ Min Capital: 15K</p>
              </div>
            </div>
            <Link
              href={"https://telegram.me/intradayjackpot_official"}
              target="_blank"
            >
              <button className="w-full bg-blue-200 p-2 text-xl font-semibold mt-5 rounded-lg">
                Join Now 👉{" "}
              </button>{" "}
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
