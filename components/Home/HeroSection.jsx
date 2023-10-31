"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Accurate from "../../utils/svg/Accurate.svg";
import Registered from "../../utils/svg/Registered.svg";
import Telegram from "../../utils/svg/Telegram.svg";
import Youtube from "../../utils/svg/Youtube.svg";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { TELEGRAM_LINK } from "@/utils/constant";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="mt-10 space-y-10 z-10 relative layout">
      <p className="text-center text-lg font-semibold sm:text-sm">
        <span className="text-primaryLight">❱</span> Trade like a professional
        trader, even without prior experience{" "}
        <span className="text-primaryLight">❰</span>
      </p>
      <p className="text-center text-4xl font-semibold leading-[42px]">
        Get Equity & <br className="hidden sm:block" /> Derivatives{" "}
        <br className="hidden sm:block" /> Research{" "}
        <br className="hidden sm:block" /> Recommendation{" "}
        <br className="hidden sm:block" /> From A
        <span className="text-yellow-500"> SEBI REGISTERED RA</span>
      </p>
      <p className="text-center text-xl font-semibold">
        Highly accurate calls!
      </p>
      <Link href={TELEGRAM_LINK} target="_blank" className="block">
        <button className="block mx-auto bg-primaryExtraLight text-primaryDark py-4 px-16 text-2xl rounded-lg font-semibold sm:text-xl">
          Join For Free Trial Calls →
        </button>
      </Link>
      <div className="pb-10 space-y-4 text-center font-semibold">
        {pointsData.map((item) => item.data)}
      </div>
      <Link href={TELEGRAM_LINK} target="_blank" className="block">
        <button className="block mx-auto bg-primaryExtraLight text-primaryDark py-4 px-16 text-2xl rounded-lg font-semibold sm:text-xl">
          Join For Free Trial Calls →
        </button>
      </Link>
      <div
        ref={ref}
        className="flex space-x-2 justify-between py-16 sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6 sm:justify-items-center"
      >
        <Card className={"animate-scale isVisible leafBox-1"} inView={inView}>
          <Image
            className="w-10 h-8 object-contain mb:w-9 mb:h-6"
            alt=""
            src={Youtube}
          />
          <p className="text-center w-full mb:text-sm">
            <Span className="text-2xl">100%</Span> Free Trades
          </p>
        </Card>
        <Card className={"animate-scale isVisible leafBox-2"} inView={inView}>
          <Image
            className="w-10 h-8 object-contain mb:w-8 mb:h-6"
            alt=""
            src={Telegram}
          />
          <p className="text-center w-full mb:text-sm">
            <Span className="text-2xl">100k+</Span> Telegram subscribers
          </p>
        </Card>
        <Card className={"animate-scale isVisible leafBox-3"} inView={inView}>
          <Image
            className="w-10 h-7 object-contain mb:w-8 mb:h-6"
            alt=""
            src={Registered}
          />
          <p className="text-center w-full mb:text-sm">
            Risk & Reward : <Span className="text-2xl">1:2/1:4 +</Span>
          </p>
        </Card>
        <Card className={"animate-scale isVisible leafBox-4"} inView={inView}>
          <Image
            className="w-10 h-8 object-contain mb:w-8 mb:h-6"
            alt=""
            src={Accurate}
          />
          <p className="text-center w-full mb:text-sm">
            <Span className="text-2xl">Highly</Span> Accurate Trades
          </p>
        </Card>
      </div>
    </div>
  );
};

const Span = ({ children }) => (
  <span className="text-2xl lg:text-xl sm:text-lg mb:text-base">
    {children}
  </span>
);

//#F8818C

const typeSequence = [
  "Proven Approach", // Types 'One'
  1200, // Waits 1s
  "Seasoned Technique", // Deletes 'One' and types 'Two'
  1200, // Waits 2s
  "Expert method",
  1200, // Types 'Three' without deleting 'Two'
  () => {
    console.log("Sequence completed");
  },
];

const Card = ({ children, className, inView }) => {
  return (
    <div
      className={`${
        inView ? className : "notVisible"
      } w-[300px] h-[110px]  rounded-lg p-2 flex items-center text-black font-semibold flex-col justify-center space-y-1 bg-primaryExtraLight sm:w-[250px] mb:w-[170px] mb:h-[90px]`}
      //   style={{
      //     background: "rgb(129,140,248)",
      //     background:
      //       "linear-gradient(90deg, rgba(129,140,248,1) 20%, rgba(220,233,252,1) 100%)",
      //   }}
    >
      {children}
    </div>
  );
};

const cardData = [
  { text: "Trusted by 80k+ Subscribers", cardImage: "" },
  { text: "", cardImage: "" },
  { text: "", cardImage: "" },
  { text: "", cardImage: "" },
];

const pointsData = [
  { id: 1, data: <p>💰Trade like an expert with no experience needed 📈🎓</p> },
  {
    id: 2,
    data: <p>🔎 Discover a secret profitable method for trading 💼💸</p>,
  },
  { id: 3, data: <p>🤝Trusted by 100K+ traders for consistent results🤝💯</p> },
  {
    id: 4,
    data: (
      <p>
        📚 Benefit from our years of experience and start making profits from
        day one 📚
      </p>
    ),
  },
];

export default HeroSection;
