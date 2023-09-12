import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/global/Navbar";
import React from "react";
import img1 from "../mocks/1.jpg";
import img2 from "../mocks/2.jpg";
import img3 from "../mocks/3.jpg";
import img4 from "../mocks/4.jpg";
import img5 from "../mocks/5.jpg";
import img6 from "../mocks/6.jpg";
import img7 from "../mocks/7.jpg";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceSection from "@/components/Home/ServiceSection";
import RatingStrip from "@/components/Home/RatingStrip";
import FAQSection from "@/components/Home/FAQSection";
import Footer from "@/global/Footer";

const Home = () => {
  //console.log(img1,'img')
  return (
    <div className="bg-gray-100">
      {/* <div className="h-10 bg-indigo-700 flex items-center justify-center text-white">SEBI REGISTERD</div> */}
      <div
        className="text-white relative"
        style={{
          backgroundImage: `url(${img7.src})`,
          width: "100%",
          minHeight: "700px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <HeroSection />
        <div
          className="bg-black opacity-80 absolute top-0 z-0 xmb:h-[740px]"
          style={{ width: "100%", minHeight: "740px" }}
        ></div>
      </div>
      <WhyChooseUs />
      <RatingStrip />
      <ServiceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
