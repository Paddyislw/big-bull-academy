"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Accurate from "../../utils/svg/Accurate.svg";
import Registered from "../../utils/svg/Registered.svg";
import Telegram from "../../utils/svg/Telegram.svg";
import Youtube from "../../utils/svg/Youtube.svg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="mt-10 space-y-10 z-10 relative layout">
      <p className="text-center text-lg font-semibold sm:text-sm">
        <span className="text-primaryLight">❱</span> Trade like a professional
        trader, even without prior experience{" "}
        <span className="text-primaryLight">❰</span>
      </p>
      <p className="text-center text-4xl font-semibold leading-[45px] sm:text-2xl">
        Revealing the{" "}
        <TypeAnimation
          sequence={typeSequence}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ color: "#bc6d0f" }}
        />{" "}
        to Profitable <br className="sm:hidden" /> Trading in Bank Nifty, Nifty
        and Stock <br className="sm:hidden" /> options from Day One
      </p>
      <p className="text-center text-lg font-semibold sm:text-sm">
        Leverage Expertise for Consistent Profits in Every Trade.
      </p>
      <Link
        href={"https://telegram.me/intradayjackpot_official"}
        target="_blank"
        className="block"
      >
        <button className="block mx-auto bg-primaryExtraLight text-primaryDark py-4 px-16 text-2xl rounded-lg font-semibold">
          Join Now →
        </button>
      </Link>
      <div className="flex space-x-2 justify-between py-16 sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6 sm:justify-items-center">
        <Card>
          <Image
            className="w-10 h-9 object-contain mb:w-9 mb:h-6"
            alt=""
            src={Youtube}
          />
          <p className="text-center w-full mb:text-sm">
            Trusted by <Span className="text-2xl"> 80k+</Span> Subscribers
          </p>
        </Card>
        <Card>
          <Image
            className="w-10 h-8 object-contain mb:w-8 mb:h-6"
            alt=""
            src={Telegram}
          />
          <p className="text-center w-full mb:text-sm">
            <Span className="text-2xl">115k+</Span> Telegram subscribers
          </p>
        </Card>
        <Card>
          <Image
            className="w-10 h-8 object-contain mb:w-8 mb:h-6"
            alt=""
            src={Registered}
          />
          <p className="text-center w-full mb:text-sm">
            <Span className="text-2xl">SEBI</Span> registered
          </p>
        </Card>
        <Card>
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

const Card = ({ children }) => {
  return (
    <div
      className="w-[300px] h-[110px]  rounded-lg p-2 flex items-center text-black font-semibold flex-col justify-center space-y-1 bg-primaryExtraLight sm:w-[250px] mb:w-[170px] mb:h-[90px]"
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

export default HeroSection;
