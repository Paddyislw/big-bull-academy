"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import TelegramGroup from "../../utils/svg/TelegramGroup.svg";

const TelegramDes = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  let description = "";
  return (
    <div className="">
      <div
        className={`md:items-center items-start flex justify-between space-x-10 md:flex-col-reverse md:space-x-0 md:my-2`}
      >
        <div className="md:mt-4 w-full mt-10">
          <div
            className={`border p-3 rounded-lg  shadow  ${
              inView ? "animate-pop-in-down leafBox-3" : "notVisible"
            }`}
          >
            <p className="text-2xl font-semibold text-indigo-950 ">
              🌟 Highlights 🌟
            </p>
            <div className="mt-2 space-y-3 text-gray-600">
              <div className="space-y-6">
                {highlights.map(({ id, title, des }) => (
                  <div key={id}>
                    <p className="font-semibold text-indigo-900 mb-1 text-lg">
                      ✔️ {title}:
                    </p>
                    <p className="ml-2">
                      <span className="text-[#110a19]">•</span> {des}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="border mt-10 rounded-lg  p-4 flex flex-col space-y-4 shadow-xl"
          style={{ maxWidth: "400px" }}
        >
          <Image
            src={TelegramGroup}
            alt="Social media illustrations by Storyset"
          />
          <p className="text-sm text-center text-gray-600">
            Join our Telegram group today and embark on a journey to enhance
            your trading skills and profitability. Dont miss out on this
            opportunity to gain access to valuable insights and strategies.
          </p>
          <button className="w-[92%] mx-auto block bg-indigo-700 text-white font-semibold py-2 rounded-xl">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

// const highlights = [
//   "3-4 Daily Calls: We provide you with 3-4 high-potential stock options, Banknifty, and Nifty calls every day. Stay ahead of the market with our timely updates.",
//   "Explore exciting opportunities in the market with our actionable insights.",
//   "On expiry days, receive jackpot calls with the potential for substantial gains.",
//   "Experience the thrill of trading on these special occasions with our expert calls.",
//   "Stay informed and up-to-date with the latest market news and updates.",
//   "Benefit from our in-depth analysis and perspectives on market trends.",
//   "Count on our high-accuracy calls, boasting an impressive rate of 80% and above.",
//   "Enhance your trading success with our well-researched recommendations.",
// ];

const highlights = [
  {
    id: 1,
    title: "3-4 Daily Calls",
    des: "We provide you with 3-4 high-potential stock options, Banknifty, and Nifty calls every day. Stay ahead of the market with our timely updates.",
  },
  {
    id: 2,
    title: "Risk & Reward",
    des: "Our trading strategies aim for a Risk & Reward ratio of 1:2 or even 1:4, ensuring that your investments have the potential for substantial gains.",
  },
  {
    id: 3,
    title: "Accuracy 90%++",
    des: "Our track record boasts an accuracy rate of 90% or higher, giving you the confidence to make smart trading decisions.",
  },
  {
    id: 4,
    title: "Guided Entries and Exits",
    des: "We provide precise guidance on when to enter and exit positions, helping you maximize profits and minimize losses.",
  },
  {
    id: 5,
    title: "Big Target Opportunities",
    des: "We'll also guide you on when to hold positions for big targets, ensuring you capitalize on significant market movements",
  },
  {
    id: 6,
    title: "Minimum Capital",
    des: "You can start with as little as ₹15,000 in capital. We cater to traders of all levels, from beginners to experienced investors.",
  },
];

export default TelegramDes;
